import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ openSidebar, navLinks,setOpenSidebar}) => {
  return (
    <div
      className={`fixed h-screen pt-16 bg-gray-900 w-[80%] right-0 top-0  transition-transform duration-300 ${openSidebar ? "translate-x-0" : "translate-x-full"}`}
    >

      {navLinks.map((link) => (
        <div key={link.path}>
          <Link
          onClick={()=>setOpenSidebar(false)}
            to={link.path}
            className="text-gray-100 border-b px-6  focus:text-amber-300 border-gray-800 py-3 flex items-center gap-x-2  "
          >
            <link.icon  className="h-5 w-5"/>
            <span className="font-medium">{link.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
