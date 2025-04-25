import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Harvoxx School", path: "/program" },
    { name: "Events", path: "/events" },
  ];

  const isActive = (path) => {
    if (location.pathname.startsWith("/program/") && path === "/program") {
      return true;
    }
    if (location.pathname.startsWith("/services/") && path === "/services") {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-[#213d56] shadow-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`cursor-pointer ${
                    isActive(link.path)
                      ? "text-[#ffcc00] font-semibold"
                      : "hover:text-[#ffcc00]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
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
        className={`fixed top-16 right-0 w-[300px] h-[calc(100vh - 4rem)] bg-[#02192E] shadow-lg z-50 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 flex flex-col justify-between h-full">
          <ul className="flex flex-col space-y-6 text-white font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <Link
                  to={link.path}
                  className={`block py-2 px-6 rounded-lg w-full text-center ${
                    isActive(link.path)
                      ? "bg-[#213D56] text-[#ffcc00] font-semibold"
                      : "hover:text-[#ffcc00]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#ffcc00] hover:bg-transparent hover:border-2 hover:border-[#ffcc00] text-black px-5 py-3 rounded-lg text-sm mt-8"
            >
              Get Started
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border-2 hover:bg-[#ffcc00] border-[#ffcc00] text-white hover:text-black px-5 py-3 rounded-lg text-sm mt-4"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
