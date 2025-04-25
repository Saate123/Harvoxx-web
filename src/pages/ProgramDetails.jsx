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
    title: "WEB DEV. (FRONTEND) - Basic",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "HTML, CSS, JavaScript",
    amount: 150000,
  },
  "frontend-dev-adv": {
    image: Img3,
    title: "WEB DEV. (FRONTEND) - Advanced",
    package: "Advance",
    duration: "4 months",
    tools: "HTML, CSS, JavaScript, Vue.Js, React.js",
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
    title: "DIGITAL MARKETING - Basic",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools:
      "SM- Marketing, Content Marketing, Email Marketing, Community Management",
    amount: 500000,
  },
  "digital-marketing-adv": {
    image: Img6,
    title: "DIGITAL MARKETING - Advanced",
    package: "Advanced",
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
    title: "DATA ANALYTICS - Basic",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Excel, Power BI, SQL, Python",
    amount: 150000,
  },
  "data-analytics-adv": {
    image: Img11,
    title: "DATA ANALYTICS - Advanced",
    package: "Advanced",
    duration: "5 months",
    tools: "Adv. Excel, Power BI, Adv. SQL, ADV. Python, Tableau",
    amount: 270000,
  },
  "cyber-security-basic": {
    image: Img12,
    title: "CYBER SECURITY - Basic",
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Nmap, Burp Suite, Nessus, Firece, Wfuzz",
    amount: 150000,
  },
  "cyber-security-adv": {
    image: Img12,
    title: "CYBER SECURITY - Advanced",
    package: "Advanced",
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
  const toggleablePrograms = ["digital-marketing", "data-analytics", "cyber-security"];
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
      <main className="flex px-4 py-10 max-w-6xl mx-auto">
        {isWebDev ? (
          <div className="w-full">
            <h1 className="text-3xl text-[#213D56] font-bold text-left mb-6">
              Web Development
            </h1>
            <p className="text-left text-gray-600 mb-10">
              This section focuses on Frontend Development and has two
              categories: Beginner-Intermediate and Advanced.
            </p>
            {isToggleEnabled && (
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setTrack("basic")}
                  className={`px-4 py-2 rounded-bl-full rounded-tl-full w-[620px] h-[50px] ${
                    track === "basic"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Basic - Intermediate
                </button>
                <button
                  onClick={() => setTrack("adv")}
                  className={`px-4 py-2 rounded-tr-full rounded-br-full w-[620px] h-[50px] ${
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
                  className="bg-white rounded-lg shadow-md overflow-hidden grid md:grid-cols-2 gap-4"
                >
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-1">{course.title}</h2>
                      <p className="text-sm text-gray-500 mb-2">
                        {course.package}
                      </p>
                      <p className="flex items-center gap-2 text-gray-600 mb-2">
                        <IoTime /> {course.duration}
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Tools:</strong> {course.tools}
                      </p>
                      <p className="font-semibold text-blue-600 text-lg">
                        ₦
                        {course.amount ? course.amount.toLocaleString() : "N/A"}
                      </p>
                    </div>
                    <button
                      className="mt-4 bg-[#ffcc00] text-[#213D56] px-4 py-2 rounded w-fit hover:opacity-90"
                      onClick={() => handleEnroll(course.title)}
                    >
                      Enroll Now
                    </button>
                  </div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-64 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : program ? (
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center mb-6">
              {program.title}
            </h1>

            {isToggleEnabled && (
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setTrack("basic")}
                  className={`px-4 py-2 rounded-bl-full rounded-tl-full w-[620px] h-[50px] ${
                    track === "basic"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Basic - Intermediate
                </button>
                <button
                  onClick={() => setTrack("adv")}
                  className={`px-4 py-2 rounded-tr-full rounded-br-full w-[620px] h-[50px] ${
                    track === "adv"
                      ? "bg-[#213D56] text-white"
                      : "bg-[#8F8F8F] text-white"
                  }`}
                >
                  Advanced
                </button>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-3">
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
                className="h-64 w-full object-cover rounded"
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
