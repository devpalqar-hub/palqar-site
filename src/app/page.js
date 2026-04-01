import FeaturedProjects from "@/components/sections/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/sections/Hero/Hero";
import ServicesPreview from "@/components/sections/Services/ServicesPreview";
import WhySection from "@/components/sections/WhySection/WhySection";
import Showcase from "@/components/sections/Showcase.js/Showcase";
import TestimonialsPage from "@/components/sections/Testimonials/Testimonials";
import TextSection from "@/components/sections/TextSection/TextSection";
import VideoSection from "@/components/sections/VideoSection/VideoSection";

export const metadata = {
  title: "About Us | Palqar — Digital Agency",
  description:
    "We don't follow trends — we create them. Learn about Palqar's mission, philosophy, and the leadership team behind award-winning digital experiences.",
  keywords: [
    "digital agency",
    "UI/UX design",
    "web development",
    "Palqar",
    "branding",
  ],
  openGraph: {
    title: "About Palqar — Digital Agency",
    description:
      "Challenging assumptions. Crafting digital experiences that convert, engage, and lead.",
    url: "https://palqar.com/about",
    siteName: "Palqar",
    images: [
      {
        url: "/about/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Palqar Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Palqar",
    description: "We don't follow trends — we create them.",
    images: ["/about/about-team.jpg"],
  },
  alternates: { canonical: "https://palqar.com/about" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TextSection/>
      <VideoSection/>
      <ServicesPreview />
      <FeaturedProjects />
      <WhySection />
      <TestimonialsPage />
      <Showcase />
    </main>
  );
}
