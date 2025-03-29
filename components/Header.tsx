"use client";

export default function Header() {
  return (
    <header className="flex items-center bg-olive justify-between px-6 md:px-20 py-6 ">
      <h1 className="text-2xl font-bold text-white">TastyMood</h1>

      <div className="flex items-center gap-4">
        <span className="text-white text-sm md:text-base">+33 01 01 01 01</span>
        <button className="px-4 py-2 border cursor-pointer border-white text-white rounded-lg hover:bg-white hover:text-olive transition">
          Book now
        </button>
      </div>
    </header>
  );
}
