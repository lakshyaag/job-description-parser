from typing import List, Optional
from pydantic import BaseModel, Field, ConfigDict
from enum import Enum


class JobType(str, Enum):
    FULL_TIME = "Full-time"
    PART_TIME = "Part-time"
    CONTRACT = "Contract"
    TEMPORARY = "Temporary"
    INTERN = "Intern"
    VOLUNTEER = "Volunteer"
    REMOTE = "Remote"
    HYBRID = "Hybrid"


class SkillType(str, Enum):
    TECHNICAL = "Technical"
    SOFT = "Soft"
    LANGUAGE = "Language"
    CERTIFICATION = "Certification"
    OTHER = "Other"


class Skill(BaseModel):
    index: int = Field(description="Unique identifier for the skill.")

    skill_type: SkillType = Field(
        description="The type of skill (e.g., Technical, Soft, Language, Certification, Other)."
    )

    name: str = Field(..., description="The name of the skill.")

    proficiency_level: Optional[str] = Field(
        None,
        description="Proficiency level of the skill, if applicable. (e.g., Beginner, Intermediate, Advanced)",
    )

    model_config = ConfigDict(
        json_schema_extra={
            "examples": [
                {
                    "index": 1,
                    "skill_type": "Technical",
                    "name": "Python",
                    "proficiency_level": "Intermediate",
                },
                {
                    "index": 2,
                    "skill_type": "Soft",
                    "name": "Communication",
                    "proficiency_level": "Advanced",
                },
                {
                    "index": 3,
                    "skill_type": "Language",
                    "name": "Spanish",
                    "proficiency_level": "Beginner",
                },
                {
                    "index": 4,
                    "skill_type": "Technical",
                    "name": "Cloud Services",
                    "proficiency_level": "Advanced",
                },
            ]
        }
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
        description="A detailed description of an additional requirement. This could include specific certifications, specific software knowledge, specific tools, etc."
    )

    model_config = ConfigDict(
        json_schema_extra={
            "examples": [
                {"index": 1, "description": "Salesforce CRM"},
                {"index": 2, "description": "Azure"},
                {"index": 3, "description": "Databricks"},
            ]
        }
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


class SalaryRange(BaseModel):
    minimum: Optional[float] = Field(
        None, description="The minimum salary for the job.", example=80000.00
    )
    maximum: Optional[float] = Field(
        None, description="The maximum salary for the job.", example=120000.00
    )
    currency: Optional[str] = Field(
        None, description="The currency of the salary.", example="USD"
    )


class JobDescription(BaseModel):
    title: str = Field(
        description="The title of the job position.", example="Software Engineer"
    )

    company_information: str = Field(
        description="Information about the company.",
        example="ACME Corp is a leading innovator in the tech industry.",
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

    salary_range: SalaryRange = Field(None, description="The salary range")

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

    skills: List[Skill] = Field(
        [],
        description="List of skills required for the job position.",
    )

    additional_requirements: List[AdditionalRequirement] = Field(
        [], description="Any additional requirements for the job."
    )
    contact_information: Optional[ContactInformation] = Field(
        None, description="Contact information for job inquiries."
    )


class RequestPayload(BaseModel):
    job_description: str
    model: str
