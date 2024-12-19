'use client'
import React, { useState } from "react";
// import LeadsList, { leadsData } from "./LeadList";
import Modal from "./modal";
import { leadData } from "@/app/lib/placeholder-data";
import LeadsList from "./LeadList";
import ProgressBar from "./progress-bar";

const Dashboard = () => {
  const progress = 68;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(0);



  return (
    <div className="p-6 border rounded-lg font-sans ">
      {/* Header */}
      <div className="mb-6 grid grid-cols-2 items-center gap-4">
  {/* Text */}
  <div className="text-left">
    <h1 className="text-lg font-medium text-gray-700">
      Hi Mona, <span className="text-indigo-600 font-bold">68%</span> of
      goal achieved and rest can be achieved by focusing on{" "}
      <span className="font-bold">20 top leads</span>.
    </h1>
  </div>

  {/* Progress Bar */}
  <div className="text-right">
    <ProgressBar />
  </div>
</div>


      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Focus Section */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-500 font-semibold mb-4">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus.
          </h2>
          {/* Cards */}
          <div className=" grid grid-cols-2 gap-4 ">
            {leadData.slice(0, 2).map((lead,i) => {
              return <LeadsList key={lead.id} lead={lead} index={i} />;
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-700 font-semibold mb-4">
            Other key activities
          </h3>
          <div className="space-y-4">
            {/* Activity 1 */}
            <div className="border-b pb-2">
              <h4 className="font-semibold text-gray-800">
                Café A00 for Woodland Bank
              </h4>
              <p className="text-sm text-gray-500">
                Review draft and reply to Chris Nadlo.
              </p>
            </div>
            {/* Activity 2 */}
            <div>
              <h4 className="font-semibold text-gray-800">
                Partnership opportunity for Fabrikam
              </h4>
              <p className="text-sm text-gray-500">
                Prepare notes for the key stakeholder meeting.
              </p>
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
