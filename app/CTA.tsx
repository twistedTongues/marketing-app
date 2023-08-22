"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CTA = () => {
  const [isClosed, setIsClosed] = useState(false);
  const pathname = usePathname();
  const show_CTA = pathname === "/contact";

  return (
    !show_CTA && (
      <div className={`${isClosed && 'hidden'}`}>
      <div
        id="bottom-banner"
        tabIndex={-1}
        className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span>
              Get Contact With Us{" "}
              <Link
                href="/contact"
                className="flex items-center ml-0 text-sm font-medium text-blue-600 md:ml-1 md:inline-flex dark:text-blue-500 hover:underline"
              >
                Become a partner{" "}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  >
                  </path>
                </svg>
              </Link>
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsClosed(true)}
            data-dismiss-target="#bottom-banner"
            type="button"
            className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              >
              </path>
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
      </div>
    )
  );
};

export default CTA;
