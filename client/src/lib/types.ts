export interface RequestPayload {
  job_description: string | undefined;
}

export interface JobDescription {
  title?: string;
  company_information?: string;
  industry?: string;
  location?: string;
  years_of_experience?: string;
  education?: string;
  salary_range?: string;
  responsibilities?: { index: number; description: string }[] | null;
  qualifications?: { index: number; description: string }[] | null;
  experience?: { index: number; description: string }[] | null;
  benefits?: { index: number; description: string }[] | null;
  culture?: string;
  skills?: { index: number; type: string; description: string }[] | null;
  additional_requirements?: string[] | null;
}
