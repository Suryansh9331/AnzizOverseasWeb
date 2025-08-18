// src/Routing/Routes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));


// Layout components
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
