import React, { useRef } from "react";
import { LeftIcon, RightIcon } from "../images";
import { useNavigate } from "react-router-dom";
import { usePartsContext } from "../context/PartsContext";

const PartScroller = () => {
  const scrollerRef = useRef(null);
  const navigate = useNavigate();
  const { setSelectedCategory, setSelectedPath, parts } = usePartsContext();

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePartClick = (part) => {
    setSelectedCategory(part.alt);
    setSelectedPath(`Home > ${part.alt}`);
    navigate(`/parts?category=${part.alt}`);
  };

  return (
    <div className="relative w-full h-auto flex flex-col bg-[#FEF7E6] p-8">
      <h1 className="text-[#101828] font-semibold text-[30px] leading-[40px] tracking-[-0.02em] text-left mb-8 ml-4 cursor-pointer">
        Everything you need, easy to
      </h1>

      <button
        className="absolute left-4 top-1/2 mt-4 transform -translate-y-1/2 bg-white text-gray-700 flex items-center justify-center w-10 h-10 border border-gray-300 rounded shadow-lg hover:bg-gray-600 hover:text-white transition duration-300 z-10"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      >
        <img src={LeftIcon} alt="Scroll Left" className="w-5 h-5" />
      </button>

      <div
        ref={scrollerRef}
        className="w-full h-auto mt-4 overflow-x-auto flex space-x-4 p-4 scrollbar-hide"
      >
        {parts.map((image, index) => (
          <div
            key={index}
            onClick={() => handlePartClick(image)} // Handle parts click
            className="w-[180px] h-[230px] flex-shrink-0 bg-white shadow-lg rounded-lg flex flex-col items-center p-4 hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[178px] object-contain rounded-lg"
            />
            <span className="mt-3 text-center font-medium">{image.alt}</span>
          </div>
        ))}
      </div>

      <button
        className="absolute right-4 top-1/2 mt-4 transform -translate-y-1/2 bg-white text-gray-700 flex items-center justify-center w-10 h-10 border border-gray-300 rounded shadow-lg hover:bg-gray-600 hover:text-white transition duration-300 z-10"
        onClick={scrollRight}
        aria-label="Scroll Right"
      >
        <img src={RightIcon} alt="Scroll Right" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PartScroller;
