"use client";

import { JobDescription } from "@/lib/types";
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

interface BreakdownViewProps {
  jobDescription: JobDescription;
}

export const BreakdownView: NextPage<BreakdownViewProps> = ({
  jobDescription,
}) => {
  return (
    <div className="flex flex-col gap-4">
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
