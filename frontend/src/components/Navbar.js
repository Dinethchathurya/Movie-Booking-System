import React, { useState } from "react";
import "./style/Navbar.css";
import Logo from "../assets/cinemax_logo.png";
import menuItems from "../constant/menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex justify-between items-center p-3 bg-[#000025] text-white sticky top-0 z-[1000] shadow-2xl">
      <a
        href="/"
        className="text-white text-2xl font-bold no-underline ml-2 pt-2 sm:pt-0"
      >
        <img
          src={Logo}
          alt="Logo"
          className="logo w-[120px] sm:w-[150px] h-auto"
        />
      </a>

      {/* Map through menuItems */}
      <div
        className={`nav-links hidden md:flex gap-7 list-none justify-center items-center`}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            className="text-white text-base p-1.5 px-2.5 rounded-md transition-colors duration-300 ease-in-out hover:text-[#ed0c6e]"
            href={item.href}
          >
            {item.text}
          </a>
        ))}
      </div>

      <div className="nav-buttons flex gap-4 mr-2">
        <a
          href="/buytickets"
          className="px-4 py-1 md:py-2 text-sm rounded border-2 border-[#ed0c6e] bg-[#ed0c6e] text-white transition-all duration-300 hover:bg-white hover:text-[#ed0c6e]"
        >
          Buy Ticket
        </a>
        <a
          href="/login"
          className="px-4 py-1 md:py-2 text-sm rounded border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-blue-900"
        >
          Login
        </a>
      </div>

      <div
        className="menu-toggle flex flex-col cursor-pointer items-end md:hidden"
        onClick={toggleMenu}
      >
        <span className="h-[3px] w-[15px] bg-white my-[3px] rounded "></span>
        <span className="h-[3px] w-[20px] bg-white my-[3px] rounded"></span>
        <span className="h-[3px] w-[25px] bg-white my-[3px] rounded"></span>
      </div>

      {/* Drawer (mobile menu) */}
      <div
        className={`drawer fixed top-0 right-0 w-64 h-full bg-[#000025] text-white transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Menu Items */}
        <div className="drawer-links flex flex-col items-start mt-8 text-left">
          {menuItems.map((item, index) => (
            <a
              key={index}
              className="text-white text-md ml-3 p-4 hover:text-[#ed0c6e]"
              href={item.href}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
