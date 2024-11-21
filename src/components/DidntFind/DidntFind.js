import React from "react";
import { AndMore, DidntFindImg } from "../../images";
import { transmissionImages } from "../../data/transmissionData";
import Modal from "../../ReusableComponents/Modal";
import TransmissionImageList from "./TransmissionImageList";
import { useGlobal } from "../../context/GlobalContext"; // Import the global context

const DidntFind = () => {
  const { isModalOpen, openModal, closeModal } = useGlobal(); // Use global context

  return (
    <div className="font-inter mt-16">
      {/* Heading outside of the blue container */}
      <h1 className="font-semibold text-[24px] md:text-[30px] leading-[30px] md:leading-[40px] text-left text-[#101828] md:mb-2 px-4 md:px-8">
        Didn’t find what you’re looking for?
      </h1>

      {/* Full-width blue container */}
      <div className="w-full bg-[#004E98] p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-start justify-between h-auto space-y-6 md:space-y-0">
          <div className="flex-1 space-y-4 md:pr-12 mt-4 md:mt-10">
            <h2 className="font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[-0.02em] text-left text-white">
              We build custom PTOs for your specific needs!
            </h2>
            <p className="text-left font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
              Newark Truck Center is the East Coast's leading build center for
              Eaton Bezares PTOs. Our expert team is trained in the latest PTO
              advancements and ready to design the ideal system for your needs.
            </p>
            <p className="text-white text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px] tracking-[-0.02em] text-left">
              Shop by transmission type
            </p>
            <div className="flex flex-nowrap mt-4">
              {transmissionImages.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[150px] md:w-[200px] h-[230px] p-2 bg-white shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto rounded"
                  />
                  <p className="mt-2 text-center font-medium text-gray-800">
                    {item.title}
                  </p>
                </div>
              ))}
              <div
                onClick={openModal} // Use openModal from global context
                className="flex flex-col items-center w-[150px] md:w-[122px] h-[230px] p-2 bg-white shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-center w-full h-full bg-gray-200">
                  <img
                    src={AndMore}
                    alt="More"
                    className="w-[24px] h-[24px] mb-[6px]"
                  />
                </div>
                <p className="mt-2 text-center font-medium text-gray-800">
                  & more
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-4 md:mt-0 flex justify-center">
            <img
              src={DidntFindImg}
              alt="Didn't Find"
              className="max-w-full h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] md:rounded-tr-none md:rounded-bl-[12px]"
            />
          </div>
        </div>
      </div>

      {/* Modal for displaying more parts */}
      <Modal
        isOpen={isModalOpen} // Use global modal state
        onClose={closeModal} // Use closeModal from global context
        title="More Parts Available"
        content={<TransmissionImageList images={transmissionImages} />}
      />
    </div>
  );
};

export default DidntFind;
