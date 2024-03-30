import React from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type ContentItem = { index: number; description: string };

interface JobDetailSectionProps {
  title: string;
  content: ContentItem[];
}

const JobDetailSection: React.FC<JobDetailSectionProps> = ({
  title,
  content,
}) => {
  if (!content || content.length === 0) return null;

  const renderContent = () => {
    if (Array.isArray(content)) {
      if (
        content.every(
          (item) => typeof item === "object" && "description" in item
        )
      ) {
        return (
          <ul className="list-disc list-inside">
            {content.map((item: ContentItem, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        );
      } else {
        return <p>Invalid content format.</p>;
      }
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

export default JobDetailSection;
