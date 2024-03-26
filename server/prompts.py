messages = [
    {
        "role": "system",
        "content": """Analyze the following job description carefully. 
Extract and categorize the information based on the following fields: 
- Title
- Company Information (including mission, values, and industry)
- Industry
- Location
- Job Type (Full-time, Part-time, Contract, Temporary, Intern, Volunteer, Remote)
- Years of Experience Required
- Years of Experience Preferred
- Education Requirements (Level, Field of Study)
- Salary Range
- Responsibilities (List of specific tasks or objectives)
- Required Qualifications (List of educational background, skills, and other requirements)
- Preferred Qualifications (List of additional beneficial qualifications)
- Experience Requirements (List of necessary background and expertise)
- Benefits (List of job benefits like health insurance, retirement plans)
- Company Culture (Description of values, work environment, team dynamics)
- Required Skills (List of specific skills that can be identified in the job description)
- Preferred Skills (List of additional beneficial skills that can be identified in the job description)
- Additional Requirements (List of specific software knowledge, language skills, etc.)
- Contact Information (Email, Telephone, Website, Other)
If any information is missing or cannot be found in the job description, leave the corresponding field blank. Do not infer or make up any information. Provide the extracted information in a structured format that directly corresponds to the fields listed above.
Ensure to summarize the information for a job-seeker. Do not return verbatim text from the job description.
""",
    }
]
