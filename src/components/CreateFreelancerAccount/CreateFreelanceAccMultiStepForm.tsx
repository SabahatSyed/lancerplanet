import React, { useContext } from "react";
import Step1Tab from "./Step1Tab";
import Step2Tab from "./Step2Tab";
import Step3Tab from "./Step3Tab";
import Step4Tab from "./Step4Tab";
import Step5Tab from "./Step5Tab";
import Step6Tab from "./Step6Tab";
import Step7Tab from "./Step7Tab";
import Step8Tab from "./Step8Tab";

import { CreateFProfileContext } from "@/utils/contexts/create-freelance-profile";
import Review from "./Review";
import ProfileCreatedSuccess from "./ProfileCreatedSuccess";
import ProfileCreatedFailed from "./ProfileCreatedFailed";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function CreateFreelanceAccMultiStepForm({
  data: { selectedTab, setSelectedTab },
}: Props) {
  const { state, dispatch } = useContext(CreateFProfileContext);
  //If selected tab is 8 - Freelancer profile review created.
  if (selectedTab == 8) {
    return <Review data={{ selectedTab, setSelectedTab }} />;
  }
  //If selected tab is 9 - Freelancer profile created.
  else if (selectedTab == 9) {
    return <ProfileCreatedSuccess />;
  }
  //If selected tab is 10 - Freelancer profile creation failed.
  else if (selectedTab == 10) {
    return <ProfileCreatedFailed data={{ selectedTab, setSelectedTab }} />;
  }
  return (
    <div>
      {selectedTab == 0 && <Step1Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 1 && <Step2Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 2 && <Step3Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 3 && <Step4Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 4 && <Step5Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 5 && <Step6Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 6 && <Step7Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 7 && <Step8Tab data={{ selectedTab, setSelectedTab }} />}
    </div>
  );
}
