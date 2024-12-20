import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo1 from "../assests/logo1.png";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-800 p-5 flex shadow-lg ">
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
      </nav>
    </>
  );
}

export default Navbar;
