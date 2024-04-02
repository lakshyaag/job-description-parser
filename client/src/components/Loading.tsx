"use client";

import { NextPage } from "next";
import { Skeleton } from "./ui/skeleton";

const Loading: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl animate-pulse">
        Please wait...
      </p>
      <div className="w-full space-y-2">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
};

export default Loading;
