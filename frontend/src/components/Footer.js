import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-[#131334] text-white py-12 text-center">
      <div className="footer-container flex justify-between max-w-[1200px] mx-auto px-5">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><Link to="#">Movies</Link></li>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Locations</Link></li>
            <li><Link to="#">Deals and Exclusives</Link></li>
            <li><Link to="#">Advertise</Link></li>
            <li><Link to="#">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Events</Link></li>
            <li><Link to="#">Disclaimer</Link></li>
            <li><Link to="#">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-column subscribe">
          <h3 className='leading-tight'>Subscribe to Our Newsletter</h3>
          <form className='flex flex-col items-center mt-7'>
            <input
            className=' p-2 text-base w-[80%] max-w-[300px]  border border-gray-300 rounded-md mb-5'
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className='p-2 bg-[#ed0c6e] text-white text-base border-none rounded-md cursor-pointer w-[80%] max-w-[300px]' type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom  mt-5 text-sm border-t border-[#444] pt-2">
        <p className='m-0'>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
