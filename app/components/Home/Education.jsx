import React from "react";

const Education = () => {
  return (
    <section id="education" className="mx-auto w-full max-w-[980px] py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[32px] font-bold font-inter">Education</h2>
        <p className="font-inter mt-6 w-[410px] mx-auto text-[#767676] text-[15px]">
          A practical foundation in web development, strengthened through
          focused training and hands-on projects.
        </p>
      </div>

      <div className="surface border flex flex-col rounded-xl shadow-sm py-10 px-6 md:px-8">
        <div className="flex gap-10 lg:flex-row flex-col">
          <div className="flex flex-col">
            <h3 className="text-lg font-medium">Web Development Training</h3>
            <div className=" flex gap-5  items-center">
              <p className="muted">Certificate</p>
              <div className="bg-yellow-400 px-1 w-[150px]  text-white text-sm  rounded">
                2021 – Present
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-7">
              <h3 className="text-lg font-inter font-semibold ">
                Building for the browser
              </h3>
              <p className="md:w-[95%] lg:w-[550px] text-[#767676]">
                Training in HTML, CSS, JavaScript, React, Next.js, and modern
                responsive design. I keep learning by turning each new concept
                into a usable interface.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="surface border flex flex-col rounded-xl shadow-sm py-8 px-6 md:px-8 mt-6 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-[17px] lg:text-[20px] font-semibold text-gray-700">
            Bachelor of Science in Computer Science and Engineering (CSE)
            <span className="block mt-2">(2018-2023)</span>
          </h3>

          <p className="mt-4 text-[17px] lg:text-[20px] font-medium text-gray-700">
            University of Information Technology and Sciences (UITS)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
