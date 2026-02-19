import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Showcase from "@/components/sections/Showcase.js/Showcase";
import TestimonialsPage from "@/components/sections/Testimonials/Testimonials";

import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Hero/>
      <VedioFrame />
      <ServicesPreview/>
      <TestimonialsPage/>
      <Showcase/>
    </main>
  );
}
