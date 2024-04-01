EXTRACTOR_MESSAGES = [
    {
        "role": "system",
        "content": "Extract relevant fields from the job description according to the specified schema.",
    },
    {
        "role": "user",
        "content": """You are helping a job applicant in understanding the job description provided to streamline their application process.
        Analyze the given job description carefully. 
        Extract the relevant information for the applicant to quickly understand the responsibilities, qualifications, skills, and benefits to decide whether to apply for the job.
        
        If any information is missing or cannot be found in the job description, leave the corresponding field blank. Do not infer or make up any information. Provide the extracted information in a structured format that directly corresponds to the fields listed above.
        Ensure to summarize the information for a job-seeker. Do not return verbatim text from the job description.""",
    },
]

KEYWORD_MESSAGES = [
    {
        "role": "system",
        "content": "Extract relevant keywords from the job responsibilities to include in a resume for the Applicant Tracking System (ATS) in the recruiting process.",
    },
    {
        "role": "user",
        "content": """You are assisting a job applicant in identifying keywords from the job description to include in their resume for the Applicant Tracking System (ATS) used by recruiters. Focus on extracting keywords that are directly related to job responsibilities, required qualifications, and skills.

        For each keyword identified, provide the source and a brief reasoning on why this keyword is important to include in the resume. 
        This will help the applicant's resume to be more aligned with what recruiters are looking for and increase its chances of being noticed by the ATS.
        """,
    },
]

RECOMMENDATION_MESSAGES = [
    {
        "role": "system",
        "content": "Please provide recommendations for the resume. Strip away additional formatting. You are provided with a list of keywords, reasoning, and source from the job description.",
    },
]
