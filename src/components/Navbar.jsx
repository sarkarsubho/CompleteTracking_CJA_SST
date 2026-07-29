import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav
      // className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-4 transition-colors duration-300"
      className="navbar p-4 flex justify-between"
      // className="flex justify-between p-2 w-full border-b-1 border-slate-800 dark:bg-slate-900 light:bg-slate-100 dark:text-white light:text-black"
    >
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
          className="cursor-pointer font-semibold hover:bg-slate-200 px-2  rounded-4xl"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-200 px-2  rounded-4xl"
          onClick={() => navigate("/products")}
        >
          Products
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-200 px-2  rounded-4xl"
          onClick={() => navigate("/reports")}
        >
          Dashboard and report
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-200 px-2  rounded-4xl"
          onClick={() => navigate("/media")}
        >
          Media
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-200 px-2  rounded-4xl"
          onClick={() => navigate("/cja")}
        >
          CJA
        </button>
        <button
          className="cursor-pointer font-semibold hover:bg-slate-200 px-2  rounded-4xl"
          onClick={() => navigate("/sst")}
        >
          SST
        </button>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
