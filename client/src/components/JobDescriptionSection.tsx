import React from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface JobDescriptionSectionProps {
  title: string;
  content: string | { index: number; description: string }[] | null | undefined;
}

const JobDescriptionSection: React.FC<JobDescriptionSectionProps> = ({
  title,
  content,
}) => {
  if (!content) return null;

  const renderContent = () => {
    if (typeof content === "string") {
      return <p>{content}</p>;
    } else {
      return (
        <ul className="list-disc list-inside">
          {content.map((item) => (
            <li key={item.index}>{item.description}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <AccordionItem value={title.toLowerCase().replace(/\s+/g, "_")}>
      <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
        {title}
      </AccordionTrigger>
      <AccordionContent>{renderContent()}</AccordionContent>
    </AccordionItem>
  );
};

export default JobDescriptionSection;
