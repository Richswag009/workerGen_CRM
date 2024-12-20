'use client'
import { Lead } from "@/app/lib/definitions";
import React, { useState } from "react";
// import { Lead } from "@/app/lib/definitions";

interface TableProps {
    people: Lead[];
  }

  const TableComponent: React.FC<TableProps> = ({ people }) => {

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<string>("");
    const [sortColumn, setSortColumn] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
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
      const valueA = a[sortColumn as keyof Lead].toLowerCase();
      const valueB = b[sortColumn as keyof Lead].toLowerCase();
      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  
    // Handle sorting
    const handleSort = (column: string) => {
      setSortOrder(sortColumn === column && sortOrder === "asc" ? "desc" : "asc");
      setSortColumn(column);
    };
  
    return (
      <div className="my-4 p-4 max-h-2.5">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Sort,search and filter with coilot"
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <select
            className="w-full md:w-1/5 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="New">New</option>
            <option value="Pending">Pending</option>
            <option value="created on">Created On</option>
          </select> */}
        </div>
  
        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-700 text-left">
                <th
                  className="p-3 font-semibold cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name {sortColumn === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  className="p-3 font-semibold cursor-pointer"
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
                  className="p-3 font-semibold cursor-pointer"
                  onClick={() => handleSort("createdOn")}
                >
                  Created on{" "}
                  {sortColumn === "createdOn" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.length > 0 ? (
                sortedData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3 space-x-1 text-blue-600 hover:underline cursor-pointer">
                      <input className="mr-1" value={row.name} type="checkbox"/>
                      {row.name}
                    </td>
                    <td className="p-3">{row.topic}</td>
                    <td className="p-3">{row.status}</td>
                    <td className="p-3">{row.createdOn}</td>
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
