"use client";
import Sidenav from "@/app/ui/dashboard/sidenav/sidenav";
import Topnav from "../ui/dashboard/topnav/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-background text-white">
      <div>
        <Sidenav />
      </div>
      <div>
        <Topnav />
        {children}
      </div>
    </div>
  );
}
