"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { NextPage } from "next";
import Image from "next/image";

const Dashboard: NextPage = () => {
  const { user } = useUser();

  return (
    <main className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] --font-sans">
      <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-md p-8">
          <CardHeader className="flex flex-col items-center gap-8">
            <Avatar>
              <AvatarImage
                src={user?.imageUrl}
                alt={user?.fullName || "User Profile Picture"}
              />
            </Avatar>
            <CardTitle className="text-xl">{user?.fullName}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;
