import React, { useState } from "react";
import Modal from "./modal";
import { leadData } from "@/app/lib/placeholder-data";
import LeadModal from "./lead-modal";
import { LeadDetails } from "@/app/lib/definitions";
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid";

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
          <img
            src={lead.profileImage}
            alt={lead.name}
            className="rounded-full w-6 h-6"
          />
          <div>
            <h3 className=" text-xs font-semibold text-gray-800">
              {lead.name}
            </h3>
            <p className="text-xs text-gray-500">{lead.role}</p>
          </div>
        </div>
        <div className="bg-[#F7F6FF] text-sm rounded-md p-2 ">
          <div className="flex flex-row mb-2  space-x-1 align-middle items-center">
            <EnvelopeOpenIcon className="w-4 h-4" />
            <p className="text-sm text-gray-600">{lead.topic}</p>
          </div>
          <p className="text-xs text-gray-600 mb-2">{lead.keyPoints[0]}</p>
        </div>
        <span className="text-sm my-2 text-indigo-600 font-medium">
          {lead.status}
        </span>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lead={currentLead}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </Modal>
    </>
  );
};

export default LeadsList;
