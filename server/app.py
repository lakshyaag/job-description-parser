import logging
import os

import instructor
import uvicorn
from dotenv import find_dotenv, load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.exceptions import ResponseValidationError
from fastapi.middleware.cors import CORSMiddleware
from models import JobDescription, RequestPayload
from openai import AsyncOpenAI

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("API Client")

load_dotenv(find_dotenv())

llm_client = instructor.patch(
    AsyncOpenAI(
        api_key=os.getenv("OPENAI_API_KEY"),
    ),
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


async def call(
    llm_client: AsyncOpenAI, response_model, messages, model="gpt-3.5-turbo"
):
    try:
        logger.info(f"Sending request to model {model}...")

        response = await llm_client.chat.completions.create(
            model=model,
            response_model=response_model,
            messages=messages,
        )

        return response

    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error. {str(e)}")


@app.post("/jd/", response_model=JobDescription)
async def process_job_description(request: RequestPayload) -> JobDescription:
    try:
        messages = [
            {
                "role": "system",
                "content": """Extract information from the job description. 
                If any information is missing or can not be found, do not attempt to generate it. 
                Simply provide the information that is available. DO NOT make up any information.
                """,
            },
            {"role": "user", "content": request.job_description},
        ]

        response = await call(
            llm_client, JobDescription, messages, model="gpt-4-turbo-preview"
        )

        return response

    except ResponseValidationError as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=400, detail=f"Bad Request. {str(e)}")


@app.get("/")
async def root():
    return {
        "message": "Welcome to the JobDescription API. Please visit /docs for more information."
    }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
