import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({
    id: 1,
    name: "Anshuman Kushwaha",
    email: "anshuman@gmail.com",
    phone: "9876543210",
    city: "Prayagraj",
    role: "customer",
    profile:
      "https://i.pravatar.cc/200?img=12",
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);