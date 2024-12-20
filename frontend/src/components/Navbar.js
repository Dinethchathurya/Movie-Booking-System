import React, { useState } from "react";
import "../style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex justify-between items-center p-3 bg-transparent text-white sticky top-0 z-[1000] shadow-md">
      <a href="#" className="text-white text-2xl font-bold no-underline ml-2">
        MyLogo
      </a>
      <div className={`nav-links flex gap-7 list-none justify-center items-center ${isOpen ? "active" : ""}`}>
        <a className="text-white text-base p-1.5 px-2.5 rounded-md transition-colors duration-300 ease-in-out hover:text-[#ed0c6e]" href="#">Home</a>
        <a className="text-white text-base p-1.5 px-2.5 rounded-md transition-colors duration-300 ease-in-out hover:text-[#ed0c6e]" href="#">Movies</a>
        <a className="text-white text-base p-1.5 px-2.5 rounded-md transition-colors duration-300 ease-in-out hover:text-[#ed0c6e]" href="#">Locations</a>
        <a className="text-white text-base p-1.5 px-2.5 rounded-md transition-colors duration-300 ease-in-out hover:text-[#ed0c6e]" href="#">My Account</a>
      </div>
      <div className=" nav-buttons flex gap-4 mr-2">
        <a href="#" className="px-4 py-2 text-sm rounded border-2 border-[#ed0c6e] bg-[#ed0c6e] text-white transition-all duration-300 hover:bg-white hover:text-[#ed0c6e]">
          Buy Ticket</a>
        <a href="#" className="px-4 py-2 text-sm rounded border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-blue-900">
          Login</a>
      </div>
      <div className=" menu-toggle hidden flex-col cursor-pointer " onClick={toggleMenu}>
        <span className="h-[3px] w-[25px] bg-white my-[3px] rounded"></span>
        <span className="h-[3px] w-[25px] bg-white my-[3px] rounded"></span>
        <span className="h-[3px] w-[25px] bg-white my-[3px] rounded"></span>
        
      </div>
    </nav>
  );
};

export default Navbar;
