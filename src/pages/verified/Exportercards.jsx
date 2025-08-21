import React from "react";
import { FaArrowRight } from "react-icons/fa";

const exporters = [
  {
    id: 1,
    name: "Premium Textiles Co. — India",
    description: "Organic cotton fabrics with custom dyeing & printing services.",
    moq: "500 units",
    leadTime: "15 days",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Global Spices Ltd. — Vietnam",
    description: "Certified spice exporter with sustainable farming practices.",
    moq: "100 kg",
    leadTime: "7 days",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ocean Harvest — Norway",
    description:
      "Frozen and fresh seafood with international cold-chain shipping.",
    moq: "200 kg",
    leadTime: "10 days",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "GreenTech Electronics — China",
    description:
      "Energy-efficient consumer electronics, OEM & ODM available.",
    moq: "100 pcs",
    leadTime: "20 days",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&q=80&w=1200&auto=format&fit=crop",
  },
];

const ExporterCards = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-5xl font-[Outfit] text-center font-semibold mb-20">
          Showroom Exporter Cards
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {exporters.map((exp) => (
            <div key={exp.id} className="flex flex-col">
              {/* Image */}
              <img
                src={exp.image}
                alt={exp.name}
                className="w-full h-72 object-cover rounded-lg"
              />

              {/* Text Content */}
              <div className="mt-4">
                <h3 className="font-[Outfit] text-2xl font-semibold text-gray-900">
                  {exp.name}
                </h3>

                <p className="text-gray-700 text-sm font-[Poppins] mt-2 flex items-start">
                  <FaArrowRight className="text-[#E44F39] mt-1 mr-2" />
                  {exp.description}
                </p>

                <p className="text-gray-700 text-xs font-[Poppins] mt-2 flex items-start">
                  <FaArrowRight className="text-[#E44F39] mt-1 mr-2" />
                  MOQ: {exp.moq} | Lead Time: {exp.leadTime}
                </p>

                {/* Button */}
                <button className="mt-8 bg-[#E44F39] text-white px-5 py-3 font-normal rounded-full text-xs font-[Poppins]">
                  VIEW PROFILE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-30">
          <button className="bg-[#E44F39] text-white px-8 py-3 rounded-full font-[Poppins] text-sm md:text-base">
            BROWSE ALL VERIFIED EXPORTERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExporterCards;



