import FeaturedProjects from "@/components/sections/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/sections/Hero/Hero";
import ServicesPreview from "@/components/sections/Services/ServicesPreview";
import WhySection from "@/components/sections/WhySection/WhySection";

export default function Home() {
  return (
    <main >
      <Hero/>
      <ServicesPreview/>
      <FeaturedProjects/>
      <WhySection/>
    </main>
  );
}
