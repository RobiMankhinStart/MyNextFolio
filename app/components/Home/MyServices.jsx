import React from "react";
import MyServiceCard from "../common/MyServiceCard";

const services = [
  ["UI/UX Design", "Clean, accessible product interfaces"],
  ["Web Development", "Fast, responsive React websites"],
  ["Next.js Applications", "Scalable pages and experiences"],
  ["Responsive Design", "Layouts that work everywhere"],
  ["Landing Pages", "Focused pages built to convert"],
  ["Code Cleanup", "Clearer components and better flow"],
];

const MyServices = () => {
  return (
    <section id="services" className=" pt-20 w-full max-w-[980px] mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
          What I do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Skills that move projects forward
        </h2>
        <p className="muted mt-4">
          A focused set of front-end services for useful, polished digital
          products.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(([title, description]) => (
          <MyServiceCard key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default MyServices;
