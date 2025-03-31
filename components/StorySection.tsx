"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StorySection() {
  const storyImgLeftRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(storyImgLeftRef.current, {
      x: -760,
      duration: 2,
      scrollTrigger: {
        trigger: storyImgLeftRef.current,
        start: "top 70%",
        end: "bottom 100%",
        scrub: 1,
        markers: true,
      },
    });
  }, []);
  return (
    <section className="bg-olive text-white px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-2 gap-10  items-center">
        <div className="space-y-2">
          <Image
            ref={storyImgLeftRef}
            src="/image2.png"
            alt="Italian Dish"
            className="w-full h-auto rounded-lg"
            width={500}
            height={500}
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug mb-4">
              Discover the soul <br /> of Italian cuisine
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-md">
              Authentic recipes, crafted with fresh local ingredients and a lot
              of passion.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-300 text-sm md:text-base max-w-sm md:ml-auto">
            Every plate tells a story — seasoned with tradition and love.
          </p>

          <div className="flex justify-end">
            <Image
              src="/spice.png"
              alt="Spices"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
