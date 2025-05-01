import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Img from "../assets/review2.jpg";
import Img2 from "../assets/review1.jpg";
import Img3 from "../assets/review3.jpg";
import Img4 from "../assets/review4.jpg";

const testimonials = [
  {
    text: "Wow... I am very happy to use this VPN. It turned out to be more than my expectations. So far, there have been no problems. LaslesVPN always the best.",
    image: Img,
    name: "David Matthews",
    title: "Crescent Health Center",
  },
  {
    text: "Their platform completely transformed the way we work. The support team is responsive, and the product is efficient. Highly recommended!",
    image: Img2,
    name: "Olivia Reed",
    title: "Pinebrook Family Medicine",
  },
  {
    text: "As a small business owner, it's been an essential tool for my growth. Easy to use, secure, and effective.",
    image: Img3,
    name: "Davida Dogara",
    title: "WealthWise",
  },
  {
    text: "Reliable and intuitive. I feel safe using it and the speed is great!",
    image: Img4,
    name: "Saate Echindo",
    title: "TiCare",
  },
];

function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null); // store swiper instance

  const goPrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const goNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-[28px] sm:text-3xl font-semibold text-center mb-4">
        What Our{" "}
        <span className="text-[#FFcc00] font-semibold relative inline-block">
          Clients
          <svg
            width="108"
            height="8"
            viewBox="0 0 108 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.9537 6.2577C26.4774 2.48207 68.0587 1.39951 106.11 3.25645"
              stroke="#FFCC00"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </span>{" "}
        Are Saying
      </h2>
      <p className="text-center text-gray-500 text-base md:text-lg mb-12 max-w-2xl mx-auto">
        Hear from the businesses and individuals who have experienced our{" "}
        <span className="text-[#FFCC00]">innovative solutions</span> firsthand.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // store swiper instance
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-xl p-6 h-80 flex flex-col justify-between">
              <div>
                <span className="text-4xl text-[#FFCC00] font-bold">“</span>
                <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#213D56]">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-10 gap-6">
        <button
          ref={prevRef}
          onClick={goPrev}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FFCC00] hover:text-white transition"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          onClick={goNext}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FFCC00] hover:text-white transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
