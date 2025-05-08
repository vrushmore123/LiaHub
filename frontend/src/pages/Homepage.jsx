import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [isHoveringTeacher, setIsHoveringTeacher] = useState(false);
  const [isHoveringStudent, setIsHoveringStudent] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 font-sans flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Left side content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to your{" "}
              <span className="text-blue-600">Learning Journey</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Access your educational resources and manage your learning
              experience with our comprehensive portal.
            </p>
          </div>

          {/* Right side login options */}
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Select your login type
            </h3>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => navigate("/registerUser")}
                onMouseEnter={() => setIsHoveringTeacher(true)}
                onMouseLeave={() => setIsHoveringTeacher(false)}
                className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 group"
              >
                <div className="flex items-center justify-center">
                  <span className="mr-3">👨‍🏫</span>
                  <span className="font-medium text-lg">Teacher Login</span>
                  <span
                    className={`absolute right-4 transform transition-transform duration-300 ${
                      isHoveringTeacher ? "translate-x-2" : ""
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>

              <button
                onClick={() => navigate("/register")}
                onMouseEnter={() => setIsHoveringStudent(true)}
                onMouseLeave={() => setIsHoveringStudent(false)}
                className="relative bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 group"
              >
                <div className="flex items-center justify-center">
                  <span className="mr-3">👨‍🎓</span>
                  <span className="font-medium text-lg">Student Login</span>
                  <span
                    className={`absolute right-4 transform transition-transform duration-300 ${
                      isHoveringStudent ? "translate-x-2" : ""
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
