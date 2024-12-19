import React, { useState } from "react";
import Modal from "./modal";
import { leadData } from "@/app/lib/placeholder-data";
import LeadModal from "./lead-modal";


const LeadsList = ({ lead,index }) => {
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
         onClick={()=>{setIsModalOpen(true),setSelectedLead(index)}}
        key={lead.id}
        className="border rounded-lg p-4 shadow hover:shadow-md bg-white"
      >
        <div className="flex items-center gap-4 mb-2">
          <img
            src={lead.profileImage}
            alt={lead.name}
            className="rounded-full w-10 h-10"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{lead.name}</h3>
            <p className="text-sm text-gray-500">{lead.role}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-2">{lead.about}</p>
        <span className="text-sm text-indigo-600 font-medium">
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
