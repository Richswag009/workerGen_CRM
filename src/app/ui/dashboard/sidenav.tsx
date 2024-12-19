import Link from "next/link";
import NavLinks from "./nav-links";
// import NavLinks from "@/app/ui/dashboard/nav-links";
// import AcmeLogo from "@/app/ui/acme-logo";
// import { PowerIcon } from "@heroicons/react/24/outline";
// import { signOut } from "@/auth";
// import NavLinks from "../../../../nav-links";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    // <div className="flex h-full flex-col px-3 py-4 md:px-2  bg-gray-50  grow  justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
    <div className=" flex h-full flex-col bg-gray-50  grow">
      <Link className="" href="/">
        <HomeIcon className="w-8" />
      </Link>

      <NavLinks />
      {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
    </div>
  );
}
