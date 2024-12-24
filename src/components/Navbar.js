import React, { userState, useState } from "react";
import { Link } from "react-router-dom";
import favicontejaria from "../assets/favicontejaria.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-cyan-900 shadow-lg shadow-cyan-900/50 p-5 flex  ">
        <div>
          <Link to="/">
            <img src={favicontejaria} alt="logo" className="h-10 w-auto " />
          </Link>
        </div>

        <div className="container mx-auto flex justify-end">
          <div className="hidden lg:flex space-x-4  gap-1 text-lg ">
            <Link
              to="/"
              className="text-white hover:bg-cyan-700 p-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-cyan-700 p-2 rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-cyan-700 p-2 rounded-md"
            >
              Contact
            </Link>
            <button className="bg-white hover:bg-gray-200 p-2 rounded-sm font-bold">
              <Link to="/contact">Sign up</Link>
            </button>
          </div>
        </div>

        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-cyan-800 transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute  text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="flex flex-col items-center mt-10 space-y-4 z-10">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 p-2 rounded-md"
              onClick={handleMenuClose}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-gray-700 p-2 rounded-md"
              onClick={handleMenuClose}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-gray-700 p-2 rounded-md"
              onClick={handleMenuClose}
            >
              Contact
            </Link>
            <button
              className="bg-white hover:bg-gray-200 p-2 rounded-sm font-bold"
              onClick={handleMenuClose}
            >
              <Link to="/contact">Sign up</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
