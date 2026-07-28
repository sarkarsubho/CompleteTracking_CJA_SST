import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import InvalidPage from "../pages/InvalidPage";
import ProductCart from "../pages/Products";
import ReportDashboard from "../pages/Report-Dashboard";
import MultimediaTracking from "../pages/MultimediaTracking";
import CJA from "../pages/CJA";
import SST from "../pages/SST";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductCart />}></Route>
        <Route path="/reports" element={<ReportDashboard />}></Route>
        <Route path="/media" element={<MultimediaTracking />}></Route>
        <Route path="/cja" element={<CJA />}></Route>
        <Route path="/sst" element={<SST />}></Route>
        <Route path="/*" element={<InvalidPage />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
