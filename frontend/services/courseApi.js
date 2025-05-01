import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const fetchCourseDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course detail:", error);
    return null;
  }
};
