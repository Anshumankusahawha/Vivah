import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaLock, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10 text-pink-600">
          My Profile
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="w-36 h-36 rounded-full mx-auto border-4 border-pink-500"
            />

            <h2 className="text-2xl font-bold mt-5">
              {user.name}
            </h2>

            <p className="text-gray-500 mt-2 capitalize">
              {user.role}
            </p>

            <button className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 flex items-center gap-2 mx-auto">
              <FaUserEdit />
              Edit Profile
            </button>

          </div>

          {/* Right Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-8">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                />
              </div>

              <div>
                <label className="font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                />
              </div>

              <div>
                <label className="font-semibold">
                  Phone
                </label>

                <input
                  type="text"
                  value={user.phone || "Not Available"}
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                />
              </div>

              <div>
                <label className="font-semibold">
                  City
                </label>

                <input
                  type="text"
                  value={user.city || "Not Available"}
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
                />
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-pink-100 rounded-xl p-5 text-center">
                <h2 className="text-3xl font-bold text-pink-600">
                  0
                </h2>
                <p>Total Bookings</p>
              </div>

              <div className="bg-green-100 rounded-xl p-5 text-center">
                <h2 className="text-3xl font-bold text-green-600">
                  0
                </h2>
                <p>Completed</p>
              </div>

              <div className="bg-yellow-100 rounded-xl p-5 text-center">
                <h2 className="text-3xl font-bold text-yellow-600">
                  0
                </h2>
                <p>Pending</p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <FaLock />
                Change Password
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 flex items-center gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;