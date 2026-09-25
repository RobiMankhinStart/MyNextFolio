import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="w-full max-w-[980px] mx-auto pt-20">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          A hands-on learning experience
        </h2>
      </div>

      <div className="surface border rounded-xl shadow-sm p-6 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] accent">
              Creative IT Institute, Bangladesh
            </p>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold">
              Intern / Trainee – NSDA Skill Development Project (EBT-based)
            </h3>
          </div>
          <span className="inline-flex items-center justify-center rounded-full border border-(--accent)/30 bg-(--surface-muted) px-3 py-1 text-sm font-medium text-foreground">
            Oct 2025 – Jan 2026
          </span>
        </div>

        <p className="mt-6 text-[15px] leading-7 text-(--muted) max-w-3xl">
          Worked in a practical digital training environment focused on web
          development and skill-based learning under the EBT-supported NSDA
          initiative. The experience strengthened my ability to learn quickly,
          collaborate on real tasks, and build user-focused interfaces with
          modern front-end practices.
        </p>
      </div>
    </section>
  );
};

export default Experience;
