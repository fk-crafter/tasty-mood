"use client";

import Image from "next/image";

export default function CategorySection() {
  return (
    <section className="bg-white text-olive px-6 md:px-20 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold">
          Explore the Flavors of Italy
        </h2>
        <p className="text-gray-600 mt-2">
          Discover our authentic Italian selection — from antipasti to dolci.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="group cursor-pointer">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/antipasti.jpg"
              alt="Antipasti"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Antipasti</h3>
            <span className="text-xl">→</span>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/primi.jpg"
              alt="Pasta Dishes"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Primi</h3>
            <span className="text-xl">→</span>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/dolci.jpg"
              alt="Dolci"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Dolci</h3>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
