import React from "react";
import { JobDescription, Skill } from "@/lib/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <TooltipProvider>
        {skills.map((skill, index) => (
          <Tooltip key={index} delayDuration={300}>
            <TooltipTrigger>
              <Badge
                key={index}
                className="text-white bg-blue-500 dark:bg-teal-800"
              >
                {skill.name}

                {/* TODO: Add tooltip to show skill type & proficiency level */}
              </Badge>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              align="center"
              className="bg-gray-800 text-white rounded-lg shadow-lg dark:bg-gray-200 dark:text-gray-800"
            >
              <div className="flex flex-col p-2 space-y-1">
                <p className="text-sm font-semibold">
                  Type: <span className="font-normal">{skill.skill_type}</span>
                </p>
                <p className="text-sm font-semibold">
                  Proficiency:{" "}
                  <span className="font-normal">{skill.proficiency_level}</span>
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
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
