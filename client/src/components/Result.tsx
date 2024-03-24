"use client";

import { JobDescription } from "@/lib/types";
import { NextPage } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import JobDescriptionSection from "./JobDescriptionSection";

interface ResultProps {
  jobDescription: JobDescription;
}

export const Result: NextPage<ResultProps> = ({ jobDescription }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 ">
      <p className="text-md font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Detailed Breakdown
      </p>

      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <Card className="p-6 gap-4">
            <h2 className="text-2xl font-bold">{jobDescription.title}</h2>
            <div className="flex gap-2 mt-4">
              {jobDescription.salary_range && (
                <Badge>{jobDescription.salary_range}</Badge>
              )}
              {jobDescription.industry && (
                <Badge variant={"outline"}>{jobDescription.industry}</Badge>
              )}
              {jobDescription.location && (
                <Badge>{jobDescription.location}</Badge>
              )}
              {jobDescription.years_of_experience && (
                <Badge variant={"secondary"}>
                  {jobDescription.years_of_experience}
                </Badge>
              )}
            </div>
          </Card>

          <Accordion type="single" collapsible>
            <JobDescriptionSection
              title="Company Information"
              content={jobDescription.company_information}
            />
            <JobDescriptionSection
              title="Education"
              content={jobDescription.education}
            />
            <JobDescriptionSection
              title="Responsibilities"
              content={jobDescription.responsibilities}
            />
            <JobDescriptionSection
              title="Qualifications"
              content={jobDescription.qualifications}
            />
            <JobDescriptionSection
              title="Experience"
              content={jobDescription.experience}
            />
            <JobDescriptionSection
              title="Benefits"
              content={jobDescription.benefits}
            />
            <JobDescriptionSection
              title="Skills"
              content={jobDescription.skills}
            />
            <JobDescriptionSection
              title="Additional Requirements"
              content={jobDescription.additional_requirements}
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Result;
