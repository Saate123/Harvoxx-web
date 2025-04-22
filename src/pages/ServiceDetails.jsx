import React from "react";
import { useParams } from "react-router-dom";
import Img from "../assets/services.png";
import Img2 from "../assets/newsletter.png";
import Img3 from "../assets/consultancy.png";
import Img4 from "../assets/school.png";
import Img5 from "../assets/harvcation.png";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";

const serviceDetails = {
  "web-dev": {
    title: "Website and Mobile App Design & Development",
    image: Img,
    description: [
      <>
        <span className="text-[#ffcc00]">Build With Harvoxx</span> designs &
        Develops websites for interested clients (individuals, firms, companies,
        NGOs, government agencies etc) at an affordable rate. We also deliver to
        our clients in record time as we do not encourage extending agreed
        deadlines with clients.
      </>,
      <>
        We ensure that we deliver to our clients on or before an agreed date. We
        understand the importance of having an amazing and secured website or
        App, hence we employ latest programming languages and API’s to build any
        product for our clients.
      </>,
      <>
        We will give a website or App that is so good and provides the
        experience your users expects. The most comforting fact is that we will
        add some mind-blowing features to the website or App you want us to
        build for you, just to make it excellent and unique.
      </>,
    ],
  },
  "branding-marketing": {
    title: "Branding & Marketing",
    image: Img2,
    description: [], // Handled with custom layout
  },
  consultancy: {
    title: "Consultancy",
    image: Img3,
    description: [
      "At Harvoxx Tech Hub, our consultancy arm is the compass guiding businesses through the ever-evolving tech landscape. Leveraging our expertise, we provide strategic insights, innovative solutions, and streamlined processes.",
      "Whether it's navigating digital transformation, optimizing IT infrastructure, or enhancing cybersecurity, Harvoxx Consultancy ensures your business stays at the forefront of technology.",
      "Our certified professionals bring a wealth of experience, ensuring tailored strategies that align with your goals. Partner with Harvoxx Consultancy for unparalleled guidance, unlocking the full potential of technology for sustainable growth and success in the dynamic world of business.",
    ],
  },
  "harvoxx-school": {
    image: Img4,
    description: [], // Handled with custom layout
  },
  harvcubation: {
    title: "HARVCUBATION",
    subtitle: "(Incubation for Tech Startups)",
    image: Img5,
    description: [
      <>
        Harvoxx Tech Hub’s <span className="text-[#ffcc00]">Techlauncher</span>{" "}
        , prides herself as the platform where successful startups emerge. We
        are focused on ensuring that we help tech startups launch their products
        successfully and grow exponentially.
      </>,
      "With a focus on developing business models, go-to-market strategies, legal documentation, and fundraising, TechLauncher is a driving force behind the 14+ startups currently incubating at the hub. The monthly Startup Converge meetup further fosters collaboration and synergy among the startup teams.",
    ],
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  const { title, image, description } = service;
  const isBranding = id === "branding-marketing";
  const isSchool = id === "harvoxx-school";

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {isBranding ? (
          <>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-xl font-bold text-[#213D56] mb-4">
                  Branding
                </h2>
                <p className="text-[#333] mb-4">
                  It is no longer news that we have assembled the best hands to
                  provide our clients the best branding services. We acknowledge
                  the fact that having a top-notch design and branding is to
                  attract customers and clients to your business is phenomenally
                  important.
                </p>
                <p className="text-[#333] mb-4">
                  We think outside the box to come up with original and ground
                  breaking designs that matches where you are going.
                  <br /> Our creativity in delivering this service is why lots
                  of firms and individuals have trusted us with their projects.
                </p>
                <p className="text-[#333] mb-6">
                  Truth is, we don’t just design logos, brochures, posters,
                  handbills, business cards, banners etc, we go a step to do
                  professional branding for your business. Our only intention is
                  to take you to the zenith and stay with you there
                </p>
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
            <div className="mt-4">
              <h2 className="text-xl font-bold text-[#213D56] mb-4">
                Digital Marketing
              </h2>
              <p className="text-[#333] mb-4">
                We know you want to put what you do in front of potential
                customers/clients out there, we know you want to reach out to
                millions of people.
                <br />
                With our digital marketing services, you can actually achieve
                that and even more. We can help you:
              </p>
              <ul className="list-disc list-inside text-[#333] mb-6 space-y-2">
                <li>Do content marketing</li>
                <li>Increase your online presence</li>
                <li>Increase your brand awareness</li>
                <li>Establish your business/brand on social media</li>
                <li>Increase website traffic</li>
                <li>Drive sales for you</li>
                <li>Drive leads for you</li>
                <li>Develop email marketing structure and campaigns</li>
                <li>Pay per click system search engine optimization</li>
              </ul>
              <p className="text-[#333]">
                We want your business to grow, so we are ready to give in our
                best to help you record mouth watering turn-overs.
              </p>
            </div>
          </>
        ) : isSchool ? (
          <>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#213D56] mb-4">
                  About <span className="text-[#ffcc00]">Harvoxx School</span>:
                  Transformative Education for a Digital Future
                </h2>
                <p className="text-[#333] mb-4">
                  Welcome to{" "}
                  <span className="text-[#ffcc00]">Harvoxx School</span>, where
                  we redefine education for the digital age. At the intersection
                  of innovation and expertise, Harvoxx School is committed to
                  empowering individuals with the skills and knowledge needed to
                  thrive in a rapidly evolving world.
                </p>
                <p className="text-[#333] mb-4">
                  <strong>Our Vision:</strong> Harvoxx School envisions a future
                  where education transcends boundaries, creating a dynamic and
                  inclusive learning environment.
                </p>
                <p className="text-[#333] mb-8">
                  We believe in equipping learners with not just theoretical
                  knowledge but practical skills that lead to meaningful and
                  impactful contributions in their chosen fields.
                </p>
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
            <div className="mt-4">
              <h3 className="text-xl font-bold text-[#213D56] mb-4">
                Why Choose Harvoxx School?
              </h3>
              <ul className="list-decimal list-inside space-y-4 text-[#333]">
                <li>
                  <strong className="text-[#213D56]">
                    Cutting-Edge Curriculum:
                  </strong>
                  <br />
                  Our curriculum is meticulously crafted to reflect the latest
                  industry trends and technological advancements. Stay ahead
                  with courses designed for the demands of today and tomorrow
                </li>
                <li>
                  <strong className="text-[#213D56]">
                    Diverse Learning Paths:
                  </strong>
                  <br /> Whether you're exploring technology, business, or
                  creative fields, Harvoxx School offers a diverse range of
                  courses tailored to your passions and career aspiration
                </li>
                <li>
                  <strong className="text-[#213D56]">
                    Experiential Learning:
                  </strong>
                  <br /> We emphasize hands-on, experiential learning. Our
                  approach goes beyond traditional teaching methods, ensuring
                  that you gain practical insights and skills relevant to your
                  chosen field.
                </li>
                <li>
                  <strong className="text-[#213D56]">
                    Industry-Experienced Instructors:
                  </strong>
                  <br /> Learn from industry-experienced instructors who bring
                  real-world insights to the classroom. Benefit from their
                  expertise and guidance as you navigate your educational
                  journey.
                </li>
                <li>
                  <strong className="text-[#213D56]">
                    Community and Collaboration:
                  </strong>
                  <br />
                  Join a vibrant community of learners, fostering collaboration
                  and networking opportunities. At Harvoxx School, we believe
                  that learning is a collective endeavor, and our community is
                  the cornerstone of our success.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-[#213D56]">
                Your Journey Starts Here:
              </p>
              <p className="mt-2 text-[#333]">
                Harvoxx School is not just an educational institution; it's a
                catalyst for personal and professional transformation. Whether
                you're starting your career, upskilling, or pursuing a passion,
                embark on a journey of discovery and growth with Harvoxx School.
              </p>
              <p className="mt-2 font-semibold text-[#213D56]">
                Harvoxx School – Shaping Futures, Empowering Minds.
              </p>
            </div>
          </>
        ) : (
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
        )}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
