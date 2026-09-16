"use client";

import Image from "next/image";
import React from "react";
import img from "../../../public/Image.png";

const PortFolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const projects =
    activeCategory === "All"
      ? MyWorks
      : MyWorks.filter((project) => project.category === activeCategory);

  return (
    <section id="works" className="w-full max-w-[980px] mx-auto pb-20">
      <div className="max-w-2xl mx-auto text-center mb-10 reveal">
        <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
          Selected work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          A few things I&apos;ve built
        </h2>
        <p className="muted mt-4 max-w-xl mx-auto">
          Full-stack products and focused interfaces built with clear visual
          systems and reliable code.
        </p>
      </div>
      {/* categoty buttons*/}
      <div className="flex flex-wrap items-center justify-center mb-[50px] gap-9">
        <button className="text-lg font-semibold hover:text-[#FFB400] duration-300">
          All categories
        </button>
        <button className="text-lg font-semibold hover:text-[#FFB400] duration-300">
          ToDo
        </button>
        <button className="text-lg font-semibold hover:text-[#FFB400] duration-300">
          E-Commerce
        </button>
        <button className="text-lg font-semibold hover:text-[#FFB400] duration-300">
          All categories
        </button>
      </div>
      {/* works */}
      <div className="flex flex-wrap gap-6 justify-center ">
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className=" shadow-lg"
        >
          <Image
            className=" object-cover rounded-md "
            src={img}
            width={310}
            height={310}
            alt="coverImg"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className=" shadow-lg"
        >
          <Image
            className=" object-cover rounded-md "
            src={img}
            width={310}
            height={310}
            alt="coverImg"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className=" shadow-lg"
        >
          <Image
            className=" object-cover rounded-md "
            src={img}
            width={310}
            height={310}
            alt="coverImg"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className=" shadow-lg"
        >
          <Image
            className=" object-cover rounded-md "
            src={img}
            width={310}
            height={310}
            alt="coverImg"
          />
        </div>
      </div>
    </section>
  );
};

export default PortFolio;
