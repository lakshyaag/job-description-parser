import React from "react";
import { ContactInformation } from "@/lib/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface ContactSectinProps {
  contactInfo: ContactInformation;
}

const ContactSection: React.FC<ContactSectinProps> = ({ contactInfo }) => {
  return (
    <AccordionItem value="contact_information">
      <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
        Contact Information
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          <ul className="list-disc list-inside space-y-2">
            {contactInfo.email && (
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600"
                >
                  {contactInfo.email}
                </a>
              </li>
            )}
            {contactInfo.telephone && (
              <li>
                Telephone:{" "}
                <a
                  href={`tel:${contactInfo.telephone}`}
                  className="text-blue-600"
                >
                  {contactInfo.telephone}
                </a>
              </li>
            )}
            {contactInfo.website && (
              <li>
                Website:{" "}
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {contactInfo.website}
                </a>
              </li>
            )}
            {contactInfo.other && <li>Other: {contactInfo.other}</li>}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ContactSection;
