import React from "react";
import { metadata } from "@/app/layout";
import Link from "next/link";
import Github from "../GitHub";

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 mx-2 my-4 px-16 py-4 backdrop-blur-lg">
      <section className="mx-auto gap-4 flex flex-col items-center justify-between py-2 md:flex-row">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex flex-row items-center">
              <span className="text-2xl font-bold">
                {metadata.title as React.ReactNode}
              </span>
            </div>
          </Link>
        </div>
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
          href="https://github.com/lakshyaag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>View on GitHub</p>
        </a>
      </section>
    </header>
  );
};

export default Header;
