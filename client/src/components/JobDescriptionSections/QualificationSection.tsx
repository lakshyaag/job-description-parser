import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Qualification } from "@/lib/types";

interface QualificationsProps {
  requiredQualifications: Qualification[];
  preferredQualifications: Qualification[];
}

const QualificationsSection: React.FC<QualificationsProps> = ({
  requiredQualifications,
  preferredQualifications,
}) => {
  const renderQualificationsList = (qualifications: Qualification[]) => (
    <ul className="list-disc list-inside">
      {qualifications.map((qualification, index) => (
        <li key={index}>{qualification.description}</li>
      ))}
    </ul>
  );

  return (
    <AccordionItem value="qualifications">
      <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
        Qualifications
      </AccordionTrigger>
      <AccordionContent>
        <Accordion
          type="single"
          collapsible
          defaultValue="required_qualifications"
        >
          {requiredQualifications.length > 0 && (
            <AccordionItem value="required_qualifications">
              <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
                Required Qualifications
              </AccordionTrigger>
              <AccordionContent>
                {renderQualificationsList(requiredQualifications)}
              </AccordionContent>
            </AccordionItem>
          )}
          {preferredQualifications.length > 0 && (
            <AccordionItem value="preferred_qualifications">
              <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
                Preferred Qualifications
              </AccordionTrigger>
              <AccordionContent>
                {renderQualificationsList(preferredQualifications)}
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
};

export default QualificationsSection;
