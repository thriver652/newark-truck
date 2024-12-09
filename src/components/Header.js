import React, { useState, useEffect, useRef } from "react";
import {
  categories,
  brands,
  hoses,
  valves,
  fittings,
  pumps,
  accessories,
} from "../data/headerData";
import BrandsContent from "./CategoryComponents/BrandsContent";
import HosesContent from "./CategoryComponents/HosesContent";
import ValvesContent from "./CategoryComponents/ValvesContent";
import FittingsContent from "./CategoryComponents/FittingsContent";
import PumpsContent from "./CategoryComponents/PumpsContent";
import AccessoriesContent from "./CategoryComponents/AccessoriesContent";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const modalRef = useRef(null);

  const renderCategoryContent = (categoryName) => {
    let content;

    switch (categoryName) {
      case "BRANDS":
        content = <BrandsContent />;
        break;
      case "HOSES":
        content = <HosesContent />;
        break;
      case "VALVES":
        content = <ValvesContent />;
        break;
      case "FITTINGS":
        content = <FittingsContent />;
        break;
      case "PTO":
        content = <div>Power Take-Off (PTO) equipment content goes here.</div>;
        break;
      case "PUMP":
        content = <PumpsContent />;
        break;
      case "ACCESSORIES":
        content = <AccessoriesContent />;
        break;
      default:
        content = <div>Displaying content for {categoryName}</div>;
    }

    return (
      <div>
        <h2 className="font-bold text-lg mb-2">{categoryName}</h2>
        <div className="grid grid-cols-2 gap-2">{content}</div>
      </div>
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
  };

  // Close the modal if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeCategoryModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-navbarBlue h-16 flex items-center justify-between px-4">
      {/* Desktop Navigation */}
      <nav className="flex space-x-8">
        {categories.map((category) => (
          <div key={category} className="relative">
            <button
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>

            {/* Modal for category content */}
            {selectedCategory === category && (
              <div
                ref={modalRef}
                className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg p-2"
                style={{
                  width: "365px",
                  maxWidth: "90vw", // Make modal responsive
                  zIndex: 1000, // Ensure modal is above other elements
                }}
              >
                {renderCategoryContent(category)}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Us Text - Hidden on smaller screens, visible only on laptops and larger */}
      <div className="hidden lg:block text-white text-sm md:text-base lg:text-lg xl:text-xl font-inter font-semibold leading-4 text-left">
        Didn’t find what you’re looking for? Contact us
      </div>
    </header>
  );
};

export default Header;
