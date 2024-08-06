"use client";
import React from "react";
import { useContext, useState } from "react";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";
import Image from "next/image";
import UploadFile from "../UploadFile";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step2Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);
  const [photo, setPhoto] = useState("");
  function prevTab() {
    setSelectedTab(0);
  }

  function nextTab() {
    setSelectedTab(2);
  }
  function handleFile(e: any) {
    setPhoto(e.target.files[0]);
  }

  function submitData(e: any) {
    if (photo) {
      dispatch({ type: DISPATCH_ACTIONS.SET_AVATAR, payload: photo });
      nextTab();
    }
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-1">
        <div className=" flex flex-col space-y-4 mt-4 flex-1 basis-7/12">
          <p className="text-lg">
            Create Freelancer Profile{" "}
            <span className="text-indigo-700 font-bold">
              (Step {selectedTab + 1}/8)
            </span>
          </p>
          <h1 className="text-3xl font-semibold text-indigo-600">
            Upload your profile picture
          </h1>

          <h2 className="text-lg font-bold ">Instructions</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Make sure the image file you choose is in one of the allowed
              formats (JPEG, PNG, GIF).
            </li>
            <li>
              The recommended size for your profile picture is 400x400 pixels,
              but it can be any size up to 2MB.
            </li>
            <li>
              Once you have chosen your image file, click on the {"Upload"}{" "}
              button to upload it to your profile.
            </li>
            <li>
              If you need to change or update your profile picture, simply click
              on the {"Edit Profile"} button and follow the same steps.
            </li>
          </ul>
        </div>

        {/* <div className="flex basis-5/12 justify-end items-start">
          <video muted autoPlay={true} loop={true}>
            <source src="/assets/videos/f-step1.mp4"></source>
          </video>
        </div> */}

        <div className="flex items-center justify-center basis-5/12">
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center 
            justify-center w-64 h-64 border-2 border-indigo-500 overflow-hidden border-dashed rounded-full 
            ${
              photo
                ? ""
                : "cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            }`}
          >
            {photo ? (
              // <p className="text-center">Image Uploaded</p>
              // <p className="text-center">{photo}</p>
              <div className="w-full h-full object-cover object-top">
                <Image
                  src={photo}
                  alt=""
                  width="700"
                  height="700"
                  className=""
                />
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
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
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  {/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p> */}
                  <UploadFile setPhoto={setPhoto} />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFile}
                />
              </>
            )}
          </label>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button onClick={prevTab} className="primaryButton">
          ← Back
        </button>
        <button onClick={submitData} className="primaryButton">
          Step 3 → Description
        </button>
      </div>
    </div>
  );
}
