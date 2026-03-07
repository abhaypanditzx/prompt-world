import {
  Briefcase,
  Home,
  Info,
  Menu,
  Phone,
  ToolCase,
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
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="relative">
      {/* small screen  */}

      <div className="sm:hidden flex items-center justify-between px-3 text-white bg-gray-900 h-20">
        navbar
    {/* toggle button  sidebar open/close */}
        <div className="absolute z-50 top-5 right-5">
          <button className={` text-white h-6 w-6 ${openSidebar ? 'hidden':'block'}`} onClick={() => setOpenSidebar(!openSidebar)}>
            <Menu />
          </button>
          <button className={` text-white h-6 w-6 ${openSidebar ? 'block':'hidden'}`} onClick={() => setOpenSidebar(!openSidebar)}>
            <X />
          </button>
        </div>
      </div>
              <div onClick={()=>setOpenSidebar(false)} className={`${openSidebar ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none" } transition-opacity duration-150 inset-0 absolute top-0 left-0 h-screen w-screen bg-black`}></div>
      <Sidebar setOpenSidebar={setOpenSidebar} navLinks={navLinks} openSidebar={openSidebar}/>
    </div>
  );
};

export default Navbar;
