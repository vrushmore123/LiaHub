import { useState } from "react";
import axios from "axios";

export default function RegisterStudent() {
  const [form, setForm] = useState({ name: "", email: "", password: "", course: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/register/student', form);
      alert("Student registered successfully");
    } catch (error) {
      alert(error.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><br/>
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><br/>
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><br/>
        <input type="text" placeholder="Course" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
