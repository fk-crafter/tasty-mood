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
    <section className="bg-olive text-white min-h-screen flex items-center px-6 md:px-20 py-10 relative overflow-hidden">
      <div className="w-full md:w-1/2 z-10">
        <h2
          ref={heroTextRef}
          className="text-4xl md:text-6xl font-serif font-bold leading-tight flex flex-wrap max-w-xl"
        >
          {words.map((word, i) => (
            <span key={i} className="hero-word mr-2">
              {word}
            </span>
          ))}
        </h2>

        <p
          ref={heroSubtitleRef}
          className="text-sm md:text-base text-gray-300 mt-6 max-w-md"
        >
          Authentic Italian flavors made with love
        </p>
      </div>

      <div className="w-full md:w-1/2 absolute right-0 top-1/2 -translate-y-1/2 z-0 max-w-[60%] hidden md:block">
        <img
          ref={heroImgRef}
          src="/hero-img.png"
          alt="Plat"
          className="w-full h-auto rounded-lg"
        />

        <div className="flex justify-center gap-6 mt-6">
          <img
            src="/circle1.png"
            alt="Épice 1"
            className="heroimg w-28 h-28 rounded-full object-cover"
          />
          <img
            src="/circle2.png"
            alt="Épice 2"
            className="heroimg w-28 h-28 rounded-full object-cover"
          />
          <img
            src="/circle3.png"
            alt="Épice 3"
            className="heroimg w-28 h-28 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="absolute left-4 bottom-20 rotate-[-90deg] origin-left text-white text-sm tracking-wide">
        Scroll
        <div className=" border-l border-dashed border-white h-8 ml-2 inline-block align-middle" />
      </div>
    </section>
  );
}
