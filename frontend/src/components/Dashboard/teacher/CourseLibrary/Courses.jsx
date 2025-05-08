import { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import CourseForm from "./CourseForm";
import CourseFilters from "./CourseFilters";
import CourseCard from "./CourseCard";
import EmptyState from "./EmptyState";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [courseInput, setCourseInput] = useState({
    name: "",
    description: "",
    imageUrl: "",
    category: "General",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("Drafts");

  const categories = [
    "General",
    "Programming",
    "Design",
    "Business",
    "Marketing",
  ];

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddCourse = async () => {
    const { name, description, imageUrl, category } = courseInput;
    if (!name || !description) return;

    const finalImageUrl =
      imageUrl ||
      `https://via.placeholder.com/400x200/3b82f6/FFFFFF?text=${encodeURIComponent(
        name
      )}`;

    const newCourse = {
      name,
      description,
      imageUrl: finalImageUrl,
      category: category || "General",
      createdAt: new Date().toISOString(),
      status: "Drafts",
    };

    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);

    try {
      const response = await fetch("http://localhost:8000/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      });
      if (!response.ok) console.error("Failed to save course.");
    } catch (err) {
      console.error("Error posting course:", err);
    }

    setCourseInput({
      name: "",
      description: "",
      imageUrl: "",
      category: "General",
    });
    setShowForm(false);
  };

  const handleUpdate = () => {
    const { name, description, imageUrl, category } = courseInput;
    const updatedCourses = [...courses];

    if (!name || !description) return;

    updatedCourses[editIndex] = {
      ...courseInput,
      imageUrl: imageUrl || updatedCourses[editIndex].imageUrl,
      category: category || "General",
      updatedAt: new Date().toISOString(),
    };

    setCourses(updatedCourses);
    setEditIndex(null);
    setShowForm(false);
    setCourseInput({
      name: "",
      description: "",
      imageUrl: "",
      category: "General",
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setCourseInput(courses[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const filteredCourses = courses.filter((course) => {
    const matchSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filter === "All" || course.category === filter;
    const matchStatus = course.status === activeSection;
    return matchSearch && matchFilter && matchStatus;
  });

  const uniqueCategories = ["All", ...new Set(courses.map((c) => c.category))];
  const sections = ["Drafts", "Current", "Completed"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-10 mt-7">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-blue-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-blue-700">
                Course Library
              </h1>
              <p className="text-gray-600">Manage your course collection</p>
            </div>
            {!showForm && (
              <button onClick={() => setShowForm(true)} className="btn-primary">
                <PlusCircle size={20} />
                <span>Create New Course</span>
              </button>
            )}
          </div>

          <div className="flex space-x-4 mb-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full border ${
                  activeSection === section
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border-blue-600"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {!showForm && courses.length > 0 && (
            <CourseFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filter={filter}
              setFilter={setFilter}
              categories={uniqueCategories}
            />
          )}
        </div>

        {showForm ? (
          <CourseForm
            courseInput={courseInput}
            setCourseInput={setCourseInput}
            handleSubmit={editIndex !== null ? handleUpdate : handleAddCourse}
            handleCancel={() => {
              setEditIndex(null);
              setShowForm(false);
              setCourseInput({
                name: "",
                description: "",
                imageUrl: "",
                category: "General",
              });
            }}
            isEdit={editIndex !== null}
            categories={categories}
          />
        ) : filteredCourses.length === 0 ? (
          <EmptyState
            showClear={searchTerm || filter !== "All"}
            onClear={() => {
              setSearchTerm("");
              setFilter("All");
            }}
            onCreate={() => setShowForm(true)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, idx) => {
              const originalIndex = courses.findIndex(
                (c) =>
                  c.name === course.name &&
                  c.description === course.description &&
                  c.imageUrl === course.imageUrl
              );
              return (
                <CourseCard
                  key={idx}
                  course={course}
                  onEdit={() => handleEdit(originalIndex)}
                  onDelete={() => handleDelete(originalIndex)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
