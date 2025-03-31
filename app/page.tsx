import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import Presentation from "@/components/Presentation";
import Advantage from "@/components/Advantage";
import BlogSection from "@/components/BlogSection";
import ReservationSection from "@/components/ReservationSection";
import CategorySection from "@/components/CategorySection";

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
      <BlogSection />
      <ReservationSection />
      <CategorySection />
    </main>
  );
}
