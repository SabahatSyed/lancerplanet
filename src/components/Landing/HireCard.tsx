import Image from "next/image";
import React from "react";

type StepType = {
  step: string;
  imgUrl: string;
  title: string;
  desc: string;
};
type Props = {
  data: StepType;
};

export default function HireCard({
  data: { step, imgUrl, title, desc },
}: Props) {
  return (
    <div className="m-6 text-start flex flex-col">
      <div className="flex items-center justify-center w-[40px] h-[40px] text-sm rounded-full border border-gray-400 text-center">
        {step}
      </div>
      <Image alt="" src={imgUrl} className="my-6" width={600} height={400} />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-h2clr">{desc} </p>
    </div>
  );
}
