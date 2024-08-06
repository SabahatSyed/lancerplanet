import Image from "next/image";
import React from "react";
import HireCard from "./HireCard";

type Props = {};
type StepType = {
  step: string;
  imgUrl: string;
  title: string;
  desc: string;
};

const steps: StepType[] = [
  {
    step: "01",
    imgUrl: "/assets/step1.webp",
    title: "Post Your Requirements",
    desc: "Fill out the form on our website, telling us about when you want to hire a remote developer or build your remote team, what developer skills you are looking for, how many team members you need, and a few details about your company.",
  },
  {
    step: "02",
    imgUrl: "/assets/step2.webp",
    title: "Schedule a Call",
    desc: "Set up a call with us at a suitable time to discuss your needs and the objectives you want to accomplish with your software development team.",
  },
  {
    step: "03",
    imgUrl: "/assets/step3.webp",
    title: "Get Relevant Remote Developers Within 24 Hours",
    desc: "We will match you with the most relevant software developers based on your requirements and assemble your engineering team of the right remote developers for your company within 24 hours.",
  },
];

export default function HiringSteps({}: Props) {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-6 my-20">
      <h2 className="w-[80%] md:w-[60%] lg:w-[40%] text-4xl font-extrabold text-h2clr">
        Hire Your Ideal Remote Developer in 3 Simple Steps
      </h2>
      <p className="w-[90%] md:w-[70%] lg:w-[50%]">
        Leverage the expertise of the best remote developers and take the tech
        world by storm without going through the exhaustive hiring process. Here
        is how to hire remote developers with incredible technical expertise and
        communication skills in the easiest and quickest way.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {steps.map((step: StepType, i: number) => {
          return <HireCard key={i} data={step} />;
        })}
      </div>
    </div>
  );
}
