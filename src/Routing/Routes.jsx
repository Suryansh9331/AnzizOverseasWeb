// src/Routing/Routes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("../Pages/Home/Home"));
const About = lazy(() => import("../Pages/About/About"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Services = lazy(() => import("../Pages/Services/Services"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

// Layout components
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRoutes;
