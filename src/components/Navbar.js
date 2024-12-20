import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-800 p-5 md:flex">
        <div className="container mx-auto flex justify-between items-center md:flex md:shrink">
          <div className="hidden lg:flex space-x-4 md:flex gap-1 text-lg ">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 p-2 rounded-md md:flex-1"
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
      </nav>
    </>
  );
}

export default Navbar;
