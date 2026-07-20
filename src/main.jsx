import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";
import { VendorAuthProvider } from "./context/VendorAuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <VendorAuthProvider>
        <App />
      </VendorAuthProvider>
    </AuthProvider>
  </StrictMode>
);