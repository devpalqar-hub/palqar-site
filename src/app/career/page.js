import DNASection from "./components/DNASection";
import Hero from "./components/hero";
import WhySection from "./components/whySection"; // 1. Capitalized Import

export default function CareerPage() {
  return (
    <main style={{ backgroundColor: '#000' }}>
      <Hero />
      <DNASection/>
      <WhySection /> {/* 2. Capitalized Component Tag */}
    </main>
  );
}