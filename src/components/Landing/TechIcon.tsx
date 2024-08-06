import Image from "next/image";
import React from "react";

type Props = {
  data: {
    imgUrl: string;
    title: string;
  };
};

export default function TechIcon({ data: { imgUrl, title } }: Props) {
  return (
    <div className="flex items-center justify-between space-x-3 px-8 py-4 bg-white bg-opacity-10 mx-4 rounded-xl">
      <Image src={imgUrl} alt="" width={30} height={30} />
      <p className="text-white cursor-default">{title}</p>
    </div>
  );
}
