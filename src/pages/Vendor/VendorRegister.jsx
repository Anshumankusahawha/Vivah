import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const VendorRegister = () => {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  city: "",
  password: "",
  confirmPassword: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleRegister = async (e) => {
  if (
  !formData.name ||
  !formData.email ||
  !formData.phone ||
  !formData.city ||
  !formData.password
) {
  return alert("Please fill all required fields");
}
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    return alert("Passwords do not match");
  }

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/vendor/register",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        password: formData.password,
      }
    );

    alert(res.data.message);

    navigate("/vendor/login");

  } catch (error) {
    alert(
      error.response?.data?.message || "Registration Failed"
    );
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center px-4 py-10">

      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-pink-600">
          Become a Vendor
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Register your wedding business and start receiving bookings.
        </p>
<form
  onSubmit={handleRegister}
  className="grid md:grid-cols-2 gap-6"
>
  {/* Business Name */}
  <div>
    <label className="font-medium">Business Name</label>
    <input
      type="text"
      placeholder="Royal DJ Sound"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Owner Name */}
  <div>
    <label className="font-medium">Owner Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Anshuman Kushwaha"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Email */}
  <div>
    <label className="font-medium">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="example@gmail.com"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="font-medium">Phone Number</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="9876543210"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Category */}
  <div>
    <label className="font-medium">Category</label>

    <select className="w-full border rounded-lg p-3 mt-2">
      <option>Select Category</option>
      <option>DJ</option>
      <option>Tent House</option>
      <option>Flower Decoration</option>
      <option>Banquet Hall</option>
      <option>Catering</option>
      <option>Photography</option>
      <option>Wedding Planner</option>
      <option>Luxury Cars</option>
      <option>Makeup Artist</option>
    </select>
  </div>

  {/* City */}
  <div>
    <label className="font-medium">City</label>
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
      placeholder="Prayagraj"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* GST */}
  <div>
    <label className="font-medium">GST Number (Optional)</label>
    <input
      type="text"
      placeholder="GST Number"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Aadhaar */}
  <div>
    <label className="font-medium">Aadhar Number (Optional)</label>
    <input
      type="text"
      placeholder="Aadhar Number"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Address */}
  <div className="md:col-span-2">
    <label className="font-medium">Business Address</label>

    <textarea
      rows="3"
      placeholder="Complete Address"
      className="w-full border rounded-lg p-3 mt-2"
    ></textarea>
  </div>

  {/* Description */}
  <div className="md:col-span-2">
    <label className="font-medium">Business Description</label>

    <textarea
      rows="4"
      placeholder="Write about your business..."
      className="w-full border rounded-lg p-3 mt-2"
    ></textarea>
  </div>

  {/* Password */}
  <div>
    <label className="font-medium">Password</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Confirm Password */}
  <div>
    <label className="font-medium">Confirm Password</label>
    <input
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Terms */}
  <div className="md:col-span-2 flex items-center gap-2">
    <input type="checkbox" required />
    <p>I agree to the Terms & Conditions</p>
  </div>

  {/* Register Button */}
  <div className="md:col-span-2">
    <button
      type="submit"
      className="w-full bg-pink-600 text-white py-4 rounded-lg hover:bg-pink-700 transition"
    >
      Register as Vendor
    </button>
  </div>
</form>

        <p className="text-center mt-6">
          Already have a Vendor Account?

          <Link
            to="/vendor/login"
            className="text-pink-600 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default VendorRegister;