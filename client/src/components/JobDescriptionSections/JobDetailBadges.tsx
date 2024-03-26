import React from "react";
import { Badge } from "@/components/ui/badge";
import { JobType } from "@/lib/types"; // Import if you're using TypeScript for type checking

interface JobDetailsBadgesProps {
  salaryRange?: string;
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
  return (
    <div className="flex gap-2 mt-4">
      {salaryRange && <Badge variant="default">{salaryRange}</Badge>}
      {industry && <Badge variant="outline">{industry}</Badge>}
      {location && <Badge variant="secondary">{location}</Badge>}
      {yearsOfExperienceRequired && (
        <Badge variant="secondary">
          {yearsOfExperiencePreferred
            ? `${yearsOfExperienceRequired}-${yearsOfExperiencePreferred} years`
            : `${yearsOfExperienceRequired}+ years`}
        </Badge>
      )}
      {jobType && <Badge variant="default">{jobType}</Badge>}
    </div>
  );
};

export default JobDetailsBadges;
