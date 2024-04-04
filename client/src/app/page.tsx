"use client";

import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import InputForm from "@/components/InputForm";
import BreakdownView from "@/components/ResultSections/BreakdownView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeywordView } from "@/components/ResultSections/KeywordView";
import { ResumeView } from "@/components/ResultSections/ResumeView";
import Landing from "@/components/Landing";
import { useUserStore } from "@/components/state/userStore";
import { Skeleton } from "@/components/ui/skeleton";
import { health } from "./api/health";

const Home: NextPage = () => {
  const { jobDescData, isLoading } = useUserStore();

  const [activeTab, setActiveTab] = useState<string>("breakdown");

  const resultSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const healthCheck = health();
  }, []);

  return (
    <main className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] --font-sans">
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <Landing />
            </div>
            <div className="w-full md:w-1/2">
              <InputForm resultSectionRef={resultSectionRef} />
            </div>
          </div>
        </div>
      </section>
      <section ref={resultSectionRef} className="py-2 md:py-4">
        <div className="container mx-auto px-4 md:px-8">
          {isLoading ? (
            <div className="flex flex-col gap-4 w-full">
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl animate-pulse">
                Please wait...
              </p>
              <div className="w-full space-y-2">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          ) : jobDescData ? (
            <div className="mx-auto">
              <Tabs value={activeTab}>
                <TabsList className="m-6 gap-4 flex flex-row">
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
                    Important Keywords
                  </TabsTrigger>
                  <TabsTrigger
                    value="resume"
                    className="w-full"
                    onClick={() => setActiveTab("resume")}
                  >
                    Resume Recommendations
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="breakdown">
                  <BreakdownView />
                </TabsContent>
                <TabsContent value="keywords">
                  <KeywordView />
                </TabsContent>
                <TabsContent value="resume">
                  <ResumeView />
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
