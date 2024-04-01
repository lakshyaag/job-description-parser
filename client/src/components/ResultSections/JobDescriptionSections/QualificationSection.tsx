import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JobDescription, Qualification } from "@/lib/types";

type QualificationsProps = Pick<
  JobDescription,
  "qualifications_required" | "qualifications_preferred"
>;

const QualificationsSection: React.FC<QualificationsProps> = ({
  qualifications_required,
  qualifications_preferred,
}) => {
  const renderQualificationsList = (qualifications: Qualification[]) => (
    <ul className="list-disc list-inside">
      {qualifications.map((qualification, index) => (
        <li key={index}>{qualification.description}</li>
      ))}
    </ul>
  );

  if (
    qualifications_required.length === 0 &&
    qualifications_preferred.length === 0
  ) {
    return null;
  }

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
          {qualifications_required.length > 0 && (
            <AccordionItem value="required_qualifications">
              <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
                Required Qualifications
              </AccordionTrigger>
              <AccordionContent>
                {renderQualificationsList(qualifications_required)}
              </AccordionContent>
            </AccordionItem>
          )}
          {qualifications_preferred.length > 0 && (
            <AccordionItem value="preferred_qualifications">
              <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
                Preferred Qualifications
              </AccordionTrigger>
              <AccordionContent>
                {renderQualificationsList(qualifications_preferred)}
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
};

export default QualificationsSection;
