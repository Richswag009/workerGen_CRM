// 'use client'
import { leadData } from "@/app/lib/placeholder-data";

import React, { useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackwardIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Image from "next/image";

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
  selectedLead: number;
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
  const [isAccordion, setIsAccordion] = useState(false);

  if (!isOpen) return null;

  return (
    <div className=" transition-opacity duration-300 ease-out   fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="relative">
        <div className="bg-white rounded-lg border-2 shadow-lg w-full lg:w-4xl modal-container max-h-[calc(100vh-100px)] overflow-auto  border-t-[blue] border-r-[purple] border-b-[green] border-l-[blue] px-10 p-6">
          <div className="flex flex-row justify-between mb-4 items-center">
            <div className="flex flex-row items-center space-x-1">
              <MarkEmailUnreadIcon className="w-4 h-4" />
              <p>{lead.topic}</p>
            </div>

            {/* Close Button */}
            <button
              // className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              className="text-gray-500  text-3xl "
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          {/* Header */}
          <div className="border border-1 border-gray-500 flex items-center rounded-md  mb-4 p-1">
            <Image
              src={lead.profileImage}
              alt={lead.name}
              className="h-8 w-8 rounded-full mr-2"
              height={32}
              width={32}
            />

            <div>
              <p className="text-base font-semibold">{lead.name}</p>
              <div className="flex flex-row items-center space-x-1">
                <Image
                  src={"/linkedin.svg"}
                  alt={"linkedin logo"}
                  width={32}
                  height={32}
                  className="h-4 w-4 "
                />
                <p className=" text-xs text-gray-600">{lead.role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between md:items-center w-full gap-3 bg-gradient-to-tr from-[#ebf3ff] to-[#ececfe] px-4 py-2 rounded-xl flex-col md:flex-row">
            <p className="text-xs font-bold bg-gradient-to-r from-[#5373d4] to-[#7e47ec] bg-clip-text text-transparent">
              {lead.name.split(" ")[0]} may be interested in upgrading espresso
              machines for her in-store coffee shops
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1 bg-white px-2 py-1">
                <EditIcon
                  sx={{ width: 16, height: 16 }}
                  className="cursor-pointer"
                />
                <span className="text-xs">Edit</span>
              </div>
              <div className="bg-gradient-to-tr from-[#365bb8] to-[#8032e4] px-2 py-1 rounded flex items-center gap-1 cursor-pointer">
                <SendIcon sx={{ width: 16, height: 16, color: "white" }} />
                <span className="text-white text-xs">Approve and send</span>
              </div>
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
            <div className="bg-white px-4 py-4 rounded-xl shadow mt-2">
              <div className="bg-gradient-to-tr from-[#ebf3ff] to-[#ececfe] px-4 py-4 rounded-xl">
                <h5 className="text-sm font-bold bg-gradient-to-r from-[#5373d4] to-[#7e47ec] bg-clip-text text-transparent mb-2">
                  Why I picked this lead
                </h5>
                <div className="flex flex-col gap-2 md:gap-0">
                  {lead.keyPoints.map((keypoint, i) => {
                    return (
                      <div key={i} className="flex items-center gap-1 ml-4">
                        <div className="size-1 bg-black rounded-full hidden md:block"></div>
                        <p className="text-sm">{keypoint}</p>
                        <div className="bg-white size-2 flex items-center justify-center text-xs text-black">
                          {i + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 pl-4 pr-4 md:pr-0 flex flex-col md:flex-row  gap-2 w-full">
                  <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow md lg:w-[200px] w-full">
                    <Image src="/cele1.svg" alt="" width={40} height={40} />
                    <div className="flex flex-col justify-between">
                      <span className="text-xs">Decision maker</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">
                        Yes
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow lg:w-[200px]  w-full">
                    <Image src="/cele2.svg" alt="" width={40} height={40} />
                    <div className="flex flex-col justify-between">
                      <span className="text-xs">Potential deal value</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">
                        $1M
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow lg:w-[200px]  w-full">
                    <Image
                      src="/engagement.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col justify-between">
                      <span className="text-xs">Intent</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">
                        High
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white px-4 py-4 rounded-xl shadow mt-2">
              <div className="bg-gradient-to-tr from-[#ebf3ff] to-[#ececfe] px-4 py-4 rounded-xl">
                <h5 className="text-sm font-bold bg-gradient-to-r from-[#5373d4] to-[#7e47ec] bg-clip-text text-transparent mb-2">
                  Why I picked this lead
                </h5>
                <div className="flex flex-col gap-2 md:gap-0">
                  {lead.keyPoints.map((keypoint, i) => {
                    return (
                      <div className="flex items-center gap-1 ml-4">
                        <div className="size-1 bg-black rounded-full hidden md:block"></div>
                        <p className="text-sm">{keypoint}</p>
                        <div className="bg-white size-2 flex items-center justify-center text-xs text-black">
                          {i + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 pl-4 pr-4 md:pr-0 flex flex-col md:flex-row  gap-2 w-full">
                  <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow md lg:w-[200px] w-full">
                    <Image src="/cele1.svg" alt="" width={40} height={40} />
                    <div className="flex flex-col justify-between">
                      <span className="text-xs">Decision maker</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">
                        Yes
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow lg:w-[200px]  w-full">
                    <Image src="/cele2.svg" alt="" width={40} height={40} />
                    <div className="flex flex-col justify-between">
                      <span className="text-xs">Potential deal value</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">
                        $1M
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow lg:w-[200px]  w-full">
                    <Image
                      src="/engagement.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col justify-between">
                      <span className="text-xs">Intent</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">
                        High
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="border my-1 text-sm p-2 text-gray-700">
            <div className="flex flex-row justify-between items-center">
              <h3 className="font-medium mb-2">About {lead.name}</h3>

              <div className="flex justify-center">
                {isAccordion ? (
                  <div onClick={() => setIsAccordion(false)}>
                    <KeyboardArrowDownIcon
                      className="cursor-pointer"
                      sx={{ width: 40, height: 40 }}
                    />
                  </div>
                ) : (
                  <div onClick={() => setIsAccordion(true)}>
                    <KeyboardArrowUpIcon
                      className="cursor-pointer"
                      sx={{ width: 40, height: 40 }}
                    />
                  </div>
                )}
              </div>
            </div>
            {isAccordion && <p className="text-sm">{lead.about}</p>}
          </div>

          <div className="flex justify-between px-6 mt-4">
            <div className="flex items-center gap-3">
              <span className="text-sm whitespace-nowrap font-bold text-gray-500">
                Showing {selectedLead + 1} of {leadData.length}{" "}
              </span>
              <span>|</span>
              <span className="text-sm whitespace-nowrap font-bold text-[#5c48cc]">
                Show all
              </span>
            </div>
            <div className="w-full hidden md:flex items-center justify-center mt-2 gap-1">
              {Array.from({ length: leadData.length }).map((_, index) => (
                <div
                  key={index}
                  className={`rounded h-[4px] ${
                    index < selectedLead + 1
                      ? "bg-[#5c48cc] w-10"
                      : "bg-gray-300 w-1"
                  }`}
                ></div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThumbUpOffAltIcon
                sx={{ width: 16, height: 16, color: "gray" }}
              />
              <ThumbDownOffAltIcon
                sx={{ width: 16, height: 16, color: "gray" }}
              />
            </div>
          </div>

          <div className="absolute hidden -left-6 z-50 transform -translate-y-1/2 top-1/2 bg-white size-14 shadow-2xl lg:flex items-center justify-center rounded-full border-2 border-gray-200 cursor-pointer">
            <ArrowBackwardIosIcon
              sx={{ color: "blue" }}
              onClick={handlePrevious}
            />
          </div>
          <div className="absolute hidden -right-8 z-50  transform -translate-y-1/2 top-1/2 bg-white size-14 shadow-2xl lg:flex items-center justify-center rounded-full border-2 border-gray-200 cursor-pointer">
            <ArrowForwardIosIcon sx={{ color: "blue" }} onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
