import React from "react";

type Props = {
  stats: {
    title: string;
    number: string;
  };
};

export default function StatsCard({ stats: { number, title } }: Props) {
  return (
    <div>
      <p className="text-3xl lg:text-4xl font-extrabold p-5 lg:p-0 flex flex-col items-center">
        {number}+
      </p>
      <span>{title}</span>
    </div>
  );
}
