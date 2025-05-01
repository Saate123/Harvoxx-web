import React from "react";
import BackgroundImg from "../assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-12"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02192E] opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight">
          Redefining Possibilities,
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight mt-2">
          One <span className="text-[#ffcc00] italic">Solution</span> at a Time.
        </h2>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
          We create cutting-edge technology solutions, driving innovation and
          unlocking new digital frontiers.
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="w-[180px] bg-[#ffcc00] hover:bg-transparent hover:border-2 hover:border-[#ffcc00] text-black px-5 py-3 rounded-lg text-sm transition-all duration-300">
            <Link to="/services">Get Started</Link>
          </button>
          <button className="w-[180px] border-2 hover:bg-[#ffcc00] border-[#ffcc00] text-white hover:text-black px-5 py-3 rounded-lg text-sm transition-all duration-300">
            <Link to="/about">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
