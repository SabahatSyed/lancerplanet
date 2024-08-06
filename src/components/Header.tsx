import React from "react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="hidden lg:flex items-center justify-between px-3 md:px-6 lg:px-12 py-2 md:py-4 lg:py-8 text-white bg-herobg">
      <div>Lancer Planet</div>
      <nav className="flex items-center space-x-6">
        <Link href="/jobs">Find jobs</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Marketplace</Link>
        <Link href="/">Talent</Link>
        <Link href="/">How it works</Link>
        <Link href="/f/create-account">Apply as Developer</Link>
      </nav>
      <Link href="/join" className="secondaryButton">
        Connect
      </Link>
    </header>
  );
}
