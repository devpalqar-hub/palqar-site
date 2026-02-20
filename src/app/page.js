import FeaturedProjects from "@/components/sections/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/sections/Hero/Hero";
import ServicesPreview from "@/components/sections/Services/ServicesPreview";
import WhySection from "@/components/sections/WhySection/WhySection";
import Showcase from "@/components/sections/Showcase.js/Showcase";
import TestimonialsPage from "@/components/sections/Testimonials/Testimonials";
import VedioFrame from "@/components/sections/VedioFrame/VedioFrame";

export default function Home() {
  return (
    <main >
      <Hero/>
      <VedioFrame />
      <ServicesPreview />
      <TestimonialsPage/>
      <Showcase/>
      <FeaturedProjects/>
      <WhySection/>
    </main>
  );
}
