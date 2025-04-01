"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection() {
  const blogRef = useRef(null);

  useGSAP(() => {
    gsap.from(".blog-post", {
      y: 50,
      opacity: 0,
      duration: 1,
      scale: 0.98,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: blogRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section ref={blogRef} className="bg-white text-olive px-6 md:px-20 py-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="blog-post">
          <div className="relative">
            <Image
              src="/gnocchi.jpg"
              alt="Homemade Gnocchi"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-4 right-4 bg-olive text-white px-4 py-1 text-sm rounded-sm">
              Recipe
            </span>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Image
                src="/chef-avatar.jpeg"
                alt="Chef Luca"
                width={32}
                height={32}
                className="rounded-full object-cover aspect-square"
              />
              <span>Chef Luca</span>
              <span>•</span>
              <span>March 28, 2025</span>
              <span>•</span>
              <span>3 comments</span>
            </div>

            <h3 className="text-xl font-bold mt-4 mb-2">
              Gnocchi fatti in casa con burro e salvia
            </h3>
            <p className="text-sm text-gray-600">
              Discover the traditional way to prepare soft potato gnocchi,
              sautéed in butter and fresh sage — a true Italian comfort dish.
            </p>

            <a
              href="#"
              className="text-sm text-olive font-semibold mt-4 inline-flex items-center gap-1 hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        <div className="blog-post">
          <div className="relative">
            <Image
              src="/salad.jpg"
              alt="Asparagus Salad"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-4 right-4 bg-olive text-white px-4 py-1 text-sm rounded-sm">
              Story
            </span>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Image
                src="/nonna.jpg"
                alt="Nonna Maria"
                width={32}
                height={32}
                className="rounded-full object-cover aspect-square"
              />
              <span>Nonna Maria</span>
              <span>•</span>
              <span>March 21, 2025</span>
              <span>•</span>
              <span>5 comments</span>
            </div>

            <h3 className="text-xl font-bold mt-4 mb-2">
              A spring salad with a rustic Italian twist
            </h3>
            <p className="text-sm text-gray-600">
              A refreshing asparagus salad with rocket, aged goat cheese, and a
              drizzle of balsamic — perfect for the season.
            </p>

            <a
              href="#"
              className="text-sm text-olive font-semibold mt-4 inline-flex items-center gap-1 hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
