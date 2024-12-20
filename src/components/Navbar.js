import React, { userState, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assests/logo1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <>
      {/* Navbar Desktop Start */}

      <nav className="bg-gray-900 p-5 flex shadow-lg ">
        <div>
          <Link to="/">
            <img src={logo1} alt="logo" className="h-10 w-auto " />
          </Link>
        </div>

        <div className="container mx-auto flex justify-end">
          <div className="hidden lg:flex space-x-4  gap-1 text-lg ">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 p-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-gray-700 p-2 rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-gray-700 p-2 rounded-md"
            >
              Contact
            </Link>
            <button className="bg-white hover:bg-gray-200 p-2 rounded-sm font-bold">
              <Link to="/contact">Sign up</Link>
            </button>
          </div>
        </div>
        {/* Navbar End Start */}

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
          className={`fixed top-0 left-0 h-full w-64 bg-gray-700 transform transition-transform duration-300 ${
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

          <div className="flex flex-col items-center mt-10 space-y-4">
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
