import React, { useState } from "react";

const Settings = () => {
  const [error, setError] = useState(null);

  return (
    <div className="max-w-3xl mx-auto mt-10 shadow-lg p-8 w-96 bg-white rounded-lg">
      <h2 className="font-roboto text-2xl font-bold mb-4">Change Password</h2>
      <p className="text-red-500">{error}</p>
      <form>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Old Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            New Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
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
