import { Keywords, Recommendations } from "@/lib/types";
import { NextPage } from "next";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { LoadingSpinner } from "../icons/LoadingSpinner";
import { insertRecommendations, uploadResume } from "@/app/api/supabaseService";
import { recommend } from "@/app/api/recommend";
import { RequestPayload } from "../InputForm";
import { useToast } from "../ui/use-toast";
import Loading from "../Loading";
import { Skeleton } from "../ui/skeleton";
import ResumeRecommendationSection from "./ResumeRecommendation";
import { useTheme } from "next-themes";
import { resume_data } from "@/lib/utils";

interface ResumeViewProps {
  keywords: Keywords | undefined;
  model: Pick<RequestPayload, "model">;
  recommendations: Recommendations | undefined;
  setRecommendations: Dispatch<SetStateAction<Recommendations | undefined>>;
}

const FormSchema = z.object({
  resume: z
    .any()
    .refine((file) => file.type === "application/pdf", "Invalid file type"),
});

export const ResumeView: NextPage<ResumeViewProps> = ({
  keywords,
  model,
  recommendations,
  setRecommendations,
}) => {
  const { resolvedTheme } = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const resumeForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    // Upload resume to Supabase storage
    setIsLoading(true);

    try {
      const uploadResponse = await uploadResume(data.resume);
      console.log(uploadResponse);

      //   // Call recommendation endpoint

      toast({
        title: "Analyzing resume...",
        description: "Please wait while we analyze your resume.",
        variant: "default",
      });

      const payload = {
        resume_file_id: uploadResponse.path,
        model: model.model,
        keywords: keywords,
      };

      const response = await recommend(payload);
      console.log(response);

      try {
        await insertRecommendations(uploadResponse.path, model.model, response);
        console.log("Successfully saved recommendation response to database.");
      } catch (error) {
        console.error(
          "Failed to save recommendation response to database:",
          error
        );
        toast({
          title: "Error",
          description: "Failed to save recommendations. Please try again.",
          variant: "destructive",
        });
      }

      setRecommendations(response);
      // setRecommendations(resume_data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to analyze resume. Please try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {keywords ? (
        <Form {...resumeForm}>
          <form
            onSubmit={resumeForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={resumeForm.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Resume</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="w-full"
                      placeholder="Upload your resume in .pdf"
                      accept=".pdf"
                      onChange={(e) => {
                        field.onChange(e.target.files?.[0]);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload your resume in .pdf format only. A 1-page resume is
                    ideal.
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <span>Analyzing</span>
                  <LoadingSpinner />
                </div>
              ) : (
                <div>Recommend</div>
              )}{" "}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <p className="font-semibold">
            Please generate keywords before uploading your resume
          </p>
        </div>
      )}

      {isLoading && <Skeleton className="h-48 w-full" />}

      {recommendations && (
        <ResumeRecommendationSection
          recommendations={recommendations}
          theme={resolvedTheme}
        />
      )}
    </div>
  );
};
