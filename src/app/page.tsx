import Hero from "@/components/Hero";
import Products from "@/components/Products";
import QuoteForm from "@/components/QuoteForm";
import Process from "@/components/Process";
import Blog from "@/components/Blog";
import HealthSurvey from "@/components/HealthSurvey";
import CustomerStories from "@/components/CustomerStories";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FeaturedNews from "@/components/FeaturedNews";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Products />
      <Process />
      <Blog />
      <HealthSurvey />
      <CustomerStories />
      <Testimonials />
      <Stats />
      <FeaturedNews />
    </main>
  );
}
