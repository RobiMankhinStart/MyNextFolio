import React from "react";

const Education = () => {
  return (
    <section className="bg-[#f5f5fa] py-16 ">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[32px] font-bold font-inter">Education</h2>
        <p className="font-inter mt-6 w-[410px] mx-auto text-[#767676] text-[15px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      <div className="bg-white flex  justify-center  w-[970px] gap-[100px] mx-auto rounded-lg shadow-sm py-[47px] px-[29px]">
        <div className="left">
          <div className=" flex flex-col gap-7 py-7">
            <h3 className="text-lg font-medium mt-1">University Of Toronto</h3>
            <div className=" flex gap-5  items-center">
              <p>Student</p>
              <div className="bg-yellow-400 px-1 w-[150px]  text-white text-sm  rounded">
                Jan 1016 – Dec 2021
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-7 py-7 mt-[70px]">
            <h3 className="text-lg font-medium mt-1">University Of Toronto</h3>
            <div className=" flex gap-5  items-center">
              <p>Student</p>
              <div className="bg-yellow-400 px-1 w-[150px]  text-white text-sm  rounded">
                Jan 1016 – Dec 2021
              </div>
            </div>
          </div>
        </div>
        <div className="right ">
          <div className="flex flex-col gap-7 py-7">
            <h3 className="text-lg font-inter font-semibold ">
              Certificate of web training
            </h3>
            <p className="w-[550px] text-[#767676]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
          <div className="flex flex-col gap-7 py-7">
            <h3 className="text-lg font-inter font-semibold ">
              Certificate of web training
            </h3>
            <p className="w-[550px] text-[#767676]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </div>
        {/* .................. */}
      </div>
    </section>
  );
};

export default Education;
