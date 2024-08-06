"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  data: {
    imgUrl: string;
    name: string;
    professionalTitle: string;
    profileLink: string;
  };
};

export default function EDCard({ data }: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <Image
        className="rounded"
        src={data.imgUrl}
        width={600}
        height={1000}
        alt=""
      />
      <div className="rounded-b absolute bottom-0 text-start p-4 text-white backdrop-blur w-full flex flex-col space-y-2">
        <h3 className="font-semibold">{data.name}</h3>
        <p className="text-xs font-thin">
          {data.professionalTitle} • Phoenix, AZ
          <br />
          84% Skill Score
        </p>
        <Link href="#" className="underline text-xs font-thin">
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}
