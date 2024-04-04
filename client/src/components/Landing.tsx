import { NextPage } from "next";

const Landing: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-teal-500 dark:to-blue-600 mb-4">
        Supercharge your job search
      </h1>
      <p className="text-gray-600 dark:text-gray-100 text-lg mb-8">
        Job searching made simple in just three easy steps:
      </p>
      <ol className="list-decimal list-inside text-gray-600 dark:text-gray-100 text-lg mb-8">
        <li className="list-item">Paste any job description</li>
        <li className="list-item">
          Get a detailed breakdown and personalized recommendations
        </li>
        <li className="list-item">
          Optimize your resume and land your dream job!
        </li>
      </ol>
      <p className="text-gray-600 dark:text-gray-100 text-lg">
        With JD Interpreter, you&apos;ll gain valuable insights into job
        requirements, discover essential keywords to include in your resume, and
        receive tailored suggestions to make your application stand out. Take
        control of your job search today!
      </p>
    </>
  );
};

export default Landing;
