import React from "react";
import { MdOutlineDesignServices } from "react-icons/md"; // You can change the icon

const MyServiceCard = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="3000"
      className="w-[280px] font-inter bg-white shadow-sm border border-gray-100 rounded-xl py-6 text-center hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex justify-center mb-4">
        <MdOutlineDesignServices className="text-yellow-400 text-6xl" />
      </div>
      <h3 className="text-lg font-medium  mb-1">UI/UX Design</h3>
      <p className=" text-sm">Mobile App, Website Design</p>
    </div>
  );
};

export default MyServiceCard;
