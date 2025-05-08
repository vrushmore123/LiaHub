import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 min-h-screen bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="text-2xl font-bold text-blue-600">CourseHub</div>
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-6">
        <a
          href="#"
          className="block py-3 px-6 text-gray-700 hover:bg-blue-100 hover:text-blue-600 font-medium"
          onClick={toggleSidebar}
        >
          My Courses
        </a>
        <a
          href="#"
          className="block py-3 px-6 text-gray-700 hover:bg-blue-100 hover:text-blue-600 font-medium"
          onClick={toggleSidebar}
        >
          Assignments
        </a>
        <a
          href="#"
          className="block py-3 px-6 text-gray-700 hover:bg-blue-100 hover:text-blue-600 font-medium"
          onClick={toggleSidebar}
        >
          Grades
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
