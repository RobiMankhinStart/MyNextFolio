import React from "react";
import { MdOutlineDesignServices } from "react-icons/md"; // You can change the icon

const MyServiceCard = ({ title, description }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="3000"
      className="surface font-inter border rounded-xl py-7 px-5 text-center hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex justify-center mb-4">
        <MdOutlineDesignServices className="text-yellow-400 text-6xl" />
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="muted text-sm">{description}</p>
    </div>
  );
};

export default MyServiceCard;
