import React from "react";
import { metadata } from "@/app/layout";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 mx-2 my-4 px-16 backdrop-blur-md">
      <section className="mx-auto flex flex-row items-center justify-between py-2">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex flex-row items-center">
              <span className="text-2xl font-bold">
                {metadata.title as React.ReactNode}
              </span>
            </div>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
