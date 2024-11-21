import React, { createContext, useState, useContext } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Set email on sign up
  const signUp = (email) => {
    setUserEmail(email);
    setIsVerified(false);
  };

  // Sign-out action
  const signOut = () => {
    setUserEmail("");
    setIsVerified(false);
  };

  const value = {
    userEmail,
    isVerified,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
