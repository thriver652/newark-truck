import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Updated import for v2
import TruckHero from "../images/images/truck.jpg";
import { NewarkImgLogo } from "../images";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/categories");
  };

  return (
    <div
      className="relative w-full h-[60vh] md:h-[600px] bg-cover bg-center flex"
      style={{ backgroundImage: `url(${TruckHero})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-full text-white px-4 md:px-8">
        {/* Left section can include more content if needed */}
        <div className="flex flex-col items-start justify-center w-full md:w-auto"></div>

        {/* Right-most container with increased height and border radius */}
        <div className="hidden md:flex flex-col items-center justify-center bg-white text-black w-[444px] h-[558px] p-6 gap-6 shadow-lg rounded-[8px]">
          <img
            src={NewarkImgLogo}
            alt="Company Logo"
            className="w-[250px] h-[250px] mb-4"
          />
          <h2 className="text-[36px] font-bold leading-[48px] tracking-[-0.02em] text-left">
            SHOP FROM THE BEST
          </h2>
          <p className="text-lg font-medium text-[18px] leading-[24px] tracking-[-0.02em] text-center w-[404px] h-[72px] opacity-100">
            Shop with Newark Truck Center to enjoy low pricing on the brands the
            trucking industry trusts to keep the wheels turning.
          </p>
          <button
            onClick={handleExploreClick}
            className="mt-4 bg-[#004E98] text-white text-[18px] flex items-center justify-center px-4 py-2 rounded-[8px]"
          >
            <span className="flex items-center justify-center gap-2 w-[150px] h-[40px]">
              Explore
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
