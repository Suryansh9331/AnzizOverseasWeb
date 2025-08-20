import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));


// Layout components
import Footer from "../components/Common/Footer";
import Tools from "../pages/Tools/Tools";
import Sollutions from "../pages/Sollutions/Sollutions";
import Learninghub from "../pages/LearningHub/LearningHub";


const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          <Route path='/solutions' element={<Sollutions />} />
          <Route path='/learning-hub' element={<Learninghub />} />
          
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRoutes;
