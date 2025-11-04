import Image from "next/image";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import banner from "../../../public/bgOne-removebg-preview.png";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <div className="pb-[50px] w-[90%] lg:w-[900px] mt-3 lg:mx-auto ">
      <div className="container bg-white shadow-lg rounded-lg hover:scale-104 duration-300 ">
        <div className="mainDiv flex-col-reverse lg:flex-row flex lg:items-center justify-center gap-2">
          <div>
            <h1 className="w-[500px] font-inter font-bold text-[48px]">
              I’m Robi Mankhin
              <span className="text-[#FFB400]"> Front-end </span>Developer
            </h1>
            <p className="w-[424px] font-inter text-lg mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </p>
            <div className="flex gap-7">
              <button className="bg-[#FFB400] cursor-pointer hover:text-[#e4dada] rounded-md flex items-center justify-center gap-2 w-[154px] h-[51px] font-inter font-medium text-lg">
                HIRE ME
                <IoMdArrowForward />
              </button>
              <button className="bg-[#FFB400] cursor-pointer hover:text-[#e4dada] rounded-md flex items-center justify-center gap-2 w-[154px] h-[51px] font-inter font-medium text-lg">
                Download CV
                <MdOutlineFileDownload />
              </button>
            </div>
          </div>

          <Image
            src={banner}
            alt="Profile picture"
            width={320}
            height={459}
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
