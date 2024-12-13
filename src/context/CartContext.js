import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.sku === product.sku); // Use SKU as unique identifier
    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.sku === product.sku
            ? { ...item, quantity: item.quantity + 1 } // Update quantity
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]); // Add product with quantity 1
    }
  };

  const removeFromCart = (sku) => {
    setCartItems((prev) => prev.filter((item) => item.sku !== sku)); // Remove item by SKU
  };

  const updateQuantity = (sku, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.sku === sku ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
