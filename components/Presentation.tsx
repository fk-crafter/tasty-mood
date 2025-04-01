"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Presentation() {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    gsap.from(videoRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(titleRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
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
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="bg-lightpistachio text-olive px-6 md:px-20 py-24">
      <div className="grid  md:grid-cols-2 gap-10 items-center relative">
        <div className="relative w-full">
          <Image
            src="/presentation-img.png"
            alt="Decorative Overlay"
            width={180}
            height={180}
            className="absolute -top-24 -left-12 rotate-90 pointer-events-none"
          />

          <div
            ref={videoRef}
            className="aspect-video rounded-lg z-0 overflow-hidden"
          >
            <iframe
              src="https://www.youtube.com/embed/QSCTMN2ydPw?autoplay=1&mute=1&loop=1&playlist=QSCTMN2ydPw&controls=0&modestbranding=1&showinfo=0"
              title="Chef Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-center h-full">
          <div>
            <h2
              ref={titleRef}
              className="text-4xl font-serif font-bold mb-4 inline-block overflow-hidden"
            >
              The Art of Italian Cooking
            </h2>
            <p ref={subtitleRef} className="text-gray-600 text-base">
              In our kitchen, tradition meets creativity. From the heart of
              Italy to your plate, every dish tells a story of passion,
              precision, and heritage.
            </p>
          </div>

          <Image
            src="/presentation-img.png"
            alt="Decorative Image Bottom"
            width={180}
            height={180}
            className="absolute -bottom-16 -left-4 w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}
