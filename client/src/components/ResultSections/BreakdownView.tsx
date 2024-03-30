"use client";

import { JobDescription, Keywords } from "@/lib/types";
import { NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import JobDetailSection from "@/components/JobDescriptionSections/JobDetailSection";
import ContactSection from "@/components/JobDescriptionSections/ContactSection";
import QualificationsSection from "../JobDescriptionSections/QualificationSection";
import SkillsSection from "../JobDescriptionSections/SkillSection";
import EducationSection from "../JobDescriptionSections/EducationSection";
import CompanyInfoSection from "../JobDescriptionSections/CompanySection";
import JobDetailsBadges from "../JobDescriptionSections/JobDetailBadges";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "../ui/use-toast";
import { LoadingSpinner } from "../icons/LoadingSpinner";
import { keywords } from "@/app/api/keywords";

interface BreakdownViewProps {
  jobDescription: JobDescription;
  setKeywordData: Dispatch<SetStateAction<Keywords | undefined>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export const BreakdownView: NextPage<BreakdownViewProps> = ({
  jobDescription,
  setKeywordData,
  setActiveTab,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getKeywords = async () => {
    console.log("Generating keywords from ", jobDescription.responsibilities);
    setIsLoading(true);

    toast({
      title: "Generating keywords...",
      description: "Please wait while we look for keywords.",
      variant: "default",
    });

    const payload = {
      job_description: JSON.stringify(jobDescription.responsibilities),
      model: "gpt-4-turbo-preview" as const,
    };

    try {
      const data = await keywords(payload);
      setKeywordData(data);
      setActiveTab("keywords");
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
                  yearsOfExperienceRequired={
                    jobDescription.years_of_experience_required
                  }
                  yearsOfExperiencePreferred={
                    jobDescription.years_of_experience_preferred
                  }
                  jobType={jobDescription.job_type}
                  salaryRange={jobDescription.salary_range}
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
              companyInformation={jobDescription.company_information}
              culture={jobDescription.culture}
            />

            <JobDetailSection
              title="Responsibilities"
              content={jobDescription.responsibilities}
            />

            <QualificationsSection
              requiredQualifications={jobDescription.qualifications_required}
              preferredQualifications={jobDescription.qualifications_preferred}
            />

            {jobDescription.education &&
              jobDescription.education.length > 0 && (
                <EducationSection
                  educationRequirements={jobDescription.education}
                />
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
                contactInfo={jobDescription.contact_information}
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
