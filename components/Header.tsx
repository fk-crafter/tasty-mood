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
    <header className="flex items-center justify-between bg-olive px-4 md:px-20 py-4 md:py-6">
      <h1 ref={logoRef} className="text-xl md:text-2xl font-bold text-white">
        TastyMood
      </h1>

      <div ref={rightContentRef} className="flex items-center gap-2 md:gap-4">
        <span className="text-white text-xs md:text-sm">+33 01 01 01 01</span>
        <button className="px-3 md:px-4 py-2 border cursor-pointer border-white text-white text-xs md:text-sm rounded-lg hover:bg-white hover:text-olive transition">
          Book now
        </button>
      </div>
    </header>
  );
}
