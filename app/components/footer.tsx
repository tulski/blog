import React from "react";
import { ArrowIcon } from "app/components/icons";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto: me@tulski.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">me@tulski.com</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/tulski"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/tulski/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/to_tulo/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">instagram</p>
          </a>
        </li>
      </ul>
      <p className="mt-4 text-neutral-600 dark:text-neutral-300">
        Copyright © {new Date().getFullYear()}
        <span className="font-mono"> ---- </span>
        <a
          className="hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={`https://github.com/tulski/blog/commit/${process.env.NEXT_PUBLIC_COMMIT_SHA}`}
        >
          {process.env.NEXT_PUBLIC_COMMIT_SHA?.slice(0, 7)}
        </a>
      </p>
    </footer>
  );
}
