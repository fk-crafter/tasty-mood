"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StorySection() {
  const storyImgLeftRef = useRef(null);
  const storyTextLeftRef = useRef(null);
  const storySubtitleRef = useRef(null);
  const storyImgRightRef = useRef(null);
  const storyTextRightRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(storyImgLeftRef.current, {
      x: -760,
      rotation: 360,
      scrollTrigger: {
        trigger: storyImgLeftRef.current,
        start: "top 70%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    gsap.from(storyTextLeftRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: storyTextLeftRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    gsap.from(storySubtitleRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: storySubtitleRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    gsap.from(storyImgRightRef.current, {
      x: 760,
      duration: 2,
      scrollTrigger: {
        trigger: storyImgRightRef.current,
        start: "top 70%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    gsap.from(storyTextRightRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: storyTextRightRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="bg-olive text-white px-4 py-10 md:px-20 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <Image
            ref={storyImgLeftRef}
            src="/story-left.png"
            alt="Italian Dish"
            className="w-full h-auto md:-ml-28 rounded-lg "
            width={500}
            height={500}
          />
          <div className="text-center md:text-left md:ml-14">
            <h2
              ref={storyTextLeftRef}
              className="text-2xl md:text-4xl font-serif font-bold leading-snug mb-4"
            >
              Discover the soul <br className="hidden md:block" /> of Italian
              cuisine
            </h2>
            <p
              ref={storySubtitleRef}
              className="text-gray-300 text-sm md:text-base max-w-md mx-auto md:mx-0"
            >
              Authentic recipes, crafted with fresh local ingredients and a lot
              of passion.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20 md:mt-32">
        <div className="hidden md:block" />
        <div className="space-y-6 flex flex-col items-center md:items-end text-center md:text-right">
          <p
            ref={storyTextRightRef}
            className="text-gray-300 text-sm md:text-base max-w-sm"
          >
            Every plate tells a story — seasoned with tradition and love.
          </p>

          <div className="w-64 md:w-auto flex justify-center mr-10 md:mr-10 md:justify-end">
            <Image
              ref={storyImgRightRef}
              src="/spice.png"
              alt="Spices"
              className="rounded-lg"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
