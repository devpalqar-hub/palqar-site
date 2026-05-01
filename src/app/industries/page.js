import IndustriesClient from "./IndustriesClient";
import styles from "./Industries.module.css";

export const metadata = {
  title: "Industries We Serve | Palqar",
  description:
    "Discover Palqar's industry-focused digital solutions for Health-Tech, E-commerce, AI, Manufacturing, Automotive, Real Estate, and more.",
  alternates: { canonical: "https://palqar.com/industries" },
};

const industriesData = [
  { id: "01", title: "Health-Tech", description: "Secure, compliant digital experiences that improve patient outcomes, streamline operations, and build trust in healthcare brands.", image: "/industries/healthcare.png", alt: "Health-Tech" },
  { id: "02", title: "Ecom", description: "Digital solutions that enhance online visibility, optimize customer journeys, and drive conversions.", image: "/industries/ecom.png", alt: "ecom" },
  { id: "03", title: "Fashion and Retail", description: "Immersive brand experiences that captivate audiences and elevate fashion and retail presence.", image: "/industries/fashion.png", alt: "fashion and retail" },
  { id: "04", title: "AI", description: "Intelligent platforms and AI-driven systems designed to automate processes and unlock new insights.", image: "/industries/AI.png", alt: "Ai" },
  { id: "05", title: "HVAC", description: "Robust digital solutions for HVAC businesses to streamline booking, quoting, and customer management.", image: "/industries/HVAC.png", alt: "HVAC" },
  { id: "06", title: "Manufacturing", description: "Industrial-grade platforms that optimize supply chain visibility and showcase manufacturing capabilities.", image: "/industries/manufacturing.png", alt: "manufacturing" },
  { id: "07", title: "Automotive and Mobility", description: "Next-generation digital showrooms and mobility solutions that drive the automotive industry forward.", image: "/industries/automotive.png", alt: "automotive and mobility" },
  { id: "08", title: "FMCG", description: "Engaging digital campaigns and platforms designed to move fast-moving consumer goods at scale.", image: "/industries/fmcg.png", alt: "FMCG" },
  { id: "09", title: "F&B", description: "Mouth-watering digital experiences and ordering systems for the food and beverage industry.", image: "/industries/fb.png", alt: "F&B" }, // 🔥 fixed filename
  { id: "10", title: "Govt and Public Sector", description: "Accessible, secure, and transparent digital portals built for government and public services.", image: "/industries/govt.png", alt: "govt and public sector" },
  { id: "11", title: "Retail and Ecom", description: "Omnichannel retail platforms designed to unify in-store and online customer experiences.", image: "/industries/retail.png", alt: "retail and ecommerce" },
  { id: "12", title: "Media and Entertainment", description: "Captivating digital streaming and content delivery platforms for the entertainment industry.", image: "/industries/media.png", alt: "media and entertainment" },
  { id: "13", title: "Real Estate", description: "Immersive property viewing platforms and digital listing solutions for real estate professionals.", image: "/industries/realEstate.png", alt: "real estate" },
  { id: "14", title: "LegalTech", description: "Secure, confidential, and highly professional digital infrastructure for legal practices.", image: "/industries/legalTech.png", alt: "LegalTech" },
  { id: "15", title: "JanSan", description: "B2B portals and procurement platforms tailored for the Janitorial and Sanitation industry.", image: "/industries/janSan.png", alt: "JanSan" }
];

export default function IndustriesPage() {
  return (
    <main className={styles.industriesPage}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroHeading}>
            <span>Industry-Focused</span>
            <span>Digital Solutions for</span>
            <span>Growing Brands</span>
          </h1>
        </div>
      </section>

      {/* LIST SECTION */}
      <section className={styles.listSection}>
        <div className={styles.container}>
          <IndustriesClient industriesData={industriesData} />
        </div>
      </section>
    </main>
  );
}