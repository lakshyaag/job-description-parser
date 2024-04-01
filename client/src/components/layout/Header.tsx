import React from "react";
import { metadata } from "@/app/layout";
import Link from "next/link";
import Github from "../icons/GitHub";
import { ToggleTheme } from "../icons/ThemeToggle";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 mx-2 my-2 px-16 py-2 backdrop-blur-lg border-b border-gray-200">
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
        <div className="flex items-center space-x-4">
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
            href="https://github.com/lakshyaag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>View on GitHub</p>
          </a>
          <ToggleTheme />
          <SignedIn>
            <UserButton afterSignOutUrl={"/"} />
          </SignedIn>
          <SignedOut>
            <SignInButton mode={"modal"}>
              <Button>Sign in</Button>
            </SignInButton>
            <SignUpButton mode={"modal"}>
              <Button variant={"outline"}>Sign up</Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </section>
    </header>
  );
};

export default Header;
