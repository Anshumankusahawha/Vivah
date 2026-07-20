const BookingTable = () => {

  const bookings = [
    {
      id: 1,
      customer: "Rahul",
      service: "DJ",
      date: "25 Dec 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Priya",
      service: "Flower Decoration",
      date: "28 Dec 2026",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Aman",
      service: "Tent House",
      date: "30 Dec 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Bookings
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-pink-100">

              <th className="p-4 text-left">Customer</th>

              <th className="p-4 text-left">Service</th>

              <th className="p-4 text-left">Date</th>

              <th className="p-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {item.customer}
                </td>

                <td className="p-4">
                  {item.service}
                </td>

                <td className="p-4">
                  {item.date}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.status === "Confirmed"
                        ? "bg-green-500"
                        : item.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default BookingTable;