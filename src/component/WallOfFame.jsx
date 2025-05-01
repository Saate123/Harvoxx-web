import React from "react";
import { BadgeIcon2 } from "./icon";
import Img from "../assets/hall1.jpg";
import Img2 from "../assets/hall2.jpg"; // replace with actual path 
import Img3 from "../assets/hall3.jpg"; // replace with actual path

const alumniData = [
  {
    name: "Orinayo Adeyemi",
    role: "Now a Product Designer at Midas UX",
    graduation: "Graduated DSP100, Class of 2023",
    story:
      "Started with zero tech experience. Now leading design sprints for global teams.",
    image: Img, // replace with actual path
  },
  {
    name: "Ayoola Benson",
    role: "Now a Frontend Developer at NovaTech Labs",
    graduation: "Graduated DSP100, Class of 2022",
    story:
      "Built the user interface for an e-learning platform serving 10k+ students.",
    image: Img2, // replace with actual path
  },
  {
    name: "Chiamaka Nwachukwu",
    role: "Now a Data Analyst at Veritas Insight Co.",
    graduation: "Graduated DSP100, Class of 2023",
    story:
      "Transformed raw data into insights that helped improve client retention by 35%.",
    image: Img3, // replace with actual path
  },
];

const WallOfFame = () => {
  return (
    <div className="w-full py-12 px-4 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-[28px] text-[#213D56] md:text-[28px] font-semibold text-center mb-4">
          Wall{" "}
          <span className="relative inline-block">
            of Fame
            <svg
              width="100"
              height="7"
              viewBox="0 0 100 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.62858 4.62898C24.3706 1.21349 62.8552 0.916236 98.0325 3.58531"
                stroke="#FFCC00"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="text-[18px] sm:text-base text-[#555555] mt-2">
          Celebrating Harvoxx Alumni{" "}
          <span className="text-yellow-500 font-semibold">Making Waves</span> in
          the Tech World
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
        {alumniData.map((alumni, index) => (
          <div key={index} className="w-[400px] shadow-sm">
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-full h-[240px] object-cover rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="bg-white p-4 leading-6 rounded-bl-[10px] rounded-br-[10px] ">
              <h3 className="text-lg font-bold text-[#213D56]">
                {alumni.name}
              </h3>
              <p className="text-sm text-gray-700 mb-1">{alumni.role}</p>
              <div className="flex items-center text-[#00284B] text-sm mb-2 gap-2">
                <BadgeIcon2 />
                {alumni.graduation}
              </div>
              <p className="text-[16px] text-gray-600">{alumni.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallOfFame;
