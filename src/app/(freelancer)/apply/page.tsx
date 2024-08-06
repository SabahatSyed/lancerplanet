import ProposalForm from "@/components/ApplyOnProjectForm";
import React from "react";

type Props = {
  searchParams: {
    project_id: string;
  };
};

export default function Page({ searchParams }: Props) {
  return (
    <div className="pt-4">
      <ProposalForm />
    </div>
  );
}
