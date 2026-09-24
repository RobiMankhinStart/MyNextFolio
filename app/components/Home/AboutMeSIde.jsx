import React from "react";
import Image from "next/image";
import proPic from "../../../public/bgOne-removebg-preview.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const AboutMeSIde = ({ left, sidebarRef }) => {
  return (
    <aside
      ref={sidebarRef}
      className={`${
        left ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } fixed inset-y-0 left-0 z-40 w-[280px] max-w-[85vw] overflow-y-auto transition-transform duration-300 py-[50px] px-5 surface border-r shadow-xl shadow-black/10 lg:translate-x-0 lg:opacity-100`}
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
          <p className="text-(--muted) text-sm my-[15px]">
            Full-Stack MERN Developer
          </p>
          <div className="flex gap-3 items-center border-b-4 border-(--line) pb-6">
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
        <div className="flex flex-col gap-2 border-b-4 py-6 border-(--line)">
          {/* <div className="flex items-center gap-[70px] ">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">age : </h3>
            <p>27</p>
          </div> */}
          <div className="flex items-center gap-7 pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Residence:</h3>
            <p>Bangladesh</p>
          </div>
          <div className="flex items-center gap-8 pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Phone:</h3>
            <a
              href="tel:+8801851228651"
              className="text-(--muted) hover:text-[#FFB400] transition-colors"
            >
              01851228651
            </a>
          </div>
          <div className="flex items-center gap-8 pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Email:</h3>
            <a
              href="mailto:robileo49@gmail.com"
              className="text-(--muted) hover:text-[#FFB400] transition-colors"
            >
              robileo49@gmail.com
            </a>
          </div>
          {/* <div className="flex items-center gap-8 pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Freelance:</h3>
            <p className=" text-[#7EB942]">Available</p>
          </div> */}
          <div className="flex items-center gap-7 pt-6">
            <h3 className="bg-[#FFB400] px-1.5 py-0.5">Address: </h3>
            <p className="flex flex-col">
              Vatar, Notun Bazar<span>Dhaka-1212</span>{" "}
            </p>
          </div>
        </div>
        {/* language  */}
        <div className="flex flex-col items-center gap-3 border-b-4 py-6 border-(--line)">
          <h3 className="font-semibold text-lg">Languages</h3>
          <h4 className="font-medium text-(--muted)">Bangla</h4>
          <h4 className="font-medium text-(--muted)">English</h4>
        </div>
        {/* Skills  */}
        <div className="flex flex-col items-center gap-3 border-b-4 py-6 border-(--line)">
          <h3 className="font-semibold text-lg">Skills</h3>
          <h4 className="font-medium text-(--muted)">Node.js</h4>
          <h4 className="font-medium text-(--muted)">Express.js</h4>
          <h4 className="font-medium text-(--muted)">MongoDB</h4>
          <h4 className="font-medium text-(--muted)"> NEXT JS</h4>
          <h4 className="font-medium text-(--muted)"> React JS</h4>
          <h4 className="font-medium text-(--muted)"> JavaScript</h4>
          <h4 className="font-medium text-(--muted)"> Github</h4>
          <h4 className="font-medium text-(--muted)"> Tailwind CSS</h4>
          <h4 className="font-medium text-(--muted)">HTML</h4>
          <h4 className="font-medium text-(--muted)">CSS</h4>
          <h4 className="font-medium text-(--muted)"> BoothStrap</h4>
          <h4 className="font-medium text-(--muted)"> JQuery</h4>
        </div>
      </div>
    </aside>
  );
};

export default AboutMeSIde;
