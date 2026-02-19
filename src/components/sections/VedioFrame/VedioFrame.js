"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VedioFrame.module.css";
import { ArrowRight } from "lucide-react";

const TEXT = `At PALQAR, we're not just building a business we're crafting a vision, one innovation at a time. Founded in 2023, we embarked on this journey with a shared dream to unlock`;

const TEXT_END    = 0.60;
const VIDEO_START = 0.65;
const CTA_START   = 0.80;

export default function VedioFrame() {
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;

      // total scrollable distance inside section
      const total = section.offsetHeight - viewport;

      // how far user moved inside section
      const scrolled = Math.min(total, Math.max(0, -rect.top));

      const pct = total === 0 ? 0 : scrolled / total;
      setProgress(pct);
    };


    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (progress >= VIDEO_START) {
      videoRef.current?.play().catch(() => {});
    }
  }, [progress]);


  const textProgress = Math.min(1, progress / TEXT_END);
  const letters = TEXT.split("");

  const videoOpacity = progress < VIDEO_START
    ? 0
    : Math.min(1, (progress - VIDEO_START) / 0.15);

  const videoTranslateY = progress < VIDEO_START
    ? 40
    : Math.max(0, 40 - ((progress - VIDEO_START) / 0.15) * 40);

  const ctaOpacity = progress < CTA_START
    ? 0
    : Math.min(1, (progress - CTA_START) / 0.12);

  return (
    <section ref={sectionRef} className={styles.videoFrame}>
      <div className={styles.stickyWrap}>

        <p className={styles.para}>
          {letters.map((char, i) => {
            const reveal = i / letters.length;
            const active = textProgress > reveal;
            return (
              <span
                key={i}
                className={`${styles.char} ${active ? styles.active : ""}`}
              >
                {char}
              </span>
            );
          })}
        </p>

        <div
          className={styles.videoCard}
          style={{
            opacity: videoOpacity,
            transform: `translateY(${videoTranslateY}px)`,
          }}
        >
          <video ref={videoRef} muted loop playsInline preload="none">
            <source src="/about-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className={styles.ctaWrapper}
          style={{
            opacity: ctaOpacity,
            pointerEvents: ctaOpacity > 0.5 ? "all" : "none",
          }}
        >
          <div className={styles.arrowRight}>
            <ArrowRight size={18} />
          </div>
          <span className={styles.cta}>Start Your Project</span>
        </div>

      </div>
    </section>
  );
}