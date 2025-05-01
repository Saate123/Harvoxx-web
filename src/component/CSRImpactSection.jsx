import React from "react";
import { CapIcon, HandIcon, GlobeIcon, BagIcon, BadgeIcon } from "./icon";
import Img from "../assets/emp1.png";
import Img1 from "../assets/emp2.png";

const CSRImpactSection = () => {
  return (
    <div className="bg-white w-full py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#213D56] leading-snug">
            Empowering the Next <br className="hidden sm:block" /> Generation
            through CSR
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Our Digital Scholarship Program (DSP) trains and equips aspiring
            talents at no cost. Here’s the impact we’ve made.
          </p>

          <div className="grid grid-cols-2 gap-6 text-[#213D56] text-sm justify-items-center sm:justify-items-start">
            <div className="flex flex-col lg:items-center sm:items-start gap-1">
              <CapIcon />
              <p className="font-bold text-lg">Over 100+</p>
              <span>Graduates Trained</span>
            </div>
            <div className="flex flex-col lg:items-center sm:items-start gap-1">
              <HandIcon />
              <p className="font-bold text-lg">20+</p>
              <span>Industry Partners</span>
            </div>
            <div className="flex flex-col lg:items-center sm:items-start gap-1">
              <GlobeIcon />
              <p className="font-bold text-lg">5+</p>
              <span>Impact Communities</span>
            </div>
            <div className="flex flex-col lg:items-center sm:items-start gap-1">
              <BagIcon />
              <p className="font-bold text-lg">90%</p>
              <span>Employment Rate</span>
            </div>
          </div>

          <div className="flex justify-center sm:justify-start">
            <button className="mt-4 px-6 py-2 bg-[#ffcc00] text-[#213D56] font-semibold rounded-md">
              Apply for DSP Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex flex-col sm:flex-row items-center sm:justify-center gap-6 relative">
          {/* Top Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm h-72 sm:h-[320px]">
            <img
              src={Img1}
              alt="Class Training 1"
              className="rounded-[10px] shadow-md w-full h-full object-cover relative z-10 lg:absolute lg:top-25 lg:left-20 lg:z-20"
            />
            <div className="absolute top-2 left-2 sm:top-2 sm:left-2 lg:top-0 lg:left-28 bg-[#213D56] h-[60px] w-[110px] sm:h-[200px] sm:w-[133px] text-white px-3 py-1 rounded-[20px] lg:text-[29px] text-center text-xs sm:text-sm leading-5 lg:leading-7 lg:z-10 z-20">
              <p className="font-bold text-lg lg:text-[29px]">99%</p>
              <span className="text-[13px]">Satisfaction Rate</span>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm h-72 sm:h-[320px]">
            <img
              src={Img}
              alt="Class Training 2"
              className="rounded-[10px] shadow-md w-full h-full object-cover relative z-10 lg:absolute lg:bottom-20 lg:right-5"
            />
            <div className="absolute bottom-2 right-2 lg:top-64 lg:left-18 bg-[#213D56] lg:w-[190px] sm:w-[185px] lg:h-[160px] sm:h-[152px] text-white px-3 py-2 rounded-md text-xs sm:text-sm text-center z-20">
              <div className="flex justify-center gap-2 lg:mb-2 lg:mt-4 sm:mt-2.5 sm:mb-2">
                <BadgeIcon />
              </div>
              <span className="text-sm sm:text-[20px] font-semibold leading-tight">
                Expert-Led <br /> Training
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRImpactSection;
