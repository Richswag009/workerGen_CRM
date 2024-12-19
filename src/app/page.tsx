import Image from "next/image";
import Toolbar from "./ui/dashboard/tool-bar";
import Dashboard from "./ui/dashboard/dashboard";
import TableComponent from "./ui/dashboard/table-component";
import { people } from "./lib/placeholder-data";

export default function Home() {

  const filteredResult = 1
  return (
    <div className="">
    <Toolbar/>
    <Dashboard/>
    <TableComponent people={people}/>
    </div>
  );
}

