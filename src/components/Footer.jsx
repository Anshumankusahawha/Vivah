import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            ShopEase
          </h2>

          <p className="text-gray-400 leading-7">
            Shop your favorite products at the best prices.
            Fast delivery, secure payment and trusted quality.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>

            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Customer Care
          </h3>

          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              Prayagraj, Uttar Pradesh
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              +91 9876543210
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              support@shopease.com
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © 2026 ShopEase. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;