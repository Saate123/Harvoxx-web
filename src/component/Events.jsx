import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Img from "../assets/tech-up.png";
import Img2 from "../assets/ladiescantech.png";

function Events() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    <div className="relative px-4 py-12 bg-gradient-to-br from-[#051A2B]  to-[#1568AB]">
      <h1 className="text-[28px] text-white md:text-[28px] font-semibold text-center mb-4">
        Our{" "}
        <span className="relative inline-block text-[#ffcc00]">
          Events
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
      <p className="text-[20px] text-white text-center mb-12">
        Stay ahead with our exclusive tech-driven workshops, webinars, and{" "}
        <span className="text-[#ffcc00] font-semibold">conferences.</span>
      </p>

      {/* Navigation Buttons */}
      <div
        className="absolute top-[50%] left-4 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-[#ffcc00] opacity-25 text-black rounded-full cursor-pointer transform -translate-y-1/2"
        ref={prevRef}
      >
        <FaChevronLeft />
      </div>
      <div
        className="absolute top-[50%] right-4 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-[#ffcc00] opacity-25 text-black rounded-full cursor-pointer transform -translate-y-1/2"
        ref={nextRef}
      >
        <FaChevronRight />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {eventData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Events;
