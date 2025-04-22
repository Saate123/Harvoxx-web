// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const allPrograms = [
  {
    id: "product-design",
    title: "PRODUCT DESIGN (UI/UX)",
    image: Img,
    package: "Full Package",
    duration: "6 months",
    tools: "Figma, User Experience (UX), Product Requirement Document (PRD)",
  },
  {
    id: "product-mgt",
    title: "PRODUCT MANAGEMENT",
    image: Img2,
    package: "Full Package",
    duration: "6 months",
    tools: "Jira, Slack, Whimsical, Sketch, Asana, Roadmunk, Trello, Github",
  },
  {
    id: "frontend-dev",
    title: "WEB DEV. (FRONTEND)",
    image: Img3,
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "HTML, CSS, JavaScript",
  },
  {
    id: "backend-dev",
    title: "WEB DEV. (BACKEND)",
    image: Img4,
    package: "Full Package",
    duration: "4 months",
    tools: "PHP, Vue, MySQL, Node.js",
  },
  {
    id: "fullstack-dev",
    title: "WEB DEV. (FULLSTACK)",
    image: Img5,
    package: "Full Package",
    duration: "6 months",
    tools: "HTML, CSS, JavaScript, REACT, VUE JS, PHP, NODE JS, GOLANG",
  },
  {
    id: "digital-marketing-basic",
    title: "DIGITAL MARKETING (Basic - Intermediate)",
    image: Img6,
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "SM- Marketing, Content Marketing, Email Marketing",
  },
  {
    id: "digital-marketing-adv",
    title: "DIGITAL MARKETING (Advance)",
    image: Img6,
    package: "Advance",
    duration: "3 months",
    tools: "SM- Marketing, Content Marketing, Email Marketing",
  },
  {
    id: "graphics",
    title: "GRAPHICS DESIGN",
    image: Img7,
    package: "Full Package",
    duration: "3 months",
    tools: "CorelDRAW, Adobe Photoshop",
  },
  {
    id: "mobile-dev",
    title: "MOBILE APP DEV.",
    image: Img8,
    package: "Full Package",
    duration: "4 months",
    tools: "Flutter (Dart), React Native",
  },
  {
    id: "data-science",
    title: "DATA SCIENCE",
    image: Img9,
    package: "Full Package",
    duration: "3 months",
    tools: "Python (Numpy, Pandas, Matplotlib, Seaborn, Scikit-Learn)",
  },
  {
    id: "data-analytics-basic",
    title: "DATA ANALYTICS (Basic - Intermediate)",
    image: Img10,
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Excel, Power BI, SQL, Python",
  },
  {
    id: "data-analytics-adv",
    title: "DATA ANALYTICS (Advance)",
    image: Img11,
    package: "Advance",
    duration: "5 months",
    tools: "Adv. Excel, Power BI, Adv. SQL, ADV. Python, Tableau",
  },
  {
    id: "cyber-basic",
    title: "CYBER SECURITY (Basic - Intermediate)",
    image: Img12,
    package: "Basic - Intermediate",
    duration: "3 months",
    tools: "Nmap, Burp Suite, Nessus, Firece, Wfuzz",
  },
  {
    id: "cyber-adv",
    title: "CYBER SECURITY (Advance)",
    image: Img12,
    package: "Advance",
    duration: "6 months",
    tools: "Nmap, Katana, Nuclei, Wireshark, Splunk, Metasploit",
  },
];


const PricingDetail = () => {


  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="text-content">
        <h1 className="text-3xl md:text-4xl font-bold text-left text-[#213D56] mb-4">
          {title}
        </h1>
        <span className="text-2xl md:text-3xl font-normal text-[#213D56] mb-2 block">
          {service.subtitle}
        </span>
        {description.map((para, index) => (
          <p key={index} className="text-base text-[#333] mb-4">
            {para}
          </p>
        ))}
      </div>
      <div className="relative top-0 w-full md:w-[550px] h-auto md:h-[400px]">
        <div className="absolute top-18 right-9 w-[80%] h-[80%] bg-[#0E283F] rounded-xl z-20 hidden sm:block"></div>

        <div className="relative z-30 w-full md:w-[80%] h-auto md:h-[80%] rounded-xl flex items-center justify-center overflow-hidden sm:absolute sm:top-16 sm:left-16">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingDetail;
