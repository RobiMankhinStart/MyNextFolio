import Image from "next/image";
import AboutMeSIde from "./components/Home/AboutMeSIde";
import Banner from "./components/Home/Banner";
import SideNav from "./components/Home/SideNav";
import MyServices from "./components/Home/MyServices";
import Education from "./components/Home/Education";

export default function Home() {
  return (
    <div className="flex font-inter justify-between  border bg-[#f5f5fa] bg[#E5E5E5]">
      <AboutMeSIde />
      <div className="">
        <Banner />
        <MyServices />
        <Education />
      </div>
      <SideNav />
    </div>
  );
}
