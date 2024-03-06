/* eslint-disable react/prop-types */
import {
  folders,
  sidebarBottomTabs,
  sidebarTabs,
} from "../constants/AppConstants";

import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [show, setShow] = useState({
    hide: true,
    index: undefined,
  });
  return (
    <main className="p-4 flex flex-col gap-2 justify-between h-screen bg-purple-200">
      <div className="flex gap-2 items-center">
        <Link to="/">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709510400&semt=ais"
            alt="companyLogo"
            className="rounded-lg"
            width={50}
          />
        </Link>
        <div className="flex-1">
          <p className="text-slate-400">INC</p>
          <p className="font-semibold">InnovationHub</p>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          alt="userProfile"
          width={30}
          className="rounded-full"
        />
      </div>
      <ul className="flex flex-col gap-1">
        {sidebarTabs.map((tab, index) => (
          <li key={index} className="flex items-center gap-2">
            <PiMicrosoftTeamsLogoLight />
            <p className="flex-1">{tab.title}</p>
            <p className="border rounded-lg px-1 text-sm">
              X-<span>{index + 1}</span>
            </p>
          </li>
        ))}
      </ul>
      <button type="button" className="border text-left px-3 py-1">
        create a team
      </button>
      <div className="flex items-center justify-between pr-3">
        <p>FOLDERS</p>
        <button
          type="button"
          onClick={() => {
            console.log("folder");
          }}
        >
          <IoIosAdd />
        </button>
      </div>
      <nav className="flex-1">
        {folders.map((folder, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex items-center justify-between gap-2">
              <IoFolderOpenOutline />
              <Link
                to={folder.path}
                onClick={() => {
                  isOpen && setIsOpen(false);
                }}
                className="flex-1"
              >
                {folder.title}
              </Link>
              {folder.sub.length > 0 && (
                <button type="button">
                  {show.hide && show.index === index ? (
                    <MdKeyboardArrowUp
                      onClick={() => {
                        setShow({
                          hide: false,
                          index,
                        });
                      }}
                    />
                  ) : (
                    <MdOutlineKeyboardArrowDown
                      onClick={() => {
                        setShow(() => ({
                          hide: true,
                          index,
                        }));
                      }}
                    />
                  )}
                </button>
              )}
            </div>
            {folder.sub.length > 0 && show.hide && index === show.index && (
              <nav className="ml-6 flex flex-col">
                {folder.sub.map((sub, index) => (
                  <Link to={sub.path} key={index}>
                    {sub.title}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        ))}
      </nav>
      <ul>
        {sidebarBottomTabs.map((tab, index) => (
          <li key={index} className="flex items-center gap-2">
            <tab.icon />
            <p>{tab.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Sidebar;
