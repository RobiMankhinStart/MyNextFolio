import React from "react";
import { FaHome } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
const SideNav = () => {
  return (
    <div className="fixed right-0 py-[50px] rounded-lg px-8 bg-white flex gap-10 flex-col items-center">
      <div className="relative">
        <div
          title="home"
          className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-[#F0F0F6] hover:bg-[#FFB400]"
        >
          <FaHome className="text-[20px] " />
        </div>
        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
          Home
        </span>
      </div>
      <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-[#F0F0F6] hover:bg-[#FFB400] duration-200">
        <GrDocumentText className="text-[20px] " />
      </div>
      <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-[#F0F0F6] hover:bg-[#FFB400] duration-200">
        <FaUserGraduate className="text-[20px] " />
      </div>
      <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-[#F0F0F6] hover:bg-[#FFB400] duration-200">
        <BsPersonWorkspace className="text-[20px] " />
      </div>
      <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointer bg-[#F0F0F6] hover:bg-[#FFB400] duration-200">
        <MdMessage className="text-[20px] " />
      </div>
    </div>
  );
};

export default SideNav;
