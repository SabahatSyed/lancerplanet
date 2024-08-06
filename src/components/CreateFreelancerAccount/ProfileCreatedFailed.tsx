import Link from "next/link";
import React from "react";

type Props = { data: { selectedTab: number; setSelectedTab: any } };

export default function ProfileCreatedFailed({
  data: { selectedTab, setSelectedTab },
}: Props) {
  return (
    <div className="flex flex-col items-center  -mt-12">
      <video muted autoPlay={true} loop={false} className="w-[400px]">
        <source src="/assets/videos/failed.mp4"></source>
      </video>
      <h2 className="text-2xl mt-8 mb-4">
        Uhhoo! You {"can't"} create freelancer profile at this time
      </h2>
      <p>
        Click{" "}
        <Link
          href="/f/create-account"
          className="text-indigo-500"
          onClick={() => setSelectedTab(0)}
        >
          here
        </Link>{" "}
        to try again
      </p>
    </div>
  );
}
