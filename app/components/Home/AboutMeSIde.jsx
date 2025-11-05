import React, { useState } from "react";
import Image from "next/image";
import proPic from "../../../public/bgOne-removebg-preview.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const AboutMeSIde = ({ left }) => {
  return (
    <div
      className={`${
        left ? "left-0" : "left-[-40%]"
      } absolute lg:left-0 z-40 transition-all duration-300  py-[50px] px-5 bg-white`}
    >
      <div className="flex flex-col ">
        <div className="flex flex-col items-center">
          <Image
            src={proPic}
            alt="Profile picture"
            width={140}
            className="rounded-full object-cover"
          />
          <h3 className="text-lg">Robi Mankhin</h3>
          <p className="text-[#767676] text-sm my-[15px]">Font-end Developer</p>
          <div className="flex gap-3 items-center border-b-4 border-[#F0F0F6] pb-6">
            <div className="w-9 h-9 p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:bg-[#dbdbe4] bg-[#FFB400]">
              <FaFacebookF className="text-lg " />
            </div>
            <div className="w-9 h-9 p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:bg-[#dbdbe4] bg-[#FFB400]">
              <FaLinkedin className="text-lg " />
            </div>
            <div className="w-9 h-9 p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:bg-[#dbdbe4] bg-[#FFB400]">
              <RiInstagramFill className="text-lg " />
            </div>
            <div className="w-9 h-9 p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:bg-[#dbdbe4] bg-[#FFB400]">
              <FaTwitter className="text-lg " />
            </div>
          </div>
        </div>
        {/* personal info  */}
        <div className="flex flex-col gap-2 border-b-4 py-6 border-[#F0F0F6]">
          <div className="flex items-center gap-[70px] ">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">age : </h3>
            <p>24</p>
          </div>
          <div className="flex items-center gap-7 pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Residence:</h3>
            <p>BD</p>
          </div>
          <div className="flex items-center gap-8 pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Freelance:</h3>
            <p className=" text-[#7EB942]">Available</p>
          </div>
          <div className="flex items-center gap-[45px] pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Address: </h3>
            <p className="flex flex-col">
              Dhaka,<span>Bangladesh</span>{" "}
            </p>
          </div>
        </div>
        {/* language  */}
        <div className="flex flex-col items-center gap-3 border-b-4 py-6 border-[#F0F0F6]">
          <h3 className="font-semibold text-lg">Languages</h3>
          <h4 className="font-medium text-[#767676]">Bangla</h4>
          <h4 className="font-medium text-[#767676]">English</h4>
        </div>
        {/* Skills  */}
        <div className="flex flex-col items-center gap-3 border-b-4 py-6 border-[#F0F0F6]">
          <h3 className="font-semibold text-lg">Skills</h3>
          <h4 className="font-medium text-[#767676]">HTML</h4>
          <h4 className="font-medium text-[#767676]">CSS</h4>
          <h4 className="font-medium text-[#767676]"> Tailwind CSS</h4>
          <h4 className="font-medium text-[#767676]"> BoothStrap</h4>
          <h4 className="font-medium text-[#767676]"> JavaScript</h4>
          <h4 className="font-medium text-[#767676]"> JQuery</h4>
          <h4 className="font-medium text-[#767676]"> React JS</h4>
          <h4 className="font-medium text-[#767676]"> NEXT JS</h4>
          <h4 className="font-medium text-[#767676]"> Git</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSIde;
