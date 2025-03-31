import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
export default function Home() {
  return (
    <main>
      <Header />
      <hr className="border-t border-white/25" />
      <Hero />
      <StorySection />
      <MenuSection />
    </main>
  );
}
