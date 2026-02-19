import Hero from "@/components/sections/Hero/Hero";
import ServicesPreview from "@/components/sections/Services/ServicesPreview";
import VedioFrame from "@/components/sections/VedioFrame/VedioFrame";

export default function Home() {
  return (
    <main >
      <Hero/>
      <VedioFrame />
      <ServicesPreview/>
    </main>
  );
}
