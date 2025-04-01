"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text = "Pizza & Pasta crafted with passion served with soul";
const words = text.split(" ");

export default function Hero() {
  const heroImgRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSubtitleRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.from(".hero-word", {
      x: -80,
      opacity: 0,
      stagger: 0.2,
      delay: 0.3,
      duration: 0.5,
    });

    tl.from(heroSubtitleRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.5,
    });

    gsap.from(heroImgRef.current, {
      x: 750,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.from(".heroimg", {
      x: 600,
      duration: 1,
      rotate: 360,
      ease: "power2.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="bg-olive text-white min-h-screen flex flex-col md:flex-row items-center px-4 py-10 md:px-20 relative overflow-hidden">
      {/* Texte */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left">
        <h2
          ref={heroTextRef}
          className="text-3xl md:text-6xl font-serif font-bold leading-snug md:leading-tight flex flex-wrap justify-center md:justify-start max-w-full md:max-w-xl"
        >
          {words.map((word, i) => (
            <span key={i} className="hero-word mr-2">
              {word}
            </span>
          ))}
        </h2>

        <p
          ref={heroSubtitleRef}
          className="text-sm md:text-base text-gray-300 mt-4 md:mt-6 max-w-full md:max-w-md"
        >
          Authentic Italian flavors made with love
        </p>
      </div>

      {/* Image principale (mobile ET desktop) */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-0 max-w-full md:max-w-[60%]">
        <img
          ref={heroImgRef}
          src="/hero-img.png"
          alt="Plat"
          className="w-full h-auto rounded-lg"
        />

        <div className="flex justify-center gap-4 mt-4 md:mt-6">
          <img
            src="/circle1.png"
            alt="Épice 1"
            className="heroimg w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
          />
          <img
            src="/circle2.png"
            alt="Épice 2"
            className="heroimg w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
          />
          <img
            src="/circle3.png"
            alt="Épice 3"
            className="heroimg w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-2 bottom-10 md:left-4 md:bottom-20 rotate-[-90deg] origin-left text-white text-xs md:text-sm tracking-wide">
        Scroll
        <div className=" border-l border-dashed border-white h-6 md:h-8 ml-2 inline-block align-middle" />
      </div>
    </section>
  );
}
