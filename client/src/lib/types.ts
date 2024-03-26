export interface RequestPayload {
  job_description: string | undefined;
}

export enum JobType {
  FULL_TIME = "full-time",
  PART_TIME = "part-time",
  CONTRACT = "contract",
  TEMPORARY = "temporary",
  INTERN = "intern",
  VOLUNTEER = "volunteer",
  REMOTE = "remote",
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
  type: SkillType;
  description?: string;
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

export interface JobDescription {
  title: string;
  company_information: string;
  industry?: string;
  location?: string;
  job_type: JobType;
  years_of_experience_required?: number;
  years_of_experience_preferred?: number;
  education: EducationRequirement[];
  salary_range?: string;
  responsibilities: Responsibility[];
  qualifications_required: Qualification[];
  qualifications_preferred: Qualification[];
  experience: ExperienceRequirement[];
  benefits: Benefit[];
  culture?: string;
  skills_required: Skill[];
  skills_preferred: Skill[];
  additional_requirements: AdditionalRequirement[];
  contact_information?: ContactInformation;
}
