import React from "react";
import { Badge } from "@/components/ui/badge";
import { JobType, SalaryRange } from "@/lib/types"; // Import if you're using TypeScript for type checking

interface JobDetailsBadgesProps {
  salaryRange?: SalaryRange;
  industry?: string;
  location?: string;
  yearsOfExperienceRequired?: number;
  yearsOfExperiencePreferred?: number;
  jobType?: JobType; // Use the appropriate type or remove if not using TypeScript
}

const JobDetailsBadges: React.FC<JobDetailsBadgesProps> = ({
  salaryRange,
  industry,
  location,
  yearsOfExperienceRequired,
  yearsOfExperiencePreferred,
  jobType,
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
    yearsOfExperiencePreferred?: number,
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
      {salaryRange && (
        <Badge variant="default">{showSalaryRange(salaryRange)}</Badge>
      )}
      {industry && <Badge variant="outline">{industry}</Badge>}
      {location && <Badge variant="secondary">{location}</Badge>}
      {yearsOfExperienceRequired && (
        <Badge variant="secondary">
          {showYearsOfExperience(
            yearsOfExperiencePreferred,
            yearsOfExperienceRequired
          )}
        </Badge>
      )}
      {jobType && <Badge variant="default">{jobType}</Badge>}
    </div>
  );
};

export default JobDetailsBadges;
