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

export default function Step6Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);

  const [tags, setTags] = useState<string[]>(state.skillTags);
  const [input, setInput] = useState("");

  function handleAddTag(e: any, action: string) {
    if (tags.length == 5) {
      return;
    }
    if (e.key == "Enter" || action == "ADD") {
      setTags([...tags, input]);
      setInput("");
    }
  }

  function prevTab() {
    setSelectedTab(4);
  }
  function nextTab() {
    setSelectedTab(6);
  }
  function submitData(e: any) {
    dispatch({ type: DISPATCH_ACTIONS.SET_SKILL_TAGS, payload: tags });
    nextTab();
  }
  function deleteTag(target: string) {
    const updated = tags.filter((tag) => tag != target);
    setTags(updated);
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-1">
        <div className=" flex flex-col space-y-4 mt-4 flex-1 basis-8/12">
          <p className="text-lg">
            Create Freelancer Profile{" "}
            <span className="text-indigo-700 font-bold">
              (Step {selectedTab + 1}/8)
            </span>
          </p>
          <h1 className="text-3xl font-semibold text-indigo-600">Skill Tags</h1>
          <p className="text-lg w-[95%] md:w[85%] lg:w-[75%]">
            Tag your Profile with buzz words that are relevant to the services
            you offer. Use all 5 tags to get found.
          </p>
          <p className="text-lg w-[95%] md:w[85%] lg:w-[75%]">
            Enter search term you feel your buyers will use when looking for
            your service (Upto 5)
          </p>
          <div className="flex items-center">
            <input
              className="w-[500px] px-4 py-3 rounded-l-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white"
              type="text"
              placeholder="Ex. Web Maintenance, Data Visualization"
              value={input}
              onKeyDown={(e) => handleAddTag(e, "")}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="secondaryButton rounded-none rounded-r-lg self-stretch"
              onClick={(e) => handleAddTag(e, "ADD")}
            >
              Add
            </button>
          </div>
          <div>
            <p className="text-gray-400 font-bold uppercase text-sm">
              Selected Tags:
            </p>
            <div className="flex space-x-3  mt-4 flex-wrap">
              {tags.map((tag: string, i: number) => {
                return (
                  <div
                    key={i}
                    className="bg-gray-200 p-3 mb-3 font-bold text-gray-600 flex items-center space-x-4"
                  >
                    <p>{tag}</p>
                    <button onClick={() => deleteTag(tag)}>❌</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex basis-4/12 justify-end items-center">
          <video muted autoPlay={true} loop={true}>
            <source src="/assets/videos/skills.mp4"></source>
          </video>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button onClick={prevTab} className="primaryButton">
          ← Back
        </button>
        <button onClick={submitData} className="primaryButton">
          Step 7 → Portfolio
        </button>
      </div>
    </div>
  );
}
