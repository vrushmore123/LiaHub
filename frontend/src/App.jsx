//app.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
// import Courses from "./pages/courses";
import CourseDetail from "./pages/coursesdetails";
import Navbar from "./components/Navbar";
import CourseLearning from "./pages/Learncourse";
// import Navbar from "./components/Navbar";
import LoginStudent from "./components/Student/LoginStudent";
import RegisterStudent from "./components/Student/RegisterStudent";
import Homepage from "./pages/Homepage";
import LoginUser from "./components/User/LoginUser";
import RegisterUser from "./components/User/RegisterUser";
import TeacherGreeting from "./components/Dashboard/teacher/TeacherGreeting";
import Courses from "./components/Dashboard/teacher/CourseLibrary/Courses";
import Grades from "./components/Dashboard/teacher/Grades";
import Assignments from "./components/Dashboard/teacher/Assignments";
import StudentDashboard from "./components/Dashboard/Student/dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/course/:id/learn" element={<CourseLearning />} />
        <Route path="/login" element={<LoginStudent />} />
        <Route path="/register" element={<RegisterStudent />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/teacherDashboard" element={<TeacherGreeting />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
