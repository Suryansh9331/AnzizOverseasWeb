import React from "react";
import worldMap from "../../assets/sollutions/hero-bg.png"; // replace with your image path

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#232323] font-[Outfit] text-white">
      <div className="container mx-auto px-6 md:px-12 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
            Verified Exporter{" "}
            <span className="text-[#E44F39]">Showroom</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
            Browse trusted, pre-verified exporters from around the globe — ready
            to ship quality products directly to you.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-full text-sm md:text-base font-medium hover:bg-white hover:text-black transition">
            READ MORE
            <span className="ml-2">➝</span>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={worldMap}
            alt="World Map"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
