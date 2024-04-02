"use client";

import { NextPage } from "next";
import { useState } from "react";
import { JobDescription, Keywords } from "@/lib/types";
import InputForm, { RequestPayload } from "@/components/InputForm";
import BreakdownView from "@/components/ResultSections/BreakdownView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeywordView } from "@/components/ResultSections/KeywordView";
import Loading from "@/components/Loading";
import { ResumeView } from "@/components/ResultSections/ResumeView";

const Home: NextPage = () => {
  const [resultData, setResultData] = useState<JobDescription>();
  const [keywordData, setKeywordData] = useState<Keywords>();

  const [activeTab, setActiveTab] = useState<string>("breakdown");
  const [model, setModel] = useState<Pick<RequestPayload, "model">>({
    model: "gpt-3.5-turbo",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="flex w-full flex-col min-h-screen dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1]">
      <section className="h-1/5 w-full py-4">
        <div className="container mx-auto flex h-full items-center justify-center px-8 md:px-12 text-center gap-4">
          <div>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 dark:from-blue-500 dark:to-green-400 sm:text-3xl md:text-4xl">
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
          <InputForm
            setResultData={setResultData}
            setIsLoading={setIsLoading}
            setModel={setModel}
            isLoading={isLoading}
          />

          {isLoading ? (
            <Loading />
          ) : resultData ? (
            <div className="flex flex-col gap-4 w-full md:w-1/2 ">
              <Tabs value={activeTab}>
                <TabsList
                  aria-label="Results Tabs"
                  className="flex gap-4 justify-center w-full"
                >
                  <TabsTrigger
                    value="breakdown"
                    className="flex-grow"
                    onClick={() => setActiveTab("breakdown")}
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="keywords"
                    className="flex-grow"
                    onClick={() => setActiveTab("keywords")}
                  >
                    Keywords
                  </TabsTrigger>
                  <TabsTrigger
                    value="resume"
                    className="flex-grow"
                    onClick={() => setActiveTab("resume")}
                  >
                    Resume
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="breakdown">
                  <BreakdownView
                    jobDescription={resultData}
                    setKeywordData={setKeywordData}
                    model={model}
                  />
                </TabsContent>
                <TabsContent value="keywords">
                  <KeywordView keywords={keywordData} />
                </TabsContent>
                <TabsContent value="resume">
                  <ResumeView keywords={keywordData} model={model} />
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
