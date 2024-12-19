import React from "react";
import { 
  ChartBarIcon, 
  ViewColumnsIcon, 
  PlusIcon, 
  ReceiptRefundIcon, 
  TrashIcon, 
  AdjustmentsVerticalIcon, 
  GlobeAmericasIcon 
} from  "@heroicons/react/16/solid";
const Toolbar = () => {
  return (
    <div className="flex items-center justify-between bg-white mb-4 p-2 border rounded shadow">
      <div className="flex items-center gap-4">
        {/* Dropdown */}
        <div>
          <select
            className="border rounded px-3 py-1 text-gray-700 focus:ring focus:ring-blue-200"
          >
            <option>My open leads</option>
            <option>All leads</option>
            <option>Closed leads</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="flex text-sm items-center gap-1 text-gray-600 hover:text-blue-500">
            <ChartBarIcon className="h-3 w-3" />
            Show chart
          </button>
          <button className="flex text-sm items-center gap-1 text-gray-600 hover:text-blue-500">
            <ViewColumnsIcon className="h-3 w-3" />
            Focused view
          </button>
          <button className="flex text-sm items-center gap-1 text-gray-600 hover:text-blue-500">
            <PlusIcon className="h-3 w-3" />
            New
          </button>
          <button className="flex text-sm items-center gap-1 text-gray-600 hover:text-blue-500">
            <ReceiptRefundIcon className="h-3 w-3" />
            Refresh
          </button>
          <button className="flex text-sm items-center gap-1 text-gray-600 hover:text-blue-500">
            <TrashIcon className="h-3 w-3" />
            Delete
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button className="text-gray-600 hover:text-blue-500">
          Smart data
        </button>
        <button className="text-gray-600 hover:text-blue-500">
          Edit filters
        </button>
        <button className="text-gray-600 hover:text-blue-500">
          Edit columns
        </button>

        {/* Search Bar */}
        <div className="relative">
          <GlobeAmericasIcon className="absolute left-2 top-2.5 h-3 w-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="border rounded pl-8 pr-2 py-1 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
