"use client";

import { NextPage } from "next";
import { Skeleton } from "./ui/skeleton";

const Loading: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-[50%]">
      <div className="w-full space-y-2">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export default Loading;
