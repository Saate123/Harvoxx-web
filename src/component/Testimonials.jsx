import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    name: "David Matthews",
    title: "Crescent Health Center",
  },
  {
    text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    name: "Olivia Reed",
    title: "Pinebrook Family Medicine",
  },
  {
    text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    name: "Davida Dogara",
    title: "WealthWise",
  },
  // Add more if needed
];

function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
        What Our{" "}
        <span className="text-[#FFcc00] font-semibold relative inline-block">
          Clients
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#ffcc00] rounded-full transform translate-y-1/2"></span>
        </span>{" "}
        Are Saying
      </h2>
      <p className="text-center text-gray-500 text-base md:text-lg mb-12">
        Hear from the businesses and individuals who have experienced our{" "}
        <span className="text-[#FFCC00] ">
          innovative solutions
        </span>{" "}
        firsthand.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
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
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-xl p-6 h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl text-[#FFCC00] font-bold">”</span>
                <p className="text-gray-600 text-sm mt-2">{item.text}</p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-[#213D56]">{item.name}</p>
                <p className="text-gray-400 text-sm">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Pagination */}
      <div className="flex justify-center items-center mt-6 gap-6">
        <button
          ref={prevRef}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FFCC00] hover:text-white transition"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FFCC00] hover:text-white transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
