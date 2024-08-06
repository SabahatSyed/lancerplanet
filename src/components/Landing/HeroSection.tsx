import React from "react";
import Slider from "./Slider";
import Link from "next/link";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 bg-herobg">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-24 text-white mx-auto w-[99%]">
        Hire Top 1% Remote
        <br /> Developers Within <span className="text-spantxt">24 Hours</span>
      </h1>
      <p className="text-white w-[90%] md:w-[80%] lg:w-[70%] text-lg">
        Build a team of pre-vetted and highly skilled remote software developers
        that best match your timezone and work model. Save your hiring time and
        money with Lancer Planet.
      </p>
      <div>
        <Link href="/join" className="secondaryButton my-6">
          Get started
        </Link>
      </div>
      <Slider />
    </div>
  );
}
