import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    date: "",
    time: "",
    guests: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Booking Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* Booking Form */}

        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold text-pink-600 mb-8">
            Book Your Service
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >

            <div>
              <label className="font-semibold">Full Name</label>

              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="font-semibold">Phone Number</label>

              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="9876543210"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="font-semibold">City</label>

              <input
                type="text"
                name="city"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="Prayagraj"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">Event Address</label>

              <textarea
                name="address"
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="Complete Address"
              ></textarea>
            </div>

            <div>
              <label className="font-semibold">Event Date</label>

              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Event Time</label>

              <input
                type="time"
                name="time"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">
                Number of Guests
              </label>

              <input
                type="number"
                name="guests"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">
                Special Requirements
              </label>

              <textarea
                name="request"
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="Any Special Requirement..."
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl text-lg font-semibold"
              >
                Confirm Booking
              </button>
            </div>

          </form>

        </div>

        {/* Booking Summary */}

        <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-24">

          <h2 className="text-2xl font-bold mb-6">
            Booking Summary
          </h2>

          <img
            src="https://picsum.photos/500/300?random=10"
            alt=""
            className="rounded-xl mb-5"
          />

          <h3 className="text-xl font-bold">
            Royal DJ Sound
          </h3>

          <p className="text-gray-500 mt-2">
            📍 Prayagraj
          </p>

          <p className="text-yellow-500 mt-2">
            ⭐⭐⭐⭐⭐ (4.9)
          </p>

          <hr className="my-5" />

          <div className="flex justify-between mb-3">
            <span>Service Price</span>

            <span>₹15,000</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Booking Charge</span>

            <span>Free</span>
          </div>

          <div className="flex justify-between text-xl font-bold text-pink-600">
            <span>Total</span>

            <span>₹15,000</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Booking;