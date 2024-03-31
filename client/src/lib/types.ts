export interface AdditionalRequirement {
  index: number;
  description: string;
}

export interface Benefit {
  index: number;
  description: string;
}

export interface ContactInformation {
  email?: string | null;
  telephone?: string | null;
  website?: string | null;
  other?: string | null;
}

export interface EducationRequirement {
  level: string;
  field_of_study?: string | null;
}

export interface ExperienceRequirement {
  index: number;
  description: string;
}

export enum JobType {
  FULL_TIME = "Full-time",
  PART_TIME = "Part-time",
  CONTRACT = "Contract",
  TEMPORARY = "Temporary",
  INTERN = "Intern",
  VOLUNTEER = "Volunteer",
  REMOTE = "Remote",
  HYBRID = "Hybrid",
}

export interface Qualification {
  index: number;
  description: string;
}

export interface Responsibility {
  index: number;
  description: string;
}

export interface SalaryRange {
  minimum?: number | null;
  maximum?: number | null;
  currency?: string | null;
}

export enum SkillType {
  TECHNICAL = "Technical",
  SOFT = "Soft",
  LANGUAGE = "Language",
  CERTIFICATION = "Certification",
  OTHER = "Other",
}

export interface Skill {
  index: number;
  skill_type: string;
  name: string;
  proficiency_level?: string | null;
}

export interface JobDescription {
  title: string;
  company_information: string;
  industry?: string | null;
  location?: string | null;
  job_type: JobType;
  years_of_experience_required?: number | null;
  years_of_experience_preferred?: number | null;
  education: EducationRequirement[];
  salary_range?: SalaryRange | null;
  responsibilities: Responsibility[];
  skills: Skill[];
  qualifications_required: Qualification[];
  qualifications_preferred: Qualification[];
  experience: ExperienceRequirement[];
  benefits: Benefit[];
  culture?: string | null;
  additional_requirements: AdditionalRequirement[];
  contact_information?: ContactInformation | null;
}

export interface Keyword {
  keyword: string;
  source: string;
  reasoning: string;
}

export interface Keywords {
  keywords: Keyword[];
}
