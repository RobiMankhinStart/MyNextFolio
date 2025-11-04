import Image from "next/image";
import React from "react";
import proPic from "../../../../public/Profile.jpg";
import { FaFacebookF } from "react-icons/fa";

const SideMe = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          src={proPic}
          alt="Profile picture"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
        <h3 className="text-lg">Robi Mankhin</h3>
        <p className="text-[#767676] text-sm my-[15px]">Font-end Developer</p>
        <div className="flex gap-3 items-center">
          <div className="w-7 h-7 p-2 rounded-full flex items-center justify-center bg-[#FFB400]">
            <FaFacebookF className="text-lg " />
          </div>
          <div className="w-7 h-7 p-2 rounded-full flex items-center justify-center bg-[#FFB400]">
            <FaFacebookF className="text-lg " />
          </div>
          <div className="w-7 h-7 p-2 rounded-full flex items-center justify-center bg-[#FFB400]">
            <FaFacebookF className="text-lg " />
          </div>
          <div className="w-7 h-7 p-2 rounded-full flex items-center justify-center bg-[#FFB400]">
            <FaFacebookF className="text-lg " />
          </div>
          <div className="w-7 h-7 p-2 rounded-full flex items-center justify-center bg-[#FFB400]">
            <FaFacebookF className="text-lg " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMe;
