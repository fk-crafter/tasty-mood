"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const logoRef = useRef(null);
  const rightContentRef = useRef(null);

  useGSAP(() => {
    gsap.from(logoRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.from(rightContentRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <header className="flex items-center bg-olive justify-between px-6 md:px-20 py-6 ">
      <h1 ref={logoRef} className="text-2xl font-bold text-white">
        TastyMood
      </h1>

      <div ref={rightContentRef} className="flex items-center gap-4">
        <span className="text-white text-sm md:text-base">+33 01 01 01 01</span>
        <button className="px-4 py-2 border cursor-pointer border-white text-white rounded-lg hover:bg-white hover:text-olive transition">
          Book now
        </button>
      </div>
    </header>
  );
}
