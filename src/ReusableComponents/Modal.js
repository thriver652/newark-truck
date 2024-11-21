import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, title, content, footer }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal if clicking outside of it
      }
    };

    // Attach event listener to the document
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount or when the modal closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl w-full h-auto max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header */}
        {title && (
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-4 text-center sm:text-left">
            {title}
          </h2>
        )}
        {/* Modal Content */}
        <div className="text-sm sm:text-base md:text-lg">{content}</div>{" "}
        {/* Render the content prop here */}
        {/* Modal Footer */}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
