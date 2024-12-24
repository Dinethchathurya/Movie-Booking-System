import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";
import menuItems from "../constant/menu";
import movies from "../constant/index";

const Footer = () => {
  return (
    <footer className="footer bg-[#131334] text-white py-12 text-center">
      <div className="footer-container flex justify-between max-w-[1200px] mx-auto px-5">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Now Showing</h3>
          <ul>
            {movies.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column subscribe">
          <h3 className="leading-tight">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col items-center mt-7">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input w-[80%]  p-2 text-gray-700 focus:outline-none rounded-md focus:ring focus:ring-gray-50 max-w-[300px] border border-gray-300 mb-5"
            />
            <button
              className="p-2 bg-[#ed0c6e] text-white text-base border-none rounded-md cursor-pointer w-[80%] max-w-[300px]"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom  mt-5 text-sm border-t border-[#444] pt-2">
        <p className="m-0">&copy; 2024 CINEMAX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
