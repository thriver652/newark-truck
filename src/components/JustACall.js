import React from "react";
import { contactOptions } from "../data/contactsData";

const JustACall = () => {
  return (
    <div className="p-6 md:p-8 rounded-lg shadow-lg bg-white">
      <h2 className="text-[20px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#101828] mb-4 hidden md:block">
        We’re just a call away
      </h2>

      <p className="text-[14px] leading-[16px] text-left text-[#101828] mb-6 hidden md:block">
        Speak with our support personnel who will go out of their way to help!
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left bg-white rounded-lg shadow-md border border-gray-300">
          <thead>
            <tr>
              <th colSpan="2" className="h-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-gray-600 border-r border-gray-300 text-center">
                {/* Centering the content */}
                {contactOptions.slice(0, 2).map((option, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4" // Center items horizontally
                  >
                    <img
                      src={option.icon}
                      alt={`${option.label} Icon`}
                      style={option.style} // Apply the styles defined in the contactOptions array
                    />
                    <div className="flex flex-col text-left">
                      <div className="flex items-center justify-start gap-2">
                        <div className="text-[#101828] text-[16px] font-semibold">
                          {option.label}
                        </div>
                        <div className="text-gray-500 text-[14px]">
                          {option.info}
                        </div>
                      </div>
                      <div className="text-gray-400 text-[12px] flex items-center">
                        {/* Green dot before availability */}
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                        <span>{option.availability}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </td>
              <td className="p-4 text-gray-600 border-r border-gray-300 text-center">
                {/* Centering the content */}
                {contactOptions.slice(2).map((option, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4" // Center items horizontally
                  >
                    <img
                      src={option.icon}
                      alt={`${option.label} Icon`}
                      style={option.style} // Apply the styles defined in the contactOptions array
                    />
                    <div className="flex flex-col text-left">
                      <div className="flex items-center justify-start gap-2">
                        <div className="text-[#101828] text-[16px] font-semibold">
                          {option.label}
                        </div>
                        <div className="text-gray-500 text-[14px]">
                          {option.info}
                        </div>
                      </div>
                      <div className="text-gray-400 text-[12px] flex items-center">
                        {/* Green dot before availability */}
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                        <span>{option.availability}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </td>
              <td className="p-4 text-gray-500 text-left flex flex-col justify-start">
                {" "}
                {/* Align to left and top */}
                <div className="hidden md:block">
                  <div className="text-[#101828] text-[18px] font-semibold py-2">
                    Available Timings
                  </div>
                  <div className="mt-2 text-[#101828] text-[16px]">
                    <div className=" text-[16px]">
                      Monday to Friday: 9 AM - 6 PM
                    </div>
                    <div className=" text-[16px]">
                      Saturday & Sunday: 10 AM - 4 PM
                    </div>
                  </div>
                </div>
                <div className="block md:hidden text-sm">
                  <span>
                    Hours: 9 AM - 6 PM (Weekdays), <strong>10 AM - 4 PM</strong>{" "}
                    (Weekends)
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="h-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JustACall;
