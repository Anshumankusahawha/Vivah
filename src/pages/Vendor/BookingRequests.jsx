import { useEffect, useState } from "react";
import axios from "axios";

const BookingRequests = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {

      const token = localStorage.getItem("vendorToken");

      const res = await axios.get(
        "http://localhost:5000/api/bookings/vendor",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data.bookings);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Booking Requests
      </h1>

      {bookings.map((booking) => (

        <div
          key={booking._id}
          className="border rounded-xl p-5 mb-5 shadow"
        >

          <h2 className="text-xl font-semibold">
            {booking.service.title}
          </h2>

          <p>Name : {booking.customerName}</p>

          <p>Email : {booking.customerEmail}</p>

          <p>Phone : {booking.customerPhone}</p>

          <p>Status : {booking.status}</p>

        </div>

      ))}

    </div>
  );
};

export default BookingRequests;