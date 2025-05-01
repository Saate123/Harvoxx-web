import React from "react";
import { DotIcon } from "./icon"; // Adjust the import path as necessary

function Ratings() {
  const stats = [
    { value: "9+", label: "Years of Experience" },
    { value: "20+", label: "Clients", icon: <DotIcon /> },
    { value: "99%", label: "Satisfaction Rate", icon: <DotIcon /> },
    { value: "100+", label: "Completed Projects", icon: <DotIcon /> },
  ];

  return (
    <div className="w-full py-6 bg-[#f8f9fa] h-[131px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center text-center">
          {stats.map((stat, index) => (
            <div key={index} className="w-1/4 h-[81px]">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffcc00] block">
                {stat.value}
              </span>

              <span>{stat.icon}</span>

              <p className="text-xs sm:text-sm md:text-base text-[#213D56] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ratings;
