import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API = process.env.REACT_APP_API_URL;
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const { email, password } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) return "All fields are required";
    if (!emailRegex.test(email)) return "Invalid email address";
    if (password.length < 6) return "Password must be at least 6 characters";


    if (/[<>$;]/.test(email) || /[<>$;]/.test(password)) {
      return "Invalid characters detected";
    }

    return null;
  };

  // --- CSRF token from cookie (double-submit pattern) ---
  const getCsrfToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrfToken="))
      ?.split("=")[1];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const csrfToken = getCsrfToken();

      const res = await axios.post(
        `${API}/adm/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken, // 🛡️ CSRF protection
          },
          withCredentials: true, // required for cookies
        }
      );

      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Welcome Back</h2>
        <p className="subtitle">
          Sign in to continue your global impact.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>User Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />

            <span
              className="toggle-password"
              onClick={() => setShowPassword((p) => !p)}
              title={showPassword ? "Hide password" : "Show password"}
            >
             {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login →"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

      </div>
    </div>
  );
};

export default AdminLogin;
