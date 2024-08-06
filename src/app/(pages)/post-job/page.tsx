"use client";
import MessageModal from "@/components/MessageModal";
import MultistepFormTabsContainer from "@/components/post-job/MultistepFormTabsContainer";
import Stepper from "@/components/post-job/Stepper";
import { type ProjectFormData } from "@/utils/types/post-job";
import React, { useState, useEffect } from "react";
import PostJobContextProvider from "@/utils/contexts/PostJobContextProvider";
import ReviewProject from "@/components/post-job/ReviewProject";
import JobPostedSuccess from "@/components/post-job/JobPostedSuccess";
type Props = {};

const formData: ProjectFormData = {
  title: "Need a Nextjs Developer",
  skillTags: ["NextJS", "HTML", "CSS", "Typescript"],
  description: "Hi! I need a nextjs developer",
  budget: 100,
  scope: "Intermediate",
  document: "https://www.nextjs.com",
};

async function authenticateUser() {
  const { email } = JSON.parse(localStorage.getItem("user")!);
  const res = await fetch(`/api/user?email=${email}`);
  const user = await res.json();
  if (user.status == "success") {
    return user.data;
  }
  return false;
}

export default function Page({}: Props) {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async function () {
      const res = await authenticateUser();
      setUser(res);
    })();
  }, []);
  if (user == null) {
    <h1>Loading...</h1>;
  }
  if (selectedTab == 7) {
    return <JobPostedSuccess />;
  }
  return (
    <PostJobContextProvider>
      <div className="flex justify-center mt-12">
        {/* <MessageModal show={{ showMessage, setShowMessage }} /> */}
        <div
          className={`w-[80%] ${
            showMessage ? "blur" : "opacity-100"
          }  flex flex-col space-y-4`}
        >
          <div className="w-full flex flex-col mx-auto">
            <Stepper selectedTab={selectedTab} />
          </div>
          {selectedTab < 6 ? (
            <MultistepFormTabsContainer
              data={{ selectedTab, setSelectedTab }}
            />
          ) : (
            <ReviewProject data={{ selectedTab, setSelectedTab }} />
          )}
        </div>
      </div>
    </PostJobContextProvider>
  );
}
