import React from "react";
import { useContext, useState } from "react";
import AddEducationModal from "./AddEducationModal";
import AddCertificationModal from "./AddCertificationModal";
import {
  type EducationForm,
  type CertificationForm,
} from "@/utils/types/freelancer-profile";
import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import { DISPATCH_ACTIONS } from "@/utils/reducers/create-f-profile";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function Step5Tab({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);

  const [certifications, setCertifications] = useState<CertificationForm[]>(
    state.certifications
  );
  const [educations, setEducations] = useState<EducationForm[]>(
    state.educations
  );

  const [educationModalOpen, setEducationModalOpen] = useState(false);
  const [certificationModalOpen, setCertificationModalOpen] = useState(false);

  function handleCertificationData(e: CertificationForm) {
    setCertifications([...certifications, e]);
    setCertificationModalOpen(false);
  }

  function handleEducationData(e: EducationForm) {
    setEducations([...educations, e]);
    setEducationModalOpen(false);
    console.log(e);
  }

  function prevTab() {
    setSelectedTab(3);
  }

  function nextTab() {
    setSelectedTab(5);
  }

  function submitData(e: any) {
    dispatch({ type: DISPATCH_ACTIONS.SET_EDUCATION, payload: educations });
    dispatch({
      type: DISPATCH_ACTIONS.SET_CERTIFICATION,
      payload: certifications,
    });
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
            Your educational background
          </h1>

          {certifications.length == 0 ? (
            <h2>No certificates found</h2>
          ) : (
            <div>
              {certifications.map((e: CertificationForm, i: number) => {
                return (
                  <div
                    key={i}
                    className="py-3 border-b  border-gray-400 flex flex-col space-y-2"
                  >
                    <p className="font-bold">
                      {e.certificateName} <span className="font-normal">|</span>{" "}
                      {e.organization}
                    </p>
                    <p className="text-gray-500">{e.date}</p>
                  </div>
                );
              })}
            </div>
          )}
          <div>
            <button
              onClick={() => setCertificationModalOpen(true)}
              className="primaryButton w-fit my-6 ring ring-indigo-600 hover:bg-white bg-white text-indigo-600"
            >
              Add Certification
            </button>
          </div>

          {educations.length == 0 ? (
            <h2>No Education found.</h2>
          ) : (
            <div>
              {educations.map((e: EducationForm, i: number) => {
                return (
                  <div
                    key={i}
                    className="py-3 border-b  border-gray-400 flex flex-col space-y-2"
                  >
                    <p className="font-bold">
                      {e.degree} <span className="font-normal">|</span>{" "}
                      {e.schoolName}
                    </p>

                    <p>
                      From <span className="text-gray-500">{e.from}</span>{" "}
                      <br /> To <span className="text-gray-500">{e.to}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          <div>
            <button
              onClick={() => setEducationModalOpen(true)}
              className="primaryButton w-fit my-6 ring ring-indigo-600 hover:bg-white bg-white text-indigo-600"
            >
              Add Education
            </button>
          </div>

          {/* <EmploymentHistoryModal
            data={{ modalOpen, setModalOpen, handleModalData }}
          /> */}
          <AddEducationModal
            data={{
              modalOpen: educationModalOpen,
              setModalOpen: setEducationModalOpen,
              handleModalData: handleEducationData,
            }}
          />

          <AddCertificationModal
            data={{
              modalOpen: certificationModalOpen,
              setModalOpen: setCertificationModalOpen,
              handleModalData: handleCertificationData,
            }}
          />
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button onClick={prevTab} className="primaryButton">
          ← Back
        </button>
        <button onClick={submitData} className="primaryButton">
          Step 5 → Skills
        </button>
      </div>
    </div>
  );
}
