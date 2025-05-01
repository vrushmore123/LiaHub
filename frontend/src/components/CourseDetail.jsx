import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetail } from "../../services/courseApi";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const getCourseDetail = async () => {
      const data = await fetchCourseDetail(id);
      setCourse(data);
    };
    getCourseDetail();
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p>{course.price}</p>
    </div>
  );
};

export default CourseDetail;
