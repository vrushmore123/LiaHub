// components/Assignments.jsx
import React, { useState } from "react";
import {
  Calendar,
  CheckCircle,
  Clock,
  Award,
  Plus,
  AlertCircle,
} from "lucide-react";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!points || points <= 0)
      newErrors.points = "Valid points value is required";
    if (!dueDate) newErrors.dueDate = "Due date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePostAssignment = () => {
    if (validateForm()) {
      const newAssignment = {
        id: Date.now(),
        title,
        description,
        points: Number(points),
        dueDate,
        createdAt: new Date().toISOString(),
      };
      setAssignments([...assignments, newAssignment]);
      setTitle("");
      setDescription("");
      setPoints("");
      setDueDate("");
      setShowForm(false);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isPastDue = (dueDate) => {
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 p-10 mt-7">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border border-blue-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Assignments
              </h1>
              <p className="text-gray-600 mt-1">
                Create and manage course assignments
              </p>
            </div>

            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Plus size={20} />
                <span className="font-medium">New Assignment</span>
              </button>
            )}
          </div>
        </div>

        {/* Assignment Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-lg mb-8 border border-blue-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">
                Create New Assignment
              </h2>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Assignment Title*
                  </label>
                  <input
                    id="title"
                    className={`w-full border ${
                      errors.title
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    } p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                    type="text"
                    placeholder="Enter assignment title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.title}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Assignment Description*
                  </label>
                  <textarea
                    id="description"
                    className={`w-full border ${
                      errors.description
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    } p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                    rows="4"
                    placeholder="Enter detailed instructions for the assignment"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.description}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="points"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Points*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Award size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="points"
                      className={`w-full border ${
                        errors.points
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      } p-3 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                      type="number"
                      min="1"
                      placeholder="100"
                      value={points}
                      onChange={(e) => setPoints(e.target.value)}
                    />
                  </div>
                  {errors.points && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.points}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="dueDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Due Date*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="dueDate"
                      className={`w-full border ${
                        errors.dueDate
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      } p-3 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                  {errors.dueDate && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.dueDate}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={handlePostAssignment}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md"
                >
                  <CheckCircle size={18} />
                  <span className="font-medium">Post Assignment</span>
                </button>

                <button
                  onClick={() => {
                    setShowForm(false);
                    setErrors({});
                  }}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors"
                >
                  <span className="font-medium">Cancel</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Assignments List */}
        {assignments.length === 0 ? (
          <div className="bg-white p-12 rounded-xl shadow-lg text-center border border-blue-100">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <CheckCircle size={48} className="text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No assignments yet
            </h3>
            <p className="text-gray-600 mb-6">
              Create your first assignment to get started
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Plus size={18} />
              <span className="font-medium">Create First Assignment</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-blue-50"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {assignment.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <Award size={14} />
                        {assignment.points} points
                      </span>
                      <span
                        className={`${
                          isPastDue(assignment.dueDate)
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        } text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1`}
                      >
                        <Clock size={14} />
                        {isPastDue(assignment.dueDate) ? "Past due" : "Active"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 whitespace-pre-wrap">
                    {assignment.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mt-4">
                    <Calendar size={16} className="mr-1" />
                    <span>Due: {formatDate(assignment.dueDate)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignments;
