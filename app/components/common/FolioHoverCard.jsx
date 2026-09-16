import React from "react";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const FolioHoverCard = () => {
  return (
    <div className="size-full p-2 -translate-x-16  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute top-0  bg-[#ffb300b2] flex flex-col items-center justify-center gap-7">
      <div className="bg-[#ffffffe0] hover:bg-white hover:text-gray-800 cursor-pointer rounded-full flex items-center justify-center size-[65px]">
        <MdLiveTv className="text-4xl text-gray-700" />
      </div>
      <div className="bg-[#ffffffe0] cursor-pointer hover:bg-white hover:text-gray-800 rounded-full flex items-center justify-center size-[65px]">
        <FaGithub className="text-4xl  text-gray-700" />
      </div>
    </div>
  );
};

export default FolioHoverCard;
