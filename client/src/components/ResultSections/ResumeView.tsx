import { Keywords } from "@/lib/types";
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
import { useState } from "react";
import { LoadingSpinner } from "../icons/LoadingSpinner";
import { uploadResume } from "@/app/api/supabaseService";

interface ResumeViewProps {
  keywords: Keywords | undefined;
}

const FormSchema = z.object({
  resume: z
    .any()
    .refine((file) => file.type === "application/pdf", "Invalid file type"),
});

export const ResumeView: NextPage<ResumeViewProps> = ({ keywords }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resumeForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    // Upload resume to Supabase storage
    try {
      const response = await uploadResume(data.resume);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Resume recommendations
      </p>
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
                  Paste your job description here. The more detailed, the
                  better.
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
    </div>
  );
};
