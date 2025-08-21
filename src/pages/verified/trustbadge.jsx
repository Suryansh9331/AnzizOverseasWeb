import React from "react";
import { CheckCircle2, FileText, Target, Award } from "lucide-react";

const trustBadges = [
  {
    id: 1,
    icon: <CheckCircle2 className="text-[#E44F39] w-6 h-6" />,
    title: "Verified by Anji's Overseas",
    link: "#",
  },
  {
    id: 2,
    icon: <FileText className="text-[#E44F39] w-6 h-6" />,
    title: "Documents Checked",
    link: "#",
  },
  {
    id: 3,
    icon: <Target className="text-[#E44F39] w-6 h-6" />,
    title: "On-time Delivery Track Record",
    link: "#",
  },
];

const TrustBadge = () => {
  return (
    <section className="py-20 px-4 font-[Outfit]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000000] flex items-center justify-center gap-2">
          Trust Badge <Award className="text-[#E44F39] w-6 h-6" />
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {trustBadges.map((badge) => (
          <div
            key={badge.id}
            className="bg-[#F3F7F8] rounded-xl shadow-sm border border-gray-200 p-6 px-16 flex flex-col justify-between transition hover:shadow-md"
          >
            {/* Icon */}
            <div className="mb-4">{badge.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-medium text-[#52170E] mb-6">
              {badge.title}
            </h3>

            {/* Read More */}
            <a
              href={badge.link}
              className="flex items-center gap-2 text-[#77420E] font-medium hover:underline"
            >
              Read More
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadge;
