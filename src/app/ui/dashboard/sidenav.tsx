"use-client";
import Link from "next/link";
import NavLinks from "./nav-links";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";


interface Props{
  openModal:()=>void
}

export default function SideNav({openModal}:Props){
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-gray-100 pb-6 w-full shadow-lg h-[calc(100vh-40px)] border-r-2 border-r-gray-200 overflow-scroll">
      <div className="px-4 py-3  mb-1">
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <MenuIcon className="cursor-pointer" />
        </div>
      </div>
      <NavLinks isOpen={isOpen} openModal={openModal}/>
    </div>
  );
}
