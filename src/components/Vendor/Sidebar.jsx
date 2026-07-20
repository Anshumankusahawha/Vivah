import {
  FaTachometerAlt,
  FaPlusCircle,
  FaBoxOpen,
  FaClipboardList,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-[#1E293B] text-white shadow-xl">

      {/* Logo */}

      <div className="p-6 border-b border-gray-700">

        <h1 className="text-3xl font-bold text-pink-500">
          Vivah Vendor
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Vendor Dashboard
        </p>

      </div>

      {/* Menu */}

      <nav className="mt-8">

        <Link
          to="/vendor/dashboard"
          className="flex items-center gap-4 px-6 py-4 hover:bg-pink-600 transition"
        >
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link
          to="/vendor/add-service"
          className="flex items-center gap-4 px-6 py-4 hover:bg-pink-600 transition"
        >
          <FaPlusCircle />
          Add Service
        </Link>

        <Link
          to="/vendor/services"
          className="flex items-center gap-4 px-6 py-4 hover:bg-pink-600 transition"
        >
          <FaBoxOpen />
          My Services
        </Link>

        <Link
          to="/vendor/bookings"
          className="flex items-center gap-4 px-6 py-4 hover:bg-pink-600 transition"
        >
          <FaClipboardList />
          Bookings
        </Link>

        <Link
          to="/vendor/profile"
          className="flex items-center gap-4 px-6 py-4 hover:bg-pink-600 transition"
        >
          <FaUser />
          Profile
        </Link>

        <Link
          to="/vendor/settings"
          className="flex items-center gap-4 px-6 py-4 hover:bg-pink-600 transition"
        >
          <FaCog />
          Settings
        </Link>

      </nav>

      {/* Logout */}

      <div className="absolute bottom-0 w-72 border-t border-gray-700">

        <button className="flex items-center gap-4 px-6 py-5 hover:bg-red-600 w-full transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;