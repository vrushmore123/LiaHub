import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    console.log(`Navigate to course ${courseId}`);
    // window.location.href = `/course/${courseId}`;
  };

  return (
    <div className="max-w-7xl mx-auto mt-22">
      <div className="text-center mb-12">
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Explore Courses
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Discover skills, expand your knowledge, and build your future with our
          expert-led courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
            className="group cursor-pointer"
          >
            <div className="h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.imageUrl}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-xl">
                  📘
                </div>
              </div>

              <div className={`p-5 bg-blue-100 border-t-4 border-blue-600`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 font-medium flex items-center group-hover:underline">
                    View Course
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                  <span className="bg-white py-1 px-3 rounded-full text-xs font-medium text-gray-600">
                    Free
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
