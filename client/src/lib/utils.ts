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
  title: "Data Science and Machine Learning Engineering Team Member",
  company_information:
    "Bain & Company is a global consultancy that helps the world’s most ambitious change makers define the future. Across 64 cities in 39 countries, we work alongside our clients as one team with a shared ambition to achieve extraordinary results, outperform the competition, and redefine industries. We complement our tailored, integrated expertise with a vibrant ecosystem of digital innovators to deliver better, faster, and more enduring outcomes. Our 10-year commitment to invest more than $1 billion in pro bono services brings our talent, expertise, and insight to organizations tackling today’s urgent challenges in education, racial equity, social justice, economic development, and the environment. We earned a gold rating from EcoVadis, the leading platform for environmental, social, and ethical performance ratings for global supply chains, putting us in the top 2% of all companies. Since our founding in 1973, we have measured our success by the success of our clients, and we proudly maintain the highest level of client advocacy in the industry.",
  industry: "Consultancy",
  location: null,
  job_type: "Full-time",
  years_of_experience_required: 10,
  years_of_experience_preferred: null,
  education: [
    {
      level: "Advanced Degree",
      field_of_study:
        "Computer Science, Engineering, Physics, Statistics, Applied Mathematics, etc.",
    },
  ],
  salary_range: {
    minimum: 260500,
    maximum: 313000,
    currency: "USD",
  },
  responsibilities: [
    {
      index: 1,
      description:
        "Collaborate closely with business consulting staff and leaders as part of multi-disciplinary teams to develop data-driven solutions.",
    },
    {
      index: 2,
      description:
        "Translate business objectives into data and analytics solutions and translate results into business insights.",
    },
    {
      index: 3,
      description:
        "Partner closely with engineering and product specialists to support development of analytics solutions and products.",
    },
    {
      index: 4,
      description:
        "Transform prototype code into scalable, production-grade software.",
    },
    {
      index: 5,
      description:
        "Manage development of re-usable frameworks, models, and components.",
    },
    {
      index: 6,
      description:
        "Drive best practices in machine learning engineering and MLOps.",
    },
    {
      index: 7,
      description:
        "Develop relationships with external data and analytics vendors.",
    },
    {
      index: 8,
      description: "Provide thought leadership in machine-learning techniques.",
    },
    {
      index: 9,
      description: "Develop, deploy, and support machine learning solutions.",
    },
    {
      index: 10,
      description:
        "Act as Professional Development Advisor to a team of machine learning engineers.",
    },
    {
      index: 11,
      description:
        "Support leadership in extending machine learning, engineering, and analytics capabilities.",
    },
    {
      index: 12,
      description: "Help develop Advanced Analytics intellectual property.",
    },
    {
      index: 13,
      description: "Travel is required (30%).",
    },
    {
      index: 14,
      description: "Specialization in NLP or Computer Vision is considered.",
    },
  ],
  qualifications_required: [
    {
      index: 1,
      description:
        "10+ years of software engineering, analytics development or machine learning engineering experience.",
    },
    {
      index: 2,
      description:
        "3+ years of experience managing data scientists and ML engineers.",
    },
    {
      index: 3,
      description:
        "Strong understanding of computer science concepts, software design best practices, and machine learning design patterns.",
    },
    {
      index: 4,
      description:
        "Solid understanding of foundational machine learning concepts and algorithms.",
    },
    {
      index: 5,
      description:
        "Broad experience deploying production-grade machine learning solutions.",
    },
    {
      index: 6,
      description:
        "Expert knowledge of Python programming and machine learning frameworks.",
    },
    {
      index: 7,
      description:
        "Experience with ML automation, MLOps, and associated tools.",
    },
    {
      index: 8,
      description:
        "Experience with DevSecOps principles, CI/CD tools, and infrastructure as code.",
    },
    {
      index: 9,
      description:
        "Extensive experience in at least one cloud platform and associated machine learning services.",
    },
    {
      index: 10,
      description: "Familiarity with Agile software development practices.",
    },
    {
      index: 11,
      description: "Strong interpersonal and communication skills.",
    },
    {
      index: 12,
      description: "Ability to work without supervision and juggle priorities.",
    },
  ],
  qualifications_preferred: [],
  experience: [],
  benefits: [
    {
      index: 1,
      description: "Annual discretionary performance bonus.",
    },
    {
      index: 2,
      description:
        "4.5% 401(k) company contribution, increases after 3 years of service, 100% vested upon start date.",
    },
    {
      index: 3,
      description: "Comprehensive U.S. benefits and wellness program.",
    },
  ],
  culture:
    "Bain & Company is consistently recognized as one of the world's best places to work, a champion of diversity and a model of social responsibility. We believe that diversity, inclusion, and collaboration are key to building extraordinary teams. We hire people with exceptional talents, abilities, and potential, then create an environment where you can become the best version of yourself and thrive both professionally and personally.",
  skills: [
    {
      index: 1,
      type: "Technical",
      description: "Python programming",
    },
    {
      index: 2,
      type: "Technical",
      description:
        "Machine learning frameworks (Scikit-learn, TensorFlow, Keras, PyTorch, etc.)",
    },
    {
      index: 3,
      type: "Technical",
      description: "ML automation, MLOps",
    },
    {
      index: 4,
      type: "Technical",
      description: "DevSecOps principles, CI/CD tools, infrastructure as code",
    },
    {
      index: 5,
      type: "Technical",
      description: "Cloud platforms and associated machine learning services",
    },
    {
      index: 6,
      type: "Soft",
      description: "Interpersonal and communication skills",
    },
    {
      index: 7,
      type: "Technical",
      description: "Agile software development practices",
    },
  ],
  additional_requirements: [
    {
      index: 1,
      description:
        "Proficiency with core techniques of linear algebra and common optimization algorithms.",
    },
    {
      index: 2,
      description:
        "Experience using distributed computing engines, e.g., Dask, Ray, Spark.",
    },
    {
      index: 3,
      description:
        "Experience using big data technologies and distributed computing engines, e.g., HDFS, Spark, Kafka, Cassandra, Solr, Dask.",
    },
  ],
  contact_information: null,
};
