import React from "react";
import { useContext } from "react";
import { PostJobContext } from "@/utils/contexts/post-job";
import { useForm } from "react-hook-form";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step6Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(PostJobContext);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  function nextTab() {
    setSelectedTab(6);
  }
  function submitData(e: any) {
    dispatch({ type: "SET_TITLE", payload: e.title });
    nextTab();
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-col space-y-5 mt-4 flex-1">
        <p className="text-lg">File</p>
        <h1 className="text-4xl font-semibold text-indigo-600">
          Upload any supporting document
        </h1>
        <p className="text-lg">(Optional)</p>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF, .docx, .ppt or .txt (MAX. 10mb)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <button onClick={nextTab} className="primaryButton ml-auto my-4">
        Review
      </button>
    </div>
  );
}
