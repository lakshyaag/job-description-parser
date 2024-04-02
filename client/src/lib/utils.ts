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

export const keywords_data = {
  keywords: [
    {
      keyword: "Develop strategy",
      source: "Responsibilities",
      reasoning:
        "Important as it highlights the ability to create plans to serve customers effectively.",
    },
    {
      keyword: "Work with partners",
      source: "Responsibilities",
      reasoning:
        "Shows collaboration skills and ability to execute plans with internal and external stakeholders.",
    },
    {
      keyword: "Lead opportunities",
      source: "Responsibilities",
      reasoning:
        "Demonstrates leadership in creating growth strategies and future plans.",
    },
    {
      keyword: "Cross-functional collaboration",
      source: "Responsibilities",
      reasoning:
        "Emphasizes working across different departments to introduce new products and services.",
    },
    {
      keyword: "4-6 years experience",
      source: "Required Qualifications",
      reasoning:
        "Essential qualification that showcases the required level of experience.",
    },
    {
      keyword: "Extreme ownership",
      source: "Required Qualifications",
      reasoning:
        "Highlights the need for taking responsibility across all workstreams.",
    },
    {
      keyword: "Problem-solving",
      source: "Required Qualifications",
      reasoning:
        "Critical skill that is required to solve complex issues from first principles.",
    },
    {
      keyword: "SQL",
      source: "Skills",
      reasoning:
        "Technical skill proficiency in SQL is necessary for data retrieval and analysis.",
    },
    {
      keyword: "Excel",
      source: "Skills",
      reasoning:
        "Proficiency in Excel is important for data modeling and analysis.",
    },
    {
      keyword: "Analytical Skills",
      source: "Skills",
      reasoning:
        "Advanced analytical skills are crucial for interpreting data effectively.",
    },
    {
      keyword: "Communication",
      source: "Skills",
      reasoning:
        "Strong communication skills are essential for effective collaboration and project management.",
    },
    {
      keyword: "Project Management",
      source: "Skills",
      reasoning:
        "Experience in project management is valuable for overseeing tasks and achieving goals.",
    },
  ],
};

