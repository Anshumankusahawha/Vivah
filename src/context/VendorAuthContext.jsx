import { createContext, useContext, useEffect, useState } from "react";

const VendorAuthContext = createContext();

export const VendorAuthProvider = ({ children }) => {
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const savedVendor = localStorage.getItem("vendor");

    if (savedVendor) {
      setVendor(JSON.parse(savedVendor));
    }
  }, []);

  const loginVendor = (vendorData, token) => {
    localStorage.setItem("vendor", JSON.stringify(vendorData));
    localStorage.setItem("vendorToken", token);
    setVendor(vendorData);
  };

  const logoutVendor = () => {
    localStorage.removeItem("vendor");
    localStorage.removeItem("vendorToken");
    setVendor(null);
  };

  return (
    <VendorAuthContext.Provider
      value={{
        vendor,
        loginVendor,
        logoutVendor,
      }}
    >
      {children}
    </VendorAuthContext.Provider>
  );
};

export const useVendorAuth = () => useContext(VendorAuthContext);