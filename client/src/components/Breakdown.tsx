"use client";

import { JobDescription } from "@/lib/types";
import { NextPage } from "next";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import JobDescriptionSection from "@/components/JobDescriptionSections/JobDetailSection";
import ContactSection from "@/components/JobDescriptionSections/ContactSection";
import QualificationsSection from "./JobDescriptionSections/QualificationSection";
import SkillsSection from "./JobDescriptionSections/SkillSection";
import EducationSection from "./JobDescriptionSections/EducationSection";
import CompanyInfoSection from "./JobDescriptionSections/CompanySection";
import JobDetailsBadges from "./JobDescriptionSections/JobDetailBadges";

interface BreakdownProps {
  jobDescription: JobDescription;
}

export const Breakdown: NextPage<BreakdownProps> = ({ jobDescription }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Detailed Breakdown
      </p>

      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <Card className="p-6 gap-6 bg-white dark:bg-zinc-900 shadow-md rounded-lg">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {jobDescription.title}
              </h2>
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
            </div>
          </Card>

          <Accordion type="single" collapsible>
            <CompanyInfoSection
              companyInformation={jobDescription.company_information}
              culture={jobDescription.culture}
            />

            <JobDescriptionSection
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

            <JobDescriptionSection
              title="Experience"
              content={jobDescription.experience}
            />

            <JobDescriptionSection
              title="Benefits"
              content={jobDescription.benefits}
            />

            {jobDescription.contact_information && (
              <ContactSection
                contactInfo={jobDescription.contact_information}
              />
            )}

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

export default Breakdown;
