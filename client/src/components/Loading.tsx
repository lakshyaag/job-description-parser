"use client";

import { NextPage } from "next";
import { Skeleton } from "./ui/skeleton";

const Loading: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 ">
      <div className="w-full space-y-2">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
};

export default Loading;
