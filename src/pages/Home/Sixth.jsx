import React from "react";
import { CheckCircle } from "lucide-react"; // For orange icons

export default function Sixth() {
  return (
    <section className="w-full bg-white font-sans">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 py-12">
          {/* Small Heading */}
          <p
            className="text-sm font-semibold tracking-wider mb-4"
            style={{ color: "#E44F39", fontFamily: "Outfit, sans-serif" }}
          >
            LOGISTICS SOLUTIONS
          </p>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Streamline Your <br /> Supply Chain
          </h1>

          {/* Feature Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-6">
            {[
              "Drive More Traffic, Convert",
              "More Customers",
              "Increase Visibility",
              "Digital Marketing Solution",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle
                  size={18}
                  style={{ color: "#E44F39" }}
                  className="flex-shrink-0"
                />
                <span
                  className="text-gray-800 text-base"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-gray-600 mb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our logistics solutions help you optimize your supply chain, reduce
            costs, and ensure timely delivery of your goods.
          </p>

          {/* Button */}
          <button
            className="px-6 py-3 rounded-full text-white font-medium shadow-md hover:opacity-90 transition"
            style={{
              backgroundColor: "#E44F39",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            📞 BOOK CALL
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/logistics-map.png" // replace with your image path
            alt="Logistics Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
