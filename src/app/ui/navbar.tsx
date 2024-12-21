"use client"

import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
    openModal: () => void
}


const Navbar = ({ openModal }: Props) => {
    return (
        <div className="bg-[#000f28] h-10 flex items-center justify-between px-4 py-2 text-white">
            {/* Left Section */}
            <div className="flex items-center">
                <div className="flex gap-2">
                    <div className="block md:hidden" onClick={openModal}>
                        <MenuIcon />
                    </div>
                    <div className="hidden md:block">
                        <AppsIcon />
                    </div>

                </div>
                <div className="hidden md:flex items-center ">
                    <div className="text-[16px] font-bold ml-5">Dynamics 365</div>
                    <span className="mx-2">|</span>
                    <div className="text-sm text-gray-300">Sales hub</div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                <LightbulbOutlinedIcon className="cursor-pointer text-[#4c556b] hover:text-gray-300" />
                <AddOutlinedIcon className="cursor-pointer text-[#4c556b] hover:text-gray-300" />
                <SettingsIcon className="cursor-pointer text-[#4c556b] hover:text-gray-300" />
                <HelpOutlineOutlinedIcon className="cursor-pointer text-[#4c556b] hover:text-gray-300" />
                <AccountCircleOutlinedIcon className="cursor-pointer text-[#4c556b] hover:text-gray-300" />
                <div className="size-6 rounded-full relative">
                    <Image src="/img2.png" alt="user image" width={24} height={24} className="rounded-full h-full w-full" />
                    <div className="size-3 bg-green-700 rounded-full absolute -right-1 top-4 border-2 border-white"></div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;