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
        "content": "Extract relevant keywords from the job responsibilities to include in resume for ATS in recruiting process.",
    },
]
