import React from "react";
import StatsCard from "./StatsCard";
import Link from "next/link";

type Props = {};

export default function WeAreGlobal({}: Props) {
  return (
    <div className="bg-[url(https://remotebase.com/images/overview/landing/stats-img.webp)] bg-no-repeat bg-center">
      <div className="w-full h-full bg-globalOverlay/60 bg-opacity-25 flex flex-col justify-center min-h-screen space-y-8 pl-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold">We are Global</h2>
        <p className="w-[80%] md:w-[60%] lg:w-[40%] text-h2clr">
          Get borderless hiring of the top 1% of remote developer teams with
          extraordinary technical abilities who are ready to work under 24 hours
          with a minimum 4 hour overlap of time zones.
        </p>
        <div className="flex items-center space-x-0 lg:space-x-12 flex-wrap justify-start">
          <StatsCard stats={{ title: "Engineers", number: "90k" }} />
          <StatsCard stats={{ title: "Cities", number: "30" }} />
          <StatsCard stats={{ title: "Countries", number: "10" }} />
          <StatsCard stats={{ title: "Technologies", number: "20" }} />
          <StatsCard stats={{ title: "Customers", number: "50" }} />
        </div>
        <Link href="/talent" className="primaryButton w-fit">
          Find Talent
        </Link>
      </div>
    </div>
  );
}
