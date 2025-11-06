import React from "react";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const FolioHoverCard = () => {
  return (
    <div className="size-full p-2 translate-x-16  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 absolute top-0 bg-[#ffb30098] flex flex-col items-center justify-center gap-7">
      <div className="bg-[#ffffffe0] rounded-full flex items-center justify-center size-[65px]">
        <MdLiveTv className="text-4xl text-gray-700" />
      </div>
      <div className="bg-[#ffffffe0] rounded-full flex items-center justify-center size-[65px]">
        <FaGithub className="text-4xl text-gray-700" />
      </div>
    </div>
  );
};

export default FolioHoverCard;
