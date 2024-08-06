import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function FreelancerHeader({}: Props) {
  return (
    <header className="hidden lg:flex mb-8 items-center justify-between px-3 md:px-6 lg:px-12 py-2 md:py-4 lg:py-5 shadow ">
      <div>
        <Image
          src="/assets/logo-f.png"
          className="w-[120px]"
          alt=""
          width={300}
          height={200}
        />
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/jobs">Find jobs</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Marketplace</Link>
        <Link href="/">Talent</Link>
        <Link href="/">How it works</Link>
        {/* <Link href="/f/create-account">Apply as Developer</Link> */}
      </nav>
      <Link href="/join" className="secondaryButton">
        Connect
      </Link>
    </header>
  );
}
