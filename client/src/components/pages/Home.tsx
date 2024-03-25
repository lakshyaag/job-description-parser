"use client";

import { NextPage } from "next";
import { useState } from "react";
import { JobDescription } from "@/lib/types";
import Form from "../Form";
import Result from "../Result";
import Loading from "../Loading";

const Home: NextPage = () => {
  const [resultData, setResultData] = useState<JobDescription>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="flex w-full flex-col min-h-screen">
      <section className="h-1/5 w-full py-4">
        <div className="container mx-auto flex h-full items-center justify-center px-8 md:px-12 text-center gap-4">
          <div>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 dark:from-purple-300 dark:to-pink-200 sm:text-3xl md:text-4xl">
              Simplify your job search in seconds.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Paste your job description and get a detailed breakdown of
              everything you need to know.
            </p>
          </div>
        </div>
      </section>

      <section className="h-4/5 w-full py-4">
        <div className="container mx-auto flex flex-col md:flex-row h-full justify-between items-start px-4 md:px-6 gap-8">
          <Form
            setResultData={setResultData}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />

          {isLoading ? (
            <Loading />
          ) : resultData ? (
            <Result jobDescription={resultData} />
          ) : (
            <></>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
