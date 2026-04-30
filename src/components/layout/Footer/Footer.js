"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./Footer.module.css";
import { useRouter } from "next/navigation";

const Hyperspeed = dynamic(
  () => import("@/components/ui/FooterAnimation/FooterAnimation"),
  { ssr: false, loading: () => <div style={{ background: "#000", width: "100%", height: "100%" }} /> }
);

export default function Footer() {
  const router = useRouter();
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
            <p className={styles.tagline}>Powering Possibilities</p>
            <div className={styles.emailBox}>
              <input
                type="email"
                placeholder="Enter Your Email..."
                className={styles.input}
              />
              <button
                className={styles.button}
                onClick={() => router.push("/contact#contact-form")}
              >
                Contact us
              </button>
            </div>
          </div>

          {/* Links Row — wraps into 2-col on mobile */}
          <div className={styles.linksGroup}>

            <div className={styles.templateColumn}>
              <h4 className={styles.columnTitle}>Template Pages</h4>
              <ul className={styles.linkList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/industries">Portfolio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>

            <div className={styles.socialColumn}>
              <h4 className={styles.columnTitle}>Social</h4>
              <ul className={styles.linkList}>
                <li><a href="https://x.com/palqar" target="_blank" rel="noopener noreferrer">Twitter (X)</a></li>
                <li><a href="https://instagram.com/palqar" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://youtube.com/@palqar" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                <li><a href="https://framer.com" target="_blank" rel="noopener noreferrer">Framer</a></li>
              </ul>
            </div>

          </div>

          {/* Video Card */}
          <div className={styles.videoWrapper}>
            <div className={styles.clientsTag}>
              Total Clients <strong>736+</strong>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.playCircle}>▶</div>
            </div>
          </div>

        </div>

        {/* Big Brand Logo */}
        <div className={styles.brandSection}>
          <Image
            src="/LOGO-02.png"
            alt="Palqar Logo"
            width={1400}
            height={1200}
            className={styles.bigLogo}
            loading="lazy"
          />
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span>© 2026 Palqar</span>
          <div className={styles.bottomLinks}>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}