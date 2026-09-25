"use client";

import { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const heroImages = [
  { src: "/heroCover1.jpg", alt: "Featured portfolio visual one" },
  { src: "/heroCover2.jpg", alt: "Featured portfolio visual two" },
  { src: "/heroCover3.jpg", alt: "Featured portfolio visual three" },
  { src: "/heroCover4.jpg", alt: "Featured portfolio visual four" },
  { src: "/heroCover5.jpg", alt: "Featured portfolio visual five" },
  { src: "/heroCover6.png", alt: "Featured portfolio visual six" },
  { src: "/heroCover7.jpg", alt: "Featured portfolio visual seven" },
  { src: "/heroCover8.jpg", alt: "Featured portfolio visual eight" },
  { src: "/heroCoverlast.avif", alt: "Featured portfolio final visual" },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const preloadedImages = heroImages.map(({ src }) => {
      const image = new window.Image();
      image.src = src;
      return image.decode
        ? image.decode().catch(() => undefined)
        : Promise.resolve();
    });

    Promise.all(preloadedImages).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!imagesReady) return undefined;

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(slideTimer);
  }, [imagesReady]);

  return (
    <section id="home" className=" w-full max-w-[980px] mx-auto pt-18 md:pt-1">
      <div className="relative min-h-[560px] md:min-h-[600px] surface border rounded-2xl overflow-hidden shadow-sm reveal">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${heroImages.length * 100}%`,
            transform: `translateX(-${activeSlide * (100 / heroImages.length)}%)`,
          }}
          aria-label={`Hero slide ${activeSlide + 1} of ${heroImages.length}`}
        >
          {heroImages.map((image) => (
            <div
              key={image.src}
              role="img"
              aria-label={image.alt}
              className="h-full flex-none bg-cover bg-center bg-no-repeat"
              style={{
                width: `${100 / heroImages.length}%`,
                backgroundImage: `url("${image.src}")`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/20" />
        <div className="relative z-10 flex min-h-[560px] md:min-h-[600px] items-center px-6 py-12 md:px-12 md:py-14">
          <div className="max-w-2xl text-white">
            <p className="text-(--accent) text-sm font-semibold uppercase tracking-[0.2em]">
              Hello, I&apos;m Robi
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
              Full-stack (MERN) developer who makes the web feel
              <span className="text-(--accent)">clear.</span>
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-xl leading-relaxed">
              I build complete web products with MongoDB, Express.js, React, and
              Node.js, from dependable APIs to thoughtful interfaces.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#contact"
                className="bg-(--accent) text-[#1e2530] rounded-md px-5 py-3 font-semibold inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
              >
                Let&apos;s talk <IoMdArrowForward />
              </a>
              <a
                href="/robi-resume-robileo49@gmail.com.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 bg-white/10 rounded-md px-5 py-3 font-semibold inline-flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                Download CV <MdOutlineFileDownload className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute z-20 bottom-6 left-6 md:left-12 flex gap-2"
          aria-label="Hero slides"
        >
          {heroImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index
                  ? "w-8 bg-(--accent)"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
