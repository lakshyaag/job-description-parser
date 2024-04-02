"use client";

import { NextPage } from "next";
import { useRef, useState } from "react";
import { JobDescription, Keywords, Recommendations } from "@/lib/types";
import InputForm, { RequestPayload } from "@/components/InputForm";
import BreakdownView from "@/components/ResultSections/BreakdownView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeywordView } from "@/components/ResultSections/KeywordView";
import Loading from "@/components/Loading";
import { ResumeView } from "@/components/ResultSections/ResumeView";
import Landing from "@/components/Landing";

const Home: NextPage = () => {
  const [jobDescData, setJobDescData] = useState<JobDescription>();
  const [keywordData, setKeywordData] = useState<Keywords>();
  const [recommendations, setRecommendations] = useState<Recommendations>();

  const [activeTab, setActiveTab] = useState<string>("breakdown");
  const [model, setModel] = useState<Pick<RequestPayload, "model">>({
    model: "gpt-3.5-turbo",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const resultSectionRef = useRef<HTMLElement>(null);

  return (
    <main className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.1]">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 w-full md:w-1/2">
              <Landing />
            </div>
            <div className="w-full md:w-1/2">
              <InputForm
                setJobDescData={setJobDescData}
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
          ) : jobDescData ? (
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
                  <BreakdownView jobDescription={jobDescData} />
                </TabsContent>
                <TabsContent value="keywords">
                  <KeywordView
                    jobDescription={jobDescData}
                    keywordData={keywordData}
                    setKeywordData={setKeywordData}
                    model={model}
                  />
                </TabsContent>
                <TabsContent value="resume">
                  <ResumeView
                    keywords={keywordData}
                    model={model}
                    recommendations={recommendations}
                    setRecommendations={setRecommendations}
                  />
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
