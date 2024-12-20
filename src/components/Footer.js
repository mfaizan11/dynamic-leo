import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-800 text-white p-4 fixed bottom-0 w-full text-center shadow-lg">
      <div className="footer-content">
        <p>&copy; 2024 Dynamic LEO</p>
        <p>
          <a href="/about">About Us</a> | <a href="/contact">Contact</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
