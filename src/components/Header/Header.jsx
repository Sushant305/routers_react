import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#0B1020] text-white ">
        <header className="fixed top-0 left-0 w-full z-50 ">
          <nav className="flex items-center justify-between mx-10 mt-4 bg-white/10 p-3 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.35)]">
            <div className="flex justify-center items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <div>
                <h1 className="text-2xl font-bold">FlowApp</h1>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 ">
              <ul className="hidden md:flex justify-center items-center gap-8 mr-8">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? "border-b-2 border-blue-500" : "text-white"} hover:text-blue-500 transition-all duration-300 ease-in-out`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/feature"
                    className={({ isActive }) =>
                      `${isActive ? "border-b-2 border-blue-500" : "text-white"} hover:text-blue-500 transition-all duration-300 ease-in-out`
                    }
                  >
                    Feature
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reviews"
                    className={({ isActive }) =>
                      `${isActive ? "border-b-2 border-blue-500" : "text-white"} hover:text-blue-500 transition-all duration-300 ease-in-out`
                    }
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>

              <button className=" px-6 py-3 hidden md:flex rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]">
                <NavLink
                  to="/login"
                  className="hover:text-blue-500 transition-all duration-300 ease-in-out"
                >
                  Login
                </NavLink>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
