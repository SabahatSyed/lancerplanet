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

export default function Step1Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(PostJobContext);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  function nextTab() {
    setSelectedTab(1);
  }
  function submitData(e: any) {
    dispatch({ type: "SET_TITLE", payload: e.title });
    nextTab();
  }

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="min-h-[80vh] flex flex-col"
    >
      <div className="flex flex-col space-y-5 mt-4 flex-1">
        <p className="text-lg">Headline</p>
        <h1 className="text-4xl font-semibold text-indigo-600">
          Write a title for your project
        </h1>
        <p className="text-lg">
          This helps your job post stands out to the right candidates. <br />
          It{"'"}s the first thing they will see, so make it count!
        </p>
        <input
          {...register("title")}
          className="w-[800px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
          type="text"
          placeholder="Write a title for your project"
        />
        <h2 className="text-lg font-semibold">Example titles</h2>
        <p>
          • Build responsive WordPress site with booking/payment functionality
          <br />
          • Graphic designer needed to design ad creative for multiple campaigns
          <br />• Facebook ad specialist needed for product launch
        </p>
      </div>
      <button type="submit" className="primaryButton ml-auto mt-4">
        Step 2 : Skills
      </button>
    </form>
  );
}
