import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons
import Logo from "../assets/logo.png"; // Make sure the path is correct

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#213d56] shadow-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-white font-medium">
            <li className="text-[#ffcc00] cursor-pointer">Home</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">About Us</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">Services</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">Pricing</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">Events</li>
          </ul>
          <button className="ml-6 bg-[#ffcc00] text-black px-5 py-2 rounded-lg text-sm">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Nav */}
      <div
        className={`fixed top-16 right-0 w-[300px] h-[613px] bg-[#02192E] shadow-lg z-50 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 flex flex-col justify-between h-full">
          <ul className="flex flex-col space-y-6 text-white font-medium items-center">
            <li className="bg-[#213D56] py-2 px-15 rounded-lg cursor-pointer">Home</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">About Us</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">Services</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">Pricing</li>
            <li className="hover:text-[#ffcc00] cursor-pointer">Events</li>
          </ul>
          <div>
            <button className="w-full bg-[#ffcc00] hover:bg-transparent hover:border-2 hover:border-[#ffcc00] text-black px-5 py-3 rounded-lg text-sm mt-8">
              Get Started
            </button>
            <button className="w-full border-2 hover:bg-[#ffcc00] border-[#ffcc00] text-white hover:text-black px-5 py-3 rounded-lg text-sm mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Push content slightly when menu opens */}
      <div
        className={`transition-all duration-500 ${
          isOpen ? "md:ml-0 ml-[300px]" : "ml-0"
        }`}
      ></div>
    </header>
  );
}

export default Header;
