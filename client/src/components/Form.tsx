"use client";

import { analyze } from "@/app/api/analyze";
import { JobDescription, RequestPayload } from "@/lib/types";
import { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LoadingSpinner } from "./LoadingSpinner";
import { result_data } from "@/lib/utils";

interface FormProps {
  setResultData: Dispatch<SetStateAction<JobDescription | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

const Form: NextPage<FormProps> = ({
  setResultData,
  setIsLoading,
  isLoading,
}) => {
  const [jobDescription, setJobDescription] = useState<string>();

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload: RequestPayload = {
      job_description: jobDescription,
    };

    const data = await analyze(payload);

    setResultData(data);
    // setResultData(result_data)

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 h-full">
      <p className="text-lg max-w-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Paste your job description here
      </p>
      <Textarea
        className="flex-1 w-full min-h-96 sm:min-h-96"
        placeholder="Enter job description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <Button
        className="mt-4 self-center md:self-start"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Submit
        <LoadingSpinner
          className={`ml-2 ${isLoading ? "inline-block" : "hidden"}`}
        />
      </Button>
    </div>
  );
};

export default Form;
