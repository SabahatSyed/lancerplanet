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

export default function Step4Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(PostJobContext);
  const [budget, setBudget] = useState("");

  function prevTab() {
    setSelectedTab(2);
  }
  function nextTab() {
    setSelectedTab(4);
  }
  function submitData(e: any) {
    dispatch({ type: "SET_BUDGET", payload: +budget });
    nextTab();
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-col space-y-5 mt-4 flex-1">
        <p className="text-lg font-semibold">Budget</p>
        <h1 className="text-4xl font-semibold text-indigo-600">
          Tell us about your budget
        </h1>
        <p className="text-lg">
          This will help us match you to talent within your range.
        </p>
        <input
          className="w-[500px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
          type="number"
          placeholder="Your maximum project budget"
          value={budget}
          onChange={(e) => setBudget(+e.target.value > 0 ? e.target.value : "")}
        />
        {/* <h2 className="text-lg font-semibold">Example titles</h2>
        <p>
          • Build responsive WordPress site with booking/payment functionality
          <br />
          • Graphic designer needed to design ad creative for multiple campaigns
          <br />• Facebook ad specialist needed for product launch
        </p> */}
      </div>
      <button onClick={submitData} className="primaryButton ml-auto">
        Step 5 : Scope
      </button>
    </div>
  );
}
