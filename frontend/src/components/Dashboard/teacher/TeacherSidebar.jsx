import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Cross button inside top-right */}
          <button
            className="absolute top-2 right-2 text-xl text-gray-700 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

          <h1 className="text-2xl font-bold mb-6 mt-6">Teacher Panel</h1>

          <NavLink
            to="/courses"
            className="mb-2 hover:text-blue-600"
            activeClassName="text-blue-800 font-semibold"
          >
            Courses
          </NavLink>
          <NavLink
            to="/assignments"
            className="mb-2 hover:text-blue-600"
            activeClassName="text-blue-800 font-semibold"
          >
            Assignments
          </NavLink>
          <NavLink
            to="/grades"
            className="mb-2 hover:text-blue-600"
            activeClassName="text-blue-800 font-semibold"
          >
            Grades
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TeacherSidebar;
