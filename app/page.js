"use client";
import AboutMeSIde from "./components/Home/AboutMeSIde";
import Banner from "./components/Home/Banner";
import SideNav from "./components/Home/SideNav";
import MyServices from "./components/Home/MyServices";
import Experience from "./components/Home/Experience";
import PortFolio from "./components/Home/PortFolio";
import Education from "./components/Home/Education";
import Footer from "./components/common/Footer";
import Contact from "./components/Home/Contact";
import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import ThemeToggle from "./components/common/ThemeToggle";

export default function Home() {
  const [left, setLeft] = useState(false);

  const handleLeft = () => {
    setLeft(!left);
  };
  return (
    <div className="min-h-screen font-inter">
      <AboutMeSIde left={left} />
      <div
        onClick={() => setLeft(!left)}
        className={`${left ? "left-[calc(100%-60px)]" : "left-4"} fixed top-4 z-50 lg:hidden border w-11 h-11 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:scale-105 bg-[var(--accent)]`}
      >
        <FaArrowRightArrowLeft className="text-2xl" />
      </div>
      <div className="lg:ml-[280px] lg:mr-[82px] px-4 md:px-8 py-4 md:py-8 transition-all duration-300">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <Banner left={left} setLeft={setLeft} />
        <MyServices />
        <Experience />
        <PortFolio />
        <Education />
        <Contact />
        <Footer />
      </div>
      <SideNav />
    </div>
  );
}
