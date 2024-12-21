"use client";
import React, { useState } from "react";
// import LeadsList, { leadsData } from "./LeadList";
import Modal from "./modal";
import { leadData } from "@/app/lib/placeholder-data";
import LeadsList from "./LeadList";
import ProgressBar from "./progress-bar";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const progress = 68;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(0);

  return (
    <div className="py-2 px-4 border-2 bg-white rounded-lg font-sans shadow-md  border-t-[blue] border-r-[purple] border-b-[green] border-l-[blue] ">
      {/* Header */}
      <div className="flex flex-col justify-start mb-6 lg:grid lg:grid-cols-2 lg:items-center gap-2">
        {/* Text */}
        <div className="flex justify-start items-center space-x-1 text-left">
          <Image
            src={"/copilot.svg"}
            alt={"copilot logo"}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <h1 className="text-sm font-medium text-gray-700">
            Hi Mona, <span className="text-indigo-600 font-bold">68%</span> of
            goal achieved and rest can be achieved by focusing on{" "}
            <span className="font-bold">20 top leads</span>.
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-row space-x-1">
          <ProgressBar />
          <div className="flex justify-center">
            {isOpen ? (
              <div onClick={() => setIsOpen(false)}>
                <KeyboardArrowDownIcon
                  className="cursor-pointer"
                  sx={{ width: 40, height: 40 }}
                />
              </div>
            ) : (
              <div onClick={() => setIsOpen(true)}>
                <KeyboardArrowUpIcon
                  className="cursor-pointer"
                  sx={{ width: 40, height: 40 }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      {isOpen && (
        <div className="flex flex-col lg:grid  lg:grid-cols-3 gap-4 md:gap-6 items-center">
          {/* Focus Section */}
          <div className="lg:col-span-2 bg-white p-2 rounded-lg ">
            <div>
              <h2 className="text-gray-500 text-xs font-semibold mb-4">
                Copilot has pinpointed 20 key leads that show strong purchase
                intent and are actively engaging. These leads need your focus.
              </h2>
            </div>

            {/* Cards */}

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:flex flex-row  flex-nowrap gap-2">
              {leadData.slice(0, 2).map((lead, i) => {
                return <LeadsList key={lead.id} lead={lead} index={i} />;
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-white w-full px-4 rounded-lg border border-r-0 border-t-0 border-b-0">
            <h3 className="text-gray-700 font-semibold mb-1">
              Other key activities
            </h3>
            <div className="space-y-2">
              {/* Activity 1 */}
              <div className="border p-2 rounded-md ">
                <div className="flex items-center gap-1 mb-1">
                <Image
            src={"/img3.png"}
            alt={"copilot logo"}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
                  <div>
                    <p className=" text-xs font-medium text-gray-800">
                      Café A00 for Woodland Bank
                    </p>
                    <p className="text-xs text-gray-500">
                      Café A00 for Woodland Bank
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-1 p-2 rounded-md bg-[#f8f8fa]">
                <MarkEmailUnreadIcon sx={{ width: 16, height: 16 }} />                  <p className="text-xs">
                    {" "}
                    Prepare notes for the key stakeholder meeting.
                  </p>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="border p-2 rounded-md ">
                <div className="flex items-center gap-1 mb-1">
                <Image
            src={"/img4.png"}
            alt={"copilot logo"}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
                  <div>
                    <h3 className=" text-xs font-semibold text-gray-800">
                      Café A00 for Woodland Bank
                    </h3>
                    <p className="text-xs text-gray-500">
                      {" "}
                      Café A00 for Woodland Bank
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center space-x-1 p-2 rounded-md bg-[#f8f8fa]">
                <MarkEmailUnreadIcon sx={{ width: 16, height: 16 }} />                  <p className="text-xs">
                    {" "}
                    Prepare notes for the key stakeholder meeting.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-4 text-sm text-indigo-600 font-medium">
              Show all key activities
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
