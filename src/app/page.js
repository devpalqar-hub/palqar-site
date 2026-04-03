import styles from "./page.module.css";
import FeaturedProjects from "@/components/sections/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/sections/Hero/Hero";
import ServicesPreview from "@/components/sections/Services/ServicesPreview";
import WhySection from "@/components/sections/WhySection/WhySection";
import Showcase from "@/components/sections/Showcase.js/Showcase";
import TestimonialsPage from "@/components/sections/Testimonials/Testimonials";
import TextSection from "@/components/sections/TextSection/TextSection";
import VideoSection from "@/components/sections/VideoSection/VideoSection";

export const metadata = {
  title: "Palqar | Web Development, Branding, Marketing & Growth",
  description:
    "Palqar helps ambitious businesses grow with custom web development, branding, performance marketing, automation, and growth strategy.",
  keywords: [
    "digital agency",
    "performance marketing",
    "business growth strategy",
    "automation services",
    "UI/UX design",
    "web development",
    "Palqar",
    "branding",
  ],
  openGraph: {
    title: "Palqar | Web Development, Branding, Marketing & Growth",
    description:
      "Custom web development, branding, performance marketing, automation, and consulting delivered by one integrated growth team.",
    url: "https://palqar.com",
    siteName: "Palqar",
    images: [
      {
        url: "/hero-poster.png",
        width: 1200,
        height: 630,
        alt: "Palqar digital growth and development services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palqar | Web Development, Branding, Marketing & Growth",
    description:
      "Web development, branding, marketing, automation, and consulting for ambitious businesses.",
    images: ["/hero-poster.png"],
  },
  alternates: { canonical: "https://palqar.com" },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://palqar.com/#organization",
        name: "Palqar",
        url: "https://palqar.com",
        logo: {
          "@type": "ImageObject",
          url: "https://palqar.com/hero-poster.png",
        },
        description:
          "Palqar helps ambitious businesses grow through web development, branding, performance marketing, automation, and consulting.",
      },
      {
        "@type": "WebSite",
        "@id": "https://palqar.com/#website",
        url: "https://palqar.com",
        name: "Palqar",
        publisher: {
          "@id": "https://palqar.com/#organization",
        },
      },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Hero />
      <TextSection />
      <VideoSection />
      <ServicesPreview />
      <FeaturedProjects />
      <WhySection />
      <TestimonialsPage />
      <Showcase />
    </main>
  );
}
