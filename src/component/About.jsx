import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Img from "../assets/newsletter.png";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#213D56] px-6 md:px-16 py-12 gap-12">
      {/* Left Side: Text */}
      <div className="flex flex-col w-full md:w-1/2 order-1 md:order-1 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
          About <span className="text-[#ffcc00]">Harvoxx Tech. Hub</span>
        </h2>
        <p className="text-white text-sm md:text-lg mb-4 leading-relaxed">
          HTH is an Innovative Hub designed to be a business growing community.
          It is a great set-up where ideas and opportunities are maximized. We
          have an enabling environment that guarantees seamless execution of
          ideas, encourage creativity, entrepreneurship and leadership mindset.
        </p>
        <p className="text-white text-sm md:text-lg mb-4 leading-relaxed">
          It is a great platform for people to grow, develop amazing programming
          and business development skills.
        </p>
        <p className="text-white text-sm md:text-lg mb-4 leading-relaxed">
          It is a community that has a fast growing alliance with Angel
          investors, VCs, NGOs and other tech communities.
        </p>

        {/* Button on desktop (inline with text) */}
        <div className="hidden md:block mt-6">
          <a href="/about">
            <button className="w-[180px] bg-[#ffcc00] hover:bg-transparent hover:border hover:border-[#ffcc00] text-black hover:text-[#ffcc00] px-5 py-3 rounded-lg text-sm transition-all duration-300">
              Learn More
            </button>
          </a>
        </div>
      </div>

      {/* Image Section - always on right for md+, in middle on mobile */}
      <div className="relative w-full md:w-[558px] h-auto md:h-[500px] order-2 md:order-2">
        {/* Gradient Backgrounds (only on medium and up) */}
        <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-r from-[#051A2B] to-[#0e283f] rounded-xl z-10 hidden sm:block"></div>
        <div className="absolute top-20 left-12 w-[80%] h-[80%] bg-[#011D10] rounded-xl z-20 hidden sm:block"></div>
        <div className="absolute top-18 left-14 w-[80%] h-[80%] bg-[#0E283F] rounded-xl z-20 hidden sm:block"></div>

        {/* Image Layer */}
        <div className="relative z-30 lg:w-[80%] lg:h-[80%] rounded-xl flex items-center justify-center overflow-hidden sm:absolute sm:top-16 sm:left-16 ">
          <img
            src={Img}
            alt="About"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Button for mobile (after image) */}
      <div className="block md:hidden mt-6 order-3 w-full text-center">
        <a href="/about">
          <button className="w-[180px] bg-[#ffcc00] hover:bg-transparent hover:border hover:border-[#ffcc00] text-black hover:text-[#ffcc00] px-5 py-3 rounded-lg text-sm transition-all duration-300">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
