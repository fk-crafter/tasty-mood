"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Hero() {
  const heroImgRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(heroImgRef.current, {
      x: 557,
      duration: 1,
      rotate: 360,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="bg-olive text-white min-h-screen flex items-center px-6 md:px-20 py-10 relative overflow-hidden">
      <div className="w-full md:w-1/2 z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
          Healthy Eating <br />
          <span className="block">is important</span>
          <span className="block">part of lifestyle</span>
        </h2>

        <p className="text-sm md:text-base text-gray-300 mt-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </p>
      </div>

      <div className="w-full md:w-1/2 absolute right-0 top-1/2 -translate-y-1/2 z-0 max-w-[60%] hidden md:block">
        <img
          src="/hero-img.png"
          alt="Plat"
          className="w-full h-auto rounded-lg"
        />

        <div className="flex justify-center gap-6 mt-6">
          <img
            ref={heroImgRef}
            src="/circle1.png"
            alt="Épice 1"
            className="w-28 h-28 rounded-full object-cover border-1 border-white shadow-md"
          />
          <img
            src="/circle2.png"
            alt="Épice 2"
            className="w-28 h-28 rounded-full object-cover border-1 border-white shadow-md"
          />
          <img
            src="/circle3.png"
            alt="Épice 3"
            className="w-28 h-28 rounded-full object-cover border-1 border-white shadow-md"
          />
        </div>
      </div>

      <div className="absolute left-4 bottom-20 rotate-[-90deg] origin-left text-white text-sm tracking-wide">
        Scroll
        <div className="border-l border-dashed border-white h-8 ml-2 inline-block align-middle" />
      </div>
    </section>
  );
}
