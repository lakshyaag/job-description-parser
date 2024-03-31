import logging
import os

import instructor
import uvicorn
from dotenv import find_dotenv, load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models_new import JobDescription, RequestPayload, Keywords
from openai import AsyncOpenAI
from prompts import EXTRACTOR_MESSAGES, KEYWORD_MESSAGES
from langsmith import traceable
from langsmith.wrappers import wrap_openai

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("API Client")

load_dotenv(find_dotenv())

llm_client = instructor.patch(
    wrap_openai(
        AsyncOpenAI(
            api_key=os.getenv("OPENAI_API_KEY"),
        )
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
            temperature=0.0,
            max_retries=2,
        )

        return response

    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error. {str(e)}")


@traceable("extract")
@app.post("/jd/", response_model=JobDescription)
async def process_job_description(request: RequestPayload) -> JobDescription:
    logger.info("Extracting job description fields...")
    messages = EXTRACTOR_MESSAGES + [{"role": "user", "content": request.context}]

    response = await call(llm_client, JobDescription, messages, model=request.model)

    return response


@traceable("keywords")
@app.post("/keywords/", response_model=Keywords)
async def extract_keywords(request: RequestPayload) -> Keywords:
    logger.info("Extracting keywords from job description...")
    messages = KEYWORD_MESSAGES + [{"role": "user", "content": request.context}]

    response = await call(llm_client, Keywords, messages, model=request.model)

    return response


@app.get("/")
async def root():
    return {
        "message": "Welcome to the JobDescription API. Please visit /docs for more information."
    }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
