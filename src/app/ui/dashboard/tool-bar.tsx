import React from "react";

import { Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ViewListIcon from "@mui/icons-material/ViewList";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PieChartIcon from "@mui/icons-material/PieChart";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditNoteIcon from "@mui/icons-material/EditNote";
import BookIcon from "@mui/icons-material/Book";

const Toolbar = () => {
  return (
    <div className="flex items-center rounded-md md:justify-between bg-white shadow-md px-4 py-2 overflow-auto">
      <div className="flex items-center space-x-2 mr-4 md:mr-0">
        {/* Dropdown */}
        <select className="bg-transparent cursor-pointer rounded px-3 py-1 font-bold text-sm text-gray-700 focus:outline-none focus:none">
          {" "}
          <option>My open leads</option>
          <option>All leads</option>
          <option>Closed leads</option>
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 space-x-1">
        <Tooltip title="Show chart">
          <div className="flex gap-1 cursor-pointer items-center ">
            <ShowChartIcon sx={{ width: 20, height: 20 }} />
            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
              Show chart
            </span>
          </div>
        </Tooltip>

        <Tooltip title=" Focused view">
          <div className="flex gap-1 cursor-pointer items-center ">
            <ViewListIcon sx={{ width: 20, height: 20 }} />
            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
              Focused view
            </span>
          </div>
        </Tooltip>

        <Tooltip title=" New">
          <div className="flex gap-1 cursor-pointer items-center ">
            <AddIcon sx={{ width: 20, height: 20 }} />
            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
              New
            </span>
          </div>
        </Tooltip>

        <Tooltip title=" Refresh">
          <div className="flex gap-1 cursor-pointer items-center ">
            <RefreshIcon sx={{ width: 20, height: 20 }} />
            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
              Refresh
            </span>
          </div>
        </Tooltip>
        <Tooltip title=" Delete">
          <div className="flex gap-1 cursor-pointer items-center ">
            <DeleteIcon sx={{ width: 20, height: 20 }} />
            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
              Delete
            </span>
          </div>
        </Tooltip>

        <Tooltip title="  Smart data">
        <div className="flex items-center border border-gray-200 py-1 px-2 rounded">
          <PieChartIcon sx={{ width: 20, height: 20 }} />
          <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
            Smart data
          </span>
        </div>
        </Tooltip>

        <Tooltip title=" Edit filters">

        <div className="flex items-center border border-gray-200 py-1 px-2 rounded">
          <FilterListIcon sx={{ width: 20, height: 20 }} />
          <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
            Edit filters
          </span>
        </div>
        </Tooltip>

        <Tooltip title="     Edit columns">

        <div className="flex items-center border border-gray-200 py-1 px-2 rounded">
          <EditNoteIcon sx={{ width: 20, height: 20 }} />
          <span className="text-xs text-[#797979] font-bold whitespace-nowrap">
            Edit columns
          </span>
        </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Toolbar;
