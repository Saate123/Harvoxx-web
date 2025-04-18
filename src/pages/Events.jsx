import React from "react";
import Img from "../assets/tech-up.png";
import Img2 from "../assets/ladiescantech.png";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Events() {
  const eventData = [
    {
      image: Img,
      title: "Tech-UP Port Harcourt",
      para: "The TechUp Port Harcourt is the city’s biggest tech event, fostering collaboration in the tech ecosystem and exposing young people to tech opportunities.",
    },
    {
      image: Img2,
      title: "Ladies Can Tech",
      para: "An annual event by Harvoxx Tech Hub, aiming to bridge the gender gap in tech by empowering women to grow tech careers or businesses.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-4 py-12 bg-gradient-to-br from-[#051A2B] to-[#1568AB]">
        <h1 className="text-3xl text-white text-center lg:text-left lg:mx-20 md:text-4xl font-semibold mb-4">
          Our{" "}
          <span className="relative inline-block text-[#ffcc00]">
            Events
            <svg
              className="w-full h-2 mt-1"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 Q50,0 100,10"
                fill="none"
                stroke="#ffcc00"
                strokeWidth="4"
              />
            </svg>
          </span>
        </h1>
        <p className="text-xl text-white text-center lg:text-left lg:mx-20 mb-12">
          Stay ahead with our exclusive tech-driven workshops, webinars, and{" "}
          <span className="text-[#ffcc00] font-semibold">conferences.</span>
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {eventData.map((item, index) => (
            <div
              key={index}
              className="relative h-[400px] rounded-lg overflow-hidden bg-cover bg-center flex items-end"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-[#02192E] opacity-50 z-0"></div>
              <div className="relative z-10 p-6 text-white max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base mb-4">{item.para}</p>
                <button className="text-sm px-4 py-1.5 bg-[#ffcc00] text-black rounded hover:bg-transparent hover:text-[#ffcc00] border border-[#ffcc00] transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
