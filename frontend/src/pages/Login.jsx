import React from "react";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen space-y-6"
      style={{
        background: "linear-gradient(to bottom, #7C3AED 50%, #f3f4f6 50%)",
      }}
    >
      <h2 className="font-play text-3xl text-white">Leave App</h2>
      <div className="border shadow-lg p-6 w-80 bg-white rounded-lg">
        <h2 className="font-roboto text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Enter Email"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="******"
            ></input>
          </div>
          <div className="mb-4 flex items-center justify-between text-sm">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-violet-600"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-violet-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
