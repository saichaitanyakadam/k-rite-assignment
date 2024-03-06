import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex w-full justify-between px-5 py-2 h-[7vh] items-center lg:hidden fixed bg-gray-300 z-10">
      <Link to="/">
        <h2 className="font-bold">InnovationHub</h2>
      </Link>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <HiXMark size={20} /> : <IoMdMenu size={20} />}
      </button>
      <div
        className={`absolute top-0 ${
          isOpen ? "left-0" : "left-[-100%]"
        } duration-500 transition-all`}
      >
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
