import React from "react";

type Props = {};

export default function ProfileCreatedSuccess({}: Props) {
  return (
    <div className="flex flex-col items-center  -mt-12">
      <video muted autoPlay={true} loop={false} className="w-[300px]">
        <source src="/assets/videos/success.mp4"></source>
      </video>
      <h2 className="text-2xl">Your profile has been successfully created !</h2>
    </div>
  );
}
