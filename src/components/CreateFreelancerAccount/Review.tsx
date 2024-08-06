import React, { useEffect, useRef } from "react";
import { useContext, useState } from "react";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import {
  CertificationForm,
  EducationForm,
  EmploymentForm,
  PortfolioForm,
  FreelancerProfileType,
} from "@/utils/types/freelancer-profile";
import Image from "next/image";

type Props = { data: { selectedTab: number; setSelectedTab: any } };

async function signUp(data: FreelancerProfileType) {
  localStorage.setItem("f-data", JSON.stringify(data));
  const { u_id } = JSON.parse(localStorage.getItem("user")!);

  const res = await fetch("/api/freelancer/register", {
    method: "POST",
    body: JSON.stringify({ ...data, u_id }),
  });

  console.log(res);
  const result = await res.json();
  console.log(result);

  if (result.status == "success") {
    return result;
  }
  return false;
}

export default function Review({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);

  const textareaRef = useRef(null);

  async function createFreelancerProfile() {
    const registerUser = await signUp(state);
    if (!registerUser) {
      setSelectedTab(10);
    }
    setSelectedTab(selectedTab + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      if (textareaRef.current) {
        //@ts-ignore
        textareaRef.current.style.height =
          //@ts-ignore
          textareaRef.current.scrollHeight + "px";
      }
    }, 100);
  });

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Profile Title
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {state.title}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <textarea
                ref={textareaRef}
                disabled
                className="-ml-3 w-full text-sm resize-none outline-none border-none focus:outline-none focus:border-none"
              >
                {state.description}
              </textarea>
            </dd>
          </div>

          {state.educations.length > 0 ? (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Education
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {state.educations.map((education: EducationForm, i: number) => {
                  return (
                    <div key={i}>
                      <p>
                        {education.degree} - {education.schoolName}
                      </p>
                      <p>
                        {education.from} - {education.to}
                      </p>
                    </div>
                  );
                })}
              </dd>
            </div>
          ) : (
            <></>
          )}

          {state.workHistory.length > 0 ? (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Work History
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {state.workHistory.map((work: EmploymentForm, i: number) => {
                  return (
                    <div key={i} className="mb-4">
                      <p>
                        {work.title} |{" "}
                        <span className="font-bold">{work.companyName}</span>
                      </p>
                      <p>
                        {work.city} , {work.country}
                      </p>
                    </div>
                  );
                })}
              </dd>
            </div>
          ) : (
            <></>
          )}

          {state.certifications.length > 0 ? (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Certifications
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {state.certifications.map(
                  (certification: CertificationForm, i: number) => {
                    return (
                      <div key={i} className="mb-4">
                        <p>
                          {certification.certificateName} |{" "}
                          <span className="font-bold">
                            {" "}
                            {certification.organization}
                          </span>
                        </p>
                        <p>{certification.date}</p>
                      </div>
                    );
                  }
                )}
              </dd>
            </div>
          ) : (
            <></>
          )}
          {state.portfolio.length > 0 ? (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Portfolios
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {state.portfolio.map((p: PortfolioForm, i: number) => {
                  return (
                    <div key={i}>
                      <Image src="" width={300} height={150} alt="" />
                      <p>{p.title}</p>
                    </div>
                  );
                })}
              </dd>
            </div>
          ) : (
            <></>
          )}

          {state.skillTags.length > 0 ? (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Skills
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {state.skillTags.map((skill: string, i: number) => {
                  return (
                    <div key={i}>
                      <p>{skill}</p>
                    </div>
                  );
                })}
              </dd>
            </div>
          ) : (
            <></>
          )}

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Social Links
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {state.socialLinks.twitter ? (
                <>
                  <span className="font-bold text-gray-500">Twitter</span>
                  <p className="mb-3"> {state.socialLinks.twitter}</p>
                </>
              ) : (
                <></>
              )}
              {state.socialLinks.github ? (
                <>
                  {" "}
                  <span className="font-bold text-gray-500">Github</span>
                  <p className="mb-3"> {state.socialLinks.github}</p>
                </>
              ) : (
                <></>
              )}

              {state.socialLinks.stackoverflow ? (
                <>
                  {" "}
                  <span className="font-bold text-gray-500">StackOverflow</span>
                  <p className="mb-3"> {state.socialLinks.stackoverflow}</p>
                </>
              ) : (
                <></>
              )}

              {state.socialLinks.discord ? (
                <>
                  <span className="font-bold text-gray-500">Discord</span>
                  <p className="mb-3"> {state.socialLinks.discord}</p>
                </>
              ) : (
                <></>
              )}

              {state.socialLinks.linkedin ? (
                <>
                  <span className="font-bold text-gray-500">Linkedin</span>
                  <p className="mb-3"> {state.socialLinks.linkedin}</p>
                </>
              ) : (
                <></>
              )}
            </dd>
          </div>
        </dl>
        <button
          onClick={createFreelancerProfile}
          className="primaryButton ml-auto mb-6 mt-3"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
