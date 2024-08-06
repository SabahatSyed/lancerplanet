import FreelancerHeader from "@/components/FreelancerHeader";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <FreelancerHeader />

      {children}
    </div>
  );
}
