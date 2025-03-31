"use client";

export default function Presentation() {
  return (
    <section className="bg-lightpistachio text-olive px-6 md:px-20 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/QSCTMN2ydPw?autoplay=1&mute=1&loop=1&playlist=QSCTMN2ydPw&controls=0&modestbranding=1&showinfo=0"
            title="Chef Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div>
          <h2 className="text-4xl font-serif font-bold mb-4">Excellent cook</h2>
          <p className="text-gray-600 text-base">
            Our chef brings generations of Italian culinary tradition to life
            through every dish. From handmade pasta to slow-cooked sauces, each
            plate is a celebration of passion, heritage, and flavor.
          </p>
        </div>
      </div>
    </section>
  );
}
