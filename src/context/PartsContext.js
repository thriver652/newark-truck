import React, { createContext, useContext, useState } from "react";
import { partImages } from "../data/partsData";

// Create the Context
const PartsContext = createContext();

// Custom hook to use the Parts Context
export const usePartsContext = () => {
  return useContext(PartsContext);
};

// Context Provider Component
export const PartsProvider = ({ children }) => {
  const [parts, setParts] = useState(partImages);
  const [selectedCategory, setSelectedCategory] = useState("All Parts");
  const [selectedPath, setSelectedPath] = useState("");

  return (
    <PartsContext.Provider
      value={{
        parts,
        selectedCategory,
        setSelectedCategory,
        selectedPath,
        setSelectedPath,
      }}
    >
      {children}
    </PartsContext.Provider>
  );
};
