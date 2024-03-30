import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { JobDescription } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://localhost:8000";

export const result_data = {
  title: "Associate Manager, Drive New Verticals S&O Canada",
  company_information:
    "DoorDash is a technology company that connects people with the best in their cities. We do this by empowering local businesses and in turn, generate new ways for people to earn, work and live. We started by facilitating door-to-door delivery, but we see this as just the beginning of connecting people with possibility — easier evenings, happier days, bigger savings accounts, wider nets and stronger communities.",
  industry: "Technology",
  location: "Canada",
  job_type: "Hybrid",
  years_of_experience_required: 4,
  years_of_experience_preferred: 6,
  education: [
    {
      level: "Not Specified",
      field_of_study: null,
    },
  ],
  salary_range: null,
  responsibilities: [
    {
      index: 1,
      description: "Develop the strategy to best serve our customers.",
    },
    {
      index: 2,
      description:
        "Work directly with internal and external partners to execute on short & long-term plans.",
    },
    {
      index: 3,
      description:
        "Develop and lead 0 to 1 opportunities, creating the roadmap for future growth vectors.",
    },
    {
      index: 4,
      description:
        "Work across Operations, Product, Sales, Engineering, and more to bring new products and services to merchants.",
    },
  ],
  skills: [
    {
      index: 1,
      skill_type: "Technical",
      name: "SQL",
      proficiency_level: "Fluent",
    },
    {
      index: 2,
      skill_type: "Technical",
      name: "Excel",
      proficiency_level: "Fluent",
    },
    {
      index: 3,
      skill_type: "Soft",
      name: "Analytical Skills",
      proficiency_level: "Advanced",
    },
    {
      index: 4,
      skill_type: "Soft",
      name: "Communication",
      proficiency_level: "Advanced",
    },
    {
      index: 5,
      skill_type: "Soft",
      name: "Project Management",
      proficiency_level: "Experienced",
    },
  ],
  qualifications_required: [
    {
      index: 1,
      description:
        "4-6 years of experience in a competitive, challenging environment.",
    },
    {
      index: 2,
      description: "Extreme ownership across every workstream.",
    },
    {
      index: 3,
      description: "Ability to solve problems from first principles.",
    },
    {
      index: 4,
      description:
        "Comfortable pulling your own data in SQL and modeling in Excel.",
    },
  ],
  qualifications_preferred: [
    {
      index: 1,
      description: "Experience in managing or supporting a complex P&L.",
    },
    {
      index: 2,
      description: "Experience launching new partners or new products.",
    },
    {
      index: 3,
      description:
        "Demonstrated interest in logistics, on-demand services, and marketplaces.",
    },
    {
      index: 4,
      description: "Experience in project management.",
    },
  ],
  experience: [],
  benefits: [
    {
      index: 1,
      description: "Leadership opportunities.",
    },
    {
      index: 2,
      description: "Opportunity to build and create solutions.",
    },
    {
      index: 3,
      description: "Continuous learning environment.",
    },
    {
      index: 4,
      description: "Customer-obsessed culture.",
    },
    {
      index: 5,
      description:
        "Comprehensive health benefits and competitive compensation packages.",
    },
  ],
  culture:
    "DoorDash embraces a culture of leadership, learning, and customer obsession. It's a place where everyone is a doer, committed to creating solutions and driving the company and industry forward. The company values diversity and believes in the magic of its people working together towards inspiring goals.",
  additional_requirements: [],
  contact_information: null,
};
