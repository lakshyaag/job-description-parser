"use client";

import { analyze } from "@/app/api/analyze";
import { NextPage } from "next";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoadingSpinner } from "./icons/LoadingSpinner";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useUserStore } from "@/components/state/userStore";
import { result_data } from "@/lib/utils";

interface FormProps {
  resultSectionRef: React.RefObject<HTMLElement>;
}

const FormSchema = z.object({
  context: z.string(),
  model: z.enum(["gpt-3.5-turbo", "gpt-4-turbo-preview"]),
});

export type RequestPayload = z.infer<typeof FormSchema>;

const InputForm: NextPage<FormProps> = ({ resultSectionRef }) => {
  const { toast } = useToast();

  const { setModel, setIsLoading, setJobDescData, isLoading } = useUserStore();

  const inputForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      context: "",
      model: "gpt-3.5-turbo",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setModel({ model: values.model });
    setIsLoading(true);

    toast({
      title: "Analyzing job description...",
      description: "Please wait while we analyze your job description.",
      variant: "default",
    });

    try {
      const data = await analyze({ ...values });
      setJobDescData(data);

      // setJobDescData(result_data);

      try {
        await insertJobDescription(values.context, values.model, data);
        console.log("Successfully saved query response to database.");
      } catch (error) {
        console.error("Failed to save query response to database:", error);
        toast({
          title: "Error",
          description: "Failed to save your query. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Failed to analyze job description:", error);
      toast({
        title: "Error",
        description:
          "Failed to analyze your job description. Please try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);

    // Scroll to result section

    resultSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Paste your job description here
      </p>
      <Form {...inputForm}>
        <form onSubmit={inputForm.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={inputForm.control}
            name="context"
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

          <SignedIn>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <span>Analyzing</span>
                  <LoadingSpinner />
                </div>
              ) : (
                <div>Analyze</div>
              )}{" "}
            </Button>
          </SignedIn>

          <SignedOut>
            <div className="w-full">
              <SignInButton mode="modal">
                <Button type="button" className="w-full">
                  Sign in/sign up to analyze!
                </Button>
              </SignInButton>
            </div>
          </SignedOut>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
