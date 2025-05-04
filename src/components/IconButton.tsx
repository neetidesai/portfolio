import React from "react";

import { Button } from "@material-tailwind/react";

interface IconButtonProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  color?: string;
}
export function IconButton({
  icon,
  onClick,
  color = "primary",
}: IconButtonProps) {
  return (
    <Button
      size="sm"
      variant="text"
      className="flex items-center text-smallButton md:text-largeButton p-2 hover:bg-components-secondary"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      onClick={onClick}
    >
      {React.createElement(icon, {
        className: `w-4 sm:w-6 h-4 sm:h-6 text-fontColor-${color}`,
      })}
    </Button>
  );
}
