import React from "react";
import {
  ChartBarIcon,
  ViewColumnsIcon,
  PlusIcon,
  ReceiptRefundIcon,
  TrashIcon,
  AdjustmentsVerticalIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/16/solid";
const Toolbar = () => {
  return (
    <div className="flex items-center justify-between bg-white mb-4 p-2 border rounded shadow">
      <div className="flex justify-between items-center">
        {/* Dropdown */}
        <div>
          <select className=" rounded px-3 py-1 text-gray-700  focus:ring-blue-200">
            <option>My open leads</option>
            <option>All leads</option>
            <option>Closed leads</option>
          </select>
        </div>
      </div>

      {/* <div> */}
      {/* Action Buttons */}
      <div className="flex items-center gap-2 

space-x-1">
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

        <button className="text-sm text-gray-600 flex flex-row border p-1  items-center hover:text-blue-500">
          <TrashIcon className="h-3 w-3" />
          Smart data
        </button>
        <button className="text-sm text-gray-600 flex flex-row border p-1  items-center hover:text-blue-500">
          <TrashIcon className="h-3 w-3" />
          Edit filters
        </button>
        <button className="text-sm text-gray-600 flex flex-row border p-1  items-center hover:text-blue-500">
          <TrashIcon className="h-3 w-3" />
          Edit columns
        </button>

        {/* Search Bar */}
        <div className="relative">
          <button className="text-sm text-gray-600 flex flex-row border p-2  items-center hover:text-blue-500">
            <TrashIcon className="h-3 w-3" />
            Edit columns
          </button>
        </div>
      </div>
      {/* </div> */}

      {/* </div> */}
    </div>
  );
};

export default Toolbar;
