import { useState } from "react";
import axios from "axios";

export default function LoginStudent() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/login/student', form);
      alert("Student login successful");
    } catch (error) {
      alert(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><br/>
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
