import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoTime } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import Header from "../component/Header";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Newsletter from "../component/Newsletter";

import Img from "../assets/productdes.jpg";
import Img2 from "../assets/productmgt.png";
import Img3 from "../assets/webdevF.jpg";
import Img4 from "../assets/webdevB.jpg";
import Img5 from "../assets/webdevfull.jpg";
import Img6 from "../assets/digitalM.jpg";
import Img7 from "../assets/graphics.jpg";
import Img8 from "../assets/mobile.jpg";
import Img9 from "../assets/dataS.jpg";
import Img10 from "../assets/data.jpg";
import Img11 from "../assets/dataA.jpg";
import Img12 from "../assets/cyber.png";

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
    image: Img3,
    title: "WEB DEV. (FRONTEND)",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "HTML, CSS, JavaScript",
  },
  {
    id: "backend-dev",
    image: Img4,
    title: "WEB DEV. (BACKEND)",
    package: "Full Package",
    duration: "4 months",
    tools: "PHP, Vue, MySQL, Node.js",
  },
  {
    id: "fullstack-dev",
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
  {
    id: "mobile-dev",
    image: Img8,
    title: "MOBILE APP DEV.",
    package: "Full Package",
    duration: "4 months",
    tools: "Flutter (Dart), React Native",
  },
  {
    id: "data-science",
    image: Img9,
    title: "DATA SCIENCE",
    package: "Full Package",
    duration: "3 months",
    tools:
      "Python(Numpy, Pandas, Matplotlib, Seaborn, Scikit-Learn)...Read More",
  },
  {
    id: "data-analytics-basic",
    image: Img10,
    title: "DATA ANALYTICS",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Excel, Power BI, SQL, Python",
  },
  {
    id: "data-analytics-adv",
    image: Img11,
    title: "DATA ANALYTICS",
    package: "Advance",
    duration: "5 months",
    tools: "Adv. Excel, Power BI, Adv. SQL, ADV. Python, Tableau",
  },
  {
    id: "cyber-basic",
    image: Img12,
    title: "CYBER SECURITY",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Nmap, Burp Suite, Nessus, Firece, Wfuzz",
  },
  {
    id: "cyber-adv",
    image: Img12,
    title: "CYBER SECURITY",
    package: "ADVANCE",
    duration: "6 months",
    tools: "Nmap, Katana, Nuclei, Wireshark, Splunk, Metasploit...Read More",
  },
];

function Programs() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  const handleReadMore = (schoolId) => {
    navigate(`/school/${schoolId}`);
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10 relative">
        <h1 className="text-3xl text-[#213D56] md:text-4xl lg:text-left font-semibold text-center mb-4">
          Our{" "}
          <span className="relative inline-block">
            Programs & Pricing
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
        <p className="text-xl text-center lg:text-left mb-12">
          Choose from a range of pricing options tailored to fit your{" "}
          <span className="text-[#ffcc00]">goals and budget.</span>
        </p>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-between mb-8">
          <div className="flex w-full sm:max-w-md border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search courses here..."
              className="flex-grow px-4 py-2 text-sm outline-none"
            />
            <button className="bg-[#ffcc00] px-4 py-2 text-black hover:bg-[#e6b800] transition">
              <CiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Filter Swiper Tabs */}
        <div className="relative mb-10">
          <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10">
            <button
              ref={prevRef}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
            >
              <FaChevronLeft size={14} />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView="auto"
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mb-10 px-6"
          >
            {[
              "All",
              "Web Development",
              "Data Analytics",
              "Data Science",
              "Product Design",
              "Cyber Security",
              "Digital Marketing",
              "Product Management",
              "Mobile App Dev",
              "Graphic Design",
            ].map((category, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <button className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-[#ffcc00] hover:text-black transition">
                  {category}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
            <button
              ref={nextRef}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 h-full flex flex-col min-h-[460px]"
            >
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
                onClick={() => handleReadMore(item.id)}
                className="mt-auto bg-[#ffcc00] hover:bg-transparent border border-[#ffcc00] text-black hover:text-[#ffcc00] px-4 py-2 rounded transition-all duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Programs;
