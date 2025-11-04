import React from "react";
import MyServiceCard from "../common/MyServiceCard";

const MyServices = () => {
  return (
    <div className="pb-[70px]  w-[970px]">
      <div className="container">
        <div className="mainDiv">
          <p className="font-inter  w-[400px] mx-auto text-center text-[#767676] text-[15px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
          <div className="mt-[50px] flex flex-wrap gap-5 justify-center">
            <MyServiceCard />
            <MyServiceCard />
            <MyServiceCard />
            <MyServiceCard />
            <MyServiceCard />
            <MyServiceCard />
            <MyServiceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
