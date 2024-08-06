import UserHeader from "@/components/UserHeader";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col space-y-5">
      <UserHeader />
      {children}
    </div>
  );
}
