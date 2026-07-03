import React from "react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Side Images */}

        <div>

          <img
            src="https://picsum.photos/600/400?random=10"
            alt=""
            className="rounded-xl w-full h-[400px] object-cover"
          />

          <div className="grid grid-cols-4 gap-3 mt-4">

            <img
              src="https://picsum.photos/200?random=1"
              className="rounded-lg cursor-pointer"
            />

            <img
              src="https://picsum.photos/200?random=2"
              className="rounded-lg cursor-pointer"
            />

            <img
              src="https://picsum.photos/200?random=3"
              className="rounded-lg cursor-pointer"
            />

            <img
              src="https://picsum.photos/200?random=4"
              className="rounded-lg cursor-pointer"
            />

          </div>

        </div>

        {/* Right Side */}

        <div>

          <h1 className="text-4xl font-bold">
            Royal DJ Sound
          </h1>

          <p className="text-yellow-500 text-xl mt-3">
            ⭐⭐⭐⭐⭐ (4.9)
          </p>

          <h2 className="text-3xl text-pink-600 font-bold mt-4">
            ₹15,000
          </h2>

          <p className="mt-3 text-gray-600">
            📍 Prayagraj, Uttar Pradesh
          </p>

          <hr className="my-6"/>

          <h3 className="text-2xl font-semibold">
            About Service
          </h3>

          <p className="text-gray-600 mt-3 leading-8">
            Professional DJ setup with premium sound system,
            LED lighting, smoke machine and experienced DJ
            for weddings, parties and receptions.
          </p>

          <div className="mt-8">

            <h3 className="text-2xl font-semibold mb-4">
              Features
            </h3>

            <ul className="space-y-3">

              <li>✅ Premium Sound System</li>

              <li>✅ LED Lighting</li>

              <li>✅ Smoke Machine</li>

              <li>✅ Generator Backup</li>

              <li>✅ Professional DJ Team</li>

            </ul>

          </div>

          <Link to="/booking">
             <button className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-xl text-lg">
               Book Now
             </button>
          </Link>

        </div>

      </div>

      {/* Reviews */}

      <div className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Customer Reviews
        </h2>

        <div className="bg-gray-100 rounded-xl p-6">

          <h3 className="font-semibold">
            Rahul Sharma ⭐⭐⭐⭐⭐
          </h3>

          <p className="mt-2 text-gray-600">
            Amazing DJ service. Everyone enjoyed the music.
            Highly recommended.
          </p>

        </div>

      </div>

      {/* Related Services */}

      <div className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Similar Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[1,2,3,4].map((item)=>(
            <div
            key={item}
            className="shadow-lg rounded-xl overflow-hidden">

              <img
              src={`https://picsum.photos/300/250?random=${item}`}
              className="w-full h-52 object-cover"/>

              <div className="p-4">

                <h3 className="font-bold">
                  Wedding DJ
                </h3>

                <p className="text-pink-600 mt-2">
                  ₹12000
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ServiceDetails;