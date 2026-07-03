const products = [
  {
    id: 1,
    name: "Wireless Headphone",
    price: "₹1,999",
    rating: "★★★★☆",
    image: "https://picsum.photos/300/300?random=1",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2,499",
    rating: "★★★★★",
    image: "https://picsum.photos/300/300?random=2",
  },
  {
    id: 3,
    name: "Sports Shoes",
    price: "₹2,299",
    rating: "★★★★☆",
    image: "https://picsum.photos/300/300?random=3",
  },
  {
    id: 4,
    name: "Travel Bag",
    price: "₹1,499",
    rating: "★★★★★",
    image: "https://picsum.photos/300/300?random=4",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: "₹999",
    rating: "★★★★☆",
    image: "https://picsum.photos/300/300?random=5",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: "₹799",
    rating: "★★★★★",
    image: "https://picsum.photos/300/300?random=6",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "₹1,299",
    rating: "★★★★☆",
    image: "https://picsum.photos/300/300?random=7",
  },
  {
    id: 8,
    name: "Laptop Bag",
    price: "₹1,099",
    rating: "★★★★★",
    image: "https://picsum.photos/300/300?random=8",
  },
];

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-4xl font-bold mb-8">🔥 New Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                NEW
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {product.name}
              </h3>

              <p className="text-red-500 text-xl font-bold mt-2">
                {product.price}
              </p>

              <p className="text-yellow-500 mt-2">
                {product.rating}
              </p>

              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;