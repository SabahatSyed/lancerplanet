import React from "react";

//  Tabs
import Step1Tab from "./Step1Tab";
import Step2Tab from "./Step2Tab";
import Step3Tab from "./Step3Tab";
import Step4Tab from "./Step4Tab";
import Step5Tab from "./Step5Tab";
import Step6Tab from "./Step6Tab";

type Props = {
  data: {
    selectedTab: number;
    setSelectedTab: any;
  };
};

export default function MultistepFormTabsContainer({
  data: { selectedTab, setSelectedTab },
}: Props) {
  return (
    <div>
      {selectedTab == 0 && <Step1Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 1 && <Step2Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 2 && <Step3Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 3 && <Step4Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 4 && <Step5Tab data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 5 && <Step6Tab data={{ selectedTab, setSelectedTab }} />}
    </div>
  );
}
