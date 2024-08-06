"use client";
import MessageModal from "@/components/MessageModal";
import MultistepFormTabsContainer from "@/components/post-job/MultistepFormTabsContainer";
import Stepper from "@/components/CreateFreelancerAccount/Stepper";
import CreateFreelanceAccMultiStepForm from "@/components/CreateFreelancerAccount/CreateFreelanceAccMultiStepForm";
import CreateFProfileProvider from "@/utils/contexts/CreateFProfileProvider";

import React, { useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <CreateFProfileProvider>
      <div className="flex justify-center">
        {/* <MessageModal show={{ showMessage, setShowMessage }} /> */}
        <div
          className={`w-[80%] ${
            showMessage ? "blur" : "opacity-100"
          }  flex flex-col space-y-4`}
        >
          <div className="w-full flex flex-col mx-auto">
            {selectedTab < 8 ? <Stepper selectedTab={selectedTab} /> : <></>}
          </div>
          <CreateFreelanceAccMultiStepForm
            data={{ selectedTab, setSelectedTab }}
          />
          {/* {selectedTab < 6 ? (
            <MultistepFormTabsContainer
              data={{ selectedTab, setSelectedTab }}
            />
          ) : (
            <ReviewProject />
          )} */}
        </div>
      </div>
    </CreateFProfileProvider>
  );
}
