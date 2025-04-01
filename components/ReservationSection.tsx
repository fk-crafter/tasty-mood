"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReservationSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formFieldsRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    gsap.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
      },
    });

    gsap.from(".form-item:not(.book-button)", {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: formFieldsRef.current,
        start: "top 90%",
      },
    });

    gsap.from(".book-button", {
      opacity: 0,
      scale: 0.9,
      rotate: -5,
      duration: 1,
      ease: "elastic.out(1, 0.4)",
      scrollTrigger: {
        trigger: formFieldsRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section className="bg-lightpistachio text-olive px-6 md:px-20 py-32">
      <div className="text-center mb-12">
        <h2 ref={titleRef} className="text-4xl font-serif font-bold">
          Reserve Your Spot at the Table
        </h2>
        <p
          ref={subtitleRef}
          className="text-gray-600 mt-2 italic text-base max-w-xl mx-auto"
        >
          Because every great story begins with a delicious meal.
        </p>
      </div>

      <form
        ref={formFieldsRef}
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto"
      >
        <input
          type="date"
          className="form-item border border-gray-300 px-4 py-3 rounded-md w-full md:w-auto"
          required
        />
        <select
          className="form-item border border-gray-300 px-4 py-3 rounded-md w-full md:w-auto"
          required
        >
          <option value="">Select time</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="21:00">9:00 PM</option>
        </select>
        <select
          className="form-item border border-gray-300 px-4 py-3 rounded-md w-full md:w-auto"
          required
        >
          <option value="">2 Guests</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4+ People</option>
        </select>

        <button
          type="submit"
          className="form-item book-button bg-olive text-white cursor-pointer font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition"
        >
          Book your table now
        </button>
      </form>
    </section>
  );
}
