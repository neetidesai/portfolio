import React from "react";

interface KnowledgeCardProps {
  title: string;
  logo: string;
}

export function KnowledgeCard({ title, logo }: KnowledgeCardProps) {
  return (
    <div className="flex flex-col items-center justify-center border border-black rounded-lg p-2 pb-1 bg-white shadow-md">
      <img
        src={logo}
        alt={"logo"}
        className="w-12 h-12 object-contain flex-shrink"
      />
      <h1 className="text-smallButton text-fontColor-secondary font-body">
        {title}
      </h1>
    </div>
  );
}
