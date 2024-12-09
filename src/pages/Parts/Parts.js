import React, { useState } from "react";
import { usePartsContext } from "../../context/PartsContext";

const Parts = () => {
  const { parts, selectedCategory, selectedPath } = usePartsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust the number of items per page as needed

  const selectedPart = parts.find((part) => part.name === selectedCategory);

  // Pagination logic
  const totalItems = selectedPart ? selectedPart.subParts.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = selectedPart
    ? selectedPart.subParts.slice(startIndex, startIndex + itemsPerPage)
    : [];

  // Pagination handler
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-8 bg-[#F2F4F7] min-h-screen">
      {/* Main Header */}
      <h1 className="text-[30px] font-semibold mb-2 text-gray-800">
        {selectedCategory}
      </h1>

      {/* Display the selected path below the header */}
      <p className="text-sm text-gray-600 mb-8">{selectedPath}</p>

      {/* Check if a category is selected */}
      {selectedPart ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {/* Display paginated items */}
            {currentItems.map((subPart) => (
              <div
                key={subPart.id}
                className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={selectedPart.src}
                  alt={`${selectedPart.alt} - ${subPart.name}`}
                  className="w-full h-[150px] object-contain rounded-lg mb-4"
                />
                <h2 className="text-lg font-medium text-gray-700">
                  {subPart.name}
                </h2>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>
            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => goToPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500">
          No category selected or category not found.
        </p>
      )}
    </div>
  );
};

export default Parts;
