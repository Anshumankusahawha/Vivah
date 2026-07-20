import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import MyBookings from "./pages/MyBookings";
import Profile from "./pages/Profile";
import VendorLogin from "./pages/Vendor/VendorLogin";
import VendorRegister from "./pages/Vendor/VendorRegister";
import VendorDashboard from "./pages/Vendor/VendorDashboard";
import AddService from "./pages/Vendor/AddService";
import MyServices from "./pages/Vendor/MyServices";
import ProtectedRoute from "./routes/ProtectedRoute";
import VendorProtectedRoute from "./routes/VendorProtectedRoute";;
import ServiceDetails from "./pages/ServiceDetails";
import BookingRequests from "./pages/vendor/BookingRequests";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
       <Route
  path="/vendor/dashboard"
  element={
    <VendorProtectedRoute>
      <VendorDashboard />
    </VendorProtectedRoute>
  }
/>

<Route
  path="/vendor/add-service"
  element={
    <VendorProtectedRoute>
      <AddService />
    </VendorProtectedRoute>
  }
/>

<Route
  path="/vendor/services"
  element={
    <VendorProtectedRoute>
      <MyServices />
    </VendorProtectedRoute>
  }
/>
        <Route path="/profile" element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>


<Route
  path="/my-bookings"
  element={
    <ProtectedRoute>
      <MyBookings />
    </ProtectedRoute>
  }
/>

<Route
  path="/service/:id"
  element={<ServiceDetails />}
/>

<Route
  path="/vendor/bookings"
  element={<BookingRequests />}
/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;