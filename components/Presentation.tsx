"use client";

import Image from "next/image";

export default function Presentation() {
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

          <div className="aspect-video rounded-lg z-0">
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
            <h2 className="text-4xl font-serif font-bold mb-4">
              Excellent cook
            </h2>
            <p className="text-gray-600 text-base">
              Our chef brings generations of Italian culinary tradition to life
              through every dish. From handmade pasta to slow-cooked sauces,
              each plate is a celebration of passion, heritage, and flavor.
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
