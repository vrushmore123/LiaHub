import React from "react";


const Home = () => {
  // Hardcoded courses
  const courses = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Learn the basics of building websites and web applications.",
      image: "/Web.jpg",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      icon: "💻",
    },
    {
      id: 2,
      name: "App Development",
      description: "Master the skills to build mobile applications.",
      image: "/App.jpg",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      icon: "📱",
    },
    {
      id: 3,
      name: "Data Science",
      description: "Dive into data analysis, machine learning, and AI.",
      image: "/DATA.jpg",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      icon: "📊",
    },
    {
      id: 4,
      name: "UI/UX Design",
      description:
        "Learn how to create user-friendly and beautiful interfaces.",
      image: "/UI.jpg",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
      icon: "🎨",
    },
  ];

  const handleCourseClick = (courseId) => {
    // You can handle navigation programmatically here instead of using Link
    console.log(`Navigate to course ${courseId}`);
    // In a real implementation, you might use:
    // window.location.href = `/course/${courseId}`;
  };

  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-indigo-600">
            Education
          </h2>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Courses
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Discover skills, expand your knowledge, and build your future with
            our expert-led courses.
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
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-xl">
                    {course.icon}
                  </div>
                </div>

                <div
                  className={`p-5 ${
                    course.bgColor
                  } border-t-4 ${course.textColor.replace("text", "border")}`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <button
                      className={`${course.textColor} font-medium flex items-center group-hover:underline`}
                    >
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
    </>
  );
};

export default Home;
