import React from "react";
import { useContext, useState } from "react";
import EmploymentHistoryModal from "./EmploymentHistoryModal";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";
import { type EmploymentForm } from "@/utils/types/freelancer-profile";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step4Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);

  const [employments, setEmployments] = useState<EmploymentForm[]>(
    state.workHistory
  );

  const [modalOpen, setModalOpen] = useState(false);

  function handleModalData(e: EmploymentForm) {
    // Form Data is recieved in this event object...
    setEmployments([...employments, e]);
    console.log(e);
    setModalOpen(false);
  }

  function prevTab() {
    setSelectedTab(2);
  }

  function nextTab() {
    setSelectedTab(4);
  }

  function submitData(e: any) {
    dispatch({ type: DISPATCH_ACTIONS.SET_WORK_HISTORY, payload: employments });
    nextTab();
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="flex flex-1">
        <div className=" flex flex-col space-y-4 mt-4 flex-1 basis-7/12">
          <p className="text-lg">
            Create Freelancer Profile{" "}
            <span className="text-indigo-700 font-bold">
              (Step {selectedTab + 1}/8)
            </span>
          </p>
          <h1 className="text-3xl font-semibold text-indigo-600">
            Add your employment history
          </h1>
          {employments.length == 0 ? (
            <h2>No employment history yet.</h2>
          ) : (
            <div>
              {employments.map((e: EmploymentForm, i: number) => {
                return (
                  <div
                    key={i}
                    className="py-2 border-b border-gray-400 flex flex-col space-y-2"
                  >
                    <p className="font-bold">
                      {e.title} <span className="font-normal">at</span>{" "}
                      {e.companyName}
                    </p>
                    <p>
                      {e.city}, {e.country}
                    </p>
                    <textarea
                      className="-ml-3 resize-none border-none outline-none cursor-default focus:border-none focus:outline-none"
                      rows={2}
                      disabled
                    >
                      {e.description}
                    </textarea>
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
              Add Employment
            </button>
          </div>
          <EmploymentHistoryModal
            data={{ modalOpen, setModalOpen, handleModalData }}
          />
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button onClick={prevTab} className="primaryButton">
          ← Back
        </button>
        <button onClick={submitData} className="primaryButton">
          Step 5 → Education
        </button>
      </div>
    </div>
  );
}
