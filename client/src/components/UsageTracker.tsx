import { getUsage } from "@/app/api/usage";
import { LIMITS } from "@/lib/utils";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useUserStore } from "./state/userStore";
import { Button } from "./ui/button";

interface UsageTrackerProps {
  model: string;
  isLoading: boolean;
}

const UsageTracker: NextPage<UsageTrackerProps> = ({ model, isLoading }) => {
  const { usage, setUsage } = useUserStore();

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const usageData = await getUsage(model);

        if (usageData.length > 0) {
          setUsage(usageData[0].jd_usage);
        } else {
          setUsage(0);
        }
      } catch (error) {
        console.error("Failed to fetch usage data:", error);
      }
    };

    fetchUsage();
  }, [model, isLoading, setUsage]);
  return (
    <div className="text-sm dark:text-gray-200 text-gray-800 font-bold mt-8">
      <Button type="button" variant={"link"} className="w-full">
        Interpreter Usage: {usage} / {LIMITS[model as keyof typeof LIMITS]}
      </Button>
    </div>
  );
};

export default UsageTracker;
