import logging
import os
import re

import instructor
import uvicorn
from dotenv import find_dotenv, load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from langchain.document_loaders import PyPDFLoader
from langsmith import traceable
from langsmith.wrappers import wrap_openai
from models import (
    JobDescription,
    Keywords,
    RequestPayload,
    Recommendations,
    ResumePayload,
)
from openai import AsyncOpenAI
from prompts import EXTRACTOR_MESSAGES, KEYWORD_MESSAGES, RECOMMENDATION_MESSAGES
from supabase import Client, create_client

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("API Client")

load_dotenv(find_dotenv())


supabase: Client = create_client(
    supabase_url=os.getenv("SUPABASE_URL"),
    supabase_key=os.getenv("SUPABASE_KEY_SERVICE_ROLE"),
)

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


async def downloadResume(file_id: str):
    logger.info(f"Downloading resume file {file_id}...")

    try:
        file_path = supabase.storage.from_("resume").create_signed_url(
            path=f"{file_id}", expires_in=1200
        )["signedURL"]

        loader = PyPDFLoader(file_path)

        document = loader.load()

        # Prepare the document for processing
        page_contents = []

        for page in document:
            page = re.sub(r"[^\w\s\.\,]", "", page.page_content)
            page_contents.append(
                [re.sub(r"\s+", " ", x).strip() for x in page.splitlines()]
            )

        page_contents

        return page_contents

    except Exception as e:
        logger.error(f"Error downloading resume: {e}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error. {str(e)}")


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


@traceable("recommendations")
@app.post("/recommendations/", response_model=Recommendations)
async def generate_recommendations(request: ResumePayload) -> Recommendations:
    logger.info("Generating recommendations for resume...")

    document = await downloadResume(request.resume_file_id)

    messages = RECOMMENDATION_MESSAGES + [
        {"role": "user", "content": f"""Resume: \n{str(document)}"""},
        {"role": "user", "content": f"""Keywords: {str(request.keywords.json())}"""},
    ]

    response = await call(llm_client, Recommendations, messages, model=request.model)

    return response


@app.get("/")
async def root():
    return {
        "message": "Welcome to the JobDescription API. Please visit /docs for more information."
    }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
