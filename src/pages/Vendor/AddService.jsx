import { useState } from "react";
import axios from "axios";
import VendorLayout from "../../components/Vendor/VendorLayout";

const AddService = () => {
  const [formData, setFormData] = useState({
  title: "",
  category: "",
  price: "",
  city: "",
  description: "",
});

const [image, setImage] = useState(null);
const [preview, setPreview] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


const handleImage = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  setImage(file);
  setPreview(URL.createObjectURL(file));
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const data = new FormData();

    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("city", formData.city);
    data.append("description", formData.description);

    if (image) {
      data.append("image", image);
    }

    const token = localStorage.getItem("vendorToken");

await axios.post(
  "http://localhost:5000/api/services/add",
  data,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
);

    alert(res.data.message);

    setFormData({
      title: "",
      category: "",
      price: "",
      city: "",
      description: "",
    });

    setImage(null);
    setPreview("");

  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};




  return (
    <VendorLayout>

      <h1 className="text-3xl font-bold mb-8">
        Add New Service
      </h1>

    <form
  onSubmit={handleSubmit}
  className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
>

        {/* Basic Details */}

        <div>

          <h2 className="text-xl font-bold mb-4">
            Basic Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

           <input
  type="text"
  name="title"
  value={formData.title}
  onChange={handleChange}
  placeholder="Service Name"
  className="border p-3 rounded-lg"
/>

            <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  className="border p-3 rounded-lg"
>
  <option value="">Select Category</option>
  <option>DJ</option>
  <option>Tent House</option>
  <option>Flower Decoration</option>
  <option>Photography</option>
  <option>Catering</option>
  <option>Wedding Planner</option>
</select>

           <input
  type="number"
  name="price"
  value={formData.price}
  onChange={handleChange}
  placeholder="Price"
  className="border p-3 rounded-lg"
/>
         <input
  type="text"
  name="city"
  value={formData.city}
  onChange={handleChange}
  placeholder="City"
  className="border p-3 rounded-lg"
/>

          </div>

        </div>

        {/* Description */}

        <div>

          <h2 className="text-xl font-bold mb-4">
            Description
          </h2>

          <textarea
  rows="5"
  name="description"
  value={formData.description}
  onChange={handleChange}
  placeholder="Describe your service..."
  className="border p-3 rounded-lg w-full"
/>

        </div>

        {/* Images */}

        <div>

          <h2 className="text-xl font-bold mb-4">
            Upload Images
          </h2>

         <input
  type="file"
  accept="image/*"
  onChange={handleImage}
  className="border p-3 rounded-lg w-full"
/>
{preview && (
  <img
    src={preview}
    alt="Preview"
    className="w-48 h-48 mt-4 rounded-xl object-cover border"
  />
)}

        </div>

        {/* Contact */}

        <div>

          <h2 className="text-xl font-bold mb-4">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="WhatsApp Number"
              className="border p-3 rounded-lg"
            />

          </div>

        </div>

        {/* Location */}

        <div>

          <h2 className="text-xl font-bold mb-4">
            Google Map Link
          </h2>

          <input
            type="text"
            placeholder="Paste Google Map URL"
            className="border p-3 rounded-lg w-full"
          />

        </div>

      <button
  type="submit"
  disabled={loading}
  className="bg-pink-600 text-white px-8 py-4 rounded-xl hover:bg-pink-700 disabled:bg-gray-400"
>
  {loading ? "Publishing..." : "Publish Service"}
</button>

      </form>

    </VendorLayout>
  );
};

export default AddService;