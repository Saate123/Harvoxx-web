import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoTime } from "react-icons/io5";
import Header from "../component/Header";
import Footer from "../component/Footer";

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
import Bg from "../assets/pd-bg.jpg"
import Bg2 from "../assets/pm-bg.jpg"
import Bg3 from "../assets/web-bg.jpg"
import Bg4 from "../assets/digi.jpg"
import Bg5 from "../assets/graphic.jpg"
import Bg6 from "../assets/science.jpg"
import Bg7 from "../assets/analytic.jpg"
import Bg8 from "../assets/cyber-bg.png"
import Bg9 from "../assets/mobile-bg.jpg"

const programDetails = {
  "product-design": {
    image: Img,
    title: "PRODUCT DESIGN (UI/UX)",
    label: "Product Design",
    package: "Full Package",
    duration: "6 months",
    tools: "Figma, User Experience (UX), Product Requirement Document (PRD)",
    paragraph:
      "Master the art of Product Design, from user research to pixel-perfect interfaces. Learn how to build intuitive, user-centered products that solve real problems and drive impact. Whether you're just starting out or looking to enhance your design skills, our courses will guide you through the creative process—turning ideas into well-designed, functional products.",
    amount: 150000,
    backgroundImage: Bg,
  },
  "product-mgt": {
    image: Img2,
    title: "PRODUCT MANAGEMENT",
    label: "Product Management",
    package: "Full Package",
    duration: "6 months",
    paragraph:
      "Become the visionary behind the next big product. Learn how to define, build, and deliver market-leading solutions with our Product Management courses. From strategy development to execution, you'll gain the skills to manage cross-functional teams, understand market trends, and lead the product lifecycle from start to finish.",
    tools:
      "Jira, Slack, Whimsical, Sketch Asana, Roadmunk, Trello, Github, Prodpad Google Analytics, Monday.com, Confluence",
    amount: 200000,
    backgroundImage: Bg2,
  },
  "frontend-dev-basic": {
    image: Img3,
    package: "Basic - Intermediate",
    label: "Website Development",
    duration: "3 months",
    tools: "HTML, CSS, JavaScript",
    amount: 150000,
    backgroundImage: Bg3,
    paragraph:
      "Master the art of web development, from creating stunning interfaces to building powerful backends. Choose your path—Frontend, Backend, or go Fullstack for the complete skill set.",
  },
  "frontend-dev-adv": {
    image: Img3,
    package: "Advance",
    label: "Website Development",
    duration: "4 months",
    tools: "HTML, CSS, JavaScript, Vue.Js, React.js",
    amount: 220000,
    backgroundImage: Bg3,
    paragraph:
      "Master the art of web development, from creating stunning interfaces to building powerful backends. Choose your path—Frontend, Backend, or go Fullstack for the complete skill set.",
  },
  "backend-dev": {
    image: Img4,
    title: "WEB DEV. (BACKEND)",
    label: "Website Development",
    package: "Full Package",
    duration: "4 months",
    tools: "PHP, Vue, MySQL, Node.js",
    amount: 300000,
    description:
      "This section is for Backend Development as a single category.",
    backgroundImage: Bg3,
    paragraph:
      "Master the art of web development, from creating stunning interfaces to building powerful backends. Choose your path—Frontend, Backend, or go Fullstack for the complete skill set.",
  },
  "fullstack-dev": {
    image: Img5,
    title: "WEB DEV. (FULLSTACK)",
    label: "Website Development",
    package: "Full Package",
    duration: "6 months",
    tools:
      "HTML, CSS, JavaScript, REACT, VUE JS, PHP, NODE JS, GOLANG, SQL DATABASE, SERVER DEPLOYMENT ",
    amount: 500000,
    description:
      "This new section is dedicated to Fullstack Development, where learners combine both Frontend and Backend skills to build complete web applications.",
    backgroundImage: Bg3,
    paragraph:
      "Master the art of web development, from creating stunning interfaces to building powerful backends. Choose your path—Frontend, Backend, or go Fullstack for the complete skill set.",
  },
  "digital-marketing-basic": {
    image: Img6,
    package: "Basic - Intermediate",
    label: "Digital Marketing",
    duration: "3 months",
    tools:
      "SM- Marketing, Content Marketing, Email Marketing, Community Management",
    amount: 500000,
    description:
      "This course is divided into two categories: Beginner to Intermediate and Advanced. Whether you're starting fresh or looking to enhance your expertise, each level is designed to equip you with the right strategies and tools for success in digital marketing.",
    backgroundImage: Bg4,
    paragraph:
      "Master the strategies behind effective digital marketing. From understanding SEO to creating targeted ad campaigns, our courses will guide you through the tools and tactics to build a thriving online presence. Whether you're just starting out or looking to refine your skills, we have the courses to elevate your brand in the digital landscape.",
  },
  "digital-marketing-adv": {
    image: Img6,
    package: "Advanced",
    label: "Digital Marketing",
    duration: "3 months",
    tools:
      "SM- Marketing, Content Marketing, Email Marketing, Community Management, Mobile Marketing, Affiliate Marketing, Search Engine Marketing (SEM), Search Engine Optimization (SEO)",
    amount: 500000,
    description:
      "This course is divided into two categories: Beginner to Intermediate and Advanced. Whether you're starting fresh or looking to enhance your expertise, each level is designed to equip you with the right strategies and tools for success in cybersecurity.",
    backgroundImage: Bg4,
    paragraph:
      "Master the strategies behind effective digital marketing. From understanding SEO to creating targeted ad campaigns, our courses will guide you through the tools and tactics to build a thriving online presence. Whether you're just starting out or looking to refine your skills, we have the courses to elevate your brand in the digital landscape.",
  },
  graphics: {
    image: Img7,
    title: "GRAPHICS DESIGN",
    package: "Full Package",
    duration: "3 months",
    tools: "CorelDRAW, Adobe Photoshop",
    amount: 120000,
    backgroundImage: Bg5,
    paragraph:
      "Unleash your creativity with our comprehensive Graphics Design course. Learn the principles of design, color theory, typography, and composition while mastering industry-standard tools like Adobe Photoshop, Illustrator, and Canva. Whether you're designing for branding, marketing, or digital content, this course will equip you with the skills to create visually compelling designs that stand out.",
  },
  "mobile-dev": {
    image: Img8,
    title: "MOBILE APP DEV.",
    label: "Mobile App Development",
    package: "Full Package",
    duration: "4 months",
    tools: "Flutter (Dart), React Native",
    amount: 500000,
    backgroundImage: Bg9,
    paragraph:
      "Learn how to design, develop, and deploy mobile apps that users love. From user interface design to backend integration, our Mobile App Development course covers everything you need to create seamless and engaging mobile experiences. Whether you're targeting iOS or Android, gain hands-on experience with popular tools and frameworks like React Native, Flutter, and Swift.",
  },
  "data-science": {
    image: Img9,
    title: "DATA SCIENCE",
    label: "Data Science",
    package: "Full Package",
    duration: "3 months",
    tools:
      "Python(Numpy, Pandas, Matplotlib, Seaborn, Scikit-Learn), Power BI, SQL, Tableau, Excel, Apache Spark, TensorFlow, Rapid Miner ",
    amount: 300000,
    backgroundImage: Bg6,
    paragraph:
      "Master the art of extracting valuable insights from data. This course covers everything from data collection and analysis to machine learning and predictive modeling. Learn how to use powerful tools like Python, R, SQL, and TensorFlow to solve real-world problems and make data-driven decisions. Whether you're a beginner or looking to refine your skills, this course will equip you with the knowledge to thrive in the data-driven world.",
  },
  "data-analytics-basic": {
    image: Img10,
    package: "Basic - Intermediate",
    label: "Data Analytics",
    duration: "3 months",
    tools: "Excel, Power BI, SQL, Python",
    amount: 150000,
    description:
      "This course is divided into two categories: Beginner to Intermediate and Advanced. Whether you're starting fresh or looking to enhance your expertise, each level is designed to equip you with the right strategies and tools for success in cybersecurity.",
    backgroundImage: Bg7,
    paragraph:
      "Master the strategies behind effective digital marketing. From understanding SEO to creating targeted ad campaigns, our courses will guide you through the tools and tactics to build a thriving online presence. Whether you're just starting out or looking to refine your skills, we have the courses to elevate your brand in the digital landscape.",
  },
  "data-analytics-adv": {
    image: Img11,
    package: "Advanced",
    label: "Data Analytics",
    duration: "5 months",
    tools: "Adv. Excel, Power BI, Adv. SQL, ADV. Python, Tableau",
    amount: 270000,
    description:
      "This course is divided into two categories: Beginner to Intermediate and Advanced. Whether you're starting fresh or looking to enhance your expertise, each level is designed to equip you with the right strategies and tools for success in cybersecurity.",
    backgroundImage: Bg7,
    paragraph:
      "Master the strategies behind effective digital marketing. From understanding SEO to creating targeted ad campaigns, our courses will guide you through the tools and tactics to build a thriving online presence. Whether you're just starting out or looking to refine your skills, we have the courses to elevate your brand in the digital landscape.",
  },
  "cyber-security-basic": {
    image: Img12,
    package: "Basic - Intermediate",
    label: "Cyber Security",
    duration: "3 months",
    tools: "Nmap, Burp Suite, Nessus, Firece, Wfuzz",
    amount: 150000,
    description:
      "This course is divided into two categories: Beginner to Intermediate and Advanced. Whether you're starting fresh or looking to enhance your expertise, each level is designed to equip you with the right strategies and tools for success in cybersecurity.",
    backgroundImage: Bg8,
    paragraph:
      "In today’s digital world, cybersecurity is more critical than ever. Learn how to protect systems, networks, and data from cyber threats. Whether you're a beginner looking to understand the fundamentals or an advanced learner diving into penetration testing and ethical hacking, this course equips you with the skills to safeguard the digital landscape.",
  },
  "cyber-security-adv": {
    image: Img12,
    package: "Advanced",
    label: "Cyber Security",
    duration: "6 months",
    tools:
      "Nmap, Katana, Nuclei, Wireshark, Splunk, Metasploit framework and scripting, Desired State of Configurations.",
    amount: 350000,
    description:
      "This course is divided into two categories: Beginner to Intermediate and Advanced. Whether you're starting fresh or looking to enhance your expertise, each level is designed to equip you with the right strategies and tools for success in cybersecurity.",
    backgroundImage: Bg8,
    paragraph:
      "In today’s digital world, cybersecurity is more critical than ever. Learn how to protect systems, networks, and data from cyber threats. Whether you're a beginner looking to understand the fundamentals or an advanced learner diving into penetration testing and ethical hacking, this course equips you with the skills to safeguard the digital landscape.",
  },
};

