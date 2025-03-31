import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import Presentation from "@/components/Presentation";
import Advantage from "@/components/Advantage";

export default function Home() {
  return (
    <main>
      <Header />
      <hr className="border-t border-white/25" />
      <Hero />
      <StorySection />
      <MenuSection />
      <Presentation />
      <Advantage />
    </main>
  );
}
