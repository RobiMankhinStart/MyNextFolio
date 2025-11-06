import Image from "next/image";
import React from "react";

import PortFolioCard from "../common/PortFolioCard";

const PortFolio = () => {
  return (
    <div className="container   w-[90%]  lg:w-[900px] pb-[50px]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[32px] font-bold font-inter">My Works</h2>
        <p className="font-inter mt-6 w-[410px] mx-auto text-[#767676] text-[15px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      {/* categoty buttons*/}
      <div className="flex flex-wrap items-center justify-center mb-[50px] gap-9">
        <button className="text-2xl hover:scale-105 font-semibold hover:text-[#FFB400] duration-300">
          All categories
        </button>
        <button className="text-2xl hover:scale-105 font-semibold hover:text-[#FFB400] duration-300">
          ToDo
        </button>
        <button className="text-2xl hover:scale-105 font-semibold hover:text-[#FFB400] duration-300">
          E-Commerce
        </button>
        <button className="text-2xl hover:scale-105 font-semibold hover:text-[#FFB400] duration-300">
          All categories
        </button>
      </div>
      {/* works */}
      <div className="flex flex-wrap gap-6 justify-center ">
        <PortFolioCard />
        <PortFolioCard />
        <PortFolioCard />
      </div>
    </div>
  );
};

export default PortFolio;
