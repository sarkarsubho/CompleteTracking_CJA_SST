import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  ConeIcon,
  Hamburger,
  HamburgerIcon,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    // Clear user session or token from localStorage
    localStorage.removeItem("userToken");
    // Redirect to login page
    navigate("/login");
  };

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
      className="navbar p-4 py-3 flex justify-between sticky top-0 z-100"
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

      <div className=" hidden md:flex  justify-center items-center gap-4 px-4">
        <button
          className={`cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/" ? "font-bold text-lg text-indigo-400" : ""
          }`}
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className={`cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/products"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }`}
          onClick={() => navigate("/products")}
        >
          Products
        </button>
        <button
          className={`cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/reports"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }`}
          onClick={() => navigate("/reports")}
        >
          Dashboard and report
        </button>
        <button
          className={`cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/media"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }`}
          onClick={() => navigate("/media")}
        >
          Media
        </button>
        <button
          className={`cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/cja"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }`}
          onClick={() => navigate("/cja")}
        >
          CJA
        </button>
        <button
          className={`cursor-pointer hover:font-semibold hover:text-lg duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/sst"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }`}
          onClick={() => navigate("/sst")}
        >
          SST
        </button>
      </div>

      <div className="hidden md:flex justify-center items-center gap-2">
        <button
          onClick={toggleTheme}
          className={`cursor-pointer relative min-w-14 h-7 rounded-full transition-colors duration-300 ${
            theme === "dark" ? "bg-slate-700" : "bg-gray-300"
          }`}
          aria-label="Toggle dark mode"
        >
          <span className="absolute top-[6px] left-2 transition-transform duration-300">
            {theme === "dark" ? <MdSunny /> : ""}
          </span>
          <div
            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md pt-[2px] pl-[1px] transition-transform duration-300 ${
              theme === "dark" ? "translate-x-8" : "translate-x-1"
            }`}
          >
            <span className="flex justify-center items-center">
              {theme === "dark" ? <FaMoon color="black" /> : <MdSunny />}
            </span>
          </div>

          <span className="absolute top-[6px] right-2 transition-transform duration-300">
            {theme !== "dark" ? <FaMoon color="black" /> : ""}
          </span>
        </button>
        <div className="flex items-center justify-center space-x-3">
          <div
            className="w-8 h-8 rounded-full bg-cyan-500/20 border border-slate-700 dark:border-cyan-500/40 flex items-center justify-center text-slate-700 dark:text-cyan-300 font-medium text-sm cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          >
            {/* {userName.charAt(0)} */}
            SS
          </div>
          <div
            className={`fixed top-11 right-3 flex flex-col transition-transform duration-500 ease-in-out ${
              showProfile
                ? "-translate-y-15 translate-x-15 scale-0"
                : "translate-y-2 translate-x-1 scale-100"
            }`}
          >
            <div className="bg-slate-300 p-2 w-2 rotate-45 self-end mr-7 -mb-3"></div>
            <div className="flex flex-col justify-between items-center space-x-2 gap-4 bg-slate-300 p-2 rounded">
              <div className="flex gap-2 justify-between items-center">
                <User className="border  w-6 h-6 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white p-1 w-full px-4 rounded-md transition-colors duration-200"
              >
                <LogOut className="inline-block " /> Logout
              </button>
            </div>
          </div>
          {/* <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 cursor-pointer text-white p-3 px-4 rounded-md transition-colors duration-200"
          >
            <LogOut className="inline-block " />
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden justify-end  items-center gap-4 ">
        <button
          onClick={toggleTheme}
          className={`cursor-pointer relative min-w-14 h-7 rounded-full transition-colors duration-300 ${
            theme === "dark" ? "bg-slate-700" : "bg-gray-300"
          }`}
          aria-label="Toggle dark mode"
        >
          <span className="absolute top-[6px] left-2 transition-transform duration-300">
            {theme === "dark" ? <MdSunny /> : ""}
          </span>
          <div
            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md pt-[2px] pl-[1px] transition-transform duration-300 ${
              theme === "dark" ? "translate-x-8" : "translate-x-1"
            }`}
          >
            <span className="flex justify-center items-center">
              {theme === "dark" ? <FaMoon color="black" /> : <MdSunny />}
            </span>
          </div>

          <span className="absolute top-[6px] right-2 transition-transform duration-300">
            {theme !== "dark" ? <FaMoon color="black" /> : ""}
          </span>
        </button>

        <button
          className="md:hidden cursor-pointer  dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-slate-800 dark:text-slate-200" />
          ) : (
            <Menu className="text-slate-800 dark:text-slate-200" />
          )}
        </button>
      </div>

      {/* mobile menu option */}
      <div
        className={`fixed flex md:hidden flex-col gap-5 text-lg pr-8 pt-4 items-end z-100 right-0 top-16 z-50 bg-white dark:bg-slate-800 h-[calc(100vh-4.5rem)] w-72  shadow-xl transition-transform duration-300 ease-in-out  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className={`cursor-pointer hover:font-bold hover:text-xl duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/" ? "font-bold text-lg text-indigo-400" : ""
          }
              delay-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className={`cursor-pointer hover:font-bold hover:text-xl duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/products"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }
              delay-100 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={() => navigate("/products")}
        >
          Products
        </button>
        <button
          className={`cursor-pointer hover:font-bold hover:text-xl duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/reports"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }
              delay-150 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={() => navigate("/reports")}
        >
          Dashboard and report
        </button>
        <button
          className={`cursor-pointer hover:font-bold hover:text-xl duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/media"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }
              delay-200  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={() => navigate("/media")}
        >
          Media
        </button>
        <button
          className={`cursor-pointer hover:font-bold hover:text-xl duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/cja"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }
              delay-250 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={() => navigate("/cja")}
        >
          CJA
        </button>
        <button
          className={`cursor-pointer hover:font-bold hover:text-xl duration-200 ease-in-out px-2  rounded-4xl ${
            location.pathname === "/sst"
              ? "font-bold text-lg text-indigo-400"
              : ""
          }
              delay-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={() => navigate("/sst")}
        >
          SST
        </button>

        <div
          className={`grow flex items-end w-full delay-100 pb-4 -mr-4 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center space-x-2 gap-4">
            <div className="flex gap-2 justify-between items-center">
              <User className="border  w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">john.doe@example.com</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 cursor-pointer text-white p-3 px-4 rounded-md transition-colors duration-200"
            >
              <LogOut className="inline-block " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
