import React from "react";
import BackgroundImg from "../assets/newsletter.png";

function Newsletter() {
  return (
    <div
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-12"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02192E] opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#ffcc00]">
          Harvoxx <span className="text-white">Tech. Hub.</span>
        </h2>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
          Get latest latest info's on our Events, trainings and tech
          presentations. Subscribe below.
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-center justify-center mt-10">
          <input
            type="text"
            placeholder="Enter your email address"
            className=" rounded-lg w-[350px] h-[55px] lg:w-[500px] bg-white text-black pl-2.5"
          />
          <button className="w-[130px] lg:w-[147px] h-[45px] hover:border-2 bg-[#ffcc00] hover:border-[#ffcc00] text-black hover:text-white px-5 py-3 rounded-lg text-sm transition-all duration-300 absolute lg:right-12 right-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
