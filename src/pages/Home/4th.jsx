import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import arrowIcon from "../../assets/Icons/Arrow.png"; // your arrow image

const allCourses = [
  {
    id: 1,
    img: "https://via.placeholder.com/400x250",
    title: "Import Documents Made Easy",
    tags: ["Asia", "Supplier Sources"],
    region: "Asia",
    topic: "Supplier Sources",
    language: "English"
  },
  {
    id: 2,
    img: "https://via.placeholder.com/400x250",
    title: "Dropshipping 101 – USA Market Entry",
    tags: ["USA", "Documentation"],
    region: "USA",
    topic: "Documentation",
    language: "English"
  },
  {
    id: 3,
    img: "https://via.placeholder.com/400x250",
    title: "Negotiating With Suppliers Like a Pro",
    tags: ["UK", "Supplier Sources"],
    region: "UK",
    topic: "Supplier Sources",
    language: "English"
  }
];

export default function FourthSectiion() {
  const [filters, setFilters] = useState({
    region: "",
    topic: "",
    language: ""
  });

  const filteredCourses = allCourses.filter((course) => {
    return (
      (!filters.region || course.region === filters.region) &&
      (!filters.topic || course.topic === filters.topic) &&
      (!filters.language || course.language === filters.language)
    );
  });

  return (
    <div className="min-h-screen bg-[#FDE0C0] px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-outfit font-semibold text-black">
          Learn to Trade Smarter — Not Harder
        </h1>
        <p className="font-outfit text-base text-gray-700 mt-2">
          Free for all buyers, no registration needed
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 bg-[#FDE0C0] py-4 rounded-lg mb-8">
        {/* View All Button */}
        <button
          onClick={() => setFilters({ region: "", topic: "", language: "" })}
          className="bg-[#E44F39] text-white font-poppins px-5 py-2 rounded-lg"
        >
          View All
        </button>

        {/* Dropdowns */}
        {[
          { label: "Region", key: "region", options: ["Asia", "USA", "UK"] },
          {
            label: "Topic",
            key: "topic",
            options: ["Supplier Sources", "Documentation"]
          },
          { label: "Language", key: "language", options: ["English", "Hindi"] }
        ].map((dropdown) => (
          <div key={dropdown.key} className="relative">
            <select
              className="appearance-none bg-white text-gray-700 font-outfit px-4 py-2 rounded-lg pr-8"
              value={filters[dropdown.key]}
              onChange={(e) =>
                setFilters({ ...filters, [dropdown.key]: e.target.value })
              }
            >
              <option value="">{dropdown.label}</option>
              {dropdown.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-3 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            {/* Image */}
            <div className="relative">
              <img src={course.img} alt={course.title} className="w-full h-56 object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-outfit text-lg font-semibold mb-2">
                {course.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#FDE0C0] text-gray-800 text-sm px-3 py-1 rounded-full font-outfit"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 text-sm font-outfit text-black hover:underline">
                EXPLORE COURSES
                <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
