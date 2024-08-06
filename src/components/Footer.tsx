import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-herobg">
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-y-6  text-white py-16 w-[90%] mx-auto lg:justify-items-center">
        <div className="flex flex-col space-y-3 col-span-4 lg:col-span-1">
          <h2 className="font-bold text-xl ">Lancer Planet</h2>
          <p className="text-white/80 text-sm">
            We understand the importance of efficient recruitment and ensure the
            quality of our candidates through extensive interviews and reference
            checks.
          </p>
        </div>

        <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
          <h2 className="font-bold text-xl ">About</h2>
          <Link href="#" className="text-sm text-white/80">
            About Us
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Podcast
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Pricing
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Jobs
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Blog
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Perks
          </Link>
        </div>

        <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
          <h2 className="font-bold text-xl ">Popular Techs Expert</h2>
          <Link href="#" className="text-sm text-white/80">
            React JS
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Node JS
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Awesome Talents Java
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Python
          </Link>
          <Link href="#" className="text-sm text-white/80">
            GPT3
          </Link>
          <Link href="#" className="text-sm text-white/80">
            AI
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Front End
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Back End
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Ruby On Rails
          </Link>
          <Link href="#" className="text-sm text-white/80">
            IOS
          </Link>
        </div>

        <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
          <h2 className="font-bold text-xl ">Industries</h2>
          <Link href="#" className="text-sm text-white/80">
            Airline
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Finance Industry
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Automotive
          </Link>
          <Link href="#" className="text-sm text-white/80">
            Healthcare
          </Link>
        </div>

        <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
          <h2 className="font-bold text-xl ">Contact</h2>
          <Link href="#" className="text-sm text-white/80">
            Support
          </Link>
        </div>
      </div>
      <hr className="h-[0.2px] w-[90%] mx-auto" />
      <div className="text-white/80 flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto py-12">
        <p>© 2023, Lancer Planet. All Rights Reserved</p>
        <Link href="#">Terms & Privacy</Link>
      </div>
    </footer>
  );
}
