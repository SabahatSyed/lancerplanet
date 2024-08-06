"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
type Props = {};
type FormType = {
  budget: number;
  coverLetter: string;
  timeFrame: string;
};

export default function ProposalForm({}: Props) {
  const [failed, setFailed] = useState(false);
  const { register, handleSubmit } = useForm<FormType>();

  async function submitProposal(e: FormType) {
    // const { u_id } = JSON.parse(localStorage.getItem("user")!);
    // const res = await fetch("/api/user/info", {
    //   method: "POST",
    //   body: JSON.stringify({ ...e, u_id }),
    // });
    // const data = await res.json();
    // if (data.status == "success") {
    //   router.push("/jobs");
    // } else {
    //   setFailed(true);
    // }
  }

  return (
    <form className="w-[80%] mx-auto" onSubmit={handleSubmit(submitProposal)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Submit your proposal
          </h2>
          <p className="mt-1   leading-6 text-gray-600">
            This information will only be displayed to the client who posted
            this job.
          </p>
          {failed ? (
            <p className="mt-1 text-red-700  leading-6">
              Failed to save information. Try again later!
            </p>
          ) : (
            <></>
          )}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block   font-medium leading-6 text-gray-900"
              >
                {"What is the rate you'd like to bid for this job?"}
              </label>
              <div className="mt-2">
                <input
                  {...register("budget")}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block   font-medium leading-6 text-gray-900"
              >
                Cover letter
              </label>
              <div className="mt-2">
                <textarea
                  {...register("coverLetter")}
                  className="block min-h-[300px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="postal-code"
                className="block   font-medium leading-6 text-gray-900"
              >
                Time frame to complete this project (days/hours)
              </label>
              <div className="mt-2">
                <input
                  {...register("timeFrame")}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p className="mt-1   leading-6 text-gray-600">
            We will always let you know about client response and your hiring
            status.
          </p>

          <div className="relative flex gap-x-3 mt-2">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <p className="text-gray-500">
                I agree to the terms and conditions of Lancer Planet
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 flex items-center justify-end gap-x-6">
          <button type="submit" className="primaryButton">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
