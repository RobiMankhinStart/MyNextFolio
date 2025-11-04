import Image from "next/image";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import banner from "../../../public/bannerimg.png";

const Banner = () => {
  return (
    <div className="pb-[130px] w-[970px] mx-auto">
      <div className="container bg-white">
        <div className="mainDiv flex items-center justify-center gap-6">
          <div>
            <h1 className="w-[500px] font-inter font-bold text-[48px]">
              I’m Rayan Adlrdard
              <span className="text-[#FFB400]"> Front-end </span>Developer
            </h1>
            <p className="w-[424px] font-inter text-lg mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </p>
            <button className="bg-[#FFB400] rounded-md flex items-center justify-center gap-2 w-[154px] h-[51px] font-inter font-medium text-lg">
              HIRE ME
              <IoMdArrowForward />
            </button>
          </div>

          <Image
            src={banner}
            alt="Profile picture"
            width={325}
            height={459}
            className=" object-cover"
          />
        </div>
      </div>
      ;
    </div>
  );
};

export default Banner;
