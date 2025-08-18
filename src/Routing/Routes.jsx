import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));


// Layout components
import Footer from "../components/Common/Footer";

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRoutes;
