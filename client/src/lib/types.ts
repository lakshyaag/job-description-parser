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

export enum SkillType {
  TECHNICAL = "Technical",
  SOFT = "Soft",
  LANGUAGE = "Language",
  CERTIFICATION = "Certification",
  OTHER = "Other",
}

export interface Skill {
  index: number;
  skill_type: SkillType;
  name: string;
  proficiency_level?: string;
}

export interface Responsibility {
  index: number;
  description: string;
}

export interface Qualification {
  index: number;
  description: string;
}

export interface ExperienceRequirement {
  index: number;
  description: string;
}

export interface Benefit {
  index: number;
  description: string;
}

export interface AdditionalRequirement {
  index: number;
  description: string;
}

export interface EducationRequirement {
  level: string;
  field_of_study?: string;
}

export interface ContactInformation {
  email?: string;
  telephone?: string;
  website?: string;
  other?: string;
}

export interface SalaryRange {
  minimum?: number;
  maximum?: number;
  currency?: string;
}

export interface JobDescription {
  title: string;
  company_information: string;
  industry?: string;
  location?: string;
  job_type: JobType;
  years_of_experience_required?: number;
  years_of_experience_preferred?: number;
  education: EducationRequirement[];
  salary_range?: SalaryRange;
  responsibilities: Responsibility[];
  qualifications_required: Qualification[];
  qualifications_preferred: Qualification[];
  experience: ExperienceRequirement[];
  benefits: Benefit[];
  culture?: string;
  skills: Skill[];
  additional_requirements: AdditionalRequirement[];
  contact_information?: ContactInformation;
}

export interface Keyword {
  keyword: string;
  source: string;
  reasoning: string;
}

export interface Keywords {
  keywords: Keyword[];
}
