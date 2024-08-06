import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { PostJobContext } from "@/utils/contexts/post-job";
import Link from "next/link";
type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function ReviewProject({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(PostJobContext);
  const textareaRef = useRef(null);
  const [validated, setValidated] = useState<any>({
    status: "",
    suggestion: "",
  });

  useEffect(() => {
    setTimeout(() => {
      if (textareaRef.current) {
        //@ts-ignore
        textareaRef.current.style.height =
          //@ts-ignore
          textareaRef.current.scrollHeight + "px";
      }
    }, 100);
  }, []);

  async function postJob() {
    // u_id, title, skillTags, description, budget, scope, document
    const { u_id } = JSON.parse(localStorage.getItem("user")!);
    const res = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify({ ...state, u_id }),
    });
    const data = await res.json();
    if (data.status == "success") {
      setSelectedTab(7);
    }
  }

  async function validateAndPostJob() {
    const res = await fetch("/api/ask/validateProject", {
      method: "POST",
      body: JSON.stringify({
        title: state.title,
        description: state.description,
      }),
    });
    const data: { data: { message: { content: string } } } = await res.json();
    const { status, suggestion } = JSON.parse(data.data.message.content);
    console.log(status, suggestion);
    if (status == "rejected") {
      //Job is rejected.. Show suggestions
      setValidated({ status, suggestion });
      return;
    } else {
      postJob();
    }
  }
  if (validated.status == "rejected") {
    return (
      <div className="flex flex-col w-[90%]  pt-8 mx-auto space-y-4">
        <h1 className="text-3xl text-gray-500 font-semibold">
          Oops⚠️ It seems like you project post is{" "}
          <span className="text-red-700">rejected</span>
        </h1>
        <a href="/post-job" className="primaryButton w-fit">
          Try again
        </a>

        <h2 className="text-xl font-bold">
          Here are some suggestions to improve your job post:
        </h2>
        <textarea
          value={validated.suggestion}
          disabled
          className="border-none -ml-2 outline-none disable resize-none h-[300px] text-lg"
        />
      </div>
    );
  }
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-col space-y-5 mt-4 flex-1">
        {/* <p className="text-lg">Headline</p> */}
        <h1 className="text-4xl font-semibold text-indigo-600">
          Review Your Project
        </h1>

        <div>
          <h2 className="text-lg font-semibold">Title</h2>
          <p className="p-2">{state.title}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Description</h2>
          <textarea
            ref={textareaRef}
            value={state.description}
            readOnly
            disabled
            className="border-none outline-none focus:ring-none focus:outline-none w-full overflow-y-hidden resize-none mt-2"
          ></textarea>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Budget</h2>
          <p className="p-2">${state.budget}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Project scope</h2>
          <p className="p-2">{state.scope}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Required Skills</h2>
          <div className="flex space-x-2 items-center">
            {state.skillTags.map((skill: string, i: number) => {
              return (
                <p key={i} className="px-3  py-2 bg-indigo-50 rounded-full">
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <button
        className="primaryButton ml-auto my-4"
        onClick={validateAndPostJob}
      >
        Post this Project
      </button>
    </div>
  );
}
