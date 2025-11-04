import Image from "next/image";
import AboutMeSIde from "./components/Home/AboutMeSIde";
import Banner from "./components/Home/Banner";
import SideNav from "./components/Home/SideNav";
import MyServices from "./components/Home/MyServices";
import Education from "./components/Home/Education";
import PortFolio from "./components/Home/PortFolio";
import Footer from "./components/common/Footer";
import Contact from "./components/Home/Contact";

export default function Home() {
  return (
    <div className="flex font-inter justify-between bg-[#f5f5fa]">
      <AboutMeSIde />
      <div className="">
        <Banner />
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
