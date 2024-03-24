"use client";

import { JobDescription } from "@/lib/types";
import { NextPage } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ResultProps {
  jobDescription: JobDescription;
}

export const Result: NextPage<ResultProps> = ({ jobDescription }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 h-full">
      <p className="text-md max-w-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
        Results
      </p>

      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <Card className="p-6 gap-4">
            <h2 className="text-2xl font-bold">{jobDescription.title}</h2>
            <div className="flex gap-2 mt-4">
              {jobDescription.salary_range && (
                <Badge>{jobDescription.salary_range}</Badge>
              )}
              <Badge variant={"outline"}>{jobDescription.industry}</Badge>
              <Badge>{jobDescription.location}</Badge>
              <Badge variant={"secondary"}>
                {jobDescription.years_of_experience}
              </Badge>
            </div>
          </Card>

          <Accordion type="single" collapsible>
            {jobDescription.company_information && (
              <AccordionItem value="company_information">
                <AccordionTrigger>Company Information</AccordionTrigger>
                <AccordionContent>
                  <p>{jobDescription.company_information}</p>
                </AccordionContent>
              </AccordionItem>
            )}

            {jobDescription.education && (
              <AccordionItem value="education">
                <AccordionTrigger>Education</AccordionTrigger>
                <AccordionContent>
                  <p>{jobDescription.education}</p>
                </AccordionContent>
              </AccordionItem>
            )}

            {jobDescription.responsibilities && (
              <AccordionItem value="responsibilities">
                <AccordionTrigger>Responsibilities</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {jobDescription.responsibilities.map((item) => (
                      <li key={item.index}>{item.description}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {jobDescription.qualifications && (
              <AccordionItem value="qualifications">
                <AccordionTrigger>Qualifications</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {jobDescription.qualifications.map((item) => (
                      <li key={item.index}>{item.description}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {jobDescription.experience && (
              <AccordionItem value="experience">
                <AccordionTrigger>Experience</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {jobDescription.experience.map((item) => (
                      <li key={item.index}>{item.description}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {jobDescription.benefits && (
              <AccordionItem value="benefits">
                <AccordionTrigger>Benefits</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {jobDescription.benefits.map((item) => (
                      <li key={item.index}>{item.description}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {jobDescription.skills && (
              <AccordionItem value="skills">
                <AccordionTrigger>Skills</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {jobDescription.skills.map((item) => (
                      <li key={item.index}>
                        <strong>{item.type}</strong>: {item.description}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {jobDescription.additional_requirements && (
              <AccordionItem value="additional_requirements">
                <AccordionTrigger>Additional Requirements</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {jobDescription.additional_requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Result;
