"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
type Props = {};
type FormType = {
  first_name: string;
  last_name: string;
  country: string;
  phoneNumber: string;
};

export default function Page({}: Props) {
  const [failed, setFailed] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormType>();
  async function saveUserInfo(e: FormType) {
    const { u_id } = JSON.parse(localStorage.getItem("user")!);
    const res = await fetch("/api/user/info", {
      method: "POST",
      body: JSON.stringify({ ...e, u_id }),
    });
    const data = await res.json();
    if (data.status == "success") {
      router.push("/jobs");
    } else {
      setFailed(true);
    }
  }
  return (
    <form className="w-[80%] mx-auto" onSubmit={handleSubmit(saveUserInfo)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1   leading-6 text-gray-600">
            This information will be displayed to the users on Lancer Planet
          </p>
          {failed ? (
            <p className="mt-1 text-red-700  leading-6">
              Failed to save information. Try again later!
            </p>
          ) : (
            <></>
          )}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block   font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  {...register("first_name")}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block   font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  {...register("last_name")}
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block   font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block   font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  {...register("phoneNumber")}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block   font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <input
                  {...register("country")}
                  type="text"
                  name="country"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="postal-code"
                className="block   font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
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
            We will always let you know about important changes, but you pick
            what else you want to hear about.
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
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
