import { useState } from "react";
import axios from "axios";
import { User, Mail, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RegisterUser() {
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register/user", form);
      alert("User registered successfully");
      navigate("/teacherDashboard");
    } catch (error) {
      alert(error.response?.data?.detail || "Registration failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: "" };

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    const criteria = [
      hasLowercase,
      hasUppercase,
      hasNumbers,
      hasSpecial,
      isLongEnough,
    ];
    const metCriteria = criteria.filter(Boolean).length;

    const strengthMap = {
      0: { strength: 0, text: "", color: "" },
      1: { strength: 20, text: "Very Weak", color: "bg-red-500" },
      2: { strength: 40, text: "Weak", color: "bg-orange-500" },
      3: { strength: 60, text: "Medium", color: "bg-yellow-500" },
      4: { strength: 80, text: "Strong", color: "bg-blue-500" },
      5: { strength: 100, text: "Very Strong", color: "bg-green-500" },
    };

    return strengthMap[metCriteria];
  };

  const passwordStrength = getPasswordStrength(form.password);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-14">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
        <p className="text-gray-600 mt-2">Join our community today</p>
      </div>

      <div className="space-y-6">
        {/* Username Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={form.username}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={18} className="text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              className={`w-full pl-10 pr-10 py-2 rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff
                  size={18}
                  className="text-gray-400 hover:text-gray-600"
                />
              ) : (
                <Eye size={18} className="text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}

          {/* Password strength indicator */}
          {form.password && (
            <div className="mt-2">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${passwordStrength.color}`}
                  style={{ width: `${passwordStrength.strength}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {passwordStrength.text &&
                  `Password strength: ${passwordStrength.text}`}
              </p>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li
                  className={`flex items-center ${
                    form.password.length >= 8
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <CheckCircle size={12} className="mr-1" />
                  At least 8 characters
                </li>
                <li
                  className={`flex items-center ${
                    /[A-Z]/.test(form.password)
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <CheckCircle size={12} className="mr-1" />
                  Contains uppercase letter
                </li>
                <li
                  className={`flex items-center ${
                    /[0-9]/.test(form.password)
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <CheckCircle size={12} className="mr-1" />
                  Contains number
                </li>
                <li
                  className={`flex items-center ${
                    /[!@#$%^&*(),.?":{}|<>]/.test(form.password)
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <CheckCircle size={12} className="mr-1" />
                  Contains special character
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium ${
              isSubmitting
                ? "opacity-75 cursor-not-allowed"
                : "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            } transition-colors shadow-md`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </div>

        {/* Login link */}
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/loginUser"
              className="text-blue-600 font-medium hover:text-blue-800"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
