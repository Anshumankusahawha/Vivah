import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <div>

        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-6">

        <FaBell className="text-2xl cursor-pointer" />

        <FaUserCircle className="text-4xl text-pink-600 cursor-pointer" />

      </div>

    </div>
  );
};

export default Topbar;