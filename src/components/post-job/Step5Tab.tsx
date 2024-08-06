import React from "react";
import { useContext, useState } from "react";
import { PostJobContext } from "@/utils/contexts/post-job";
import { useForm } from "react-hook-form";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

function RadioButton({
  title,
  subtitle,
  scope: { scope, setScope },
}: {
  title: string;
  subtitle: string;
  scope: { scope: string; setScope: any };
}) {
  const val = title.split(" ").join("-");
  return (
    <div>
      <div className="flex">
        <div className="flex items-center h-5">
          <input
            onChange={(e) => setScope(e.target.value)}
            id="helper-radio"
            aria-describedby="helper-radio-text"
            type="radio"
            checked={val == scope}
            value={val}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="ml-2 text-lg">
          <label
            htmlFor="helper-radio"
            className="font-medium text-gray-900 dark:text-gray-300"
          >
            {title}
          </label>
          <p
            id="helper-radio-text"
            className="text-sm font-normal text-gray-500 dark:text-gray-300"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Step5Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(PostJobContext);
  const [scope, setScope] = useState<
    "Long-Term" | "Intermediate" | "Short-Term"
  >("Short-Term");

  function prevTab() {
    setSelectedTab(3);
  }
  function nextTab() {
    setSelectedTab(5);
  }
  function submitData(e: any) {
    dispatch({ type: "SET_SCOPE", payload: scope });
    nextTab();
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-col space-y-5 mt-4 flex-1">
        <p className="text-lg">Scope</p>
        <h1 className="text-4xl font-semibold text-indigo-600">
          Estimate the scope of your project
        </h1>
        <h2 className="text-lg font-semibold">Expected timeframe</h2>

        <RadioButton
          scope={{ scope, setScope }}
          title="Short Term"
          subtitle="Quick and Straight-forward tasks (Less than 1 month)"
        />
        <RadioButton
          scope={{ scope, setScope }}
          title="Intermediate"
          subtitle="Project that takes upto 3 months"
        />
        <RadioButton
          scope={{ scope, setScope }}
          title="Long Term"
          subtitle="Large-scale projects (More than 3 months)"
        />

        <p className="text-lg">
          Consider the size of your project and the time it will take
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevTab} className="primaryButton">
          Back
        </button>
        <button onClick={submitData} className="primaryButton">
          Step 6 : Documents
        </button>
      </div>
    </div>
  );
}
