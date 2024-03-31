import React from "react";
import { ContactInformation, JobDescription } from "@/lib/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type ContactSectinProps = Pick<JobDescription, "contact_information">;

const ContactSection: React.FC<ContactSectinProps> = ({
  contact_information,
}) => {
  if (!contact_information) return null;

  return (
    <AccordionItem value="contact_information">
      <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
        Contact Information
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          <ul className="list-disc list-inside space-y-2">
            {contact_information.email && (
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contact_information.email}`}
                  className="text-blue-600"
                >
                  {contact_information.email}
                </a>
              </li>
            )}
            {contact_information.telephone && (
              <li>
                Telephone:{" "}
                <a
                  href={`tel:${contact_information.telephone}`}
                  className="text-blue-600"
                >
                  {contact_information.telephone}
                </a>
              </li>
            )}
            {contact_information.website && (
              <li>
                Website:{" "}
                <a
                  href={contact_information.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {contact_information.website}
                </a>
              </li>
            )}
            {contact_information.other && (
              <li>Other: {contact_information.other}</li>
            )}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ContactSection;
