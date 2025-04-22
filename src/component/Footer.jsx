import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="bg-[#051A2B] text-white px-4 w-full md:px-12 py-10">
        {/* Main Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Tagline */}
          <div className="flex-shrink-0 md:w-1/4">
            <img src={Logo} alt="logo" className="w-48" />
            <p className="text-sm leading-relaxed">
              Redefining possibilities with cutting-edge tech solutions.
            </p>
          </div>

          {/* Text Sections Wrapper */}
          <div className="flex flex-row sm:flex-row gap-10 flex-wrap md:gap-20 md:w-2/4">
            {/* Company */}
            <div className="w-[25%] lg:w-[22%] ">
              <h5 className="font-semibold text-lg mb-3">Company</h5>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>About Us</li>
                {/* <li>Services</li> */}
                <li>Testimonials</li>
                <li>Pricing</li>
                <li>Events</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Services */}
            <div className="w-[25%] lg:w-[22%]">
              <h5 className="font-semibold text-lg mb-3">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>Website & Mobile App Development</li>
                <li>Branding & Marketing</li>
                <li>Consultancy</li>
                <li>Harvoxx School</li>
                <li>HARVCUBATION</li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-[25%] lg:w-[22%]">
              <h5 className="font-semibold text-lg mb-3">Support</h5>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Customer Support</li>
                <li>Report an Issue</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00111F] text-sm text-center md:text-left h-[50px] flex items-center justify-center">
        <p className="flex justify-center md:justify-center items-center gap-1 text-gray-300">
          <MdOutlineCopyright className="text-lg" />
          <span>Copyright All Rights Reserved 2025, Harvoxx Tech. Hub</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
