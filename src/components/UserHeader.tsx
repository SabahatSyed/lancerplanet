"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};
async function FetchFreelancerProfile() {
  const user = localStorage.getItem("user");
  if (!user) {
    return false;
  }
  const { u_id } = JSON.parse(user);
  const res = await fetch("/api/freelancer");
}

export default function UserHeader({}: Props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    try {
      const loggedIn = JSON.parse(localStorage.getItem("log-in")!);
      if (loggedIn) {
        const { status } = loggedIn;
        setLoggedIn(status);
      }
    } catch (e) {
      setLoggedIn(false);
    }
  }, []);
  return (
    <header className="mx-auto border-b lg:w-[85%] hidden lg:flex items-center justify-between px-3 md:px-6 lg:px-12 py-2 md:py-4 lg:py-4">
      <Link href="/">
        <Image
          src="/assets/logo-f.png"
          className="w-[120px]"
          alt=""
          width={300}
          height={200}
        />
      </Link>
      <nav className="flex items-center space-x-6">
        <Link href="/jobs">Find jobs</Link>
        <Link href="/post-job">Post Job</Link>
        <Link href="/">Marketplace</Link>
        <Link href="/">Talent</Link>
        <Link href="/">How it works</Link>
        <Link href="/f/create-account">Apply as Developer</Link>
      </nav>
      {isLoggedIn ? (
        <button className="secondaryButton">Disconnect</button>
      ) : (
        <Link href="/join" className="secondaryButton">
          Connect
        </Link>
      )}
    </header>
  );
}
