import dynamic from 'next/dynamic';
import styles from "./page.module.css";
import Hero from "@/components/sections/Hero/Hero";

// Dynamically import heavy components to reduce initial JS payload
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects/FeaturedProjects"));
const ServicesPreview = dynamic(() => import("@/components/sections/Services/ServicesPreview"));
const WhySection = dynamic(() => import("@/components/sections/WhySection/WhySection"));
const Showcase = dynamic(() => import("@/components/sections/Showcase.js/Showcase"));
const TestimonialsPage = dynamic(() => import("@/components/sections/Testimonials/Testimonials"));
const TextSection = dynamic(() => import("@/components/sections/TextSection/TextSection"));
const VideoSection = dynamic(() => import("@/components/sections/VideoSection/VideoSection"));

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
