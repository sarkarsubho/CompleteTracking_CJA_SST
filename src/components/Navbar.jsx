import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    let root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
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

      <div className="flex justify-center items-center gap-4 px-4">
        <button
          className="cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl"
          onClick={() => navigate("/products")}
        >
          Products
        </button>
        <button
          className="cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl"
          onClick={() => navigate("/reports")}
        >
          Dashboard and report
        </button>
        <button
          className="cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl"
          onClick={() => navigate("/media")}
        >
          Media
        </button>
        <button
          className="cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl"
          onClick={() => navigate("/cja")}
        >
          CJA
        </button>
        <button
          className="cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl"
          onClick={() => navigate("/sst")}
        >
          SST
        </button>

        <button
          onClick={toggleTheme}
          className={`cursor-pointer relative min-w-14 h-7 rounded-full transition-colors duration-300 ${
            theme === "dark" ? "bg-slate-700" : "bg-gray-300"
          }`}
          aria-label="Toggle dark mode"
        >
          <div
            className={` absolute top-1 w-5 h-5 bg-white rounded-full shadow-md pt-[2px] pl-[1px] transition-transform duration-300 ${
              theme === "dark" ? "translate-x-8" : "translate-x-1"
            }`}
          >
            <span className="pt-1">
              {theme === "dark" ? <FaMoon color="black" /> : <MdSunny />}
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
