"use client";
import React, { useState } from "react";
// import LeadsList, { leadsData } from "./LeadList";
import Modal from "./modal";
import { leadData } from "@/app/lib/placeholder-data";
import LeadsList from "./LeadList";
import ProgressBar from "./progress-bar";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  const progress = 68;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(0);

  return (
    <div className="py-2 px-4 border-2 rounded-lg font-sans  border-t-[blue] border-r-[purple] border-b-[green] border-l-[blue] ">
      {/* Header */}
      <div className="mb-6 grid grid-cols-2 items-center gap-2">
        {/* Text */}
        <div className="text-left">
          <h1 className="text-sm font-medium text-gray-700">
            Hi Mona, <span className="text-indigo-600 font-bold">68%</span> of
            goal achieved and rest can be achieved by focusing on{" "}
            <span className="font-bold">20 top leads</span>.
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="">
          <ProgressBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Focus Section */}
        <div className="col-span-2 bg-white p-6 rounded-lg ">
          <h2 className="text-gray-500 text-xs font-semibold mb-4">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus.
          </h2>
          {/* Cards */}
          <div className=" grid grid-cols-2 gap-2 ">
            {leadData.slice(0, 2).map((lead, i) => {
              return <LeadsList key={lead.id} lead={lead} index={i} />;
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white p-6 rounded-lg border border-r-0 border-t-0 border-b-0">
          <h3 className="text-gray-700 font-semibold mb-2">
            Other key activities
          </h3>
          <div className="space-y-4">
            {/* Activity 1 */}
            <div className="border p-2 rounded-md ">
              <div className="flex items-center gap-1 mb-1">
                <img
                  src={`lead.profileImage`}
                  alt={"placeholder"}
                  className="rounded-full w-6 h-6"
                />
                <div>
                  <h3 className=" text-xs font-medium text-gray-800">
                    Café A00 for Woodland Bank
                  </h3>
                  <p className="text-xs text-gray-500">
                    Café A00 for Woodland Bank
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center space-x-1 p-2 rounded-md bg-gray-300">
                <EnvelopeIcon  className="w-4 h-4"/>
                <p className="text-xs"> Prepare notes for the key stakeholder meeting.</p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="border p-2 rounded-md ">
              <div className="flex items-center gap-1 mb-2">
                <img
                  src={`lead.profileImage`}
                  alt={"placeholder"}
                  className="rounded-full w-6 h-6"
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

              <div className="flex flex-row items-center space-x-1 p-2 rounded-md bg-gray-300">
                <EnvelopeIcon  className="w-4 h-4"/>
                <p className="text-xs"> Prepare notes for the key stakeholder meeting.</p>
              </div>
            </div>
   
          </div>
          <button className="mt-4 text-indigo-600 font-medium">
            Show all key activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
