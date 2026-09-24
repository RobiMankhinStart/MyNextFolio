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
import { useEffect, useRef, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import ThemeToggle from "./components/common/ThemeToggle";

export default function Home() {
  const [left, setLeft] = useState(false);
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    if (!left || typeof window === "undefined" || window.innerWidth >= 1024) {
      return undefined;
    }

    const handleOutsideClick = (event) => {
      const clickedSidebar = sidebarRef.current?.contains(event.target);
      const clickedToggle = toggleButtonRef.current?.contains(event.target);

      if (!clickedSidebar && !clickedToggle) {
        setLeft(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, {
      passive: true,
    });

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [left]);

  return (
    <div className="min-h-screen font-inter">
      <div
        aria-hidden={!left}
        onClick={() => setLeft(false)}
        className={`${
          left ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-30 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden`}
      />

      <AboutMeSIde left={left} sidebarRef={sidebarRef} />

      <button
        ref={toggleButtonRef}
        type="button"
        aria-label={left ? "Close profile sidebar" : "Open profile sidebar"}
        aria-expanded={left}
        onClick={() => setLeft((current) => !current)}
        className={`${
          left ? "left-[calc(100%-60px)]" : "left-4"
        } fixed top-4 z-50 lg:hidden border w-11 h-11 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:scale-105 bg-(--accent) shadow-lg shadow-black/10`}
      >
        <FaArrowRightArrowLeft className="text-2xl" />
      </button>

      <div className="lg:ml-[280px] lg:mr-[82px] px-4 md:px-8 py-4 md:py-8 transition-all duration-300">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <Banner />
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
