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

export default function Step3Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(PostJobContext);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  function prevTab() {
    setSelectedTab(1);
  }
  function nextTab() {
    setSelectedTab(3);
  }
  function submitData(e: any) {
    dispatch({ type: "SET_DESCRIPTION", payload: e.description });
    nextTab();
  }

  return (
    <form
      className="min-h-[80vh] flex flex-col"
      onSubmit={handleSubmit(submitData)}
    >
      <div className="flex flex-col space-y-5 mt-4 flex-1">
        <p className="text-lg">Description</p>
        <h1 className="text-4xl font-semibold text-indigo-600">
          Write a detailed description of your project
        </h1>
        <h2 className="text-lg font-semibold">People are looking for</h2>
        <p>
          • Clear expectations about your task or deliverables
          <br />
          • The skills required for your project.
          <br />• Details about how you and your team like to work
        </p>
        <textarea
          {...register("description", { required: true })}
          className={`w-[800px] min-h-[300px] px-4 py-3 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-lg focus:outline-none ${
            errors.description
              ? " focus:ring-red-800 ring-red-800 border-red-800 "
              : " focus:ring-gray-400 border-gray-200 "
          }   focus:bg-white mt-5`}
          placeholder="Write a description for your project"
        />
        {errors.description && errors.description.type == "required" && (
          <p className="text-red-700 text-xs">Description is required</p>
        )}
      </div>
      <div className="flex justify-between my-4">
        <button onClick={prevTab} className="primaryButton">
          Back
        </button>
        <button type="submit" className="primaryButton">
          Step 4 : Budget
        </button>
      </div>
    </form>
  );
}
