import React, { createContext, useContext, useState } from "react";

// Create a global context
const GlobalContext = createContext();

// Create a provider for multiple states
export const GlobalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <GlobalContext.Provider
      value={{ isModalOpen, openModal, closeModal, count, setCount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobal = () => {
  return useContext(GlobalContext);
};
