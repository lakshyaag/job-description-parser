import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";

const Home: NextPage = () => {
  return (
    <main className="flex w-full flex-col min-h-screen">
      <section className="h-1/5 w-full py-4">
        <div className="container mx-auto flex h-full items-center justify-center px-4 md:px-6 text-center gap-4">
          <div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl md:text-4xl">
              Simplify your job search in seconds.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Paste your job description and get a detailed breakdown of
              everything you need to know.
            </p>
          </div>
        </div>
      </section>

      <section className="h-4/5 w-full py-4">
        <div className="container mx-auto flex flex-col md:flex-row h-full justify-between items-start md:items-center px-4 md:px-6 gap-8">
          <div className="flex flex-col space-y-4 w-full md:w-1/2 h-full">
            <p className="text-md max-w-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
              Paste your job description here
            </p>
            <Textarea
              className="flex-1 w-full min-h-48 max-h-96 sm:min-h-64 sm:max-h-80"
              placeholder="Enter job description..."
            />
            <Button className="mt-4 self-center md:self-start">Submit</Button>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-1/2 h-full">
            <p className="text-md max-w-lg font-bold text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
              Results
            </p>
            {/* Placeholder for results or a component to display results */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
