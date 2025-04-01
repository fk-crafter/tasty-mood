"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MenuSection() {
  const decoImgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const menuItemsRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(decoImgRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: decoImgRef.current,
        start: "top 10%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    gsap.from(titleRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".menu-item", {
      x: -80,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: menuItemsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="relative bg-white text-olive px-6 md:px-20 py-20 overflow-hidden">
      <div
        ref={decoImgRef}
        className="absolute -top-40 right-36 w-40 md:w-60 opacity-70 rounded-full pointer-events-none"
      >
        <Image
          src="/menu-img.png"
          alt="Menu Decoration"
          width={240}
          height={240}
          className="w-full h-auto object-contain rotate-90"
        />
      </div>

      <div className="text-left mb-24 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl font-serif font-bold mb-4 inline-block overflow-hidden"
        >
          Il Nostro Menu
        </h2>
        <p ref={subtitleRef} className="text-gray-500 max-w-md">
          A selection of our finest Italian dishes — made with tradition, served
          with soul.
        </p>
      </div>

      <div ref={menuItemsRef} className="grid md:grid-cols-2 gap-y-10 gap-x-14">
        {[
          {
            title: "Tagliatelle al Tartufo",
            price: "$24",
            desc: "Homemade pasta with black truffle cream and parmesan.",
          },
          {
            title: "Bistecca alla Fiorentina",
            price: "$42",
            desc: "Grilled T-bone steak with rosemary and sea salt.",
          },
          {
            title: "Risotto ai Funghi Porcini",
            price: "$19",
            desc: "Creamy Arborio rice with porcini mushrooms and pecorino.",
          },
          {
            title: "Vino Rosso della Casa",
            price: "$12",
            desc: "Our sommelier’s red wine selection from Tuscany.",
          },
        ].map((item, index) => (
          <div key={index} className="menu-item">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="text-lg font-bold">{item.price}</span>
            </div>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
