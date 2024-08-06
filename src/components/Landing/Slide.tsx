import React from "react";
import Image from "next/image";

type Props = {};

export default function Slide({}: Props) {
  return (
    <div className="w-[300px] h-full flex flex-col items-center justify-center py-4 group">
      <div className="flex-1 flex items-center">
        <Image
          src="/assets/fl1.png"
          alt=""
          width={320}
          height={400}
          className="rounded-full w-[200px] h-[200px] object-cover"
        />
      </div>
      <h2 className="text-lg text-black ">Awais Yusaf</h2>
      <p className="text-sm text-black ">Nextjs Developer • Pakistan</p>
    </div>
  );
}
