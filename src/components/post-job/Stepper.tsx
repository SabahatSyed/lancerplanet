import React from "react";

type Props = {
  selectedTab: number;
};

function Tick() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

export default function Stepper({ selectedTab }: Props) {
  return (
    <ol className="flex items-center w-full mx-auto font-bold text-gray-400">
      <li
        className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b ${
          selectedTab >= 1 ? "after:border-blue-100" : "after:border-gray-100"
        } after:border-4 after:inline-block dark:after:border-blue-800`}
      >
        <span
          className={`flex mx-2 items-center justify-center w-10 h-10 ${
            selectedTab >= 1 ? "bg-blue-100" : "bg-gray-100"
          } ${
            selectedTab == 0
              ? "ring-4 text-blue-600 ring-indigo-500 ring-offset-4 ring-offset-white"
              : ""
          } rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0`}
        >
          {selectedTab >= 1 ? <Tick /> : 1}
        </span>
      </li>
      <li
        className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:${
          selectedTab >= 2 ? "border-blue-100" : "border-gray-100"
        } after:border-4 after:inline-block dark:after:border-gray-700`}
      >
        <span
          className={`flex mx-2 items-center justify-center w-10 h-10 ${
            selectedTab >= 2 ? "bg-blue-100" : "bg-gray-100"
          } ${
            selectedTab == 1
              ? "ring-4 text-blue-600 ring-indigo-500 ring-offset-4 ring-offset-white"
              : ""
          } rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0`}
        >
          {selectedTab >= 2 ? <Tick /> : 2}
        </span>
      </li>

      <li
        className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:${
          selectedTab >= 3 ? "border-blue-100" : "border-gray-100"
        } after:border-4 after:inline-block dark:after:border-gray-700`}
      >
        <span
          className={`flex mx-2 items-center justify-center w-10 h-10 ${
            selectedTab >= 3 ? "bg-blue-100" : "bg-gray-100"
          } ${
            selectedTab == 2
              ? "ring-4 text-blue-600 ring-indigo-500 ring-offset-4 ring-offset-white"
              : ""
          } rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0`}
        >
          {selectedTab >= 3 ? <Tick /> : 3}
        </span>
      </li>

      <li
        className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:${
          selectedTab >= 4 ? "border-blue-100" : "border-gray-100"
        } after:border-4 after:inline-block dark:after:border-gray-700`}
      >
        <span
          className={`flex mx-2 items-center justify-center w-10 h-10 ${
            selectedTab >= 4 ? "bg-blue-100" : "bg-gray-100"
          } ${
            selectedTab == 3
              ? "ring-4 text-blue-600 ring-indigo-500 ring-offset-4 ring-offset-white"
              : ""
          } rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0`}
        >
          {selectedTab >= 4 ? <Tick /> : 4}
        </span>
      </li>

      <li
        className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:${
          selectedTab >= 5 ? "border-blue-100" : "border-gray-100"
        } after:border-4 after:inline-block dark:after:border-gray-700`}
      >
        <span
          className={`flex mx-2 items-center justify-center w-10 h-10 ${
            selectedTab >= 5 ? "bg-blue-100" : "bg-gray-100"
          } ${
            selectedTab == 4
              ? "ring-4 text-blue-600 ring-indigo-500 ring-offset-4 ring-offset-white"
              : ""
          } rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0`}
        >
          {selectedTab >= 5 ? <Tick /> : 5}
        </span>
      </li>

      <li className="flex items-center">
        <span
          className={`flex mx-2 items-center justify-center w-10 h-10 ${
            selectedTab >= 6 ? "bg-blue-100" : "bg-gray-100"
          } ${
            selectedTab == 5
              ? "ring-4 text-blue-600 text- ring-indigo-500 ring-offset-4 ring-offset-white"
              : ""
          } rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0`}
        >
          {selectedTab >= 6 ? <Tick /> : 6}
        </span>
      </li>
    </ol>
  );
}
