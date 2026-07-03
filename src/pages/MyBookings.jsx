import { Link } from "react-router-dom";

const bookings = [
  {
    id: 1,
    service: "Royal DJ Sound",
    location: "Prayagraj",
    date: "25 Dec 2026",
    time: "07:00 PM",
    guests: 300,
    price: "₹15,000",
    status: "Pending",
    image: "https://picsum.photos/300/200?random=10",
  },
  {
    id: 2,
    service: "Flower Decoration",
    location: "Varanasi",
    date: "30 Dec 2026",
    time: "11:00 AM",
    guests: 150,
    price: "₹10,000",
    status: "Confirmed",
    image: "https://picsum.photos/300/200?random=11",
  },
];

const MyBookings = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          My Bookings
        </h1>

        {bookings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-5 mb-6 flex flex-col md:flex-row gap-6"
          >
            <img
              src={item.image}
              alt={item.service}
              className="w-full md:w-60 h-44 object-cover rounded-xl"
            />

            <div className="flex-1">

              <h2 className="text-2xl font-bold">
                {item.service}
              </h2>

              <p className="mt-2">📍 {item.location}</p>

              <p>📅 {item.date}</p>

              <p>⏰ {item.time}</p>

              <p>👥 Guests : {item.guests}</p>

              <p className="text-pink-600 font-bold mt-2">
                {item.price}
              </p>

              <span
                className={`inline-block mt-3 px-4 py-1 rounded-full text-white ${
                  item.status === "Confirmed"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              >
                {item.status}
              </span>

              <div className="flex gap-4 mt-6">

                <Link
                  to="/service-details"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  View Details
                </Link>

                <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                  Cancel Booking
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MyBookings;