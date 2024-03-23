import { NextPage } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center text-pretty ">
      <section className="h-[100vh] w-full py-12 md:py-24 lg:py-32">
        <div className="container flex h-full items-center justify-center px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <p className="text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-4xl md:text-5xl lg:text-6xl/none">
                Simplify your job search in seconds.
              </p>
              <p className="mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
                Paste your job description and get a detailed breakdown of
                everything you need to know.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
