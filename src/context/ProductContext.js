import React, { createContext, useContext, useState } from "react";

// Create Product Context
const ProductContext = createContext();

// Product Provider
export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook
export const useProduct = () => {
  return useContext(ProductContext);
};
