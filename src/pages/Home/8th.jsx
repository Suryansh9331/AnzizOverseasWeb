import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { HiOutlineMinus } from "react-icons/hi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of businesses do you support?",
      answer:
        "Car service is essential for maintaining the performance and maintaining the performance and longevity. Car service is essential for maintaining."
    },
    {
      question: "What are the signs of brake wear?",
      answer:
        "Common signs include squeaking noises, longer stopping distances, or a vibrating brake pedal. Regular checks can help prevent accidents."
    },
    {
      question: "Can regular maintenance prevent major repairs?",
      answer:
        "Yes. Consistent maintenance catches small issues before they become expensive repairs, increasing your car's lifespan."
    },
    {
      question: "Are scheduled service intervals important for my car?",
      answer:
        "Absolutely. They ensure your vehicle performs efficiently, remains safe, and retains resale value over time."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-[Outfit]">
      {/* Top label */}
      <div className="text-center mb-4">
        <p className="text-[#E44F39] uppercase tracking-wide text-sm">
          ----- Ask Question -----
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Got Questions? We've Got Answers
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Left: FAQs */}
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b py-4 ${
                openIndex === index ? "border-[#E44F39]" : "border-gray-200"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center w-full text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="font-semibold">{faq.question}</span>
                </div>
                <span className="text-[#E44F39]">
                  {openIndex === index ? (
                    <ChevronDown size={22} />
                  ) : (
                    <ChevronRight size={22} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 font-[Poppins] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: Info block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Icon */}
          <div className="bg-[#E44F39] p-4 rounded-full mb-4">
            {/* Replace with your exact icon */}
            <HiOutlineMinus size={30} color="#fff" />
          </div>
          <h3 className="text-xl font-bold">Brand Bliss Creations</h3>
          <p className="text-gray-600 mt-2 font-[Poppins] text-sm leading-relaxed max-w-xs">
            A creative agency speciali providing innovative and unique solutions
            to businesses build.
          </p>
          <button className="mt-6 flex items-center gap-2 border border-[#E44F39] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#E44F39] hover:text-white transition">
            CONTACT US
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
