"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { FishIcon, CarrotIcon, AppleIcon } from "lucide-react";

export default function Advantage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".advantage-item", {
      opacity: 0,
      rotateY: -30,
      transformOrigin: "center",
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white text-olive px-6 md:px-20 py-24"
    >
      {" "}
      <div className="grid md:grid-cols-3 gap-16 text-center">
        <div className="flex flex-col items-center space-y-6 advantage-item">
          <div className="bg-lightpistachio p-10 rounded-full">
            <FishIcon size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-semibold">Premium Quality</h3>
          <p className="text-base text-gray-500">
            Only the finest ingredients, carefully selected for an authentic
            Italian experience.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 advantage-item">
          <div className="bg-lightpistachio p-10 rounded-full">
            <CarrotIcon size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-semibold">Seasonal Recipes</h3>
          <p className="text-base text-gray-500">
            Our dishes evolve with the seasons, always fresh and full of flavor.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 advantage-item">
          <div className="bg-lightpistachio p-10 rounded-full">
            <AppleIcon size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-semibold">Fresh Fruit</h3>
          <p className="text-base text-gray-500">
            Carefully sourced fruits to finish your meal with a sweet, natural
            touch.
          </p>
        </div>
      </div>
    </section>
  );
}
