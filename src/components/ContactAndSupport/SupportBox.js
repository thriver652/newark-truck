import React, { useRef, useEffect } from "react";

function SupportBox({ isOpen, onClose }) {
  const supportBoxRef = useRef(null);

  // Contact methods data
  const contactMethods = [
    {
      label: "Text",
      value: "123-456-7890",
      availability: "Available 7 am",
    },
    {
      label: "Call",
      value: "123-456-7890",
      availability: "Available 9 am - 5 pm",
    },
    {
      label: "Email",
      value: "response@example.com",
      availability: "Response by Wed",
    },
  ];

  // Quick Support data
  const quickSupportItems = [
    "Order Status",
    "Shipping Policy",
    "Returns",
    "Stock Availability",
    "Request Item",
  ];

  // Close support box when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        supportBoxRef.current &&
        !supportBoxRef.current.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40" />

      <div
        ref={supportBoxRef}
        className="absolute top-10 left-[-300px] mt-2 w-full md:w-[560px] h-[452px] bg-white border-t border-b border-l border-gray-300 shadow-lg rounded-lg p-[32px] gap-[24px] z-50"
        style={{
          borderRight: "1px solid #D0D5DD",
        }}
      >
        <h3 className="font-semibold text-gray-800 mb-4">Have a question?</h3>

        <div className="flex pt-4 space-x-4">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 w-1/2 pr-4 text-sm text-gray-700">
            {contactMethods.map((method, index) => (
              <p key={index}>
                <span className="font-semibold text-gray-900">
                  {method.label}:
                </span>
                <br />
                <span className="text-blue-600">{method.value}</span>
                <br />
                <span className="text-gray-600">{method.availability}</span>
              </p>
            ))}

            {/* Horizontal Line Above Live Chat */}
            <div className="border-t border-gray-300 my-4" />

            <p>
              <span className="font-semibold text-gray-900">Live chat:</span>
              <br />
              <span className="text-gray-600">Available 7 am</span>
              <br />
              <span className="text-gray-600">
                Monday - Saturday: 7 am - 8 pm
              </span>
              <br />
              <span className="text-gray-600">Sunday: 7 am - 12 pm</span>
            </p>
          </div>

          {/* Vertical Separator */}
          <div className="border-l border-gray-200"></div>

          {/* Right Section */}
          <div className="flex flex-col space-y-4 w-1/2 pl-4 text-sm text-gray-700">
            <div className="text-[#101828] text-[16px] font-semibold">
              QUICK SUPPORT
            </div>
            {quickSupportItems.map((item, index) => (
              <p key={index}>
                <span className="font-semibold text-gray-900">{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportBox;
