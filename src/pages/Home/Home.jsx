import FAQ from "./8th";
import FourthSectiion from "./Fourth";
import Hero from "./Hero";
import Second from "./Second";
import Sixth from "./Sixth";

function Home() {
  return (
    <div className="w-full" >
      <Hero />
      <Second/>
      <FourthSectiion/>
      <Sixth/>
      <FAQ/>
    </div>
  );
}

export default Home;
