import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useVendorAuth } from "../../context/VendorAuthContext";

const VendorLogin = () => {
  const navigate = useNavigate();
  const { loginVendor } = useVendorAuth();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/vendor/login",
      formData
    );

    loginVendor(res.data.vendor, res.data.token);

    alert(res.data.message);

    navigate("/vendor/dashboard");

  } catch (error) {
    alert(
      error.response?.data?.message || "Login Failed"
    );
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-pink-600">
          Vendor Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to manage your wedding services
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block font-medium mb-2">
            Business Email
          </label>

        <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-pink-600"
/>
        </div>

        {/* Password */}

        <div className="mb-3">

          <label className="block font-medium mb-2">
            Password
          </label>

         <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Enter password"
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-pink-600"
/>

        </div>

        <div className="text-right mb-6">

          <a
            href="#"
            className="text-pink-600 hover:underline"
          >
            Forgot Password?
          </a>

        </div>
<button
  onClick={handleLogin}
  className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
>
  Login
</button>

        <p className="text-center mt-6">

          Don't have a Vendor Account?

          <Link
            to="/vendor/register"
            className="text-pink-600 font-semibold ml-2 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default VendorLogin;