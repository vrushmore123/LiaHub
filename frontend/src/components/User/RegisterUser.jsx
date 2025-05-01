import { useState } from "react";
import axios from "axios";

export default function RegisterUser() {
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/register/user', form);
      alert("User registered successfully");
    } catch (error) {
      alert(error.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} /><br/>
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><br/>
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
