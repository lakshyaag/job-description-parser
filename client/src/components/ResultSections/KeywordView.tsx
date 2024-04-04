import { NextPage } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { LoadingSpinner } from "../icons/LoadingSpinner";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { insertKeywords } from "@/app/api/supabaseService";
import { keywords } from "@/app/api/keywords";
import { useUserStore } from "../state/userStore";
import { keywords_data } from "@/lib/utils";

export const KeywordView: NextPage = ({}) => {
  const { setKeywordData, jobDescData, model, keywordData } = useUserStore();
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
        responsibilities: jobDescData!.responsibilities,
        required_qualifications: jobDescData!.qualifications_required,
        skills: jobDescData!.skills,
      }),
      model: model.model,
    };

    try {
      const data = await keywords(payload);
      setKeywordData(data);

      try {
        await insertKeywords(payload.context, payload.model, data);
        console.log("Successfully saved keyword response to database.");
      } catch (error) {
        console.error("Failed to save keyword response to database:", error);
        toast({
          title: "Error",
          description: "Failed to save keywords. Please try again.",
          variant: "destructive",
        });
      }

      // setKeywordData(keywords_data);
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
        <div className="flex flex-col gap-4 items-center">
          <p className="font-semibold">
            Click the button below to generate keywords from the job description
          </p>
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
        </div>
      )}
    </div>
  );
};
