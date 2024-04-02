"use client";

import { JobDescription, Keywords } from "@/lib/types";
import { NextPage } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import JobDetailSection from "@/components/ResultSections/JobDescriptionSections/JobDetailSection";
import ContactSection from "@/components/ResultSections/JobDescriptionSections/ContactSection";
import QualificationsSection from "./JobDescriptionSections/QualificationSection";
import SkillsSection from "./JobDescriptionSections/SkillSection";
import EducationSection from "./JobDescriptionSections/EducationSection";
import CompanyInfoSection from "./JobDescriptionSections/CompanySection";
import JobDetailsBadges from "./JobDescriptionSections/JobDetailBadges";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "../ui/use-toast";
import { LoadingSpinner } from "../icons/LoadingSpinner";
import { keywords } from "@/app/api/keywords";
import { RequestPayload } from "../InputForm";
import { insertKeywords } from "@/app/api/supabaseService";

interface BreakdownViewProps {
  jobDescription: JobDescription;
  setKeywordData: Dispatch<SetStateAction<Keywords | undefined>>;
  model: Pick<RequestPayload, "model">;
}

export const BreakdownView: NextPage<BreakdownViewProps> = ({
  jobDescription,
  setKeywordData,
  model,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getKeywords = async () => {
    setIsLoading(true);

    toast({
      title: "Generating keywords...",
      description: "Please wait while we look for keywords.",
      variant: "default",
    });

    const payload = {
      context: JSON.stringify({
        responsibilities: jobDescription.responsibilities,
        required_qualifications: jobDescription.qualifications_required,
        skills: jobDescription.skills,
      }),
      model: model.model,
    };

    try {
      const data = await keywords(payload);
      setKeywordData(data);

      try {
        await insertKeywords(payload.context, payload.model, data);
        console.log("Successfully saved keyword response to database.");
      } catch (error) {
        console.error("Failed to save keyword response to database:", error);
        toast({
          title: "Error",
          description: "Failed to save keywords. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred",
        description: "Failed to generate keywords. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Detailed Breakdown
      </p>

      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <Card className="gap-4 bg-white dark:bg-zinc-900 shadow-md rounded-lg">
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                  {jobDescription.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <JobDetailsBadges
                  industry={jobDescription.industry}
                  location={jobDescription.location}
                  years_of_experience_required={
                    jobDescription.years_of_experience_required
                  }
                  years_of_experience_preferred={
                    jobDescription.years_of_experience_preferred
                  }
                  job_type={jobDescription.job_type}
                  salary_range={jobDescription.salary_range}
                />
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant="default"
                  onClick={getKeywords}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Generating keywords</span>
                      <LoadingSpinner />
                    </div>
                  ) : (
                    <div>Generate keywords</div>
                  )}
                </Button>
              </CardFooter>
            </div>
          </Card>

          <Accordion type="single" collapsible>
            <CompanyInfoSection
              company_information={jobDescription.company_information}
              culture={jobDescription.culture}
            />

            <JobDetailSection
              title="Responsibilities"
              content={jobDescription.responsibilities}
            />

            <QualificationsSection
              qualifications_required={jobDescription.qualifications_required}
              qualifications_preferred={jobDescription.qualifications_preferred}
            />

            {jobDescription.education &&
              jobDescription.education.length > 0 && (
                <EducationSection education={jobDescription.education} />
              )}

            <SkillsSection skills={jobDescription.skills} />

            <JobDetailSection
              title="Experience"
              content={jobDescription.experience}
            />

            <JobDetailSection
              title="Benefits"
              content={jobDescription.benefits}
            />

            {jobDescription.contact_information && (
              <ContactSection
                contact_information={jobDescription.contact_information}
              />
            )}

            <JobDetailSection
              title="Additional Requirements"
              content={jobDescription.additional_requirements}
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default BreakdownView;
