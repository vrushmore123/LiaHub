import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CourseDetail from "./components/CourseDetail";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import LoginStudent from "./components/Student/LoginStudent";
import RegisterStudent from "./components/Student/RegisterStudent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/login" element={<LoginStudent />} />
        <Route path="/register" element={<RegisterStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
