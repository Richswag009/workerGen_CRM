"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
// import { HomeIcon, UserGroupIcon, DocumentTextIcon } from "@heroicons/react/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MapPinIcon } from "@heroicons/react/16/solid";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// const links = [
//   { name: "Home", href: "/dashboard", icon: HomeIcon },
//   {
//     name: "Invoices",
//     href: "/dashboard/invoices",
//     icon: DocumentDuplicateIcon,
//   },
//   { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
// ];

const links = [
  {
    title: "",
    links: [
      { name: "Home", icon: HomeIcon, href: "/" },
      { name: "Recent", icon: HomeIcon, href: "#" },
      { name: "Pinned", icon: MapPinIcon, href: "#" },
    ],
  },
  {
    title: "My Work",
    links: [
      {
        name: "Sales Accelerator",
        icon: DocumentTextIcon,
        href: "/sales-accelerator",
      },
      { name: "Dashboards", icon: DocumentTextIcon, href: "/dashboards" },
      { name: "Activities", icon: DocumentTextIcon, href: "/activities" },
    ],
  },
  {
    title: "Customers",
    links: [
      { name: "Accounts", icon: UserGroupIcon, href: "/accounts" },
      { name: "Contacts", icon: UserGroupIcon, href: "/contacts" },
    ],
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      <nav className="p-4">
        {links.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-sm text-gray-500 font-semibold mb-2">
              {section.title}
            </h2>

            {/* Section Links */}
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white-50  text-sm font-medium hover:bg-white  hover:text-black md:flex-none md:justify-start md:p-2 md:px-2",
                      {
                        "bg-white border-l-4 border-blue-700 text-black": pathName === link.href,
                      }
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );
}
