import DNASection from "./components/DNASection";
import Hero from "./components/hero";
import WhySection from "./components/whySection"; // 1. Capitalized Import

import InternSection from "./components/InternSection";
import OpenRoles from "./components/OpenRoles";

export default function CareerPage() {
  return (
    <main style={{ backgroundColor: '#000' }}>
      <Hero />
      <DNASection/>
      <WhySection />
      <OpenRoles/>
      <InternSection/>
    </main>
  );
}