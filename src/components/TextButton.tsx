import React from "react";

import { Button } from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface TextButtonProps {
  text: string;
  onClick: () => void;
  background?: boolean;
}
export function TextButton({
  text,
  onClick,
  background = false,
}: TextButtonProps) {
  const ArrowIcon = FaLongArrowAltRight as unknown as React.FC;
  return (
    <Button
      size="sm"
      variant="text"
      className={`flex items-center text-smallButton md:text-largeButton font-header ${background ? "bg-components-secondary hover:bg-components-accent text-fontColor-darkAccent" : "text-fontColor-primary hover:text-fontColor-lightAccent"} p-2`}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      onClick={onClick}
    >
      <span className="flex flex-row items-center gap-1 sm:gap-2">
        {text}
        <ArrowIcon />
      </span>
    </Button>
  );
}
