import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/services"
      );

      setServices(res.data.services);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <HeroSlider />

      <div className="max-w-7xl mx-auto py-12 px-5">

        <h1 className="text-4xl font-bold text-center mb-10">
          Wedding Services
        </h1>

        {services.length === 0 ? (

          <div className="text-center text-gray-500">
            No Services Available
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <ServiceCard
                key={service._id}
                service={service}
              />
            ))}

          </div>

        )}

      </div>

      <Footer />
    </>
  );
};

export default Home;