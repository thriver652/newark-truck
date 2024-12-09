import React, { useState } from "react";
import { zipCodes } from "../data/zipCodesData";

function AnnouncementBar() {
  const [selectedZipCode, setSelectedZipCode] = useState(zipCodes[0]);
  
  const handleZipCodeChange = (event) => {
    setSelectedZipCode(event.target.value);
  };

  return (
    <div className="bg-[#FEF7E6] p-3">
      <div className="container mx-auto w-auto flex ml-4 justify-start items-center space-x-4">
        {/* Free shipping message */}
        <div className="text-sm font-semibold font-['Inter'] text-[#344054]">
          Free shipping on orders above $99
        </div>

        {/* Dot separator */}
        <span className="px-2 text-[#344054] text-lg">•</span>

        {/* "Check product availability" message */}
        <div className="text-sm font-medium font-['Inter'] text-[#344054]">
          Check product availability in your area
        </div>

        {/* Zip Code Selector */}
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium font-['Inter'] text-[#344054]">
            Your zip code:
          </span>
          <div className="relative">
            <select
              value={selectedZipCode}
              onChange={handleZipCodeChange}
              className="bg-transparent appearance-none border-none focus:outline-none text-navbarBlue font-bold cursor-pointer pr-6"
            >
              {zipCodes.map((zip) => (
                <option key={zip} value={zip}>
                  {zip}
                </option>
              ))}
            </select>
            {/* Dropdown icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-navbarBlue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
