import React, { useRef } from "react";
import { LeftIcon, RightIcon } from "../../images";

const ProductList = ({ products }) => {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full  flex flex-col bg-[#FEF7E6] p-8">
      {/* Left Navigation Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 flex items-center justify-center w-10 h-10 border border-gray-300 hover:bg-gray-600 hover:text-white transition duration-300 z-10"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      >
        <img src={LeftIcon} alt="Scroll Left" className="w-5 h-5" />
      </button>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollerRef}
        className="w-full h-auto mt-4 overflow-x-auto flex space-x-4 p-4 scrollbar-hide"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[180px] h-[230px] flex-shrink-0 bg-white border border-gray-300 flex flex-col items-center pt-1 px-0 hover:scale-105 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[150px] object-cover mb-4"
            />
            <h3 className="text-lg font-medium text-center text-[#101828]">
              {product.name}
            </h3>
            <p className="text-gray-600 text-center">${product.price}</p>
          </div>
        ))}
      </div>

      {/* Right Navigation Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 flex items-center justify-center w-10 h-10 border border-gray-300 hover:bg-gray-600 hover:text-white transition duration-300 z-10"
        onClick={scrollRight}
        aria-label="Scroll Right"
      >
        <img src={RightIcon} alt="Scroll Right" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProductList;
