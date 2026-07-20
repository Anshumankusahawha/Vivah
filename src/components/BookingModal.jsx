import { useState } from "react";
import axios from "axios";

const BookingModal = ({ serviceId }) => {

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    eventDate: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/bookings",
        {
          serviceId,
          ...form,
        }
      );

      alert("Booking Request Sent");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mt-8"
    >

      <input
        name="customerName"
        placeholder="Your Name"
        onChange={handleChange}
        className="border w-full p-3 rounded"
      />

      <input
        name="customerEmail"
        placeholder="Email"
        onChange={handleChange}
        className="border w-full p-3 rounded"
      />

      <input
        name="customerPhone"
        placeholder="Phone"
        onChange={handleChange}
        className="border w-full p-3 rounded"
      />

      <input
        type="date"
        name="eventDate"
        onChange={handleChange}
        className="border w-full p-3 rounded"
      />

      <textarea
        name="address"
        placeholder="Event Address"
        onChange={handleChange}
        className="border w-full p-3 rounded"
      />

      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        className="border w-full p-3 rounded"
      />

      <button
        className="bg-pink-600 text-white px-6 py-3 rounded-lg w-full"
      >
        Confirm Booking
      </button>

    </form>
  );
};

export default BookingModal;