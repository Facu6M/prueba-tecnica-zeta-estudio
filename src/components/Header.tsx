import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-8">
          <a
            href="#login"
            className="text-gray-800 text-lg font-semibold hover:text-gray-600"
          >
            Login
          </a>
          <a
            href="#about-us"
            className="text-gray-800 text-lg font-semibold hover:text-gray-600"
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className="text-gray-800 text-lg font-semibold hover:text-gray-600"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
