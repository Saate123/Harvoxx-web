import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-gray-50 px-4 md:px-12 py-12 max-w-full mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        Our{" "}
        <span className="relative inline-block">
          Contact Information
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

      <p className="text-xl text-center mb-10">
        Reach out to us for
        <span className="text-[#ffcc00]"> inquiries</span> or{" "}
        <span className="text-[#ffcc00]"> support</span> —we’re here to help.
      </p>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 bg-[#051A2B] p-6 rounded-tl-lg rounded-bl-lg space-y-6 shadow-lg">
          <div>
            <h2 className="text-2xl text-white font-semibold mb-2">
              Get in Touch with Us
            </h2>
            <p className="text-white">
              We’re here to answer your questions and help you take the next
              step toward{" "}
              <span className="text-[#FFCC00]">innovative solutions.</span>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <BsFillTelephoneFill className="text-white text-xl mt-1" />
            <div className="text-white space-y-1">
              <p>+2349011684637</p>
              <p>+2349065308024</p>
              <p>+2349030643105</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-white text-xl mt-1" />
            <div className="text-white space-y-1">
              <p>Hello@harvoxx.com</p>
              <p>Help@harvoxx.com</p>
              <p>Admin@harvoxx.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <FaLocationDot className="text-white text-2xl mt-1" />
            <p className="text-white">
              Elzazi complex, Opposite Westharm petrol station along
              Gbalajam/Akpajo road, Woji (Odili Road, Port-Harcourt)
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="font-semibold mb-2 text-white">All Our Socials</p>
            <div className="flex space-x-4 text-xl">
              <Link
                to="https://www.facebook.com/HarvoxxOfficial/"
                target="_blank"
              >
                <FaFacebook className="text-[#FFCC00]" />
              </Link>
              <Link to="https://x.com/harvoxxh?lang=en" target="_blank">
                <FaXTwitter className="text-[#FFCC00]" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/harvoxx-tech-hub/"
                target="_blank"
              >
                <FaLinkedin className="text-[#FFCC00]" />
              </Link>
              <Link to="https://wa.me/2349011684637" target="_blank">
                <FaWhatsapp className="text-[#FFCC00]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-br-lg rounded-tr-lg shadow-lg">
          <form className="space-y-4">
            {/* Name and Email Side-by-side Always */}
            <div className="flex flex-row space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter the subject of your message"
                className="w-full border px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Type your message here"
                rows="7"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
              />
            </div>

            {/* Button Right-Aligned */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#ffcc00] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#051A2B] hover:text-[#ffcc00] transition-all h-[50px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
