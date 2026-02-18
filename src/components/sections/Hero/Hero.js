"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import LogoLoop from "@/components/ui/LogoLoop";
import TechLogos from "@/components/ui/tech-logos";

export default function Hero() {
  const logos = TechLogos();
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
      setLoaded(true);
    };

    setTimeout(playVideo, 400);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.poster}></div>

      <video
        ref={videoRef}
        className={`${styles.video} ${loaded ? styles.show : ""}`}
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.kicker}>30+ PROJECTS DELIVERED</p>

        <h1 className={styles.title}>
          POWERING <br /> POSSIBILITIES
        </h1>

        <p className={styles.desc}>
          A consulting-led team focused on one metric: qualified leads.
          Strategy, execution and optimisation across LinkedIn, paid search,
          and modern SEO built for steady growth.
        </p>

        <button className={styles.cta}>LET’S TALK</button>

        <div className={styles.logoStrip}>
        <div className={styles.logoViewport}>
          <LogoLoop
            logos={logos}
            speed={60}
            direction="left"
            width={220}   
            logoHeight={36}
            gap={56}
            hoverSpeed={25}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technologies we use"
          />
        </div>
      </div>

      </div>
    </section>
  );
}
