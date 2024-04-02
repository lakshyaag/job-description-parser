import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

import { Recommendation, Recommendations } from "@/lib/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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

  const RecommendationComponent = ({
    recommendation,
    index,
  }: {
    recommendation: Recommendation;
    index: number;
  }) => (
    <Card key={index}>
      <CardHeader>
        <CardTitle className="text-xl font-extrabold">
          Recommendation {index + 1}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Original</TableHead>
              <TableHead>Suggested</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{recommendation.original_sentence}</TableCell>
              <TableCell>{recommendation.updated_sentence}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter>
        <Collapsible>
          <CollapsibleTrigger className="font-semibold text-md">
            Show differences
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ReactDiffViewer
              oldValue={recommendation.original_sentence!}
              newValue={recommendation.updated_sentence!}
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
      </CardFooter>
    </Card>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg md:hidden">Swipe to see more</p>
      <Carousel
        className="w-full max-w-screen-lg h-fit p-4"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {filteredRecommendations.map((recommendation, index) => (
            <CarouselItem key={index}>
              <RecommendationComponent
                recommendation={recommendation}
                index={index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ResumeRecommendationSection;
