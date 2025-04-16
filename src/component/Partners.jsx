import React from "react";
import icon from "../assets/maze.PNG";
import icon2 from "../assets/sense.PNG";
import icon3 from "../assets/dabpal.PNG";
import icon4 from "../assets/bash.PNG";
import icon5 from "../assets/aptha.PNG";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


function Partners() {
  return (
    <div className="py-5 bg-[#f9f9f9]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#213D56] mb-6">
        Our Partners and Clients
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img src={icon} alt="Maze" className="h-10 sm:h-10 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icon2}
            alt="Sense"
            className="h-10 sm:h-10 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icon3}
            alt="Dabpal"
            className="h-10 sm:h-10 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon4} alt="Bash" className="h-10 sm:h-10 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icon5}
            alt="Aptha"
            className="h-10 sm:h-10 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon} alt="Maze" className="h-10 sm:h-10 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icon2}
            alt="Sense"
            className="h-10 sm:h-10 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icon3}
            alt="Dabpal"
            className="h-10 sm:h-10 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon4} alt="Bash" className="h-10 sm:h-10 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={icon5}
            alt="Aptha"
            className="h-10 sm:h-10 object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Partners;
