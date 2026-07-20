import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

      <img
        src={
          service.image ||
          "https://via.placeholder.com/400x250?text=No+Image"
        }
        alt={service.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
          {service.category}
        </span>

        <h2 className="text-2xl font-bold mt-3">
          {service.title}
        </h2>

        <p className="text-gray-600 mt-2">
          📍 {service.city}
        </p>

        <p className="text-pink-600 font-bold text-xl mt-2">
          ₹ {service.price}
        </p>

        <div className="flex justify-between mt-6">

          <Link
            to={`/service/${service._id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            View Details
          </Link>

          <button className="bg-pink-600 text-white px-5 py-2 rounded-lg">
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;