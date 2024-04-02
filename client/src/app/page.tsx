"use client";

import { NextPage } from "next";
import { useRef, useState } from "react";
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
  const resultSectionRef = useRef<HTMLElement>(null);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-purple-600 dark:text-blue-500 mb-4">
                Unlock Your Dream Job with JD Analyzer
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Job searching made simple in just three easy steps:
              </p>
              <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 text-lg mb-8">
                <li>Paste your job description</li>
                <li>
                  Get a detailed breakdown and personalized recommendations
                </li>
                <li>Optimize your resume and land your dream job!</li>
              </ol>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                With JD Analyzer, you&apos;ll gain valuable insights into job
                requirements, discover essential keywords to include in your
                resume, and receive tailored suggestions to make your
                application stand out. Take control of your job search today!
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <InputForm
                setResultData={setResultData}
                setIsLoading={setIsLoading}
                setModel={setModel}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </section>
      <section ref={resultSectionRef} className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8">
          {isLoading ? (
            <Loading />
          ) : resultData ? (
            <div className="mx-auto">
              <Tabs value={activeTab}>
                <TabsList className="mb-6 gap-4 flex flex-col md:flex-row">
                  <TabsTrigger
                    value="breakdown"
                    className="w-full"
                    onClick={() => setActiveTab("breakdown")}
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="keywords"
                    className="w-full"
                    onClick={() => setActiveTab("keywords")}
                  >
                    Keywords
                  </TabsTrigger>
                  <TabsTrigger
                    value="resume"
                    className="w-full"
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
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Home;
