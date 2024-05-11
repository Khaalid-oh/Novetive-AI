import Image from "next/image";
import React from "react";
import LogoICon from "../../icons/LogoICon";
import Logo from "@/app/components/atoms/Logo";
import { DashboardList } from "@/app/components/molecules/DashboardList";

function Sidenav() {
  return (
    <div className="h-screen flex flex-col w-[291px] bg-darkblue">
      <div className="flex items-center justify-center gap-4">
        <Logo />
        <h1 className="text-[28px] font-bold">Novetive AI</h1>
      </div>
      <div>
        {DashboardList.map((list) => (
          <div key={list.label} className="flex items-center gap-16 w-2/3]">
            <span>{list.icon}</span>
            {list.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidenav;
