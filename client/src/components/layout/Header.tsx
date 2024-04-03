import React, { ReactNode } from "react";
import { metadata } from "@/app/layout";
import Link from "next/link";
import Github from "../icons/GitHub";
import { ToggleTheme } from "../icons/ThemeToggle";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 px-4 py-3 mx-2 backdrop-blur-lg border-b border-gray-200">
      <section className="mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-full max-w-2xl">
          <Link href="/">
            <div className="flex items-center gap-2 text-xl font-bold md:text-2xl">
              <span role="img" aria-label="rocket">
                🚀
              </span>
              {metadata.title as ReactNode}
            </div>
          </Link>
          <nav className="flex gap-4 mx-4">
            <Link href="/">
              <Button variant="link">Home</Button>
            </Link>
            <Link href="/user">
              <Button variant="link">Dashboard</Button>
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {/* Desktop menu items */}
          <a
            title="View on GitHub"
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
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger>
              <Button variant="ghost" size="sm">
                <HamburgerMenuIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-4">
              <div className="flex flex-col space-y-4 items-center">
                {/* Mobile menu items */}
                <a
                  title="View on GitHub"
                  className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
                  href="https://github.com/lakshyaag/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
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
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </header>
  );
};

export default Header;
