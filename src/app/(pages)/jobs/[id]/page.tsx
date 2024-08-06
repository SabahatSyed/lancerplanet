import Link from "next/link";
import React from "react";
import { MyURL } from "@/utils/constant";
export const dynamic = "force-dynamic";

async function fetchJobById(targetId: string) {
  const res = await fetch(
    MyURL(`/api/projects/fetch-project-by-id?target_id=${targetId}`),
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = await fetchJobById(id);

  const project = data[0];
  const skillTags = project.skills || "";
  // u_id: 1,
  // project_id: 1,
  // title: 'Posted from POSTMAN',
  // description: 'Hello world',
  // budget: 200,
  // skills: 'ML,AI,DB',
  // scope: 'Long-Term',
  // docs: 'docs:url',
  // date_posted: '5/23/2023',
  // time_posted: '1:29:55 AM'

  return (
    <div className="w-[80%] mx-auto">
      <div className="px-4 sm:px-0">
        <h3 className="text-xl mt-4 font-semibold leading-7 text-gray-900">
          Project Details
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Posted at {project.time_posted} , {project.date_posted}
        </p>
        <Link
          href={`/apply?project_id=${project.project_id}`}
          className="primaryButton mt-3 w-fit"
        >
          Apply
        </Link>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Project title
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {project.title}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <textarea
                value={project.description}
                disabled
                className="-ml-3 w-full min-h-[40vh] text-sm resize-none outline-none border-none focus:outline-none focus:border-none"
              ></textarea>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Scope
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {project.scope}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Estimated Budget
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              ${project.budget}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Skills
            </dt>
            <dd className="mt-1 flex items-center space-x-4 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {skillTags.length > 0
                ? skillTags.split(",").map((skill: string, i: number) => {
                    return (
                      <p
                        key={i}
                        className="px-3 w-fit py-1 bg-indigo-50 rounded-full text-xs font-bold"
                      >
                        {skill}
                      </p>
                    );
                  })
                : ""}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
