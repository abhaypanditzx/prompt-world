import {
  Briefcase,
  ChevronDown,
  Home,
  Info,
  Menu,
  Phone,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const navLinks = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "About",
    icon: Info,
    path: "/about",
  },
  {
    name: "Prompts",
    icon: Briefcase,
    path: "/prompts",
  },
  {
    name: "Contact",
    icon: Phone,
    path: "/contact",
  },
];
const promptTypes = [
  {name:"festival prompt",path:"/festival"},
  {name:"aesthetic prompt",path:"/aesthetic"},
  {name:"traditional prompt",path:"/traditional"},
];
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(openDropdown);
  return (
    <div className="relative">
      {/* big screen */}
      <div className="sm:flex hidden items-center justify-between   px-6 text-white bg-gray-900 h-20">
        <div className="logo  border-white border-2 p-2  rounded-full">P</div>
        <div className="relative">
          <div className="max-w-7xl  flex items-center gap-x-10 ">
            {navLinks.map((link) =>
              link.name === "Prompts" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-white font-medium hover:text-gray-300">
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown && (
                    <div className="absolute top-full mt-2 left-0 bg-gray-800 flex flex-col gap-y-2 p-3 rounded-md shadow-lg min-w-[180px]">
                      {promptTypes.map((link) => (
                        <Link
                          key={link.name}
                          to={`/prompts/${link.path}`}
                          className="text-white px-3 py-1 rounded hover:bg-gray-700"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-medium text-white hover:text-gray-300"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className="bg-gray-600 px-3 py-1.5   font-medium">
          <button onClick={() => {}}>Login/Signup</button>
        </div>
      </div>

      {/* small screen  */}

      <div className="sm:hidden flex items-center justify-between px-3 text-white bg-gray-900 h-20">
        navbar
        {/* toggle button  sidebar open/close */}
        <div className="absolute z-50 top-5 right-5">
          <button
            className={` text-white h-6 w-6 ${openSidebar ? "hidden" : "block"}`}
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <Menu />
          </button>
          <button
            className={` text-white h-6 w-6 ${openSidebar ? "block" : "hidden"}`}
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <X />
          </button>
        </div>
      </div>
      <div
        onClick={() => setOpenSidebar(false)}
        className={`${openSidebar ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-150 inset-0 absolute top-0 left-0 h-screen w-screen bg-black`}
      ></div>
      <Sidebar
        setOpenSidebar={setOpenSidebar}
        navLinks={navLinks}
        openSidebar={openSidebar}
      />
    </div>
  );
};

export default Navbar;
