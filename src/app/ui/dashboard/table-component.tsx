"use client";
import { Lead, LeadDetails } from "@/app/lib/definitions";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import clsx from "clsx";
// import { Lead } from "@/app/lib/definitions";
import Image from "next/image";

interface TableProps {
  people: LeadDetails[];
}

const TableComponent: React.FC<TableProps> = ({ people }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Search and Filter logic
  const filteredData = people
    .filter(
      (person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((person) => (filterStatus ? person.status === filterStatus : true));

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
  
    const valueA = a[sortColumn as keyof LeadDetails];
    const valueB = b[sortColumn as keyof LeadDetails];
  
    // Ensure the values are strings before calling toLowerCase
    const stringValueA = typeof valueA === "string" ? valueA.toLowerCase() : "";
    const stringValueB = typeof valueB === "string" ? valueB.toLowerCase() : "";
  
    if (stringValueA < stringValueB) return sortOrder === "asc" ? -1 : 1;
    if (stringValueA > stringValueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Handle sorting
  const handleSort = (column: string) => {
    setSortOrder(sortColumn === column && sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(column);
  };

  return (
    <div className="bg-white rounded-sm py-4 md:shadow-2xl">
      {/* Search and Filters */}
      <div className="relative  flex flex-col md:flex-row gap-4 mb-4   w-full md:w-fit px-6 pb-4">
        <div className="">
          <input
            type="text"
            placeholder="Sort,search and filter with coilot"
            className={clsx(
              "px-3 py-1 border border-primary-200 rounded focus:outline-none placeholder:text-saleSpotGrey-400 placeholder:text-sm w-full md:w-[355px] dashboard-container"
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>


        <div className="absolute top-5 right-7 transform -translate-y-1/2 cursor-pointer">
          <Image
            src="/copilot.svg"
            alt="copilot image"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Table */}
      <div
        className={`overflow-x-auto ${sortedData.length > 0 && "tableScroll"}`}
      >
        <table className="min-w-full border-collapse md:px-6">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-left">
              <th
                className="py-3 pr-6 px-6 text-left text-xs font-bold text-eveGrey-400 whitespace-nowrap"
                onClick={() => handleSort("name")}
              >
                Name{" "}
                {sortColumn === "name" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="py-3 pr-6 px-6 text-left text-xs font-bold text-eveGrey-400 whitespace-nowrap"
                onClick={() => handleSort("topic")}
              >
                Topic{" "}
                {sortColumn === "topic" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="p-3 font-semibold cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status reason{" "}
                {sortColumn === "status" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="py-3 pr-6 px-6 text-left text-xs font-bold text-eveGrey-400 whitespace-nowrap"
                onClick={() => handleSort("createdOn")}
              >
                Created on{" "}
                {sortColumn === "createdOn" &&
                  (sortOrder === "asc" ? "▲" : "▼")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b text-xs font-normal text-eveGrey-500  hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-medium text-blue-600">
                    <div className="flex items-center gap-2">
                      <Checkbox className="mr-1" value={row.name} />
                      <Tooltip
                        sx={{ fontSize: 24 }}
                        title={row.keyPoints}
                        placement="right"
                        arrow={true}
                      >
                        <p
                          onClick={() => {
                            setSelectedIndex(index);
                            setIsOpen(true);
                          }}
                          className="cursor-pointer"
                        >
                          {row.name}
                        </p>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-normal text-eveGrey-500">
                    {row.topic}
                  </td>
                  <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-normal text-eveGrey-500">
                    {row.status}
                  </td>
                  <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-normal text-eveGrey-500">
                    {row.createdOn}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
