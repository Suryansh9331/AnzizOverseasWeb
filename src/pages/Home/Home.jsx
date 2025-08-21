import Footer from "../../components/Common/Footer";
import FAQ from "./8th";
import SupplierSection from "./Fifth";
import FourthSectiion from "./Fourth";
import Hero from "./Hero";
import Second from "./Second";
import BrandSection from "./Seventh";
import { Phone } from "lucide-react";
import Sixth from "./Sixth";
import ConsultationBooking from "./Tenth";
import ToolsSection from "./third";
import TestimonialSection from "./9th";

function Home() {
  return (
    <div>
      <Hero />
      <Second />
      <ToolsSection />
      <FourthSectiion />
      <SupplierSection />
      <Sixth />
      <BrandSection />
      <FAQ />

      <section className="w-full bg-white py-16 min-h-screen ">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2
            className="text-3xl md:text-6xl font-semibold leading-snug text-gray-900"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            A creative agency specializes in <br />
            crafting{" "}
            <span className="inline-block align-middle">
              <img
                src="/images/puzzle.png"
                alt="unique"
                className="inline-block h-10 w-20 rounded-full object-cover"
              />
            </span>{" "}
            unique and impact and <br />
            digital solutions{" "}
            <span className="inline-flex -space-x-3 align-middle">
              <img
                src="/images/user1.jpg"
                alt="team1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/user2.jpg"
                alt="team2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/user3.jpg"
                alt="team3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </span>{" "}
            for clients
          </h2>
        </div>

        <div
          className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#E44F39]">
              300+
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#E44F39]">
              Clients Review
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#E44F39]">
              120+
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#E44F39]">
              Team Member
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#E44F39]">
              1k+
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#E44F39]">
              Complete Project
            </p>
          </div>
        </div>
      </section>
      <ConsultationBooking />
      <TestimonialSection />
      <section className="w-full bg-white py-20   h-[50vh]  px-4 b">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-['Outfit']">
            Ready to Expand Your Global Trade?
          </h2>

          {/* Subheading */}
          <p className="mt-3 text-gray-500 text-sm sm:text-base md:text-lg font-['Poppins']">
            Unlock Markets, Build Trust, and Scale Without Borders
          </p>

          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-2 bg-[#E44F39] text-white px-6 py-3 rounded-full font-light font-['Poppins'] hover:opacity-90 transition">
              <Phone size={18} /> BOOK CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
