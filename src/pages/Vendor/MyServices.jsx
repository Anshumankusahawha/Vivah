import VendorLayout from "../../components/Vendor/VendorLayout";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
     const token = localStorage.getItem("vendorToken");

const res = await axios.get(
  "http://localhost:5000/api/services/my",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      setServices(res.data.services);
    } catch (error) {
      console.error(error);
      alert("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <VendorLayout>
        <div className="text-center py-20 text-2xl font-bold">
          Loading Services...
        </div>
      </VendorLayout>
    );
  }

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this service?"
  );

  if (!confirmDelete) return;

  try {
    const res = await axios.delete(
      `http://localhost:5000/api/services/${id}`
    );

    alert(res.data.message);

    // List refresh
    fetchServices();

  } catch (error) {
    alert(error.response?.data?.message || "Delete failed");
  }
};

  return (
    <VendorLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          My Services
        </h1>

        <Link
          to="/vendor/add-service"
          className="bg-pink-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-pink-700"
        >
          <FaPlus />
          Add Service
        </Link>
      </div>

      {services.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-bold">
            No Services Found
          </h2>

          <p className="text-gray-500 mt-3">
            Click on Add Service to create your first service.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={
                  item.image
                    ? item.image
                    : "https://via.placeholder.com/400x250?text=No+Image"
                }
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="text-pink-600 mt-2">
                  {item.category}
                </p>

                <p className="mt-2 font-semibold">
                  ₹{item.price}
                </p>

                <p className="mt-1">
                  📍 {item.city}
                </p>

                <p className="text-yellow-500 mt-2">
                  ⭐ New
                </p>

                <div className="flex justify-between mt-6">

                  <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                    <FaEye />
                  </button>

                  <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
                    <FaEdit />
                  </button>

                 <button
                   onClick={() => handleDelete(item._id)}
                   className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
                 >
                   <FaTrash />
                 </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}
    </VendorLayout>
  );
};

export default MyServices;