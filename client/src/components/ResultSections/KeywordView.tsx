import { JobDescription, Keywords } from "@/lib/types";
import { NextPage } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { LoadingSpinner } from "../icons/LoadingSpinner";
import { Dispatch, SetStateAction, useState } from "react";
import { useToast } from "../ui/use-toast";
import { insertKeywords } from "@/app/api/supabaseService";
import { RequestPayload } from "../InputForm";
import { keywords as queryKeywords } from "@/app/api/keywords";
import { keywords_data } from "@/lib/utils";
interface KeywordViewProps {
  jobDescription: JobDescription;
  keywordData: Keywords | undefined;
  setKeywordData: Dispatch<SetStateAction<Keywords | undefined>>;
  model: Pick<RequestPayload, "model">;
}

export const KeywordView: NextPage<KeywordViewProps> = ({
  jobDescription,
  keywordData,
  setKeywordData,
  model,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const getKeywords = async () => {
    setIsLoading(true);

    toast({
      title: "Generating keywords...",
      description: "Please wait while we look for keywords.",
      variant: "default",
    });

    const payload = {
      context: JSON.stringify({
        responsibilities: jobDescription.responsibilities,
        required_qualifications: jobDescription.qualifications_required,
        skills: jobDescription.skills,
      }),
      model: model.model,
    };

    try {
      // const data = await queryKeywords(payload);
      // setKeywordData(data);

      // try {
      //   await insertKeywords(payload.context, payload.model, data);
      //   console.log("Successfully saved keyword response to database.");
      // } catch (error) {
      //   console.error("Failed to save keyword response to database:", error);
      //   toast({
      //     title: "Error",
      //     description: "Failed to save keywords. Please try again.",
      //     variant: "destructive",
      //   });
      // }
      setKeywordData(keywords_data);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred",
        description: "Failed to generate keywords. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Important keywords
      </p>
      {keywordData ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Keyword</TableHead>
              <TableHead>Reasoning</TableHead>
              <TableHead>Source</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {keywordData?.keywords.map((keyword) => (
              <TableRow key={keyword.keyword}>
                <TableCell
                  className="
              font-bold"
                >
                  {keyword.keyword}
                </TableCell>
                <TableCell>{keyword.reasoning}</TableCell>
                <TableCell>{keyword.source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Button
          className="w-full"
          variant="default"
          onClick={getKeywords}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <span>Generating keywords</span>
              <LoadingSpinner />
            </div>
          ) : (
            <div>Generate keywords</div>
          )}
        </Button>
      )}
    </div>
  );
};
