"use client";

import { FishIcon, CarrotIcon, AppleIcon } from "lucide-react";

export default function Advantage() {
  return (
    <section className="bg-white text-olive px-6 md:px-20 py-20">
      <div className="grid md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-lightpistachio p-6 rounded-full">
            <FishIcon size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold">Premium Quality</h3>
          <p className="text-sm text-gray-500">
            Only the finest ingredients, carefully selected for an authentic
            Italian experience.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="bg-lightpistachio p-6 rounded-full">
            <CarrotIcon size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold">Seasonal Recipes</h3>
          <p className="text-sm text-gray-500">
            Our dishes evolve with the seasons, always fresh and full of flavor.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="bg-lightpistachio p-6 rounded-full">
            <AppleIcon size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold">Fresh Fruit</h3>
          <p className="text-sm text-gray-500">
            Carefully sourced fruits to finish your meal with a sweet, natural
            touch.
          </p>
        </div>
      </div>
    </section>
  );
}
