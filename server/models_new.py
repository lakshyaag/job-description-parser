from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, EmailStr, Field, HttpUrl


class AdditionalRequirement(BaseModel):
    index: int = Field(..., example=1)
    description: str = Field(
        ...,
        example="Salesforce CRM",
        description="Detailed description of an additional requirement. Returns None if not applicable.",
    )


class Benefit(BaseModel):
    index: int = Field(..., example=1)
    description: str = Field(
        ...,
        example="Health insurance",
        description="Description of a job benefit. Returns None if not applicable.",
    )


class ContactInformation(BaseModel):
    email: Optional[EmailStr] = Field(
        default=None,
        example="hr@acmecorp.com",
        description="Email address for applications. Returns None if not provided.",
    )
    telephone: Optional[str] = Field(
        default=None,
        example="+1 (123) 456-7890",
        description="Contact telephone number. Returns None if not provided.",
    )
    website: Optional[HttpUrl] = Field(
        default=None,
        example="https://www.acmecorp.com",
        description="Company website URL. Returns None if not provided.",
    )
    other: Optional[str] = Field(
        default=None,
        example="LinkedIn: acmecorp",
        description="Any other contact information. Returns None if not provided.",
    )


class EducationRequirement(BaseModel):
    level: str = Field(
        ...,
        example="Bachelor's Degree",
        description="Required level of education. Returns None if not applicable.",
    )
    field_of_study: Optional[str] = Field(
        default=None,
        example="Computer Science",
        description="Field of study, if applicable. Returns None otherwise.",
    )


class ExperienceRequirement(BaseModel):
    index: int = Field(..., example=1)
    description: str = Field(
        ...,
        example="5 years of software development experience",
        description="Summary of job experience requirement. Returns None if not applicable.",
    )


class JobType(Enum):
    FULL_TIME = "Full-time"
    PART_TIME = "Part-time"
    CONTRACT = "Contract"
    TEMPORARY = "Temporary"
    INTERN = "Intern"
    VOLUNTEER = "Volunteer"
    REMOTE = "Remote"
    HYBRID = "Hybrid"


class Qualification(BaseModel):
    index: int = Field(..., example=1)
    description: str = Field(
        ...,
        example="Certified Java Developer",
        description="Job qualification or requirement. Returns None if not applicable.",
    )


class Responsibility(BaseModel):
    index: int = Field(..., example=1)
    description: str = Field(
        ...,
        example="Develop and maintain web applications",
        description="Summary of job responsibility or task. Returns None if not applicable.",
    )


class SalaryRange(BaseModel):
    minimum: Optional[float] = Field(
        default=None,
        example=80000,
        description="Minimum salary for the job. Returns None if not provided.",
    )
    maximum: Optional[float] = Field(
        default=None,
        example=120000,
        description="Maximum salary for the job. Returns None if not provided.",
    )
    currency: Optional[str] = Field(
        default=None,
        example="USD",
        description="Currency of the salary. Returns None if not provided.",
    )


class SkillType(Enum):
    TECHNICAL = "Technical"
    SOFT = "Soft"
    LANGUAGE = "Language"
    CERTIFICATION = "Certification"
    OTHER = "Other"


class Skill(BaseModel):
    index: int = Field(..., example=1)
    skill_type: str = Field(..., example="Technical")
    name: str = Field(
        ...,
        example="Python",
        description="Name of the skill. If it is a programming language, framework, or tool, return the name but not the description. Returns None if not applicable.",
    )
    proficiency_level: Optional[str] = Field(
        default=None,
        example="Intermediate",
        description="Proficiency level of the skill. Returns None if not applicable.",
    )


class JobDescription(BaseModel):
    title: str = Field(
        ..., example="Software Engineer", description="The title of the job position."
    )
    company_information: str = Field(
        ...,
        example="ACME Corp is a leading innovator in the tech industry.",
        description="Information about the company.",
    )
    industry: Optional[str] = Field(
        default=None,
        example="Technology",
        description="The industry sector the job belongs to. Returns None if not provided.",
    )
    location: Optional[str] = Field(
        default=None,
        example="San Francisco, CA, USA",
        description="The geographical location of the job in the format City, State, Country. Returns None if not provided.",
    )
    job_type: JobType = Field(
        ..., example=JobType.FULL_TIME, description="The type of employment."
    )
    years_of_experience_required: Optional[int] = Field(
        default=None,
        example=3,
        description="The minimum years of experience required. Returns None if not specified.",
    )
    years_of_experience_preferred: Optional[int] = Field(
        default=None,
        example=5,
        description="The preferred years of experience. Returns None if not specified.",
    )
    education: List[EducationRequirement] = Field(
        default_factory=list, description="List of educational requirements."
    )
    salary_range: Optional[SalaryRange] = Field(
        default=None, description="The salary range. Returns None if not provided."
    )
    responsibilities: List[Responsibility] = Field(
        default_factory=list, description="List of job responsibilities."
    )
    skills: List[Skill] = Field(
        default_factory=list,
        description="List of skills required for the job position.",
    )
    qualifications_required: List[Qualification] = Field(
        default_factory=list, description="List of required qualifications."
    )
    qualifications_preferred: List[Qualification] = Field(
        default_factory=list, description="List of preferred qualifications."
    )
    experience: List[ExperienceRequirement] = Field(
        default_factory=list, description="List of required experiences."
    )
    benefits: List[Benefit] = Field(
        default_factory=list, description="List of job benefits."
    )
    culture: Optional[str] = Field(
        default=None,
        example="Innovative, collaborative, and employee-focused.",
        description="Description of the company culture. Returns None if not provided.",
    )
    additional_requirements: List[AdditionalRequirement] = Field(
        default_factory=list, description="Any additional requirements for the job."
    )
    contact_information: Optional[ContactInformation] = Field(
        default=None,
        description="Contact information for job inquiries. Returns None if not provided.",
    )


class RequestPayload(BaseModel):
    context: str
    model: str


class Keyword(BaseModel):
    keyword: str = Field(..., title="Keyword", description="Keyword")
    source: str = Field(..., title="Source", description="Source of the keyword")
    reasoning: str = Field(
        title="Reasoning",
        description="Reasonings for including the keyword in the resume",
    )


class Keywords(BaseModel):
    keywords: list[Keyword] = Field(
        ..., title="Keywords", description="List of keywords to include in resume"
    )
