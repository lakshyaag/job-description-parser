"use client";

import { analyze } from "@/app/api/analyze";
import { JobDescription } from "@/lib/types";
import { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LoadingSpinner } from "./icons/LoadingSpinner";
import { result_data } from "@/lib/utils";

import { createClient } from "@/lib/supabase/client";
import { useToast } from "./ui/use-toast";
import { insertJobDescription } from "@/app/api/supabaseService";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormProps {
  setResultData: Dispatch<SetStateAction<JobDescription | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

const FormSchema = z.object({
  job_description: z.string(),
  model: z.enum(["gpt-3.5-turbo", "gpt-4-turbo-preview"]),
});

export type RequestPayload = z.infer<typeof FormSchema>;

const InputForm: NextPage<FormProps> = ({
  setResultData,
  setIsLoading,
  isLoading,
}) => {
  const { toast } = useToast();

  const inputForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      job_description: "",
      model: "gpt-3.5-turbo",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);

    toast({
      title: "Analyzing job description...",
      description: "Please wait while we analyze your job description.",
      variant: "default",
    });

    const payload = {
      job_description: values.job_description,
      model: values.model,
    };

    const data = await analyze(payload);

    setResultData(data);
    // setResultData(result_data);

    try {
      await insertJobDescription(values.job_description, values.model, data);
      console.log("Successfully saved query response to database.");
    } catch (error) {
      console.error("Failed to save query response to database:", error);
      toast({
        title: "Error",
        description: "Failed to save your query. Please try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <p className="text-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Paste your job description here
      </p>
      <Form {...inputForm}>
        <form onSubmit={inputForm.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={inputForm.control}
            name="job_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Paste your job description"
                    rows={10}
                  />
                </FormControl>
                <FormDescription>
                  Paste your job description here. The more detailed, the
                  better.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={inputForm.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-3.5-turbo">GPT-3.5</SelectItem>
                      <SelectItem value="gpt-4-turbo-preview">GPT-4</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Choose a model to analyze your job description. GPT-3.5 is
                  faster but less accurate, while GPT-4 is slower but more
                  accurate.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
