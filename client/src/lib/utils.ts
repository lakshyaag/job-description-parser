import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const API_URL = "http://localhost:8000";

export const result_data = {
  title: "CN - Expert Solution Designer",
  company_information:
    "CN is a world-class transportation leader and trade-enabler, safely transporting more than 300 million tons of natural resources, manufactured products, and finished goods throughout North America every year. CN and its affiliates have been contributing to community prosperity and sustainable trade since 1919, committed to social responsibility and environmental stewardship. The company values safety, sustainability, and operational excellence.",
  industry: "Transportation",
  location: "North America",
  years_of_experience: "10+ years",
  education:
    "Bachelor’s degree in Business, Computer Science, Computer Engineering, Electrical Engineering, or a related field of study, or equivalent work experience",
  salary_range: "",
  responsibilities: [
    {
      index: 1,
      description:
        "Contribute to the technical architecture by identifying existing capabilities in Security, Single sign-on, access management, networking, and data exchange.",
    },
    {
      index: 2,
      description:
        "Translate technical architecture into detailed infrastructure and technology design, ensuring seamless integration.",
    },
    {
      index: 3,
      description:
        "Collaborate with project managers to define work breakdown structure, estimate effort, and project schedule.",
    },
    {
      index: 4,
      description:
        "Guide SMEs through technical design propositions, addressing design or support issues.",
    },
    {
      index: 5,
      description:
        "Present and explain designs/solutions to different stakeholder groups.",
    },
    {
      index: 6,
      description:
        "Participate in Security foundation programs and vendors selection for technical aspects of solutions.",
    },
    {
      index: 7,
      description:
        "Define and maintain engineering and configuration standards, ensuring compliance with CN standards.",
    },
    {
      index: 8,
      description:
        "Engage external providers, manage hardware/software roadmap based on CN strategy and technology needs.",
    },
    {
      index: 9,
      description:
        "Estimate solution costs, create detailed design documentation, and identify deployment steps and risks.",
    },
    {
      index: 10,
      description:
        "Pre-configure and lab-test components prior to deployment, documenting tests and results.",
    },
  ],
  qualifications: [
    {
      index: 1,
      description:
        "Proven experience delivering technology projects involving multiple parties.",
    },
    {
      index: 2,
      description:
        "Strong knowledge of cloud platforms (Azure, AWS, GCP), authentication/SSO protocols, and networking.",
    },
    {
      index: 3,
      description:
        "Experience in design and implementation of Cloud-based solutions and practices (3-5 years).",
    },
    {
      index: 4,
      description:
        "Continuous learning to stay updated with the latest technology innovations and roadmaps in Security technologies and IT Infrastructure.",
    },
  ],
  experience: [
    {
      index: 1,
      description:
        "10+ years of general knowledge of IT infrastructure and networking.",
    },
    {
      index: 2,
      description:
        "3-5 years of experience in design and implementation of Cloud-based solutions and practices.",
    },
  ],
  benefits: [],
  culture: "",
  skills: [
    {
      index: 1,
      type: "Technical",
      description: "Very good technical documentation skills.",
    },
    {
      index: 2,
      type: "Communication",
      description:
        "Very good communication, influencing, and presentation skills.",
    },
    {
      index: 3,
      type: "Leadership",
      description:
        "Leadership skills to guide others on integration and technical matters.",
    },
    {
      index: 4,
      type: "Problem-Solving",
      description:
        "Ability to clarify requirements and ensure solutions meet business needs.",
    },
    {
      index: 5,
      type: "Engineering",
      description: "Strong systems engineering knowledge.",
    },
    {
      index: 6,
      type: "Management",
      description:
        "Ability to estimate efforts and costs for delivery, prioritize deadlines, and manage teams.",
    },
    {
      index: 7,
      type: "Process",
      description:
        "Process-driven mindset, improving team processes when needed.",
    },
    {
      index: 8,
      type: "Language",
      description:
        "Excellent French and English proficiency in spoken and written forms.",
    },
  ],
  additional_requirements: [
    "Proven experience with IP protocols and IT security principles.",
    "Knowledge of Microsoft AD Federation Services (ADFS), Microsoft Azure cloud platform, Google Cloud Platform, and 3rd party SaaS solutions.",
  ],
};
