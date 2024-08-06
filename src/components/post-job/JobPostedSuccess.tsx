import React from "react";

type Props = {};

export default function JobPostedSuccess({}: Props) {
  return (
    <div className="flex flex-col items-center">
      <video muted autoPlay={true} loop={false} className="w-[300px]">
        <source src="/assets/videos/success.mp4"></source>
      </video>
      <h2 className="text-2xl">
        Congratulations! Your project is <span className="font-bold">Live</span>
      </h2>
    </div>
  );
}
