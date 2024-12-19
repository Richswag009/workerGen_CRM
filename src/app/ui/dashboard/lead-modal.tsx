import React, { useState } from "react";

interface LeadDetails {
  name: string;
  role: string;
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
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, lead,handleNext,handlePrevious }) => {
  const [activeTab, setActiveTab] = useState("engage");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex items-center mb-4">
          <img
            src={lead.profileImage}
            alt={lead.name}
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold">{lead.name}</h2>
            <p className="text-gray-600">{lead.role}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            onClick={() => setActiveTab("engage")}
            className={`py-2 px-4 ${
              activeTab === "engage"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500"
            }`}
          >
            Engage
          </button>
          <button
            onClick={() => setActiveTab("search")}
            className={`py-2 px-4 ${
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
          <div>
            <p className="text-blue-600 mb-4">
              {lead.keyPoints[0]}{" "}
              <span className="text-gray-700">{lead.keyPoints[1]}</span>
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p className="text-gray-500 mb-1">Decision maker</p>
                <p className="text-lg font-semibold">{lead.insights.decisionMaker}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p className="text-gray-500 mb-1">Potential deal value</p>
                <p className="text-lg font-semibold">{lead.insights.dealValue}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p className="text-gray-500 mb-1">Intent</p>
                <p className="text-lg font-semibold">{lead.insights.intent}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-600">
            <p>Search functionality placeholder...</p>
          </div>
        )}

        {/* About Section */}
        <div className="border-t pt-4 text-gray-700">
          <h3 className="font-medium mb-2">About {lead.name}</h3>
          <p className="text-sm">{lead.about}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            Edit
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Approve and Send
          </button>
        </div>

        <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-gray-800 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
      </div>
  
    </div>
  );
};

export default LeadModal;
