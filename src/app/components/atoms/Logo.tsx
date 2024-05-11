import LogoICon from "@/app/ui/icons/LogoICon";
import React from "react";

export default function Logo() {
  return (
    <div className="border-gray-700 border-[1px] rounded-full h-13 w-13 p-1">
      <div className="flex items-center justify-center rounded-full h-12 w-12 bg-white">
        <LogoICon />
      </div>
    </div>
  );
}
