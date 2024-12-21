"use client";

import Image from "next/image";
import Toolbar from "./ui/dashboard/tool-bar";
import Dashboard from "./ui/dashboard/dashboard";
import TableComponent from "./ui/dashboard/table-component";
import { leadData } from "./lib/placeholder-data";
import { useState } from "react";
import Navbar from "./ui/navbar";
import SideNav from "./ui/dashboard/sidenav";
import MobileSideBar from "./ui/dashboard/mobile-sidebar";
import AgentModal from "./ui/dashboard/agent-skills";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAgentSkillModalOpen, setIsAgentSkillModalOpen] = useState(false);
  const filteredResult = 1;
  return (
    <div className="h-screen">
      <Navbar openModal={() => setIsMobileMenuOpen((prev) => !prev)} />
      <div className="flex">
        <div className="hidden md:block">
          <SideNav openModal={() => setIsAgentSkillModalOpen(true)} />
        </div>
        <div className="flex-1 flex flex-col gap-6 py-6 md:p-6 bg-white md:bg-[#f5f5f5] h-[calc(100vh-40px)] overflow-scroll">
          <div className="px-4 md:px-0">
            <Toolbar />
          </div>
          <div className="px-4 md:px-0">
            <Dashboard />
          </div>
          <TableComponent people={leadData} />
        </div>
      </div>

      <AgentModal
        isOpen={isAgentSkillModalOpen}
        onClose={() => setIsAgentSkillModalOpen(false)}
      />
      <div
        className={`fixed h-screen z-50 translate-y-0 top-[40px] left-0 w-full bg-white lg:hidden md:w-[500px] transition-transform duration-500 ease-in-out text-black ${
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <MobileSideBar
          openModal={() => setIsAgentSkillModalOpen(true)}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </div>
  );
}
