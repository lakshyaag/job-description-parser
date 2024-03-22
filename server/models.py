from typing import Optional

from pydantic import BaseModel, Field


class Skill(BaseModel):
    index: int = Field(description="Unique identifier for the skill.")
    type: str = Field(description="Keyword that describes the skill.", max_length=250)
    description: str = Field(
        description="Description of the skill in a generic context"
    )


class Responsibility(BaseModel):
    index: int = Field(description="Unique identifier for the responsibility.")
    description: str = Field(
        description="Detailed description of the responsibility, outlining specific tasks or objectives.",
    )


class Qualification(BaseModel):
    index: int = Field(description="Unique identifier for the qualification.")
    description: str = Field(
        description="Description of the educational or professional qualifications required for the job, including degrees, certifications, or specific areas of expertise.",
    )


class Experience(BaseModel):
    index: int = Field(description="Unique identifier for the experience.")
    description: str = Field(
        description="Description of the prior work experience required, including the type of roles, industry exposure, and years of experience.",
    )


class Benefits(BaseModel):
    index: int = Field(description="Unique identifier for the benefit.")
    description: str = Field(
        description="Description of the benefit offered, such as health insurance, retirement plans, and work-life balance perks.",
    )
    salary: Optional[str] = Field(
        description="The salary range for the job, if available. This can be a specific number or a range, such as $50,000 - $60,000 per year.",
    )


class JobDescription(BaseModel):
    title: str = Field(description="The official title of the job position.")
    company_information: str = Field(
        description="Overview of the company, including its mission, values, and industry.",
        default="",
    )
    location: str = Field(
        description="The primary location of the job, including city, state, and country.",
        examples=["San Francisco, CA, USA", "Remote", "Montreal, QC, Canada"],
        default="",
    )

    years_of_experience: str = Field(
        description="The number of years of experience required for the job.",
        examples=["3-5 years", "5+ years", "Entry level"],
        default="",
    )

    education: str = Field(
        description="The educational background required for the job, such as a Bachelor's degree or equivalent experience.",
        examples=[
            "Bachelor's degree in Computer Science",
            "Master's degree in Business Administration",
        ],
        default="",
    )

    salary_range: str = Field(
        description="The salary range for the job, if available. This can be a specific number or a range, such as $50,000 - $60,000 per year.",
        default="",
    )

    responsibilities: Optional[list[Responsibility]] = Field(
        description="A list of key responsibilities associated with the job, detailing regular tasks and expectations.",
        default=[],
    )

    qualifications: Optional[list[Qualification]] = Field(
        default=[],
        description="A list of qualifications necessary for the job, including educational background, skills, and other requirements.",
    )

    experience: list[Experience] = Field(
        default=[],
        description="A list of experience requirements, specifying the necessary background and expertise in related fields.",
    )

    benefits: Optional[list[str]] = Field(
        default=[],
        description="A list of benefits offered with the job, such as competitive salary and benefits package, career growth opportunities, global work environment, and innovative and challenging projects.",
    )

    culture: Optional[str] = Field(
        default="",
        description="Description of the company culture, highlighting values, work environment, and team dynamics.",
    )

    skills: list[Skill] = Field(
        default=[],
        description="A list of skills required for the job, as identified in the job description.",
    )

    additional_requirements: list[str] = Field(
        default=[],
        description="Any additional requirements or preferences for the job that don't fall into the standard categories, such as specific software knowledge, language skills, or personal attributes.",
    )


class RequestPayload(BaseModel):
    job_description: str
