import { leadData } from "@/app/lib/placeholder-data";
import { HomeIcon, LinkIcon } from "@heroicons/react/20/solid";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

export interface LeadDetails {
  name: string;
  role: string;
  topic: string;
  profileImage: string;
  insights: {
    decisionMaker: string;
    dealValue: string;
    intent: string;
  };
  keyPoints: string[];
  about: string;
}

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
  lead: LeadDetails;
  selectedLead:number
}

const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  selectedLead,
  lead,
  handleNext,
  handlePrevious,
}) => {
  const [activeTab, setActiveTab] = useState("engage");

  if (!isOpen) return null;

  return (
    <div className=" translate-x-1 duration-75  fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white rounded-lg border-2 shadow-lg w-full max-w-3xl p-6 relative  border-t-[blue] border-r-[purple] border-b-[green] border-l-[blue] ">
        <div className="flex flex-row justify-between mb-4 items-center">
          <div className="flex flex-row items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <p>{lead.topic}</p>
          </div>

          {/* Close Button */}
          <button
            // className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            className="text-gray-500"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Header */}
        <div className="border border-1 border-gray-500 flex items-center rounded-md  mb-4 p-1">
          <img
            src={lead.profileImage}
            alt={lead.name}
            className="h-8 w-8 rounded-full mr-2"
          />
          <div>
            <p className="text-base font-semibold">{lead.name}</p>

            <div className="flex flex-row items-center space-x-1">
              <LinkIcon className="w-4 h-4" />|
              <p className=" text-xs text-gray-600">{lead.role}</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-row justify-between  border-1 bg-violet-200 text-violet-500 border-gray-500  items-center rounded-md  mb-4 p-1 py-2">
          <div className="flex flex-row items-center space-x-1">
            <LinkIcon className="w-4 h-4" />
            <p className=" text-xs text-violet-600">{lead.role}</p>
          </div>

          <div className="flex text-xs flex-row gap-2">
            <p className=" text-sm flex px-1 flex-row items-center space-x-1 rounded-md bg-white text-gray-700 hover:bg-gray-100">
              <PencilIcon className="w-3 h-3" />
              Edit
            </p>
            <button className="flex p-1 flex-row items-center space-x-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              <ArrowLeftCircleIcon className="w-4 h-4" /> Approve and Send
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-2">
          <button
            onClick={() => setActiveTab("engage")}
            className={`py-1 px-4 ${
              activeTab === "engage"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500"
            }`}
          >
            Engage
          </button>
          <button
            onClick={() => setActiveTab("search")}
            className={`py-1 px-4 ${
              activeTab === "search"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500"
            }`}
          >
            Search
          </button>
        </div>

        {/* Content */}
        {activeTab === "engage" ? (
          <div className=" border border-1 rounded-md p-2">
            <div className="p-2 rounded-md bg-[#F4F5FE] text-violet-500">
              <p>why i picked this lead </p>
              <ul className=" mb-2 list-disc">
                {lead.keyPoints.map((keypoint, i) => {
                  return (
                    <li className="text-xs" key={i}>
                      {keypoint}
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-row gap-3 mb-6">
                <div className=" flex flex-row items-center gap-2 p-1 bg-white rounded-lg">
                  <img
                    src={lead.profileImage}
                    alt={lead.name}
                    className="h-8 w-8 "
                  />

                  <div className="text-xs">
                    <p className="text-gray-500">Decision maker</p>
                    <p className="text-lg font-semibold">
                      {lead.insights.decisionMaker}
                    </p>
                  </div>
                </div>

                <div className=" flex flex-row items-center gap-2 p-1 bg-white rounded-lg">
                  <img
                    src={lead.profileImage}
                    alt={lead.name}
                    className="h-8 w-8 rounded-full"
                  />

                  <div className="text-xs w-fit ">
                    <p className="text-gray-500 mb-1">Potential deal value</p>
                    <p className="text-lg font-semibold">
                      {lead.insights.dealValue}
                    </p>
                  </div>
                </div>

                <div className=" flex flex-row items-center gap-2 p-1 bg-white rounded-lg">
                  <img
                    src={lead.profileImage}
                    alt={lead.name}
                    className="h-8 w-8 rounded-full"
                  />

                  <div className="text-sm w-fit">
                    <p className="text-gray-500 ">Intent</p>
                    <p className="text-lg font-semibold">
                      {lead.insights.intent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs flex flex-row my-1 justify-between items-center">
            <div>
                <span></span>
                <span>Ds sales</span>
                <span>+2</span>
              </div>
              <div className=" flex flex-row items-center">
                <span> Ai generated content may be incorrect</span>

                <span>like</span>
                <span>dislike</span>
              </div>
            </div>
          </div>
        ) : (
          <div className=" shadow-sm rounded-md p-2">
          <div className="p-2 rounded-md bg-[#F4F5FE] text-violet-500">


            
            <p>why i picked this lead </p>
            <ul className=" mb-2 list-disc">
              {lead.keyPoints.map((keypoint, i) => {
                return (
                  <li className="text-xs" key={i}>
                    {keypoint}
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-row gap-3 mb-6">
              <div className=" flex flex-row items-center gap-2 p-1 bg-white rounded-lg">
                <img
                  src={lead.profileImage}
                  alt={lead.name}
                  className="h-8 w-8 "
                />

                <div className="text-xs">
                  <p className="text-gray-500">Decision maker</p>
                  <p className="text-lg font-semibold">
                    {lead.insights.decisionMaker}
                  </p>
                </div>
              </div>

              <div className=" flex flex-row items-center gap-2 p-1 bg-white rounded-lg">
                <img
                  src={lead.profileImage}
                  alt={lead.name}
                  className="h-8 w-8 rounded-full"
                />

                <div className="text-xs w-fit ">
                  <p className="text-gray-500 mb-1">Potential deal value</p>
                  <p className="text-lg font-semibold">
                    {lead.insights.dealValue}
                  </p>
                </div>
              </div>

              <div className="  flex flex-row items-center gap-2 p-1 bg-white rounded-lg">
                <img
                  src={lead.profileImage}
                  alt={lead.name}
                  className="h-8 w-8 rounded-full"
                />

                <div className="text-sm w-fit">
                  <p className="text-gray-500 ">Intent</p>
                  <p className="text-lg font-semibold">
                    {lead.insights.intent}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-sm flex flex-row my-1 justify-between items-center">
          <div>
              <span></span>
              <span>Ds sales</span>
              <span>+2</span>
            </div>
            <div className=" flex flex-row items-center">
              <span> Ai generated content may be incorrect</span>

              <span>like</span>
              <span>dislike</span>
            </div>
          </div>
        </div>
        )}

        {/* About Section */}
        <div className="border my-1 text-sm p-2 text-gray-700">
          <h3 className="font-medium mb-2">About {lead.name}</h3>
          <p className="text-sm">{lead.about}</p>
        </div>


        <p className="">
          {selectedLead +1}/{leadData.length}
        </p>

        <ArrowLeftCircleIcon
          className="absolute  w-4 top-1/2 -left-2  text-gray-700 rounded-md hover:bg-gray-300"
          onClick={handlePrevious}
        />

        <ArrowRightCircleIcon
          className=" absolute w-4 top-1/2 -right-2  text-gray-700 rounded-md hover:bg-gray-300"
          onClick={handleNext}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default LeadModal;
