// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import arrowIcon from "../../assets/Icons/Arrow.png"; // your arrow image

// const allCourses = [
//   {
//     id: 1,
//     img: "https://via.placeholder.com/400x250",
//     title: "Import Documents Made Easy",
//     tags: ["Asia", "Supplier Sources"],
//     region: "Asia",
//     topic: "Supplier Sources",
//     language: "English"
//   },
//   {
//     id: 2,
//     img: "https://via.placeholder.com/400x250",
//     title: "Dropshipping 101 – USA Market Entry",
//     tags: ["USA", "Documentation"],
//     region: "USA",
//     topic: "Documentation",
//     language: "English"
//   },
//   {
//     id: 3,
//     img: "https://via.placeholder.com/400x250",
//     title: "Negotiating With Suppliers Like a Pro",
//     tags: ["UK", "Supplier Sources"],
//     region: "UK",
//     topic: "Supplier Sources",
//     language: "English"
//   }
// ];

// export default function FourthSectiion() {
//   const [filters, setFilters] = useState({
//     region: "",
//     topic: "",
//     language: ""
//   });

//   const filteredCourses = allCourses.filter((course) => {
//     return (
//       (!filters.region || course.region === filters.region) &&
//       (!filters.topic || course.topic === filters.topic) &&
//       (!filters.language || course.language === filters.language)
//     );
//   });

//   return (
//     <div className="min-h-screen bg-[#FDE0C0] px-4 py-10">
//       {/* Heading */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl md:text-4xl font-outfit font-semibold text-black">
//           Learn to Trade Smarter — Not Harder
//         </h1>
//         <p className="font-outfit text-base text-gray-700 mt-2">
//           Free for all buyers, no registration needed
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-3 bg-[#FDE0C0] py-4 rounded-lg mb-8">
//         {/* View All Button */}
//         <button
//           onClick={() => setFilters({ region: "", topic: "", language: "" })}
//           className="bg-[#E44F39] text-white font-poppins px-5 py-2 rounded-lg"
//         >
//           View All
//         </button>

//         {/* Dropdowns */}
//         {[
//           { label: "Region", key: "region", options: ["Asia", "USA", "UK"] },
//           {
//             label: "Topic",
//             key: "topic",
//             options: ["Supplier Sources", "Documentation"]
//           },
//           { label: "Language", key: "language", options: ["English", "Hindi"] }
//         ].map((dropdown) => (
//           <div key={dropdown.key} className="relative">
//             <select
//               className="appearance-none bg-white text-gray-700 font-outfit px-4 py-2 rounded-lg pr-8"
//               value={filters[dropdown.key]}
//               onChange={(e) =>
//                 setFilters({ ...filters, [dropdown.key]: e.target.value })
//               }
//             >
//               <option value="">{dropdown.label}</option>
//               {dropdown.options.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-3 pointer-events-none" />
//           </div>
//         ))}
//       </div>

//       {/* Courses Grid */}
//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {filteredCourses.map((course) => (
//           <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
//             {/* Image */}
//             <div className="relative">
//               <img src={course.img} alt={course.title} className="w-full h-56 object-cover" />
//               <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl">
//                 <svg
//                   className="w-12 h-12 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M6 4l10 6-10 6V4z" />
//                 </svg>
//               </button>
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="font-outfit text-lg font-semibold mb-2">
//                 {course.title}
//               </h3>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {course.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-[#FDE0C0] text-gray-800 text-sm px-3 py-1 rounded-full font-outfit"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Button */}
//               <button className="flex items-center gap-2 text-sm font-outfit text-black hover:underline">
//                 EXPLORE COURSES
//                 <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { MapPin, FileText } from "lucide-react"; // icons

// Sample data with internet images
const courses = [
  {
    id: 1,
    title: "Import Documents Made Easy",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: [
      { type: "location", label: "Asia" },
      { type: "category", label: "Supplier Sources" },
    ],
  },
  {
    id: 2,
    title: "Dropshipping 101 – USA Market Entry",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: [
      { type: "location", label: "USA" },
      { type: "category", label: "Documentation" },
    ],
  },
  {
    id: 3,
    title: "Negotiating With Suppliers Like a Pro",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: [
      { type: "location", label: "UK" },
      { type: "category", label: "Supplier Sources" },
    ],
  },
];

export default function LearningSection() {
  return (
    <div className="bg-[#FCFFE9] min-h-screen px-4 sm:px-6 lg:px-12 py-12 font-outfit">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#232323]">
          Learn to Trade Smarter — Not Harder
        </h2>
        <p className="mt-2 text-[#232323] text-base sm:text-lg">
          Free for all buyers, no registration needed
        </p>
      </div>

      {/* Category Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-[#FDE0C0] rounded-xl px-6 py-3 w-fit mx-auto mb-10">
        <button className="px-6 py-2 rounded-lg bg-[#E44F39] text-white font-medium">
          View All
        </button>
        <button className="px-4 py-2 rounded-lg text-[#232323] font-medium hover:bg-white transition">
          Region
        </button>
        <button className="px-4 py-2 rounded-lg text-[#232323] font-medium hover:bg-white transition">
          Topic
        </button>
        <button className="px-4 py-2 rounded-lg text-[#232323] font-medium hover:bg-white transition">
          Language
        </button>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col">
            {/* Image with play button */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#E44F39"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Text content */}
            <h3 className="font-semibold text-3xl text-[#232323] mt-4 mb-3">
              {course.title}
            </h3>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-4">
              {course.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 px-3 py-1 bg-transparent border border-gray-300 rounded-full font-medium text-sm text-gray-500"
                >
                  {tag.type === "location" ? (
                    <MapPin className="w-4 h-4 text-[#232323]" />
                  ) : (
                    <FileText className="w-4 h-4 text-[#232323]" />
                  )}
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Explore button */}
            <button className="flex items-center gap-2 text-sm font-semibold text-[#232323] group w-fit">
              EXPLORE COURSES
              <span className="w-[71px] h-[40px]">
                <svg
                  width="71"
                  height="40"
                  viewBox="0 0 71 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.7071 20.7071C56.0976 20.3166 56.0976 19.6834 55.7071 19.2929L49.3431 12.9289C48.9526 12.5384 48.3195 12.5384 47.9289 12.9289C47.5384 13.3195 47.5384 13.9526 47.9289 14.3431L53.5858 20L47.9289 25.6568C47.5384 26.0474 47.5384 26.6805 47.9289 27.0711C48.3195 27.4616 48.9526 27.4616 49.3431 27.0711L55.7071 20.7071ZM0 20L8.74228e-08 21L55 21L55 20L55 19L-8.74228e-08 19L0 20Z"
                    fill="#232323"
                  />
                  <circle cx="51" cy="20" r="19.5" stroke="#E44F39" />
                </svg>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
