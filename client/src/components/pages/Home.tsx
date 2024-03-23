"use client";

import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { analyze } from "@/app/api/analyze";
import { JobDescription, RequestPayload } from "@/lib/types";

const Home: NextPage = () => {
  const [jobDescription, setJobDescription] = useState<string>();
  const [resultData, setResultData] = useState<JobDescription>();

  const handleSubmit = async () => {
    const payload: RequestPayload = {
      job_description: jobDescription,
    };

    const data = await analyze(payload);
    console.log(data);

    setResultData(data);
  };

  return (
    <main className="flex w-full flex-col min-h-screen">
      <section className="h-1/5 w-full py-4">
        <div className="container mx-auto flex h-full items-center justify-center px-4 md:px-6 text-center gap-4">
          <div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl md:text-4xl">
              Simplify your job search in seconds.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Paste your job description and get a detailed breakdown of
              everything you need to know.
            </p>
          </div>
        </div>
      </section>

      <section className="h-4/5 w-full py-4">
        <div className="container mx-auto flex flex-col md:flex-row h-full justify-between items-start md:items-center px-4 md:px-6 gap-8">
          <div className="flex flex-col gap-4 w-full md:w-1/2 h-full">
            <p className="text-md max-w-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
              Paste your job description here
            </p>
            <Textarea
              className="flex-1 w-full min-h-48 max-h-96 sm:min-h-64 sm:max-h-80"
              placeholder="Enter job description..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            <Button
              className="mt-4 self-center md:self-start"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-1/2 h-full">
            <p className="text-md max-w-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
              Results
            </p>
            {/* Placeholder for results or a component to display results */}
            {resultData ? (
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                {resultData.title && (
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    Title: {resultData.title}
                  </p>
                )}
                {resultData.company_information && (
                  <p className="text-md text-gray-700 dark:text-gray-300">
                    Company: {resultData.company_information}
                  </p>
                )}
                {resultData.location && (
                  <p className="text-md text-gray-700 dark:text-gray-300">
                    Location: {resultData.location}
                  </p>
                )}
                {resultData.years_of_experience && (
                  <p className="text-md text-gray-700 dark:text-gray-300">
                    Experience Required: {resultData.years_of_experience}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No results to display
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
