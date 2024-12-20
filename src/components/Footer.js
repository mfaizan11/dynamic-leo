import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 fixed bottom-0 w-full text-center shadow-lg">
      <div className="footer-content">
        <p>&copy; 2024 Tejaria</p>
        <p>
          <a href="/about">About Us</a> | <a href="/contact">Contact</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
