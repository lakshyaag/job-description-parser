import React from "react";
import { JobDescription, Skill } from "@/lib/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

type SkillsProps = Pick<JobDescription, "skills">;

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  // const skillTypeColor = (type: string) => {
  //   switch (type) {
  //     case "Technical":
  //       return "bg-blue-500 dark:bg-blue-700";
  //     case "Soft":
  //       return "bg-green-500 dark:bg-green-700";
  //     case "Language":
  //       return "bg-red-500 dark:bg-red-700";
  //     case "Certification":
  //       return "bg-yellow-500 dark:bg-yellow-700";
  //     case "Other":
  //       return "bg-purple-500 dark:bg-purple-700";
  //     default:
  //       return "bg-gray-500 dark:bg-gray-700";
  //   }
  // };

  const renderSkillsList = (skills: Skill[]) => (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge
          key={index}
          className="text-white dark:text-gray-800 bg-blue-500 dark:bg-blue-700"
        >
          {skill.name}

          {/* TODO: Add tooltip to show skill type & proficiency level */}
        </Badge>
      ))}
    </div>
  );

  if (skills.length === 0) {
    return null;
  }

  return (
    <AccordionItem value="skills">
      <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
        Skills
      </AccordionTrigger>
      <AccordionContent>{renderSkillsList(skills)}</AccordionContent>
    </AccordionItem>
  );
};

export default SkillsSection;
