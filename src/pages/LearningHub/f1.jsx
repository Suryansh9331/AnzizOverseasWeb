import React from "react";
import Img1 from "../../assets/Learninghub/chart.png"; 

const FeaturedVideoSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20 font-[Outfit]">
      <div className="container max-w-6xl mx-auto px-6 lg:px-16 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          Learning Resource Cards
        </h2>

        <div className="relative border-4 border-[#a8693d] rounded-tl-2xl rounded-br-2xl overflow-hidden mb-8">
          <img
            src={Img1}
            alt="Learning resource"
            className="w-full h-64 sm:h-80 lg:h-96 object-contain bg-white"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 rounded-full p-4 lg:p-6 shadow-lg hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
              <svg
                className="w-10 h-10 lg:w-12 lg:h-12 text-[#E44F39]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Import-Export Basics
            </h3>
            <p className="text-gray-600 text-base sm:text-lg flex items-center gap-2">
              🎯 Step-by-step guide for first-time global buyers.
            </p>
          </div>

          <div className="text-right">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-full shadow-lg transition-all duration-300"
              style={{ backgroundColor: "#E44F39" }}
            >
              WATCH NOW
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M8 5v14l11-7z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;
