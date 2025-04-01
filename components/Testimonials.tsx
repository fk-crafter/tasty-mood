"use client";

import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Emily Clark",
    username: "@emilyc",
    body: "The pasta was absolutely delicious.",
    img: "/testimonials/emily-clark.jpg",
  },
  {
    name: "Daniel Smith",
    username: "@danny_s",
    body: "Authentic flavors and cozy atmosphere.",
    img: "/testimonials/daniel-smith.jpg",
  },
  {
    name: "Sofia Russo",
    username: "@sofiarusso",
    body: "As an Italian, I can confirm: this place is the real deal.",
    img: "/testimonials/sofia-russo.jpg",
  },
  {
    name: "Michael Lee",
    username: "@mikelee",
    body: "Everything was fresh and full of flavor. Service was top-notch!",
    img: "/testimonials/michael-lee.jpg",
  },
  {
    name: "Ava Johnson",
    username: "@avaj",
    body: "Perfect date night spot. We loved the antipasti platter.",
    img: "/testimonials/ava-johnson.jpg",
  },
  {
    name: "Luca Bianchi",
    username: "@luca_b",
    body: "Reminded me of Sunday dinners at Nonna’s. Truly amazing.",
    img: "/testimonials/luca-bianchi.jpg",
  },
];

const ReviewCard = ({ name, username, body, img }: any) => (
  <div className="review-card w-64 min-h-[120px] shrink-0 cursor-pointer rounded-xl border p-4 mx-2 bg-card hover:bg-olive text-foreground hover:text-white transition-colors duration-300 flex flex-col justify-between">
    <div className="flex items-center gap-2">
      <img src={img} alt={name} className="w-8 h-8 rounded-full object-cover" />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{username}</div>
      </div>
    </div>
    <p className="mt-2 text-sm">{body}</p>
  </div>
);

export default function Testimonials() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const marqueeContainerRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    gsap.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
      },
    });

    gsap.from(marqueeContainerRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: marqueeContainerRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section className="px-6 md:px-20 py-20 bg-white text-olive">
      <div className="text-center mb-10">
        <h2
          ref={titleRef}
          className="text-4xl font-serif font-bold inline-block"
        >
          What our guests say
        </h2>
        <p
          ref={subtitleRef}
          className="text-sm text-gray-500 mt-2 max-w-md mx-auto"
        >
          A taste of Italy — straight from the hearts of our happy customers.
        </p>
      </div>

      <div ref={marqueeContainerRef} className="space-y-6 pb-6">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {reviews.map((r, i) => (
            <ReviewCard key={`top-${i}`} {...r} />
          ))}
        </Marquee>
        <Marquee pauseOnHover speed={40} gradient={false} direction="right">
          {reviews.map((r, i) => (
            <ReviewCard key={`bot-${i}`} {...r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
