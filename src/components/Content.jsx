import { CiSearch, CiSettings } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import DataTable from "./DataTable";
import { useState } from "react";

const Content = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="px-5 py-2">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <h2 className="bold text-2xl">Products</h2>
        <div className="flex items-center gap-2">
          <CiSearch />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for..."
            className="p-1 outline-none"
          />
          <LuMessagesSquare />
          <CiSettings />
        </div>
      </div>
      <DataTable search={search} />
    </div>
  );
};

export default Content;
