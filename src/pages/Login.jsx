import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-1" />
          <span className="mx-3 text-gray-400">OR</span>
          <hr className="flex-1" />
        </div>

        {/* Register */}
        <Link to="/register">
           <button className="w-full border-2 border-pink-600 text-pink-600 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition">
           Create New Account
           </button>
        </Link>

      </div>

    </div>
  );
};

export default Login;