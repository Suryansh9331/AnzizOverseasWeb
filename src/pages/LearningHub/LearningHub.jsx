//contact page 
import React from "react";
import HeroSection from "./Hero";
import LearningResources from "./Reesources";
import FeaturedVideoSection from "./f1";
import ServicesGridSection from "./Servicecards";
const Learninghub = () => {
return (
    <div>
<HeroSection/>

 <div className="py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left text-gray-800 mb-6 sm:mb-8">
                        Explore Tools by Category
                    </h2>

                    {/* Category Tabs Container */}
                    <div className="overflow-x-auto">
                        <div
                            className="rounded-xl p-3 px-6 sm:px-12 flex items-center gap-2 sm:gap-4 min-w-max sm:max-w-2xl"
                            style={{ backgroundColor: '#FDE0C0' }}
                        >
                            {/* Active Tab - Documentation */}
                            <button
                                className="px-4 sm:px-8 py-3 rounded-xl text-white font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap"
                                style={{ backgroundColor: '#E44F39' }}
                            >
                                Documentation
                            </button>

                            {/* Inactive Tabs */}
                            <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                                Logistics
                                <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                                Frauds
                                <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <button className="px-3 sm:px-6 py-3 text-gray-700 font-medium text-sm sm:text-base flex items-center hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
                                Cost
                                <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

<FeaturedVideoSection/>
<ServicesGridSection/>
    </div>


)

}
export default Learninghub;