import React from "react";
import CJA from "../pages/CJA";
import SST from "../pages/SST";
import Home from "../pages/Home";
import AskGPT from "../pages/AskGPT";
import ProductCart from "../pages/Products";
import InvalidPage from "../pages/InvalidPage";
import { Route, Routes } from "react-router-dom";
import ReportDashboard from "../pages/Report-Dashboard";
import MultimediaTracking from "../pages/MultimediaTracking";
import ProductsDetails from "../components/ProductsDetails";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cja" element={<CJA />}></Route>
        <Route path="/sst" element={<SST />}></Route>
        <Route path="/askGPT" element={<AskGPT />}></Route>
        <Route path="/products" element={<ProductCart />}></Route>
        <Route path="/reports" element={<ReportDashboard />}></Route>
        <Route path="/media" element={<MultimediaTracking />}></Route>
        <Route path="/products/:id" element={<ProductsDetails />}></Route>
        <Route path="/*" element={<InvalidPage />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
