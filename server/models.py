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


class AddlRequirements(BaseModel):
    index: int = Field(description="Unique identifier for the additional requirement.")
    description: str = Field(
        description="Description of the additional requirement, such as specific software knowledge, language skills, or personal attributes.",
    )


class JobDescription(BaseModel):
    title: Optional[str] = Field(
        default="",
        description="The official title of the job position.",
        examples=["ACME Corporation"],
    )
    company_information: Optional[str] = Field(
        default="",
        description="Overview of the company, including its mission, values, and industry.",
        examples=[
            "ACME Corporation is a leading provider of innovative solutions in the tech industry."
        ],
    )

    industry: Optional[str] = Field(
        default="",
        description="The industry or sector in which the company operates.",
        examples=["Technology", "Finance", "Healthcare"],
    )

    location: Optional[str] = Field(
        default="",
        description="The primary location of the job, including city, state, and country.",
        examples=["San Francisco, CA, USA", "Remote", "Montreal, QC, Canada"],
    )

    years_of_experience: Optional[str] = Field(
        default="",
        description="The number of years of experience required for the job.",
        examples=["3-5 years", "5+ years", "Entry level"],
    )

    education: Optional[str] = Field(
        default="",
        description="The educational background required for the job, such as a Bachelor's degree or equivalent experience.",
        examples=[
            "Bachelor's degree in Computer Science",
            "Master's degree in Business Administration",
        ],
    )

    salary_range: Optional[str] = Field(
        default="",
        description="The salary range for the job, if available. This can be a specific number or a range, such as $50,000 - $60,000 per year.",
    )

    responsibilities: Optional[list[Responsibility]] = Field(
        default=[],
        description="A list of key responsibilities associated with the job, detailing regular tasks and expectations.",
    )

    qualifications: Optional[list[Qualification]] = Field(
        default=[],
        description="A list of qualifications necessary for the job, including educational background, skills, and other requirements.",
    )

    experience: Optional[list[Experience]] = Field(
        default=[],
        description="A list of experience requirements, specifying the necessary background and expertise in related fields.",
    )

    benefits: Optional[list[Benefits]] = Field(
        default=[],
        description="A list of benefits offered with the job, such as competitive salary and benefits package, career growth opportunities, global work environment, and innovative and challenging projects.",
    )

    culture: Optional[str] = Field(
        default="",
        description="Description of the company culture, highlighting values, work environment, and team dynamics.",
    )

    skills: Optional[list[Skill]] = Field(
        default=[],
        description="A list of skills required for the job, as identified in the job description.",
    )

    additional_requirements: Optional[list[AddlRequirements]] = Field(
        default=[],
        description="Any additional requirements or preferences for the job that don't fall into the standard categories, such as specific software knowledge, language skills, or personal attributes.",
    )


class RequestPayload(BaseModel):
    job_description: str
