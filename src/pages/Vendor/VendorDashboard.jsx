import VendorLayout from "../../components/Vendor/VendorLayout";
import StatsCard from "../../components/Vendor/StatsCard";
import BookingTable from "../../components/Vendor/BookingTable";

import { useVendorAuth } from "../../context/VendorAuthContext";
import { Link } from "react-router-dom";

import {
  FaBoxOpen,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaClock,
  FaPlusCircle,
  FaList,
  FaUserCircle,
} from "react-icons/fa";

const VendorDashboard = () => {
  const { vendor } = useVendorAuth();

  return (
    <VendorLayout>

      {/* Welcome */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-lg">

        <h1 className="text-3xl font-bold">
          Welcome, {vendor?.name || "Vendor"} 👋
        </h1>

        <p className="mt-2 opacity-90">
          Manage your services, bookings and grow your business.
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Services"
          value="8"
          icon={<FaBoxOpen />}
          color="text-pink-600"
        />

        <StatsCard
          title="Bookings"
          value="24"
          icon={<FaCalendarCheck />}
          color="text-green-600"
        />

        <StatsCard
          title="Revenue"
          value="₹1.5L"
          icon={<FaMoneyBillWave />}
          color="text-blue-600"
        />

        <StatsCard
          title="Pending"
          value="5"
          icon={<FaClock />}
          color="text-yellow-500"
        />

      </div>

      {/* Quick Actions */}

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <Link
          to="/vendor/add-service"
          className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
        >
          <FaPlusCircle className="text-4xl text-pink-600 mb-3" />

          <h2 className="text-xl font-bold">
            Add Service
          </h2>

          <p className="text-gray-500 mt-2">
            Add new wedding services.
          </p>

        </Link>

        <Link
          to="/vendor/services"
          className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
        >
          <FaList className="text-4xl text-blue-600 mb-3" />

          <h2 className="text-xl font-bold">
            My Services
          </h2>

          

          <p className="text-gray-500 mt-2">
            View and manage services.
          </p>

        </Link>

        <Link
          to="/profile"
          className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
        >
          <FaUserCircle className="text-4xl text-green-600 mb-3" />

          <h2 className="text-xl font-bold">
            My Profile
          </h2>

          <p className="text-gray-500 mt-2">
            Update your account.
          </p>

        </Link>

      </div>

      {/* Latest Bookings */}

      <div className="mt-10">
        <BookingTable />
      </div>

    </VendorLayout>
  );
};

export default VendorDashboard;