export const resume_data = {
  recommendations: [
    {
      index: 1,
      original_sentence:
        "Master of Management in Analytics GPA 3.874.00 Top 5 among 80 students July 2023 Aug 2024",
      updated_sentence:
        "Master of Management in Analytics with a GPA of 3.87, ranking in the top 5 among 80 students, completed from McGill University, showcasing strong analytical skills and academic excellence.",
    },
    {
      index: 2,
      original_sentence:
        "Received an entrance scholarship of 8K and a Directors Award of 2K",
      updated_sentence:
        "Recipient of an 8K entrance scholarship and a 2K Directors Award, demonstrating academic merit and recognition for achievements.",
    },
    {
      index: 3,
      original_sentence:
        "Tutored 10 classmates in understanding complex optimization concepts through clear explanations and practical examples",
      updated_sentence:
        "Provided academic support by tutoring 10 classmates in comprehending complex optimization concepts through clear explanations and practical examples, showcasing strong communication and teaching skills.",
    },
    {
      index: 4,
      original_sentence:
        "Conducted structured sentiment analysis using OpenAIs GPT 4 on 250K social media posts regarding abortion viewpoints , yielding key",
      updated_sentence:
        "Performed structured sentiment analysis using OpenAI's GPT-4 on 250K social media posts related to abortion viewpoints, extracting valuable insights for research initiatives.",
    },
    {
      index: 5,
      original_sentence:
        "Orchestrated a high volume data analytics pipeline for 300K Instagram posts , from data scraping via APIs to advanced deep learning tasks such as NLP for topic modelling and Computer Vision for image attribute extraction",
      updated_sentence:
        "Led the development of a high-volume data analytics pipeline for 300K Instagram posts, involving data scraping through APIs and advanced tasks in NLP for topic modeling and Computer Vision for image attribute extraction, demonstrating expertise in data management and analysis.",
    },
    {
      index: 6,
      original_sentence:
        "Optimized the UX for the Data Mangrove sustainability project , enhancing data collection, tracking, and strategic tools for endangered monkey conservation efforts in Costa Rica.",
      updated_sentence:
        "Enhanced the user experience for the Data Mangrove sustainability project by improving data collection, tracking, and strategic tools for conservation efforts in Costa Rica, demonstrating problem-solving skills and a focus on sustainability initiatives.",
    },
    {
      index: 7,
      original_sentence:
        "Spearheaded the development of GenAI solutions using Large Language Models for extensive sentiment classification, increasing operational",
      updated_sentence:
        "Led the development of GenAI solutions using Large Language Models for sentiment classification, showcasing expertise in AI technologies and problem-solving abilities.",
    },
    {
      index: 8,
      original_sentence:
        "Pioneered and automat ed retail analytics using Python and Alteryx on Nielsen IQ point ofsale POS data, saving the practice 150",
      updated_sentence:
        "Initiated and automated retail analytics using Python and Alteryx on Nielsen IQ point-of-sale data, resulting in significant time savings and operational efficiency improvements.",
    },
    {
      index: 9,
      original_sentence:
        "Designed analyzed over 50 surveys through 10 consumer behavior metrics covering brand awareness, NPS, key purchase criteri a across",
      updated_sentence:
        "Designed and analyzed over 50 surveys focusing on 10 consumer behavior metrics, including brand awareness, NPS, and key purchase criteria, demonstrating strong analytical skills and market research expertise.",
    },
    {
      index: 10,
      original_sentence:
        "Collaborated and coordinated with multi disciplinary teams of analysts, consultants, clients , and industry experts to conduct a due diligence on market landscape, competitive pressure and regulatory hurdles across 3 geographies , helping drive decisions for 23B AUM PE client",
      updated_sentence:
        "Collaborated with multidisciplinary teams of analysts, consultants, clients, and industry experts to conduct due diligence on market landscapes, competitive pressures, and regulatory challenges across 3 geographies, contributing to strategic decision-making for a 23B AUM PE client, showcasing strong teamwork and project management skills.",
    },
    {
      index: 11,
      original_sentence:
        "Coached 100 new hires in 5 practice wide trainings on Excel and Tableau , aiding in a team growth of 50 within 1.5 years organized a",
      updated_sentence:
        "Mentored 100 new hires in 5 practice-wide training sessions on Excel and Tableau, contributing to a team growth of 50 within 1.5 years, demonstrating leadership and training abilities.",
    },
    {
      index: 12,
      original_sentence:
        "Conducted data analysis on 5year average monthly ridership for Delhi Metro , quantif ying the impact of fare increases on its 1 bn annual",
      updated_sentence:
        "Analyzed 5-year average monthly ridership data for Delhi Metro, quantifying the impact of fare increases on its 1 billion annual commuters, showcasing strong analytical skills and data interpretation abilities.",
    },
    {
      index: 13,
      original_sentence:
        "Developed and implemented ETL solutions for fragmented bill ofmaterials data, leveraging network analysis and clustering tools to propose",
      updated_sentence:
        "Developed and implemented ETL solutions for fragmented bill of materials data, utilizing network analysis and clustering tools to propose efficient strategies, demonstrating expertise in data management and problem-solving.",
    },
    {
      index: 14,
      original_sentence:
        "Steered a team of 6 students in a high impact consulting project, efficiently planning milestones, and guiding the team towards success, and",
      updated_sentence:
        "Led a team of 6 students in a high-impact consulting project, effectively planning milestones and guiding the team towards success, demonstrating leadership and project management skills.",
    },
    {
      index: 15,
      original_sentence:
        "Engineered a Python based solution for a Vehicle Routing Problem, optimizing public transit disaster evacuation routes for the Société de",
      updated_sentence:
        "Developed a Python-based solution for a Vehicle Routing Problem, optimizing public transit disaster evacuation routes for Société de transport de Montréal (STM), showcasing problem-solving and technical skills.",
    },
    {
      index: 16,
      original_sentence:
        "Developed a machine learning ML model using Gradient Boosting Trees XGBoost, predicting Airbnb listing prices across 5 ci ties, helping",
      updated_sentence:
        "Created a machine learning model using Gradient Boosting Trees (XGBoost) to predict Airbnb listing prices across 5 cities, demonstrating proficiency in ML algorithms and data analysis.",
    },
    {
      index: 17,
      original_sentence:
        "Achieved 1st place among 8 teams in the Databricks Compass Analytics Hackathon challenge , predicting score margins for the latest NBA",
      updated_sentence:
        "Secured 1st place among 8 teams in the Databricks Compass Analytics Hackathon challenge by accurately predicting score margins for the latest NBA games, showcasing strong analytical and predictive modeling skills.",
    },
    {
      index: 18,
      original_sentence:
        "Awarded Best Overall Project at AI EarthHack hosted by D3 Harvard Microsoft, surpassing 150 global university teams, by creating a",
      updated_sentence:
        "Received the Best Overall Project award at AI EarthHack hosted by D3 Harvard Microsoft, surpassing 150 global university teams, for developing an innovative AI tool, demonstrating excellence in AI development and problem-solving.",
    },
    {
      index: 19,
      original_sentence:
        "Built a custom transformer language model GPT 2 equivalent from scratch, learning about key concepts such as regular expressions,",
      updated_sentence:
        "Constructed a custom transformer language model equivalent to GPT-2 from scratch, gaining expertise in key concepts such as regular expressions and neural network architectures.",
    },
    {
      index: 20,
      original_sentence:
        "Technical Skills Python pandas, numpy, pytorch, scikit learn, networkx , mlflow , SQL, R, JavaScript , Databricks, Tableau, PowerBI, Git,",
      updated_sentence:
        "Proficient in technical skills including Python (pandas, numpy, pytorch, scikit-learn), networkx, mlflow, SQL, R, JavaScript, Databricks, Tableau, PowerBI, and Git, essential for data analysis and machine learning roles.",
    },
    {
      index: 21,
      original_sentence: "Languages English fluent, Hindi fluent, French basic",
      updated_sentence:
        "Fluent in English and Hindi, with a basic understanding of French, facilitating effective communication in multilingual environments.",
    },
  ],
};
