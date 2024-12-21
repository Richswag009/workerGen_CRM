"use client";

import Link from "next/link";
// import { HomeIcon, UserGroupIcon, DocumentTextIcon } from "@heroicons/react/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const links = [
  {
    title: "",
    links: [
      { name: "Home", icon: HomeOutlinedIcon, href: "/home" },
      { name: "Recent", icon: AccessTimeOutlinedIcon, href: "#" },
      { name: "Pinned", icon: PushPinOutlinedIcon, href: "#" },
      { name: "Agent Skills", icon: SupportAgentIcon, href: "#" },
    ],
  },
  {
    title: "My Work",
    links: [
      {
        name: "Sales Accelerator",
        icon: RocketLaunchOutlinedIcon,
        href: "/sales-accelerator",
      },
      { name: "Dashboards", icon: DashboardOutlinedIcon, href: "/dashboards" },
      { name: "Activities", icon: EventNoteOutlinedIcon, href: "/activities" },
    ],
  },
  {
    title: "Customers",
    links: [
      { name: "Accounts", icon: AccountBoxOutlinedIcon, href: "/accounts" },
      { name: "Contacts", icon: WorkOutlineOutlinedIcon, href: "/contacts" },
    ],
  },
  {
    title: "Sales",
    links: [
      { name: "Leads", icon: PhoneInTalkIcon, href: "/" },
      {
        name: "Opportunities",
        icon: WorkOutlineOutlinedIcon,
        href: "/contacts",
      },
      { name: "Competitors", icon: AccountBoxOutlinedIcon, href: "/contacts" },
    ],
  },
  {
    title: "Collateral",
    links: [
      { name: "Quotes", icon: AttachMoneyOutlinedIcon, href: "/accounts" },
      { name: "Orders", icon: DescriptionOutlinedIcon, href: "/#" },
      { name: "Invoices", icon: Inventory2OutlinedIcon, href: "/#" },
      { name: "Products", icon: ListAltOutlinedIcon, href: "/#" },
    ],
  },
];

type Props = {
  openModal: () => void
  isOpen: boolean
}

export default function NavLinks({ isOpen, openModal }:Props) {
  const pathName = usePathname();
  return (
    <>
      <nav className={`${isOpen ? "" : "hidden"}`}>
        <ul className="space-y-2  overflow-hidden">
          {links.map((section, index) => (
            <div key={index} className="mb-4">
              <li className="px-4 py-2 font-semibold text-sm text-gray-500">
                {section.title}
              </li>

              {/* Section Links */}
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-1">
                    {link.name === "Agent Skills" ? (
                      // Render button if section name is 'agents skills'
                      <button
                        onClick={openModal}
                        className={clsx(
                          "px-4 py-2 text-gray-700 hover:bg-white cursor-pointer flex items-center justify-center gap-2 rounded-md bg-white-50 text-sm font-medium hover:text-black",
                          {
                            "bg-white border-l-4 border-blue-700 text-black":
                              pathName === link.href,
                          }
                        )}
                      >
                        <link.icon className="h-4 w-4" />
                        <span>{link.name}</span>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={clsx(
                          " px-4 py-2 text-gray-700 hover:bg-white cursor-pointer flex  items-center justify-center gap-2 rounded-md bg-white-50  text-sm font-medium  hover:text-black md:flex-none md:justify-start md:p-2 md:px-2    ",
                          {
                            "bg-white border-l-4 border-blue-700 text-black":
                              pathName === link.href,
                          }
                        )}
                      >
                        <link.icon className="h-4 w-4" />
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
}
