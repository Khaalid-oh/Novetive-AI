"use client";
import React from "react";
import Logo from "@/app/components/atoms/Logo";
import clsx from "clsx";
import {
  DashboardList,
  LogoutNav,
} from "@/app/components/molecules/DashboardList";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidenav() {
  const pathname = usePathname();
  return (
    <div className="h-screen flex flex-col pt-6 w-[260px] bg-custom-blue justify-between">
      <div className="flex items-center px-4 gap-2">
        <Logo />
        <h1 className="text-[20px] font-bold">Novetiv AI</h1>
      </div>


      {/* Middle line */}
      <div className="flex flex-col gap-2 ">
        {DashboardList.map((list) => (
          <Link
            key={list.label}
            href={list.path}
            className={clsx(
              "flex items-center pl-9 py-2 gap-4 w-full text-md hover:bg-gray-50 hover:bg-opacity-10 transition-all relative",
              {
                "bg-gray-50 bg-opacity-10 transition-all border-r-8 border-blue-600":
                  list.path === pathname,
              }
            )}
          >
            <span>{list.icon}</span>
            {list.label}
          </Link>
        ))}
      </div>
      <div>



        {/* Buttom line */}
        <div>
        {LogoutNav.map((nav) => (
          <div className="flex items-center pl-9  gap-4 h-[61px] w-full text-md hover:bg-gray-50 hover:bg-opacity-10 transition-all after:">
            {nav.icon} {nav.label}
          </div>
        ))}
        </div>


      </div>
    </div>
  );
}

export default Sidenav;
