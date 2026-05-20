import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FeaturedNews from "@/components/FeaturedNews";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Products />
      <Process />
      <Testimonials />
      <Stats />
      <FeaturedNews />
    </main>
  );
}
