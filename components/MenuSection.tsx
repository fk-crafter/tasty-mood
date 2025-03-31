"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function MenuSection() {
  const decoImgRef = useRef(null);

  useGSAP(() => {
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
        <h2 className="text-4xl font-serif font-bold mb-4">Il Nostro Menu</h2>
        <p className="text-gray-500 max-w-md">
          A selection of our finest Italian dishes — made with tradition, served
          with soul.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-y-10 gap-x-14">
        <div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
            <h3 className="text-xl font-semibold">Tagliatelle al Tartufo</h3>
            <span className="text-lg font-bold">$24</span>
          </div>
          <p className="text-sm text-gray-500">
            Homemade pasta with black truffle cream and parmesan.
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
            <h3 className="text-xl font-semibold">Bistecca alla Fiorentina</h3>
            <span className="text-lg font-bold">$42</span>
          </div>
          <p className="text-sm text-gray-500">
            Grilled T-bone steak with rosemary and sea salt.
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
            <h3 className="text-xl font-semibold">Risotto ai Funghi Porcini</h3>
            <span className="text-lg font-bold">$19</span>
          </div>
          <p className="text-sm text-gray-500">
            Creamy Arborio rice with porcini mushrooms and pecorino.
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
            <h3 className="text-xl font-semibold">Vino Rosso della Casa</h3>
            <span className="text-lg font-bold">$12</span>
          </div>
          <p className="text-sm text-gray-500">
            Our sommelier’s red wine selection from Tuscany.
          </p>
        </div>
      </div>
    </section>
  );
}
