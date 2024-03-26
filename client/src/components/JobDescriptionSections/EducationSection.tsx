import React from "react";
import { EducationRequirement } from "@/lib/types";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface EducationSectionProps {
  educationRequirements: EducationRequirement[];
}

const EducationSection: React.FC<EducationSectionProps> = ({
  educationRequirements,
}) => {
  if (educationRequirements.length === 0) return null;

  return (
    <AccordionItem value="education_requirements">
      <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
        Education
      </AccordionTrigger>
      <AccordionContent>
        <ul className="list-disc list-inside">
          {educationRequirements.map((requirement, index) => (
            <li key={index}>
              {requirement.level}
              {requirement.field_of_study
                ? ` in ${requirement.field_of_study}`
                : ""}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default EducationSection;
