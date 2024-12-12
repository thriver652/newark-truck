import React, { createContext, useState, useContext } from "react";

// Create ProductContext
export const ProductContext = createContext();

// Create a custom hook for easier use of ProductContext
export const useProduct = () => useContext(ProductContext);

// Provider component
export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
