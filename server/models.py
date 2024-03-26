from typing import List, Optional
from pydantic import BaseModel, Field
from enum import Enum


class JobType(str, Enum):
    FULL_TIME = "Full-time"
    PART_TIME = "Part-time"
    CONTRACT = "Contract"
    TEMPORARY = "Temporary"
    INTERN = "Intern"
    VOLUNTEER = "Volunteer"
    REMOTE = "Remote"


class SkillType(str, Enum):
    TECHNICAL = "Technical"
    SOFT = "Soft"
    LANGUAGE = "Language"
    CERTIFICATION = "Certification"
    OTHER = "Other"


class Skill(BaseModel):
    index: int = Field(description="Unique identifier for the skill.")

    type: SkillType = Field(
        description="The type of skill (e.g., Technical, Soft, Language, Certification, Other).",
        example="TECHNICAL",
    )
    description: Optional[str] = Field(
        description="A brief description of the skill.",
        default=None,
        examples=[
            "Python",
            "SQL",
            "Teamwork",
            "Spanish",
        ],
    )


class Responsibility(BaseModel):
    index: int = Field(description="Unique identifier for the responsibility.")
    description: str = Field(description="Job responsibility or task summary")


class Qualification(BaseModel):
    index: int = Field(description="Unique identifier for the qualification.")
    description: str = Field(description="Job qualification or requirement")


class ExperienceRequirement(BaseModel):
    index: int = Field(description="Unique identifier for the experience requirement.")
    description: str = Field(description="Job experience requirement or summary")


class Benefit(BaseModel):
    index: int = Field(description="Unique identifier for the benefit.")
    description: str = Field(description="A detailed description of a job benefit.")


class AdditionalRequirement(BaseModel):
    index: int = Field(description="Unique identifier for the additional requirement.")
    description: str = Field(
        description="A detailed description of an additional requirement."
    )


class EducationRequirement(BaseModel):
    level: str = Field(description="The required level of education.")
    field_of_study: Optional[str] = Field(
        None, description="The required field of study, if applicable."
    )


class ContactInformation(BaseModel):
    email: Optional[str] = Field(
        description="The email address to send applications to.",
        example="hr@acmecorp.com",
        default=None,
    )

    telephone: Optional[str] = Field(
        description="The telephone number to contact for inquiries.",
        example="+1 (123) 456-7890",
        default=None,
    )

    website: Optional[str] = Field(
        description="The company's website for more information.",
        example="https://www.acmecorp.com",
        default=None,
    )

    other: Optional[str] = Field(
        description="Any other contact information.",
        example="LinkedIn: acmecorp",
        default=None,
    )


class JobDescription(BaseModel):
    title: str = Field(
        description="The title of the job position.", example="Software Engineer"
    )
    company_information: str = Field(
        description="Information about the company.",
        example="ACME Corp is a leading innovator in the tech industry.",
        max_length=750,
    )
    industry: Optional[str] = Field(
        description="The industry sector the job belongs to.", example="Technology"
    )
    location: Optional[str] = Field(
        description="The geographical location of the job in the format City, State, Country.",
        example="San Francisco, CA, USA",
    )
    job_type: JobType = Field(
        description="The type of employment.", example="FULL_TIME"
    )
    years_of_experience_required: Optional[int] = Field(
        None, description="The minimum years of experience required.", example=3
    )
    years_of_experience_preferred: Optional[int] = Field(
        None, description="The preferred years of experience.", example=5
    )
    education: List[EducationRequirement] = Field(
        [], description="List of educational requirements."
    )
    salary_range: Optional[str] = Field(
        None, description="The salary range for the job.", example="$80,000 - $120,000"
    )
    responsibilities: List[Responsibility] = Field(
        [], description="List of job responsibilities."
    )
    qualifications_required: List[Qualification] = Field(
        [], description="List of required qualifications."
    )
    qualifications_preferred: List[Qualification] = Field(
        [], description="List of preferred qualifications."
    )
    experience: List[ExperienceRequirement] = Field(
        [], description="List of required experiences."
    )
    benefits: List[Benefit] = Field([], description="List of job benefits.")
    culture: Optional[str] = Field(
        None,
        description="Description of the company culture.",
        example="Innovative, collaborative, and employee-focused.",
    )
    skills_required: List[Skill] = Field([], description="List of required skills.")
    skills_preferred: List[Skill] = Field([], description="List of preferred skills.")
    additional_requirements: List[AdditionalRequirement] = Field(
        [], description="Any additional requirements for the job."
    )
    contact_information: Optional[ContactInformation] = Field(
        None, description="Contact information for job inquiries."
    )


class RequestPayload(BaseModel):
    job_description: str
