"use client";
import Image from "next/image";
import AboutMeSIde from "./components/Home/AboutMeSIde";
import Banner from "./components/Home/Banner";
import SideNav from "./components/Home/SideNav";
import MyServices from "./components/Home/MyServices";
import Education from "./components/Home/Education";
import PortFolio from "./components/Home/PortFolio";
import Footer from "./components/common/Footer";
import Contact from "./components/Home/Contact";
import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export default function Home() {
  const [left, setLeft] = useState(false);

  const handleLeft = () => {
    setLeft(!left);
  };
  return (
    <div className="flex relative font-inter justify-between bg-[#f5f5fa]">
      <AboutMeSIde left={left} />
      {/* about me button  */}
      <div
        onClick={() => setLeft(!left)}
        className={`${
          left ? "md:left-[23%] left-[36%]" : "left-4"
        } absolute top-2 z-50  lg:left-[20%] border lg:hidden  w-12 h-12 p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:bg-[#dbdbe4] bg-[#FFB400]`}
      >
        <FaArrowRightArrowLeft className="text-2xl" />
      </div>
      {/* main section  */}
      <div
        className={` absolute left-1 md:left-10 lg:left-[30%] transition-all duration-300`}
      >
        <Banner left={left} setLeft={setLeft} />
        <MyServices />
        <Education />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      <SideNav />
    </div>
  );
}
