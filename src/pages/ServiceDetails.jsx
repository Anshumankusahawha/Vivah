import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

const ServiceDetails = () => {
  
  const { id } = useParams();

  const [service, setService] = useState(null);

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/services/${id}`
      );

      setService(res.data.service);
    } catch (error) {
      console.log(error);
    }
  };

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-20 text-2xl">
          Loading...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-5">

        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-xl shadow-lg"
          />

          <div>

            <h1 className="text-4xl font-bold">
              {service.title}
            </h1>

            <p className="mt-3 text-pink-600 font-semibold">
              {service.category}
            </p>

            <p className="mt-5 text-2xl font-bold">
              ₹ {service.price}
            </p>

            <p className="mt-3">
              📍 {service.city}
            </p>

            <p className="mt-6 text-gray-700">
              {service.description}
            </p>

            <hr className="my-6" />

            <h2 className="text-xl font-semibold">
              Vendor Details
            </h2>

            <p>Name : {service.vendor?.name}</p>

            <p>Email : {service.vendor?.email}</p>

            <p>Phone : {service.vendor?.phone}</p>
            <BookingModal serviceId={service._id} />

            <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700">
              Book Now
            </button>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;