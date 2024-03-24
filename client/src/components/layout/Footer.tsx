import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between border-t border-gray-600 p-4 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Lakshya Agarwal. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/lakshyaag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <GitHubLogoIcon width={20} height={20} />
        </Link>
        <Link
          href="https://lakshyaag.com"
          target="_blank"
          className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <GlobeIcon width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
