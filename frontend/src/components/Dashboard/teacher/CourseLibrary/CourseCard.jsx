import React from "react";
import { FaMicrophone, FaClipboardList } from "react-icons/fa";

const CourseCard = ({ resource }) => {
  if (!resource) return null;

  const getIcon = (type) => {
    switch (type) {
      case "podcast":
        return <FaMicrophone className="text-purple-600" />;
      case "test":
        return <FaClipboardList className="text-blue-600" />;
      default:
        return <FaClipboardList className="text-gray-600" />;
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 transition">
      <div className="bg-purple-50 p-2 rounded">{getIcon(resource.type)}</div>
      <div className="flex-1">
        <h4 className="font-medium">{resource.title}</h4>
        <p className="text-sm text-gray-500">
          {resource.duration && `${resource.duration} • `}
          {resource.marks && `${resource.marks} Marks • `}
          {resource.type === "test" && "Practice Test"}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
