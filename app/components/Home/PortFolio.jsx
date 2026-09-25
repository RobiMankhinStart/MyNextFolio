"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { MyWorks } from "../common/MyWorks";

const categories = ["All", "Full-Stack", "FrontEnd", "Raw JavaScript"];

const PortFolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const projects =
    activeCategory === "All"
      ? MyWorks
      : MyWorks.filter((project) => project.category === activeCategory);

  return (
    <section id="works" className="w-full max-w-[980px] mx-auto pt-20">
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

      <div
        className="flex flex-wrap justify-center gap-2 mb-8"
        aria-label="Filter projects"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === category
                ? "bg-(--accent) text-[#1e2530]"
                : "surface border muted hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="surface border rounded-xl overflow-hidden group reveal"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="relative aspect-16/10 overflow-hidden bg-(--surface-muted)">
              <Image
                src={project.Image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="accent text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </p>
              <h3 className="font-semibold mt-1">{project.title}</h3>
              <div className="flex gap-4 mt-4 text-sm">
                <a
                  className="inline-flex items-center gap-2 hover:text-(--accent)"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <FaArrowUpRightFromSquare />
                </a>
                <a
                  className="inline-flex items-center gap-2 muted hover:text-(--accent)"
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source code`}
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortFolio;
