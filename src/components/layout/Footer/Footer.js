"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./Footer.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Hyperspeed = dynamic(
  () => import("@/components/ui/FooterAnimation/FooterAnimation"),
  { ssr: false, loading: () => <div style={{ background: "#000", width: "100%", height: "100%" }} /> }
);

export default function Footer() {
  const router = useRouter();
  const [times, setTimes] = useState({ qa: "", usa: "", in: "" });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const format = (tz) => now.toLocaleTimeString("en-GB", { 
        hour12: false, 
        hour: "2-digit", 
        minute: "2-digit",
        timeZone: tz
      });

      setTimes({
        qa: format("Asia/Qatar"),
        usa: format("America/New_York"),
        in: format("Asia/Kolkata")
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const regions = [
    { id: "qa", name: "Qatar", time: times.qa, path: "/qa/services" },
    { id: "usa", name: "USA", time: times.usa, path: "/usa/services" },
    { id: "in", name: "India", time: times.in, path: "/in/services" }
  ];

  return (
    <footer className={styles.footer}>

      {/* Background */}
      <div className={styles.backgroundWrapper}>
       <Hyperspeed
          effectOptions={{"distortion":"turbulentDistortion","length":400,"roadWidth":10,"islandWidth":2,"lanesPerRoad":3,"fov":90,"fovSpeedUp":150,"speedUp":2,"carLightsFade":0.4,"totalSideLightSticks":20,"lightPairsPerRoadWay":40,"shoulderLinesWidthPercentage":0.05,"brokenLinesWidthPercentage":0.1,"brokenLinesLengthPercentage":0.5,"lightStickWidth":[0.12,0.5],"lightStickHeight":[1.3,1.7],"movingAwaySpeed":[60,80],"movingCloserSpeed":[-120,-160],"carLightsLength":[12,80],"carLightsRadius":[0.05,0.14],"carWidthPercentage":[0.3,0.5],"carShiftX":[-0.8,0.8],"carFloorSeparation":[0,5],"colors":{"roadColor":526344,"islandColor":657930,"background":0,"shoulderLines":1250072,"brokenLines":1250072,"leftCars":[14177983,6770850,12732332],"rightCars":[242627,941733,3294549],"sticks":242627}}}
        />
      </div>

      <div className={styles.content}>

        {/* Top Section */}
        <div className={styles.topSection}>

          {/* Left — Brand + Email */}
          <div className={styles.left}>
            <h2 className={styles.logo}>Palqar</h2>
            <p className={styles.tagline}>Precision-engineered digital growth and transformation.</p>
            <div className={styles.emailBox}>
              <input
                type="email"
                placeholder="Subscribe to our newsletter..."
                className={styles.input}
              />
              <button
                className={styles.button}
                onClick={() => router.push("/contact")}
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Links Row */}
          <div className={styles.linksGroup}>

            <div className={styles.templateColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/industries">Portfolio</Link></li>
                <li><Link href="/blog">Our Insights</Link></li>
                <li><Link href="/contact">Get in Touch</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>

            <div className={styles.templateColumn}>
              <h4 className={styles.columnTitle}>Solutions</h4>
              <ul className={styles.linkList}>
                <li><Link href="/services/digital-marketing/seo">SEO Optimization</Link></li>
                <li><Link href="/services/web-development">Web Development</Link></li>
                <li><Link href="/services/branding">Brand Strategy</Link></li>
                <li><Link href="/services/marketing">Digital Marketing</Link></li>
                <li><Link href="/services/automation">Business Automation</Link></li>
              </ul>
            </div>

            <div className={styles.socialColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <ul className={styles.linkList}>
                <li><a href="https://linkedin.com/company/palqar" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com/palqar" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://x.com/palqar" target="_blank" rel="noopener noreferrer">Twitter (X)</a></li>
                <li><a href="https://youtube.com/@palqar" target="_blank" rel="noopener noreferrer">Youtube</a></li>
              </ul>
            </div>

          </div>

          {/* Region Pills Section (Replaced Status Card) */}
          <div className={styles.regionWrapper}>
            <div className={styles.pillsContainer}>
              {regions.map((reg) => (
                <button 
                  key={reg.id} 
                  className={styles.regionPill}
                  onClick={() => router.push(reg.path)}
                >
                  <span className={styles.regionName}>{reg.name}</span>
                  <span className={styles.regionTime}>{reg.time}</span>
                </button>
              ))}
            </div>
            <div className={styles.availability}>
              <span className={styles.pulseDot}></span>
              <span>Available for new projects</span>
            </div>
          </div>

        </div>

        {/* Big Brand Logo */}
        <div className={styles.brandSection}>
          <Image
            src="/LOGO-02.png"
            alt="Palqar Digital Growth Agency"
            width={1400}
            height={1200}
            className={styles.bigLogo}
            loading="lazy"
          />
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.footerInfo}>
            <span>© 2026 Palqar · Doha · Dubai · New York · Mumbai</span>
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
