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

import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";

import { Recommendations } from "@/lib/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

type ResumeRecommendationProps = {
  recommendations: Recommendations;
  theme?: string;
};

const ResumeRecommendationSection: React.FC<ResumeRecommendationProps> = ({
  recommendations,
  theme,
}) => {
  const filteredRecommendations = recommendations.recommendations.filter(
    (recommendation) => recommendation.updated_sentence
  );

  return (
    <Accordion type="single" defaultValue="resume_recommendations">
      <AccordionItem value="resume_recommendations">
        <AccordionTrigger className="font-bold text-md text-gray-800 dark:text-gray-200">
          Resume Recommendations
        </AccordionTrigger>
        <AccordionContent>
          <Accordion type="single">
            {filteredRecommendations.map((recommendation, index) => (
              <AccordionItem key={index} value={`recommendation_${index}`}>
                <AccordionTrigger className="font-bold text-sm text-gray-800 dark:text-gray-200">
                  Recommendation {index + 1}
                </AccordionTrigger>
                <AccordionContent>
                  {recommendation.updated_sentence && (
                    <div className="flex flex-col gap-4">
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

                      <Collapsible className="m-2">
                        <CollapsibleTrigger className="font-semibold text-md">
                          Show differences
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ReactDiffViewer
                            oldValue={recommendation.original_sentence}
                            newValue={recommendation.updated_sentence}
                            splitView={true}
                            hideLineNumbers={true}
                            showDiffOnly={true}
                            useDarkTheme={theme === "dark"}
                            leftTitle="Original"
                            rightTitle="Suggested"
                            compareMethod={DiffMethod.WORDS_WITH_SPACE}
                          />
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
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
