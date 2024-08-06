import React, { useState } from "react";
import { useContext } from "react";
import { PostJobContext } from "@/utils/contexts/post-job";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step2Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const [skills, setSkills] = useState<string[]>([]);
  const [input, setInput] = useState<any>("");

  const { state, dispatch } = useContext(PostJobContext);

  function prevTab() {
    setSelectedTab(0);
  }
  function nextTab() {
    setSelectedTab(2);
  }
  function submitData(e: any) {
    dispatch({ type: "SET_SKILLTAGS", payload: skills });
    nextTab();
  }

  function handleKeyDown(e: any) {
    if (e.key == "Enter") {
      const updated = [...skills, input];
      setSkills(updated);
      setInput("");
    }
  }
  function handleTextChange(e: any) {
    setInput(e.target.value);
  }
  function deleteSkill(skill: string) {
    const updated = skills.filter((s) => s != skill);
    setSkills(updated);
  }
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-col space-y-5 mt-4 flex-1">
        <p className="text-lg">Skills</p>
        <h1 className="text-4xl font-semibold text-indigo-600">
          What are the main skills required for your project?
        </h1>
        <p className="text-lg">For the best result, add 3-5 skills⭐</p>
        <input
          className="w-[800px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
          type="text"
          placeholder="Search or add up to 5 skills"
          value={input}
          onKeyDown={handleKeyDown}
          onChange={handleTextChange}
        />
        <h2 className="text-lg font-semibold">Added skills</h2>
        <div className="flex space-x-2 items-center">
          {skills.map((skill: string, i: number) => {
            return (
              <div
                key={i}
                className="bg-gray-200 my-2 p-3 mb-3 font-bold text-gray-600 flex items-center space-x-4"
              >
                <p>{skill}</p>
                <button onClick={() => deleteSkill(skill)}>❌</button>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={submitData} className="primaryButton ml-auto">
        Step 3 : Description
      </button>
    </div>
  );
}
