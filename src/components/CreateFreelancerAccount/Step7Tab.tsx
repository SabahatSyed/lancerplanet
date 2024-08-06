import React from "react";
import { useContext, useState } from "react";
import { type PortfolioForm } from "@/utils/types/freelancer-profile";
import AddPortfolioModal from "./AddPortfolioModal";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";
import Link from "next/link";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step7Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);

  const [portfolios, setportfolios] = useState<PortfolioForm[]>(
    state.portfolio
  );

  const [modalOpen, setModalOpen] = useState(false);

  function handleModalData(e: PortfolioForm) {
    // Form Data is recieved in this event object...
    setportfolios([...portfolios, e]);
    console.log(e);
    setModalOpen(false);
  }

  function prevTab() {
    setSelectedTab(5);
  }

  function nextTab() {
    setSelectedTab(7);
  }

  function submitData(e: any) {
    dispatch({ type: DISPATCH_ACTIONS.SET_PORTFOLIO, payload: portfolios });
    nextTab();
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-1">
        <div className=" flex flex-col space-y-4 mt-4 flex-1 basis-8/12">
          <p className="text-lg">
            Create Freelancer Profile{" "}
            <span className="text-indigo-700 font-bold">
              (Step {selectedTab + 1}/8)
            </span>
          </p>
          <h1 className="text-3xl font-semibold text-indigo-600">
            Showcase your portfolio
          </h1>
          {portfolios.length == 0 ? (
            <h2 className="text-gray-700 font-bold">No project found.</h2>
          ) : (
            <div>
              {portfolios.map((e: PortfolioForm, i: number) => {
                return (
                  <div
                    key={i}
                    className="py-3 border-b  border-gray-400 flex flex-col space-y-2"
                  >
                    <p className="font-bold">{e.title}</p>
                    <Link href={e.url ? e.url : ""} className="text-blue-300">
                      {e.url}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          <div>
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="primaryButton w-fit my-6 ring ring-indigo-600 hover:bg-white bg-white text-indigo-600"
            >
              Add Project
            </button>
          </div>
          <AddPortfolioModal
            data={{ modalOpen, setModalOpen, handleModalData }}
          />
        </div>
        <div className="flex basis-4/12 justify-end items-start">
          <video muted autoPlay={true} loop={true}>
            <source src="/assets/videos/portfolios.mp4"></source>
          </video>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button onClick={prevTab} className="primaryButton">
          ← Back
        </button>
        <button onClick={submitData} className="primaryButton">
          Step 8 → Links
        </button>
      </div>
    </div>
  );
}
