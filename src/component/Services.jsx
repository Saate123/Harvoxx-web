import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../assets/services.png";
import Img2 from "../assets/newsletter.png";
import Img3 from "../assets/consultancy.png";
import Img4 from "../assets/school.png";
import Img5 from "../assets/harvcation.png";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-dev",
      title: "Website and Mobile App Design & Development",
      description: [
        <>
          <span className="text-[#ffcc00]">Build With Harvoxx</span>{" "}
          designs & Develops websites for interested clients (individuals,
          firms, companies, NGOs, government agencies etc) at an affordable
          rate. We also deliver to our clients in record time as we do not
          encourage extending agreed deadlines with clients.
        </>,
        <>
          We ensure that we deliver to our clients on or before an agreed date.
          We understand the importance of having an amazing and secured website
          or App, hence we employ latest programming languages and API’s to
          build any product for our clients.
        </>,
      ],
      image: Img,
    },
    {
      id: "branding-marketing",
      title: "Branding & Marketing",
      description: [
        "It is no longer news that we have assembled the best hands to provide our clients the best branding services. We acknowledge the fact that having a top-notch design and branding to attract customers and clients to your business is phenomenally important.",
        "We think outside the box to come up with original and groundbreaking designs that matches where you are going. Our creativity in delivering this service is why lots of firms and individuals have trusted us with their projects.",
      ],
      image: Img2,
    },
    {
      id: "consultancy",
      title: "Consultancy",
      description: [
        "At Harvoxx Tech Hub, our consultancy arm is the compass guiding businesses through the ever-evolving tech landscape. Leveraging our expertise, we provide strategic insights, innovative solutions, and streamlined processes.",
        "Whether it's navigating digital transformation, optimizing IT infrastructure, or enhancing cybersecurity, Harvoxx Consultancy ensures your business stays at the forefront of technology.",
      ],
      image: Img3,
    },
    {
      id: "harvoxx-school",
      title: "Harvoxx School",
      subtitle: "(Capacity Building Initiative)",
      description: [
        <>
          <span className="text-[#ffcc00] ">Harvoxx School</span> is
          committed to empowering individuals with the skills and knowledge
          needed to thrive in a rapidly evolving world.
        </>,
        <>
          Harvoxx School envisions a future where education transcends
          boundaries, creating a dynamic and inclusive learning environment. We
          believe in equipping learners with not just theoretical knowledge but
          practical skills that lead to meaningful and impactful contributions
          in their chosen fields.
        </>,
      ],
      image: Img4,
    },
    {
      id: "harvcubation",
      title: "HARVCUBATION",
      subtitle: "(Incubation for Tech Startups)",
      description: [
        <>
          Harvoxx Tech Hub’s{" "}
          <span className="text-[#ffcc00] ">TechLauncher</span> prides
          herself as the platform where successful startups emerge. We are
          focused on ensuring that we help tech startups launch their products
          successfully and grow exponentially.
        </>,
        "With a focus on developing business models, go-to-market strategies, legal documentation, and fundraising, TechLauncher is a driving force behind the 14+ startups currently incubating at the hub. The monthly Startup Converge meetup further fosters collaboration and synergy among the startup teams.",
      ],
      image: Img5,
    },
  ];

  const handleReadMore = (service) => {
    navigate(`/services/${service.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl text[#213D56] font-semibold text-center mb-4">
        Our{" "}
        <span className="relative inline-block">
          Services
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
        Explore a wide range of{" "}
        <span className="text-[#ffcc00]">innovative</span> tech solutions
        designed to drive your business forward and unlock new opportunities.
      </p>

      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-20"
        >
          <div
            className={`flex flex-col-reverse ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } justify-between items-center gap-10`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#213D56] mb-2">
                {service.title}
              </h2>
              {service.subtitle && (
                <span className="text-2xl md:text-3xl font-normal text-[#213D56] mb-2 block">
                  {service.subtitle}
                </span>
              )}
              {service.description.map((para, i) => (
                <p key={i} className="text-base text-[#333] mb-3 mt-7">
                  {para}
                </p>
              ))}
              <button
                onClick={() => handleReadMore(service)}
                className="mt-4 bg-[#ffcc00] hover:bg-transparent border border-[#ffcc00] text-black hover:text-[#ffcc00] px-6 py-2 rounded transition-all duration-300"
              >
                <a href={`/services/${service.id}`}>Read More</a>
              </button>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-auto md:h-[400px]">
              <div className="absolute top-18 left-14 w-[80%] h-[80%] bg-[#0E283F] rounded-xl z-20 hidden sm:block"></div>

              <div className="relative z-30 w-full md:w-[80%] h-auto md:h-[80%] rounded-xl flex items-center justify-center overflow-hidden sm:absolute sm:top-16 sm:left-16">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
