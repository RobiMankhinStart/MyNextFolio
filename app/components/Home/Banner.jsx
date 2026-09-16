import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <section id="home" className="w-full max-w-[980px] mx-auto mb-20">
      <div className="surface border rounded-2xl overflow-hidden shadow-sm reveal">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 px-6 py-10 md:px-12 md:py-14">
          <div>
            <p className="accent text-sm font-semibold uppercase tracking-[0.2em]">
              Hello, I&apos;m Robi
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
              Full-stack MERN developer who makes the web feel{" "}
              <span className="accent">clear.</span>
            </h1>
            <p className="muted text-lg mt-6 max-w-xl leading-relaxed">
              I build complete web products with MongoDB, Express.js, React, and
              Node.js, from dependable APIs to thoughtful interfaces.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#contact"
                className="bg-[var(--accent)] text-[#1e2530] rounded-md px-5 py-3 font-semibold inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
              >
                Let&apos;s talk <IoMdArrowForward />
              </a>
              <a
                href="/robi_Resume-robileo49@gmail.com.pdf"
                download
                className="surface border rounded-md px-5 py-3 font-semibold inline-flex items-center gap-2 hover:border-[var(--accent)] transition-colors"
              >
                Download CV <MdOutlineFileDownload className="text-xl" />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-[var(--accent)] opacity-20 blur-3xl" />
            <Image
              src="/bgOne-removebg-preview.png"
              alt="Robi Mankhin"
              width={360}
              height={500}
              priority
              className="relative w-auto h-[280px] md:h-[390px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
