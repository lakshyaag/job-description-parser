import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Recommendations } from "@/lib/types";

type ResumeRecommendationProps = {
  recommendations: Recommendations;
};

const ResumeRecommendationSection: React.FC<ResumeRecommendationProps> = ({
  recommendations,
}) => {
  return (
    <Accordion type="single">
      <AccordionItem value="resume_recommendations">
        <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
          Resume Recommendations
        </AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible>
            {recommendations.recommendations.map((recommendation, index) => (
              <AccordionItem key={index} value={`recommendation_${index}`}>
                <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
                  Recommendation {index + 1}
                </AccordionTrigger>
                <AccordionContent>
                  {recommendation.updated_sentence && (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Original</TableHead>
                          <TableHead>Suggested</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            {recommendation.original_sentence}
                          </TableCell>
                          <TableCell>
                            {recommendation.updated_sentence}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ResumeRecommendationSection;
