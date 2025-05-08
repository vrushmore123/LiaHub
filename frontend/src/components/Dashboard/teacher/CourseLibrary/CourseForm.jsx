import React, { useState } from "react";

const CourseForm = ({ onAdd = () => {} }) => {
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && instructor) {
      onAdd({ title, instructor });
      setTitle("");
      setInstructor("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded space-y-4">
      <h2 className="text-xl font-semibold">Add New Course</h2>
      <input
        type="text"
        placeholder="Course Title"
        className="input w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Instructor Name"
        className="input w-full"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
