import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://localhost:8000";

export const result_data = {
  title: "Senior Application Support Analyst",
  company_information:
    "At RBC, we are committed to innovation, growth, and providing trusted advice to help our clients thrive and communities prosper. We embrace diversity and inclusion, tackle issues of inequity and systemic bias, and strive to create an equitable workplace. Our mission is to enhance the well-being of our clients and communities. RBC operates in the financial services industry, offering a range of advice, products, and services, including personal and commercial banking, wealth management, corporate and investment banking, and capital markets.",
  industry: "Financial Services",
  location: "Toronto, Canada",
  job_type: "Full-time",
  years_of_experience_required: 5,
  years_of_experience_preferred: 9,
  education: [
    {
      level: "Bachelor's Degree",
      field_of_study: "Computer Science",
    },
  ],
  salary_range: "$80,000 - $120,000",
  responsibilities: [
    {
      index: 1,
      description:
        "Provide L3 production support, monitoring the health and security posture of applications.",
    },
    {
      index: 2,
      description:
        "Investigate, troubleshoot, and resolve incidents and compliance issues.",
    },
    {
      index: 3,
      description:
        "Contribute to technical specifications and program reviews.",
    },
    {
      index: 4,
      description:
        "Develop and maintain relationships with business and technology partners.",
    },
    {
      index: 5,
      description:
        "Collaborate with development teams to identify defects and opportunities for efficiency.",
    },
    {
      index: 6,
      description:
        "Leverage automation and monitoring tools for issue resolution.",
    },
    {
      index: 7,
      description:
        "Raise support tickets and work with vendors for additional support.",
    },
    {
      index: 8,
      description:
        "Facilitate meetings for problem solving and decision making.",
    },
    {
      index: 9,
      description:
        "Provide direction, feedback, and development to junior staff.",
    },
    {
      index: 10,
      description: "Offer on-call afterhours support.",
    },
  ],
  qualifications_required: [
    {
      index: 1,
      description:
        "5+ years of experience in production support and supporting multiple applications.",
    },
    {
      index: 2,
      description:
        "Experience with Linux platform, DataStage, SQL, Oracle Server, MS SQL server, Shell scripts.",
    },
    {
      index: 3,
      description: "Strong analytical and communication skills.",
    },
    {
      index: 4,
      description:
        "Working knowledge of IT Standards, Methodologies, SDLC, & audit requirements.",
    },
  ],
  qualifications_preferred: [
    {
      index: 1,
      description:
        "Knowledge in Mainframe z/OS technologies such as JCL, TSO/ISPF, On Demand, ZEKE, RACF.",
    },
    {
      index: 2,
      description: "Knowledge in Apache Airflow, Python, Smartstream TLM.",
    },
  ],
  experience: [],
  benefits: [
    {
      index: 1,
      description:
        "A comprehensive Total Rewards Program including bonuses and flexible benefits.",
    },
    {
      index: 2,
      description:
        "Leadership support through coaching and mentoring opportunities.",
    },
    {
      index: 3,
      description: "Opportunity for development and impact.",
    },
    {
      index: 4,
      description: "A world-class training program in financial services.",
    },
    {
      index: 5,
      description: "Supportive management and challenging work.",
    },
    {
      index: 6,
      description:
        "Opportunity to take on progressively greater responsibilities.",
    },
  ],
  culture:
    "RBC fosters an inclusive and high-performing culture, committed to results, innovation, and growth. We value diversity, inclusion, and the unique skills and experiences each individual brings. Our culture is focused on enhancing the well-being of our clients and communities, with a commitment to building inclusive teams and an equitable workplace.",
  skills_required: [
    {
      index: 1,
      type: "Technical",
      description: "Linux",
    },
    {
      index: 2,
      type: "Technical",
      description: "DataStage",
    },
    {
      index: 3,
      type: "Technical",
      description: "SQL",
    },
    {
      index: 4,
      type: "Technical",
      description: "Oracle Server",
    },
    {
      index: 5,
      type: "Technical",
      description: "MS SQL server",
    },
    {
      index: 6,
      type: "Technical",
      description: "Shell scripts",
    },
    {
      index: 7,
      type: "Soft",
      description: "Analytical Thinking",
    },
  ],
  skills_preferred: [
    {
      index: 1,
      type: "Technical",
      description: "Apache Airflow",
    },
    {
      index: 2,
      type: "Technical",
      description: "Python",
    },
    {
      index: 3,
      type: "Technical",
      description: "Smartstream TLM",
    },
  ],
  additional_requirements: [],
  contact_information: {
    email: null,
    telephone: null,
    website: "jobs.rbc.com",
    other: null,
  },
};
