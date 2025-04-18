import React from "react";
import Img from "../assets/newsletter.png";
import CoreValues from "../component/CoreValues";
import Footer from "../component/Footer";
import Header from "../component/Header";

function About() {
  return (
    <div className="bg-white w-full">
      <Header />
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 gap-12">
        {/* Left: Text Content */}
        <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#213D56] mb-6">
            About <span className="text-[#ffcc00]">Harvoxx Tech. Hub</span>
          </h2>
          <p className="text-[#213D56] text-base md:text-lg leading-relaxed mb-4">
            HTH is an Innovative Hub designed to be a business growing
            community. It is a great set-up where ideas and opportunities are
            maximized. We have an enabling environment that guarantees seamless
            execution of ideas, encourage creativity, entrepreneurship and
            leadership mindset.
          </p>
          <p className="text-[#213D56] text-base md:text-lg leading-relaxed mb-4">
            We are in a mission to create a sustainable support system that will
            give birth to a start-up community which can push inspiring
            entrepreneurs to the zenith and stay with them. We pride a strong
            team of passionate developers and young leaders determined to make a
            significant impact the society. We are focused on socio economic
            technology improvements. We are focused on creativities that
            promotes networking, provide top-notch training and adequate
            training and coaching.
          </p>
          <p className="text-[#213D56] text-base md:text-lg leading-relaxed">
            It is a community that has a fast-growing alliance with Angel
            investors, VCs, NGOs, and other tech communities.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="relative w-full md:w-[558px] h-auto md:h-[500px]">
          {/* Gradient Background Layers (Desktop Only) */}
          <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-r from-[#051A2B] to-[#0e283f] rounded-xl z-10 hidden sm:block"></div>
          <div className="absolute top-20 left-12 w-[80%] h-[80%] bg-[#011D10] rounded-xl z-20 hidden sm:block"></div>
          <div className="absolute top-18 left-14 w-[80%] h-[80%] bg-[#0E283F] rounded-xl z-20 hidden sm:block"></div>

          {/* Main Image */}
          <div className="relative z-30 lg:w-[80%] lg:h-[80%] rounded-xl flex items-center justify-center overflow-hidden sm:absolute sm:top-16 sm:left-16">
            <img
              src={Img}
              alt="About"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="px-6 md:px-16 py-10 bg-white text-[#213D56] space-y-2 text-center md:text-left">
        <p className="text-base md:text-lg leading-relaxed">
          Right here is an organized hub of seasoned and aspiring techpreneurs,
          developers, graphic designers, and innovators with a strong passion
          for technology and entrepreneurship.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          We are on a mission to create a sustainable support system that will
          give birth to a start-up community capable of pushing inspiring
          entrepreneurs to the zenith and staying with them. We pride ourselves
          on a strong team of passionate developers and young leaders determined
          to make a significant impact on society.
        </p>
      </div>

      <CoreValues />
      <Footer />
    </div>
  );
}

export default About;
