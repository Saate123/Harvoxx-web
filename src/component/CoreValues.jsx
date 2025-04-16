import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiArrowScope, GiTechnoHeart } from "react-icons/gi";
import { PiShieldCheckFill } from "react-icons/pi";

function CoreValues() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our{" "}
        <span className="relative inline-block">
          Core Values
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#ffcc00] rounded-full transform translate-y-1/2"></span>
        </span>
      </h1>
      <p className="text-xl text-center mb-8">
        The principles that guide us every step of the way, driving our
        innovation and ensuring we deliver
        <span className="text-[#ffcc00]"> impactful</span> solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Diversity - order 1 on all screens */}
        <div className="bg-[#213D56] p-6 rounded-lg shadow-lg flex flex-col items-center order-1">
          <HiOutlineUserGroup className="text-[#ffcc00] text-3xl mb-2" />
          <h5 className="text-white text-xl font-semibold mb-2">Diversity</h5>
          <p className="text-white text-center text-[17px]">
            We have a community that celebrates differences hence, we
            encourage every member of the team and client to be proud of their
            unique qualities and skills.
          </p>
        </div>

        {/* Impact - order 2 on all screens */}
        <div className="bg-[#ffcc00] p-6 rounded-lg shadow-lg flex flex-col items-center order-2">
          <GiArrowScope className="text-[#213d56] text-3xl mb-2" />
          <h5 className="text-[#213d56] text-xl font-semibold mb-2">Impact</h5>
          <p className="text-[#213d56] text-center text-[17px]">
            We are determined to impact in our society. Hence, we are steadily
            ensuring that we find meaning and making great impact through hard
            work and services.
          </p>
        </div>

        {/* Integrity - order 4 on large screens, order-3 on mobile */}
        <div className="bg-[#213D56] p-6 rounded-lg shadow-lg flex flex-col items-center order-3 md:order-4">
          <PiShieldCheckFill className="text-[#ffcc00] text-3xl mb-2" />
          <h5 className="text-white text-xl font-semibold mb-2">Integrity</h5>
          <p className="text-white text-center text-[17px]">
            We stay true to our culture and words. We uphold principles and
            processes that will earn us trust and respect from our clients.
          </p>
        </div>

        {/* Commitment - order 3 on large screens, order-4 on mobile */}
        <div className="bg-[#ffcc00] p-6 rounded-lg shadow-lg flex flex-col items-center order-4 md:order-3">
          <GiTechnoHeart className="text-[#213d56] text-3xl mb-2" />
          <h5 className="text-[#213d56] text-xl font-semibold mb-2">
            Commitment to Clients
          </h5>
          <p className="text-[#213d56] text-center text-[17px]">
            Here, we believe that commitment to client is an essential
            ingredient for success. We are willing to go above and beyond to
            deliver and satisfy our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
