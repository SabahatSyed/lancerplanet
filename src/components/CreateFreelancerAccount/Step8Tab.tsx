import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { useForm } from "react-hook-form";
import { type SocialLinks } from "@/utils/types/freelancer-profile";
import { useContext } from "react";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step8Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);

  const { register, handleSubmit } = useForm<SocialLinks>({
    defaultValues: state.socialLinks,
  });

  function nextTab() {
    setSelectedTab(8);
  }
  function submitData(e: SocialLinks) {
    dispatch({ type: DISPATCH_ACTIONS.SET_SOCIAL_LINKS, payload: e });
    nextTab();
  }

  return (
    <form onSubmit={handleSubmit(submitData)} className="min-h-[80vh]">
      <div className=" flex">
        <div className=" flex flex-col space-y-4 mt-4 flex-1 basis-7/12">
          <p className="text-lg">
            Create Freelancer Profile{" "}
            <span className="text-indigo-700 font-bold">
              (Step {selectedTab + 1}/8)
            </span>
          </p>
          <h1 className="text-3xl font-semibold text-indigo-600">
            Link your social accounts
          </h1>
          <p className="text-lg">(Optional)</p>
          <div className="flex flex-col">
            <div className="flex items-end space-x-4">
              <SocialIcon url="https://twitter.com/jaketrent" />
              <input
                className="w-[500px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
                type="text"
                placeholder="Twitter URL"
                {...register("twitter")}
              />
            </div>

            <div className="flex items-end space-x-4">
              <SocialIcon url="https://github.com/jaketrent" />
              <input
                className="w-[500px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
                type="text"
                placeholder="GitHub URL"
                {...register("github")}
              />
            </div>

            <div className="flex items-end space-x-4">
              <SocialIcon url="https://stackoverflow.com/jaketrent" />
              <input
                className="w-[500px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
                type="text"
                placeholder="StackOverflow URL"
                {...register("stackoverflow")}
              />
            </div>

            <div className="flex items-end space-x-4">
              <SocialIcon url="https://linkedin.com/jaketrent" />
              <input
                className="w-[500px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
                type="text"
                placeholder="LinkedIn URL"
                {...register("linkedin")}
              />
            </div>

            <div className="flex items-end space-x-4">
              <SocialIcon url="https://discord.com/jaketrent" />
              <input
                className="w-[500px] px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:ring-gray-400 focus:bg-white mt-5"
                type="text"
                placeholder="Discord URL"
                {...register("discord")}
              />
            </div>
          </div>
        </div>

        <div className="flex basis-4/12 justify-end items-center">
          <Image
            src="/assets/social-media-3d.png"
            alt="img"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button type="submit" className="primaryButton ml-auto">
          Review
        </button>
      </div>
    </form>
  );
}
