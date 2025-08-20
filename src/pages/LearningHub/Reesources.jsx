import React, { useMemo, useState } from "react";

// ---------------------------------------------
// Demo data (replace image paths with your own)
// ---------------------------------------------
const ALL = "All";

const resources = [
  {
    id: 1,
    featured: true,
    title: "Import-Export Basics",
    blurb: "Step-by-step guide for first-time global buyers.",
    cta: "WATCH NOW",
    media: "/images/learning/hero.png", // replace with your image
    region: "Global",
    topic: "Basics",
    language: "English",
  },
  {
    id: 2,
    title: "Avoiding Supplier Fraud",
    blurb:
      "Learn how to verify suppliers and protect payments with step-by-step checks, trusted verification tools, and secure payment methods.",
    cta: "START LESSON",
    media: "/images/learning/fraud.jpg",
    region: "Asia",
    topic: "Risk",
    language: "English",
  },
  {
    id: 3,
    title: "Customs & Compliance Made Easy",
    blurb:
      "Understand HS codes, required documents, and clearance rules to avoid delays, reduce costs, and keep your shipments moving smoothly.",
    cta: "WATCH NOW",
    media: "/images/learning/compliance.jpg",
    region: "Europe",
    topic: "Compliance",
    language: "English",
  },
  {
    id: 4,
    title: "Cutting Logistics Costs",
    blurb:
      "Practical tips to save on shipping without compromising speed, helping you cut costs while still delivering on time.",
    cta: "START LESSON",
    media: "/images/learning/logistics.jpg",
    region: "Global",
    topic: "Logistics",
    language: "English",
  },
  {
    id: 5,
    title: "Winning with Negotiation",
    blurb:
      "Get better deals and payment terms from suppliers to improve your cash flow and reduce overall costs.",
    cta: "WATCH NOW",
    media: "/images/learning/negotiation.jpg",
    region: "Americas",
    topic: "Negotiation",
    language: "English",
  },
];

// Helper: L-corner accents
const tlCorner =
  "relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-10 before:bg-[#E44F39] after:content-[''] after:absolute after:top-0 after:left-0 after:w-[3px] after:h-10 after:bg-[#E44F39]";
const brCorner =
  "relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:h-[3px] before:w-10 before:bg-[#E44F39] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[3px] after:h-10 after:bg-[#E44F39]";

// Button (inline arrow SVG per your requirement)
const CTAButton = ({ label }) => (
  <button
    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white bg-[#E44F39] hover:opacity-95 transition"
    type="button"
  >
    {label}
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

// Individual grid card
function ResourceCard({ data, rightSide = false }) {
  return (
    <article
      className={`${rightSide ? brCorner : tlCorner} rounded-2xl p-4 lg:p-5 bg-white shadow-sm`}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={data.media}
          alt={data.title}
          className="h-56 w-full object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg md:text-xl font-[Outfit] text-[#161616]">
        {data.title}
      </h3>

      <p className="mt-1 text-sm leading-relaxed text-[#666] font-[Poppins]">
        {data.blurb}
      </p>

      <div className="mt-4">
        <CTAButton label={data.cta} />
      </div>
    </article>
  );
}

// First large horizontal card
function FeaturedCard({ data }) {
  return (
    <article className={`${tlCorner} relative rounded-2xl`}>
      {/* right-side small accent bar (like screenshot) */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 block h-24 w-[3px] bg-[#E44F39] rounded-full" />
      <div className="mx-6 mt-8 rounded-2xl border-2 border-[#A16E45] p-6 md:p-8 bg-white">
        <div className="flex flex-col items-center gap-6">
          <img
            src={data.media}
            alt={data.title}
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </div>

      <div className="mx-2 mt-6 md:mx-6 md:mt-6">
        <h3 className="text-xl md:text-2xl font-[Outfit] text-[#161616]">
          {data.title}
        </h3>
        <p className="mt-2 flex items-start gap-2 text-sm text-[#666] font-[Poppins]">
          <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#E44F39]" />
          {data.blurb}
        </p>
        <div className="mt-4">
          <CTAButton label={data.cta} />
        </div>
      </div>
    </article>
  );
}

export default function LearningResources() {
  // Filter state
  const [region, setRegion] = useState(ALL);
  const [topic, setTopic] = useState(ALL);
  const [language, setLanguage] = useState(ALL);

  // Build unique option lists
  const regions = useMemo(
    () => [ALL, ...Array.from(new Set(resources.map((r) => r.region)))],
    []
  );
  const topics = useMemo(
    () => [ALL, ...Array.from(new Set(resources.map((r) => r.topic)))],
    []
  );
  const languages = useMemo(
    () => [ALL, ...Array.from(new Set(resources.map((r) => r.language)))],
    []
  );

  // Apply filters
  const visible = useMemo(
    () =>
      resources.filter(
        (r) =>
          (region === ALL || r.region === region) &&
          (topic === ALL || r.topic === topic) &&
          (language === ALL || r.language === language)
      ),
    [region, topic, language]
  );

  const featured = visible.find((r) => r.featured);
  const gridItems = visible.filter((r) => !r.featured);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 md:py-12">
        {/* Category Filters */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold text-[#161616] font-[Poppins]">
            Category Filters
          </p>

          <div className="inline-flex flex-wrap items-center gap-3 rounded-xl bg-[#FDE0C0] px-3 py-2">
            {/* Region */}
            <label className="flex items-center gap-2">
              <span className="sr-only">Region</span>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className={`appearance-none rounded-full border border-transparent bg-white px-4 py-2 text-sm font-[Poppins] pr-7
                            ${region !== ALL ? "bg-[#E44F39] text-white" : "text-[#333]"}
                            focus:outline-none`}
              >
                {regions.map((opt) => (
                  <option key={opt} value={opt} className="text-[#161616]">
                    {opt === ALL ? "Region" : opt}
                  </option>
                ))}
              </select>
              {/* caret */}
              <svg className="-ml-6 pointer-events-none" width="14" height="14" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </label>

            {/* Topic */}
            <label className="flex items-center gap-2">
              <span className="sr-only">Topic</span>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={`appearance-none rounded-full border border-transparent bg-white px-4 py-2 text-sm font-[Poppins] pr-7
                            ${topic !== ALL ? "bg-[#E44F39] text-white" : "text-[#333]"}
                            focus:outline-none`}
              >
                {topics.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === ALL ? "Topic" : opt}
                  </option>
                ))}
              </select>
              <svg className="-ml-6 pointer-events-none" width="14" height="14" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </label>

            {/* Language */}
            <label className="flex items-center gap-2">
              <span className="sr-only">Language</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={`appearance-none rounded-full border border-transparent bg-white px-4 py-2 text-sm font-[Poppins] pr-7
                            ${language !== ALL ? "bg-[#E44F39] text-white" : "text-[#333]"}
                            focus:outline-none`}
              >
                {languages.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === ALL ? "Language" : opt}
                  </option>
                ))}
              </select>
              <svg className="-ml-6 pointer-events-none" width="14" height="14" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </label>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="mb-8 text-center font-[Outfit] text-3xl md:text-4xl text-[#161616]">
          Learning Resource Cards
        </h2>

        {/* Featured horizontal card */}
        {featured && (
          <div className="mb-10">
            <FeaturedCard data={featured} />
          </div>
        )}

        {/* 2 x 2 grid (remaining 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridItems.map((item, idx) => (
            <ResourceCard
              key={item.id}
              data={item}
              rightSide={idx % 2 === 1} // left cards get TL corner, right cards get BR corner
            />
          ))}
        </div>
      </div>
    </section>
  );
}
