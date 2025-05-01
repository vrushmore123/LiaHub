import { useState } from "react";
import axios from "axios";

export default function LoginUser() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/login/user', form);
      alert("User login successful");
    } catch (error) {
      alert(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} /><br/>
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
