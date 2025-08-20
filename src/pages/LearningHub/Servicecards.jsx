import React from "react";

const ServicesGridSection = () => {
  const services = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?auto=format&fit=crop&w=800&q=80",
      title: "Avoiding Supplier Fraud",
      description:
        "Learn how to verify suppliers and protect payments with step-by-step checks, trusted verification tools, and secure payment methods.",
      button: "START LESSON",
      alt: "Supplier fraud prevention image",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1592496001020-3f7e9f80b5f4?auto=format&fit=crop&w=800&q=80",
      title: "Customs & Compliance Made Easy",
      description:
        "Understand HS codes, required documents, and clearance rules to avoid delays, reduce costs, and keep your shipments moving smoothly.",
      button: "WATCH NOW",
      alt: "Customs compliance image",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78830?auto=format&fit=crop&w=800&q=80",
      title: "Cutting Logistics Costs",
      description:
        "Practical tips to save on shipping without compromising speed, helping you cut costs while still delivering on time.",
      button: "START LESSON",
      alt: "Logistics cost saving image",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab8fc52a9a?auto=format&fit=crop&w=800&q=80",
      title: "Winning with Negotiation",
      description:
        "Get better deals and payment terms from suppliers to improve your cash flow and reduce overall costs.",
      button: "WATCH NOW",
      alt: "Business negotiation image",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 font-[Outfit]">
      <div className="container max-w-6xl mx-auto px-6 lg:px-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col space-y-4"
            >
              {/* Image Container with corner border */}
              <div className="relative mb-2 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                />

                {/* Orange corner lines */}
                <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#E44F39] rounded-tl-md"></span>
                <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#E44F39] rounded-tr-md"></span>
                <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#E44F39] rounded-bl-md"></span>
                <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#E44F39] rounded-br-md"></span>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <div>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: "#E44F39" }}
                >
                  {service.button}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
