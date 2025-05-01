import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Sidebar Toggle + Logo */}
          <div className="flex items-center space-x-4">
            {/* Sidebar Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              {/* Simple Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="text-white text-2xl font-bold">
              CourseHub
            </Link>
          </div>

          {/* Right: Navbar Links */}
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
