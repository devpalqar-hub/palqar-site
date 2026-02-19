"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VedioFrame.module.css";
import { ArrowRight } from "lucide-react";

const TEXT = `At PALQAR, we're not just building a business we're crafting a vision, one innovation at a time. Founded in 2023, we embarked on this journey with a shared dream to unlock`;

export default function VedioFrame() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = section.offsetHeight - window.innerHeight;

      const scroll = window.scrollY - sectionTop;

      let pct = scroll / sectionHeight;
      pct = Math.max(0, Math.min(1, pct));

      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letters = TEXT.split("");

  return (
    <section ref={sectionRef} className={styles.videoFrame}>

      {/* TEXT PINNED */}
      <div className={styles.wrapper}>
        <p className={styles.para}>
          {letters.map((char, i) => {
            const reveal = i / letters.length;
            const active = progress > reveal;

            return (
              <span key={i} className={`${styles.char} ${active ? styles.active : ""}`}>
                {char}
              </span>
            );
          })}
        </p>
      </div>

      {/* VIDEO PART */}
      <div className={styles.videoContainer}>
        <div className={`${styles.vedioFrame} ${progress > 0.9 ? styles.showVideo : ""}`}>
          <video muted loop playsInline preload="none">
            <source src="/about-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.ctaWrapper}>
          <div className={styles.arrowRight}><ArrowRight size={18} /></div>
          <div className={styles.cta}>Start your project</div>
        </div>
      </div>

    </section>
  );
}
