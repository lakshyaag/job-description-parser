"use client";

import { NextPage } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import JobDetailSection from "@/components/ResultSections/JobDescriptionSections/JobDetailSection";
import ContactSection from "@/components/ResultSections/JobDescriptionSections/ContactSection";
import QualificationsSection from "./JobDescriptionSections/QualificationSection";
import SkillsSection from "./JobDescriptionSections/SkillSection";
import EducationSection from "./JobDescriptionSections/EducationSection";
import CompanyInfoSection from "./JobDescriptionSections/CompanySection";
import JobDetailsBadges from "./JobDescriptionSections/JobDetailBadges";
import { useUserStore } from "@/components/state/userStore";

export const BreakdownView: NextPage = ({}) => {
  const { jobDescData } = useUserStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <Card className="gap-4 bg-white dark:bg-zinc-900 shadow-md rounded-lg">
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                  {jobDescData!.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <JobDetailsBadges
                  industry={jobDescData!.industry}
                  location={jobDescData!.location}
                  years_of_experience_required={
                    jobDescData!.years_of_experience_required
                  }
                  years_of_experience_preferred={
                    jobDescData!.years_of_experience_preferred
                  }
                  job_type={jobDescData!.job_type}
                  salary_range={jobDescData!.salary_range}
                />
              </CardContent>
            </div>
          </Card>

          <Accordion type="single" collapsible>
            <CompanyInfoSection
              company_information={jobDescData!.company_information}
              culture={jobDescData!.culture}
            />

            <JobDetailSection
              title="Responsibilities"
              content={jobDescData!.responsibilities}
            />

            <QualificationsSection
              qualifications_required={jobDescData!.qualifications_required}
              qualifications_preferred={jobDescData!.qualifications_preferred}
            />

            {jobDescData!.education && jobDescData!.education.length > 0 && (
              <EducationSection education={jobDescData!.education} />
            )}

            <SkillsSection skills={jobDescData!.skills} />

            <JobDetailSection
              title="Experience"
              content={jobDescData!.experience}
            />

            <JobDetailSection
              title="Benefits"
              content={jobDescData!.benefits}
            />

            {jobDescData!.contact_information && (
              <ContactSection
                contact_information={jobDescData!.contact_information}
              />
            )}

            <JobDetailSection
              title="Additional Requirements"
              content={jobDescData!.additional_requirements}
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default BreakdownView;
