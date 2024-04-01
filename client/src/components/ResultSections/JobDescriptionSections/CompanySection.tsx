import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { JobDescription } from "@/lib/types";

type CompanyInfoSectionProps = Pick<
  JobDescription,
  "company_information" | "culture"
>;

const CompanyInfoSection: React.FC<CompanyInfoSectionProps> = ({
  company_information,
  culture,
}) => {
  return (
    <AccordionItem value="company_info_culture">
      <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
        Company Information & Culture
      </AccordionTrigger>
      <AccordionContent>
        <Accordion type="single" collapsible defaultValue="company_info">
          <AccordionItem value="company_info">
            <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
              About
            </AccordionTrigger>
            <AccordionContent>
              <p>{company_information}</p>
            </AccordionContent>
          </AccordionItem>
          {culture && (
            <AccordionItem value="company_culture">
              <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
                Culture
              </AccordionTrigger>
              <AccordionContent>
                <p>{culture}</p>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CompanyInfoSection;
