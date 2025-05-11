import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const Settings = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [settings, setSettings] = useState({
    userId: user._id,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (settings.newPassword !== settings.confirmPassword) {
      setError("Password not matched");
    } else {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/settings/change-password",
          settings,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setError("");
          if (user.role === "admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/employee-dashboard");
          }
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          setError(error.response.data.error);
        }
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 shadow-lg p-8 w-96 bg-white rounded-lg">
      <h2 className="font-roboto text-2xl font-bold mb-4">Change Password</h2>
      <p className="text-red-500">{error}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="oldPassword"
            className="block text-gray-700 font-medium mb-1"
          >
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="******"
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-gray-700 font-medium mb-1"
          >
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="******"
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-medium mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="******"
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-violet-700 hover:bg-violet-800 text-white py-2 rounded-md transition-colors duration-200"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
