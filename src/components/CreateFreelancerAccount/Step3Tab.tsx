import React, { useState } from "react";
import { useContext } from "react";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step3Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);
  const [description, setDescription] = useState(state.description);

  function prevTab() {
    setSelectedTab(1);
  }
  function nextTab() {
    setSelectedTab(3);
  }
  function submitData(e: any) {
    dispatch({ type: DISPATCH_ACTIONS.SET_DESCRIPTION, payload: description });
    nextTab();
  }

  return (
    <div className="min-h-[80vh]">
      <div className=" flex">
        <div className=" flex flex-col space-y-4 mt-4 flex-1 basis-7/12">
          <p className="text-lg">
            Create Freelancer Profile{" "}
            <span className="text-indigo-700 font-bold">
              (Step {selectedTab + 1}/8)
            </span>
          </p>
          <h1 className="text-3xl font-semibold text-indigo-600">
            Briefly Describe Yourself
          </h1>
          <p className="text-lg w-[95%] md:w[85%] lg:w-[75%]">
            Your profile <strong>description</strong> is the most important item
            which gives clear idea to your client about your expertise and
            deliverables.
          </p>
          <textarea
            className={`w-[800px] min-h-[300px] px-4 py-3 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 border-gray-200 focus:bg-white mt-5`}
            placeholder="Write a description for your project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="text-lg w-[95%] md:w[85%] lg:w-[75%]">
            Use this space to show clients you have the skills and experience
            theyre looking for.
          </p>
          <ul className="list-disc list-inside">
            <li>Describe your strengths and skills </li>
            <li>Highlight projects, accomplishments and education</li>
            <li>Keep it short and make sure its error-free </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button onClick={prevTab} className="primaryButton">
          ← Back
        </button>
        <button onClick={submitData} className="primaryButton">
          Step 4 → Employment
        </button>
      </div>
    </div>
  );
}
