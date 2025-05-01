import React, { useRef } from "react";
import { IoTime } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Img from "../assets/productdes.jpg";
import Img2 from "../assets/productmgt.png";
import Img3 from "../assets/webdevF.jpg";
import Img4 from "../assets/webdevB.jpg";
import Img5 from "../assets/webdevfull.jpg";
import Img6 from "../assets/digitalM.jpg";
import Img7 from "../assets/graphics.jpg";

const pricingData = [
  {
    id: "product-design",
    image: Img,
    title: "PRODUCT DESIGN (UI/UX)",
    package: "Full Package",
    duration: "6 months",
    tools: "Figma, User Experience (UX), Product Requirement Document (PRD)",
  },
  {
    id: "product-mgt",
    image: Img2,
    title: "PRODUCT MANAGEMENT",
    package: "Full Package",
    duration: "6 months",
    tools:
      "Jira, Slack, Whimsical, Sketch, Asana, Roadmunk, Trello, Github...Read More",
  },
  {
    id: "frontend-dev",
    groupId: "web-development", // Add groupId
    image: Img3,
    title: "WEB DEV. (FRONTEND)",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "HTML, CSS, JavaScript",
  },
  {
    id: "backend-dev",
    groupId: "web-development", // Add groupId
    image: Img4,
    title: "WEB DEV. (BACKEND)",
    package: "Full Package",
    duration: "4 months",
    tools: "PHP, Vue, MySQL, Node.js",
  },
  {
    id: "fullstack-dev",
    groupId: "web-development", // Add groupId
    image: Img5,
    title: "WEB DEV. (FULLSTACK)",
    package: "Full Package",
    duration: "6 months",
    tools:
      "HTML, CSS, JavaScript, REACT, VUE JS, PHP, NODE JS, GOLANG...Read More",
  },
  {
    id: "digital-marketing-basic",
    image: Img6,
    title: "DIGITAL MARKETING",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "SM- Marketing, Content Marketing, Email Marketing...Read More",
  },
  {
    id: "digital-marketing-adv",
    image: Img6,
    title: "DIGITAL MARKETING",
    package: "Advance",
    duration: "3 months",
    tools: "SM- Marketing, Content Marketing, Email Marketing...Read More",
  },
  {
    id: "graphics",
    image: Img7,
    title: "GRAPHICS DESIGN",
    package: "Full Package",
    duration: "3 months",
    tools: "CorelDRAW, Adobe Photoshop",
  },
];

function Program() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  const handleReadMore = (program) => {
    navigate(`/program/${program.groupId || program.id}`);
  };

  const handleSeeAllCourses = () => {
    navigate("/program");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      <h1 className="text-3xl text-[#213D56] md:text-4xl font-semibold text-center mb-4">
        Harvoxx School &{" "}
        <span className="relative inline-block ">
          Programs
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
      <p className="text-xl text-center mb-12">
        Choose from a range of pricing options tailored to fit your{" "}
        <span className="text-[#ffcc00]">goals and budget.</span>
      </p>

      {/* Navigation Buttons */}
      <div
        className="absolute top-1/2 left-2 z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#ffcc00] opacity-80 hover:opacity-100 text-[#051A2B] rounded-full cursor-pointer transform -translate-y-1/2"
        ref={prevRef}
      >
        <FaChevronLeft size={16} className="md:size-8" />
      </div>
      <div
        className="absolute top-1/2 right-2 z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#ffcc00] opacity-80 hover:opacity-100 text-[#051A2B] rounded-full cursor-pointer transform -translate-y-1/2"
        ref={nextRef}
      >
        <FaChevronRight size={16} className="md:size-8" />
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="pricing-swiper"
      >
        {pricingData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 h-full flex flex-col min-h-[460px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-[#213D56] mb-1">
                {item.title}
              </h2>
              <span className="text-sm text-gray-600 mb-2">{item.package}</span>
              <p className="flex items-center gap-2 text-sm text-[#213D56] mb-2">
                <IoTime /> {item.duration}
              </p>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                <span className="font-semibold">Tools:</span>
                <br />
                {item.tools}
              </p>
              <button
                onClick={() => handleReadMore(item)}
                className="mt-4 bg-[#ffcc00] hover:bg-transparent border border-[#ffcc00] text-black hover:text-[#ffcc00] px-6 py-2 rounded transition-all duration-300"
              >
                <Link to={`/program/${item.groupId || item.id}`}>View Details</Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={handleSeeAllCourses}
          className="bg-[#ffcc00] hover:bg-transparent border border-[#ffcc00] text-black hover:text-[#ffcc00] px-4 py-2 rounded transition-all duration-300"
        >
          <Link to="/program">See All Courses</Link>
        </button>
      </div>
    </div>
  );
}

export default Program;
