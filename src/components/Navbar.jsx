import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-2 w-full border-b-1 border-slate-800 bg-slate-900">
      <div className="flex cursor-pointer" onClick={() => navigate("/")}>
        <img
          src="https://analytics-tracking-demo-site.vercel.app/logo.png"
          width={"50px"}
          alt="logo"
        />
        <h3
          className="text-curshiv"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: "20px" }}
        >
          Analytics Demo
        </h3>
      </div>

      <div className="flex gap-4 px-4">
        <button
          className="cursor-pointer font-semibold hover:bg-slate-800 px-2  rounded-4xl"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-800 px-2  rounded-4xl"
          onClick={() => navigate("/products")}
        >
          Products
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-800 px-2  rounded-4xl"
          onClick={() => navigate("/reports")}
        >
          Dashboard and report
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-800 px-2  rounded-4xl"
          onClick={() => navigate("/media")}
        >
          Media
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-800 px-2  rounded-4xl"
          onClick={() => navigate("/cja")}
        >
          CJA
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-800 px-2  rounded-4xl"
          onClick={() => navigate("/sst")}
        >
          SST
        </button>
      </div>
    </div>
  );
};

export default Navbar;
