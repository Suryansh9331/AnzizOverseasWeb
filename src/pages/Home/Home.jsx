import Footer from "../../components/Common/Footer";
import FAQ from "./8th";
import FourthSectiion from "./Fourth";
import Hero from "./Hero";
import Second from "./Second";

import Sixth from "./Sixth";

function Home() {
  return (
    <div  >
      <Hero />
      <Second />
      <FourthSectiion/>
      <Sixth/>
      <FAQ/>

 <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2
          className="text-3xl md:text-5xl font-bold leading-snug text-[#0F0F0F]"
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

      {/* Stats */}
      <div
        className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Clients Review */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-[#E44F39]">
            300+
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Clients Review
          </p>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-[#E44F39]">
            120+
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Team Member
          </p>
        </div>

        {/* Completed Projects */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-[#E44F39]">
            1k+
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Complete Project
          </p>
        </div>
      </div>
    </section>

      <Footer/>
    </div>
  );
}

export default Home;
