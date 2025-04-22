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

const programDetails = {
  "product-design": {
    image: Img,
    title: "PRODUCT DESIGN (UI/UX)",
    package: "Full Package",
    duration: "6 months",
    tools: "Figma, User Experience (UX), Product Requirement Document (PRD)",
    amount: 150000,
  },
  "product-mgt": {
    image: Img2,
    title: "PRODUCT MANAGEMENT",
    package: "Full Package",
    duration: "6 months",
    tools:
      "Jira, Slack, Whimsical, Sketch Asana, Roadmunk, Trello, Github, Prodpad Google Analytics, Monday.com, Confluence",
    amount: 200000,
  },
  "frontend-dev-basic": {
    image: Img3,
    title: "WEB DEV. (FRONTEND)",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "HTML, CSS, JavaScript",
    amount: 150000,
  },
  "frontend-dev-adv": {
    image: Img3,
    title: "WEB DEV. (FRONTEND)",
    package: "Advance",
    duration: "4 months",
    tools: "HTML, CSS, JavaScript",
    amount: 220000,
  },
  "backend-dev": {
    image: Img4,
    title: "WEB DEV. (BACKEND)",
    package: "Full Package",
    duration: "4 months",
    tools: "PHP, Vue, MySQL, Node.js",
    amount: 300000,
  },
  "fullstack-dev": {
    image: Img5,
    title: "WEB DEV. (FULLSTACK)",
    package: "Full Package",
    duration: "6 months",
    tools:
      "HTML, CSS, JavaScript, REACT, VUE JS, PHP, NODE JS, GOLANG, SQL DATABASE, SERVER DEPLOYMENT ",
    amount: 500000,
  },
  "digital-marketing-basic": {
    image: Img6,
    title: "DIGITAL MARKETING",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools:
      "SM- Marketing, Content Marketing, Email Marketing, Community Management",
    amount: 500000,
  },
  "digital-marketing-adv": {
    image: Img6,
    title: "DIGITAL MARKETING",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools:
      "SM- Marketing, Content Marketing, Email Marketing, Community Management, Mobile Marketing, Affiliate Marketing, Search Engine Marketing (SEM), Search Engine Optimization (SEO)",
    amount: 500000,
  },
  graphics: {
    image: Img7,
    title: "GRAPHICS DESIGN",
    package: "Full Package",
    duration: "3 months",
    tools: "CorelDRAW, Adobe Photoshop",
    amount: 120000,
  },
  "mobile-dev": {
    image: Img8,
    title: "MOBILE APP DEV.",
    package: "Full Package",
    duration: "4 months",
    tools: "Flutter (Dart), React Native",
    amount: 500000,
  },
  "data-science": {
    image: Img9,
    title: "DATA SCIENCE",
    package: "Full Package",
    duration: "3 months",
    tools:
      "Python(Numpy, Pandas, Matplotlib, Seaborn, Scikit-Learn), Power BI, SQL, Tableau, Excel, Apache Spark, TensorFlow, Rapid Miner ",
    amount: 300000,
  },
  "data-analytics-basic": {
    image: Img10,
    title: "DATA ANALYTICS",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Excel, Power BI, SQL, Python",
    amount: 150000,
  },
  "data-analytics-adv": {
    image: Img11,
    title: "DATA ANALYTICS",
    package: "Advance",
    duration: "5 months",
    tools: "Adv. Excel, Power BI, Adv. SQL, ADV. Python, Tableau",
    amount: 270000,
  },
  "cyber-basic": {
    image: Img12,
    title: "CYBER SECURITY",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Nmap, Burp Suite, Nessus, Firece, Wfuzz",
    amount: 150000,
  },
  "cyber-adv": {
    image: Img12,
    title: "CYBER SECURITY",
    package: "ADVANCE",
    duration: "6 months",
    tools:
      "Nmap, Katana, Nuclei, Wireshark, Splunk, Metasploit framework and scripting, Desired State of Configurations.",
    amount: 350000,
  },
};

const ProgramDetails = () => {
  const { programId } = useParams();
  const [track, setTrack] = useState("basic");

  const isWebDev = programId === "web-development";
  const toggleablePrograms = [
    "digital-marketing",
    "data-analytics",
    "cyber",
    "frontend-dev",
  ];
  const baseId = toggleablePrograms.includes(programId)
    ? `${programId}-${track}`
    : programId;

  const program = programDetails[baseId];
  const isToggleEnabled = toggleablePrograms.includes(programId);

  const webDevPrograms = [
    programDetails["frontend-dev"],
    programDetails["frontend-dev-adv"],
    programDetails["backend-dev"],
    programDetails["fullstack-dev"],
  ];

  const handleEnroll = (title) => {
    alert(`Enrolling for ${title}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex px-4 py-10 max-w-6xl mx-auto">
        {isWebDev ? (
          <div className="m-auto">
            <h1 className="text-3xl font-bold text-center mb-6">
              Web Development Tracks
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              {webDevPrograms.map((course, idx) => (
                <>
                  <h2 className="text-xl font-bold mb-1">{course.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{course.package}</p>
                  <p className="flex items-center gap-2 text-gray-600 mb-2">
                    <IoTime /> {course.duration}
                  </p>
                  <p className="text-sm mb-2">
                    <strong>Tools:</strong> {course.tools}
                  </p>
                  <p className="font-semibold text-blue-600">
                    ₦{course.amount.toLocaleString()}
                  </p>
                  <button
                    className="mt-3 bg-[#ffcc00] text-[#213D56] px-4 py-2 rounded"
                    onClick={() => handleEnroll(course.title)}
                  >
                    Enroll Now
                  </button>
                  <div
                    key={idx}
                    className=" rounded-lg shadow p-4 hover:shadow-lg transition-all"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-52 w-full object-cover rounded mb-4"
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        ) : program ? (
          <div>
            <h1 className="text-3xl font-bold text-center mb-6">
              {program.title}
            </h1>

            {isToggleEnabled && (
              <div className="flex justify-center gap-4 mb-6">
                <button
                  onClick={() => setTrack("basic")}
                  className={`px-4 py-2 rounded-full ${
                    track === "basic"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Basic
                </button>
                <button
                  onClick={() => setTrack("adv")}
                  className={`px-4 py-2 rounded-full ${
                    track === "adv"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Advanced
                </button>
              </div>
            )}

            <div className="flex">
              <div>
                <p className="text-sm text-gray-500 mb-2">{program.package}</p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <IoTime /> {program.duration}
                </p>
                <p className="mb-2">
                  <strong>Tools:</strong> {program.tools}
                </p>
                <p className="text-lg font-semibold text-[#213D56] mb-4">
                  ₦{program.amount.toLocaleString()}
                </p>
                <button
                  className="bg-[#ffcc00] px-6 py-2 rounded hover:bg-transparent border border-[#ffcc00] text-black hover:text-[#ffcc00] transition-all duration-300"
                  onClick={() => handleEnroll(program.title)}
                >
                  Enroll Now
                </button>
              </div>
              <div className=" shadow rounded-lg p-6 w-2xl mx-auto">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-64 w-full object-cover rounded mb-6"
                />
              </div>
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
