import React from "react";
import { useContext, useState } from "react";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step1Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);
  const [title, setTitle] = useState(state.title);

  function nextTab() {
    setSelectedTab(1);
  }
  function submitData(e: any) {
    dispatch({ type: DISPATCH_ACTIONS.SET_TITLE, payload: title });
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
            Write a title for your profile
          </h1>
          <p className="text-lg">
            Your <strong>title</strong> is the most important place to include
            keywords that buyers would likely use to search for an expert like
            you.
          </p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[500px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
            type="text"
            placeholder="Write a title for your profile"
          />
          <h2 className="text-lg font-bold ">Some examples are</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Full Stack Serverless Modern Application Developer</li>
            <li>MERN Stack and Nextjs Developer</li>
            <li>Extract Transfer Load Developer</li>
            <li>Machine Learning Engineer</li>
            <li>Data Analyst / Data Scientist</li>
          </ul>
        </div>

        <div
          className="flex basis-5/12 justify-end items-start
       "
        >
          <video muted autoPlay={true} loop={true}>
            <source src="/assets/videos/f-step1.mp4"></source>
          </video>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button onClick={submitData} className="primaryButton ml-auto">
          Step 2 → Avatar
        </button>
      </div>
    </div>
  );
}
