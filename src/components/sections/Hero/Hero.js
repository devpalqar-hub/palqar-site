"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import LogoLoop from "@/components/ui/LogoLoop";
import TechLogos from "@/components/ui/tech-logos";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const logos = TechLogos();
  const videoRef = useRef(null);
  const previewRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [previewPlaying, setPreviewPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timer = setTimeout(() => {
      video.play().catch(() => {});
    }, 500);

    return () => clearTimeout(timer);
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
      <Image
        src="/hero-poster.png"
        alt="Hero background"
        fill
        priority
        className={styles.poster}
      />

      {/* Background video */}
      <video
        aria-hidden="true"
        ref={videoRef}
        className={`${styles.video} ${loaded ? styles.show : ""}`}
        muted
        loop
        playsInline
        preload="metadata"
      >
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
          <line x1="-50" y1="167" x2="420" y2="167" />
          {/* Vertical line through crosshair origin */}
          <line x1="97" y1="0" x2="97" y2="360" />
          {/* Diagonal: top-left → bottom-right */}
          <line x1="0" y1="43" x2="194" y2="291" />
        </svg>

        {/* Video card */}
        <div className={styles.previewCard} onClick={togglePreview}>
          <video
            ref={previewRef}
            className={styles.previewVideo}
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/preview-video.mp4" type="video/mp4" />
          </video>

          {/* Poster / fallback */}
          <div
            className={`${styles.previewPoster} ${
              previewPlaying ? styles.hidePoster : ""
            }`}
          />

          {/* Play / pause button */}
          <button
            className={`${styles.playBtn} ${previewPlaying ? styles.playing : ""}`}
            aria-label={previewPlaying ? "Pause preview" : "Play preview"}
          >
            {previewPlaying ? (
              /* Pause icon */
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
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
          Built to Grow <br />  Designed to Convert
        </h1>

        <p className={styles.desc}>
          From custom web development and brand identity to performance marketing and business consulting — one integrated team, measurable results.
        </p>

        <div className={styles.ctaWrap}>
          <Link className={styles.cta} href="/contact#contact-form">
            <span className={styles.ctaText}>Get Started</span>
          </Link>
          <Link className={styles.ctatwo} href="/contact#contact-form">
            <span className={styles.ctaText}>Free Audit</span>
          </Link>
        </div>

        {/* <div className={styles.logoStrip}>
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
        </div> */}
      </div>
    </section>
  );
}
