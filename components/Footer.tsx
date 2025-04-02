"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import TripadvisorOrionIcon from "@/components/icons/TripadvisorOrionIcon";

export default function Footer() {
  return (
    <footer className="bg-olive text-white px-6 md:px-20 pt-16 pb-10">
      <div className="grid md:grid-cols-3 gap-10 items-start border-b border-white/20 pb-10">
        <div>
          <h2 className="text-3xl font-serif font-bold">TastyMood</h2>
        </div>

        <div className="space-y-2 text-sm">
          <h4 className="text-base font-semibold mb-2">Contact</h4>
          <p>+33 1 01 01 01 01</p>
          <p>hello@tastymood.it</p>
          <p>12 Rue de Rome, 75000 Paris, France</p>
        </div>

        <div className="w-full">
          <h4 className="text-base font-semibold mb-2">Never Miss a Recipe</h4>
          <form className="flex max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full rounded-l-md bg-transparent border border-white placeholder-white text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-olive px-5 py-2 rounded-r-md text-sm font-semibold hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs mt-2 text-white/60">
            Join our subscribers and get authentic Italian recipes weekly!
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-4">
        <p>© {new Date().getFullYear()} TastyMood. All rights reserved.</p>
        <div className="flex gap-5 items-center">
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-white transition" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-white transition" />
          </Link>
          <Link href="#" aria-label="YouTube">
            <Youtube className="w-5 h-5 hover:text-white transition" />
          </Link>
          <Link href="#" aria-label="TripAdvisor">
            <TripadvisorOrionIcon className="w-5 h-5 hover:text-white transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
