"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CategorySection() {
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.from(".category-card", {
      opacity: 0,
      scale: 0.85,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="bg-white text-olive px-6 md:px-20 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold">
          Explore more Flavors of Italy
        </h2>
        <p className="text-gray-600 mt-2">
          Discover our authentic Italian selection — from antipasti to dolci.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {[
          {
            title: "Antipasti",
            image: "/antipasti.jpg",
            alt: "Antipasti",
          },
          {
            title: "Primi",
            image: "/primi.jpg",
            alt: "Pasta Dishes",
          },
          {
            title: "Dolci",
            image: "/dolci.jpg",
            alt: "Dolci",
          },
        ].map((item, i) => (
          <div key={i} className="category-card group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
