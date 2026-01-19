import { useState } from "react";
import axios from "axios";
import {
  AtSign,
  Lock,
  Key,
  CheckCircle,
  Eye,
  EyeOff,
  RefreshCcw,
} from "lucide-react";
import "./Settings.scss";

const Settings = () => {
  const [form, setForm] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { email, currentPassword, newPassword, confirmNewPassword } = form;

    // Case 1: Email + current password only (allowed)
    if (!newPassword && !confirmNewPassword) {
      if (!email || !currentPassword) {
        return "Email and current password are required.";
      }
      return null;
    }

    // Case 2: New password flow
    if (!email || !currentPassword) {
      return "Email and current password are required to change password.";
    }

    if (newPassword.length < 8) {
      return "New password must be at least 8 characters.";
    }

    if (newPassword !== confirmNewPassword) {
      return "New passwords do not match.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:500/reset", {
        email: form.email,
        currentPassword: form.currentPassword,
        newPassword: form.newPassword || "",
      });
      alert("Credentials updated successfully");
    } catch (err) {
      setError("Failed to update credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="update-credentials" onSubmit={handleSubmit}>
      <h2>Update Credentials</h2>

      {/* Email */}
      <label>Current Email</label>
      <div className="input-group">
        <AtSign size={18} />
        <input
          type="email"
          name="email"
          placeholder="admin@impact-ngo.org"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {/* Current Password */}
      <label>Current Password</label>
      <div className="input-group">
        <Lock size={18} />
        <input
          type={showCurrent ? "text" : "password"}
          name="currentPassword"
          placeholder="Enter current password"
          value={form.currentPassword}
          onChange={handleChange}
        />
          {showCurrent ? (
            <EyeOff size={18} onClick={() => setShowCurrent(!showCurrent)} />
          ) : (
            <Eye size={18} onClick={() => setShowCurrent(!showCurrent)} />
          )}
      </div>

      {/* New Passwords */}
      <div className="grid">
        <div>
          <label>New Password</label>
          <div className="input-group">
            <Key size={18} />
            <input
              type="password"
              name="newPassword"
              placeholder="8+ characters"
              value={form.newPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Confirm New Password</label>
          <div className="input-group">
            <CheckCircle size={18} />
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="Repeat password"
              value={form.confirmNewPassword}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={loading}>
        <RefreshCcw size={18} />
        {loading ? "Updating..." : "Update Credentials"}
      </button>

    </form>
  );
};

export default Settings;
