"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import LogoLoop from "@/components/ui/LogoLoop";
import TechLogos from "@/components/ui/tech-logos";

export default function Hero() {
  const logos = TechLogos();
  const videoRef = useRef(null);
  const previewRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [previewPlaying, setPreviewPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setTimeout(() => {
      video.play().catch(() => {});
      setLoaded(true);
    }, 400);
  }, []);

  const togglePreview = () => {
    const v = previewRef.current;
    if (!v) return;
    if (previewPlaying) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
    setPreviewPlaying((p) => !p);
  };

  return (
    <section className={styles.hero}>
      {/* LCP poster */}
      <div className={styles.poster} />

      {/* Background video */}
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

      {/* Readability overlay */}
      <div className={styles.overlay} />

      {/* ── Star decoration + video preview ── */}
      <div className={styles.previewAnchor}>
        {/* Crosshair / star lines rendered as SVG */}
        <svg
          className={styles.starLines}
          viewBox="0 0 420 360"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Horizontal line through crosshair origin */}
          <line x1="-50"   y1="167" x2="420" y2="167" />
          {/* Vertical line through crosshair origin */}
          <line x1="97" y1="0"   x2="97" y2="360" />
          {/* Diagonal: top-left → bottom-right */}
          <line x1="0"   y1="43"  x2="194" y2="291" />
        </svg>

        {/* Video card */}
        <div className={styles.previewCard} onClick={togglePreview}>
          <video
            ref={previewRef}
            className={styles.previewVideo}
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/preview-video.mp4" type="video/mp4" />
          </video>

          {/* Poster / fallback */}
          <div className={styles.previewPoster} />

          {/* Play / pause button */}
          <button
            className={`${styles.playBtn} ${previewPlaying ? styles.playing : ""}`}
            aria-label={previewPlaying ? "Pause preview" : "Play preview"}
          >
            {previewPlaying ? (
              /* Pause icon */
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6"  y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              /* Play icon */
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72a1 1 0 001.5.87l11-6.86a1 1 0 000-1.74l-11-6.86A1 1 0 008 5.14z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
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

        <div className={styles.ctaWrap}>
          <button className={styles.cta}>
            <span className={styles.ctaText}>LET&apos;S TALK</span>
            <div className={styles.avatars}>
              <img src="/image1.jpg" alt="Team member 1" />
              <img src="/image2.jpg" alt="Team member 2" />
              <img src="/image3.jpg" alt="Team member 3" />
            </div>
          </button>
        </div>

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