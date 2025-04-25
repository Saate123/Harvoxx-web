import React from "react";

const programData = [
  {backgroundImage: "Img",}
]

const ProgramHero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px] lg:h-[500px]"
      style={{
        backgroundImage: "",
      }} // Replace with your actual image URL
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Web Development
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Master the art of web development, from creating stunning
              interfaces to building powerful backends. Choose your
              path—Frontend, Backend, or go Fullstack for the complete skill
              set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHero;
