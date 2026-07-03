import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Register to continue
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <p className="text-sm">
            I agree to the Terms & Conditions
          </p>
        </div>

        {/* Register Button */}
        <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;