import React from "react";
import { Badge } from "@/components/ui/badge";
import { JobDescription, JobType, SalaryRange } from "@/lib/types"; // Import if you're using TypeScript for type checking

type JobDetailsBadgesProps = Pick<
  JobDescription,
  | "salary_range"
  | "industry"
  | "location"
  | "years_of_experience_required"
  | "years_of_experience_preferred"
  | "job_type"
>;

const JobDetailsBadges: React.FC<JobDetailsBadgesProps> = ({
  salary_range,
  industry,
  location,
  years_of_experience_required,
  years_of_experience_preferred,
  job_type,
}) => {
  const showSalaryRange = (salaryRange: SalaryRange) => {
    if (!salaryRange) return null;
    if (salaryRange.minimum && salaryRange.maximum) {
      return `${salaryRange.currency} ${salaryRange.minimum} - ${salaryRange.maximum}`;
    } else if (salaryRange.minimum) {
      return `From ${salaryRange.currency} ${salaryRange.minimum}`;
    } else if (salaryRange.maximum) {
      return `Up to ${salaryRange.currency} ${salaryRange.maximum}`;
    } else {
      return `Salary not specified`;
    }
  };

  const showYearsOfExperience = (
    yearsOfExperiencePreferred?: number | null,
    yearsOfExperienceRequired?: number
  ) => {
    if (yearsOfExperiencePreferred) {
      return `${yearsOfExperienceRequired}-${yearsOfExperiencePreferred} years`;
    } else {
      return `${yearsOfExperienceRequired}+ years`;
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      {salary_range && (
        <Badge variant="default">{showSalaryRange(salary_range)}</Badge>
      )}
      {industry && <Badge variant="outline">{industry}</Badge>}
      {location && <Badge variant="secondary">{location}</Badge>}
      {years_of_experience_required && (
        <Badge variant="default">
          {showYearsOfExperience(
            years_of_experience_preferred,
            years_of_experience_required
          )}
        </Badge>
      )}
      {job_type && <Badge variant="outline">{job_type}</Badge>}
    </div>
  );
};

export default JobDetailsBadges;
