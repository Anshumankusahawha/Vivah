
import { useState } from "react";
import { Link } from "react-router-dom";


const services = [
  {
    id: 1,
    category: "DJ",
    name: "Royal DJ Sound",
    price: "₹15,000",
    image: "https://picsum.photos/300/250?random=1",
  },
  {
    id: 2,
    category: "Flower",
    name: "Flower Decoration",
    price: "₹10,000",
    image: "https://picsum.photos/300/250?random=2",
  },
  {
    id: 3,
    category: "Tent",
    name: "Luxury Wedding Tent",
    price: "₹25,000",
    image: "https://picsum.photos/300/250?random=3",
  },
  {
    id: 4,
    category: "Banquet Hall",
    name: "Grand Celebration Hall",
    price: "₹60,000",
    image: "https://picsum.photos/300/250?random=4",
  },
  {
    id: 5,
    category: "DJ",
    name: "Party DJ",
    price: "₹18,000",
    image: "https://picsum.photos/300/250?random=5",
  },
  {
    id: 6,
    category: "Flower",
    name: "Rose Decoration",
    price: "₹12,000",
    image: "https://picsum.photos/300/250?random=6",
  },
];

const Services = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? services
      : services.filter((item) => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold text-center mb-8">
        Our Wedding Services
      </h1>

      {/* Filter Buttons */}

      <div className="flex flex-wrap justify-center gap-4 mb-10">

        {["All","DJ","Flower","Tent","Banquet Hall"].map((btn)=>(
          <button
            key={btn}
            onClick={()=>setFilter(btn)}
            className={`px-6 py-2 rounded-full font-semibold transition
            ${
              filter===btn
              ? "bg-pink-600 text-white"
              : "bg-gray-200 hover:bg-pink-500 hover:text-white"
            }`}
          >
            {btn}
          </button>
        ))}

      </div>

      {/* Cards */}


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

  {filtered.map((item) => (
    <Link
      to="/service-details"
      key={item.id}
      className="block"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-60 object-cover"
        />

        {/* Content */}
        <div className="p-5">

          <h2 className="text-2xl font-bold">
            {item.name}
          </h2>

          <p className="text-pink-600 font-semibold mt-2">
            {item.category}
          </p>

          <p className="text-gray-700 text-lg mt-2">
            {item.price}
          </p>

          <button className="mt-5 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
            Book Now
          </button>

        </div>

      </div>
    </Link>
  ))}

</div>

    </div>
  );
};





export default Services;