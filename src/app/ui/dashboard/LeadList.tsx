import React, { useState } from "react";
import Modal from "./modal";
import { leadData } from "@/app/lib/placeholder-data";
import LeadModal from "./lead-modal";
import { LeadDetails } from "@/app/lib/definitions";
import Image from "next/image";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

interface LeadListProps {
  lead: LeadDetails;
  index: number;
}

const LeadsList: React.FC<LeadListProps> = ({ lead, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNext = () => {
    setSelectedLead((prevIndex) =>
      prevIndex === leadData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setSelectedLead((prevIndex) =>
      prevIndex === 0 ? leadData.length - 1 : prevIndex - 1
    );
  };

  const currentLead = leadData[selectedLead];

  return (
    <>
      <div
        onClick={() => {
          setIsModalOpen(true), setSelectedLead(index);
        }}
        key={lead.id}
        className="border rounded-lg p-2 shadow hover:shadow-md bg-white"
      >
        <div className="flex items-center gap-1 mb-2">
          {/* <img
            src={lead.profileImage}
            alt={lead.name}
            className="rounded-full w-6 h-6"
          /> */}

          <Image
            src={lead.profileImage}
            alt={lead.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <div>
            <h3 className=" text-xs font-semibold text-gray-800">
              {lead.name}  ooo
            </h3>
            <p className="text-xs text-gray-500">{lead.role}</p>
          </div>
        </div>

       

        <div className="bg-[#f5f7ff] p-2 text-sm rounded-lg mb-2 ">
          <div className="flex flex-row mb-2  space-x-1 align-middle items-center">
            <MarkEmailUnreadIcon className="w-4 h-4" />
            <h5 className="font-bold text-sm ">
              Engage with {lead.name}
            </h5>
          </div>
          <p className="text-xs text-gray-600 mb-2">{lead.keyPoints[1]}</p>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center gap-1 text-xs">
          <span className="">Expand business</span>
          <div className="size-1 bg-black rounded-full hidden xl:block"></div>
          <span>{lead.topic}</span>
        </div>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lead={currentLead}
        handleNext={handleNext}
        selectedLead={selectedLead}
        handlePrevious={handlePrevious}
      />
    </>
  );
};

export default LeadsList;