const ProgramDetails = () => {
  const { programId } = useParams();
  const [track, setTrack] = useState("basic");

  const isWebDev = programId === "web-development";
  const toggleablePrograms = [
    "digital-marketing",
    "data-analytics",
    "cyber-security",
  ];
  const baseId = toggleablePrograms.includes(programId)
    ? `${programId}-${track}`
    : programId;

  const program = programDetails[baseId];
  const isToggleEnabled = toggleablePrograms.includes(programId) || isWebDev; // Enable toggle for Web Dev

  const webDevPrograms = [
    programDetails["frontend-dev-basic"],
    programDetails["frontend-dev-adv"],
    programDetails["backend-dev"],
    programDetails["fullstack-dev"],
  ];

  // Filter web development programs based on the selected track
  const displayedWebDevPrograms = isWebDev
    ? webDevPrograms.filter((p) => {
        if (track === "basic") {
          return p.package.includes("Basic") || p.package.includes("Full");
        } else if (track === "adv") {
          return p.package.includes("Advance") || p.package.includes("Full");
        }
        return true; // Show all if no track selected (shouldn't happen)
      })
    : [];

  const handleEnroll = (title) => {
    alert(`Enrolling for ${title}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div
        className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-12"
        style={{ backgroundImage: `url(${program?.backgroundImage || Bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#02192E] opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-[100%] text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight">
            {program?.label || "WEB DEVELOPMENT"}
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 mx-auto">
            {program?.paragraph || "Master the art of web development, from creating stunning interfaces to building powerful backends. Choose your path—Frontend, Backend, or go Fullstack for the complete skill set."}
          </p>
        </div>
      </div>
      <main className="flex px-4 py-10 w-full mx-auto">
        {isWebDev ? (
          <div className="w-full">
            <div className="w-full pl-10">
              <h1 className="text-[26px] text-[#213D56] font-bold text-left mb-6">
                WEB DEVELOPMENT (FRONTEND)
              </h1>
              <p className="text-left text-black text-[18px] mb-10">
                This section focuses on Frontend Development and has two
                categories: Beginner-Intermediate and Advanced.
              </p>
            </div>
            {isToggleEnabled && (
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setTrack("basic")}
                  className={`px-4 py-2 rounded-bl-[20px] rounded-tl-[20px] w-[620px] h-[50px] ${
                    track === "basic"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Basic - Intermediate
                </button>
                <button
                  onClick={() => setTrack("adv")}
                  className={`px-4 py-2 rounded-tr-[20px] rounded-br-[20px] w-[620px] h-[50px] ${
                    track === "adv"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Advanced
                </button>
              </div>
            )}
            <div className="grid gap-10">
              {displayedWebDevPrograms.map((course, idx) => (
                <div
                  key={idx}
                  className={`${
                    course.title === "WEB DEV. (BACKEND)"
                      ? "bg-[#F2F2F2]"
                      : "bg-white"
                  } overflow-hidden grid md:grid-cols-2 gap-4 px-10 py-6 h-[500px]`}
                >
                  <div className="p-6 flex flex-wrap justify-between w-[1240px] h-[398px] items-center">
                    <div className="w-full mb-4">
                      <h2 className="text-xl font-bold mb-1">{course.title}</h2>
                      <p>{course.description}</p>
                    </div>
                    <div className=" flex flex-col items-start w-[500px]">
                      <p className="text-sm text-gray-500 mb-2">
                        {course.package}
                      </p>
                      <p className="flex items-center gap-2 text-gray-600 mb-2">
                        <IoTime /> {course.duration}
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Tools:</strong>
                        <br /> {course.tools}
                      </p>
                      <p className="font-semibold text-black text-lg">
                        ₦
                        {course.amount ? course.amount.toLocaleString() : "N/A"}
                      </p>
                      <button
                        className="mt-4 bg-[#ffcc00] text-[#213D56] px-4 py-2 rounded w-fit hover:opacity-90"
                        onClick={() => handleEnroll(course.title)}
                      >
                        Enroll Now
                      </button>
                    </div>
                    <div className="w-1/2 flex h-[398px] pb-20 justify-center items-center">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-full rounded-[30px] w-[620px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : program ? (
          <div className="w-full px-10">
            <p className="text-left text-black text-[18px] mb-10">
              {program.description}
            </p>

            {isToggleEnabled && (
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setTrack("basic")}
                  className={`px-4 py-2 rounded-bl-[20px] rounded-tl-[20px] w-[620px] h-[50px] ${
                    track === "basic"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Basic - Intermediate
                </button>
                <button
                  onClick={() => setTrack("adv")}
                  className={`px-4 py-2 rounded-tr-[20px] rounded-br-[20px] w-[620px] h-[50px] ${
                    track === "adv"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Advanced
                </button>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-10 items-center h-[398px] py-4">
              <div className="space-y-3">
                <h2 className="text-xl font-bold mb-1 text-[#213D56]">
                  {program.title}
                </h2>
                <p className="text-sm text-gray-500">{program.package}</p>
                <p className="flex items-center gap-2 text-gray-600">
                  <IoTime /> {program.duration}
                </p>
                <p>
                  <strong>Tools:</strong> {program.tools}
                </p>
                <p className="text-lg font-semibold text-[#213D56]">
                  ₦{program.amount ? program.amount.toLocaleString() : "N/A"}
                </p>
                <button
                  className="bg-[#ffcc00] px-6 py-2 rounded hover:bg-transparent border border-[#ffcc00] text-black hover:text-[#ffcc00] transition-all duration-300"
                  onClick={() => handleEnroll(program.title)}
                >
                  Enroll Now
                </button>
              </div>
              <img
                src={program.image}
                alt={program.title}
                className="h-[398px] w-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500 font-medium">
            Program not found.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetails;
