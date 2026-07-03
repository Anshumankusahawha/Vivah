import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
          ShopEase
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Home
          </li>

        

          <li className="hover:text-blue-600 cursor-pointer transition">
             <Link to="/services">
             Services
             </Link>
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition flex items-center gap-2">
            <FaShoppingCart className="text-xl" />
            Cart
          </li>

          <li>
            <Link to="/login">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
              </button>
            </Link>
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            <FaUserCircle className="text-3xl" />
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;