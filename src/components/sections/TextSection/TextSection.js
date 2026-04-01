"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TextSection.module.css";
import Link from "next/link";
import Image from "next/image";

const TEXT = `Driven by strategy, delivered through expertise — specializing in web development, digital marketing, branding, and business consulting. We help ambitious businesses improve online visibility, generate high-quality leads, and build scalable strategies that deliver measurable results — all through one integrated team`;

export default function TextSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      const pct = total === 0 ? 0 : scrolled / total;
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letters = TEXT.split("");
  const textProgress = Math.min(1, progress * 1.4);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
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

        <div className={styles.ctaWrap}>
          <Link href="/contact" className={styles.cta}>
            <span className={styles.ctaText}>Get Started</span>

            <div className={styles.avatars}>
              <Image src="/image1.jpg" width={36} height={36} alt="" />
              <Image src="/image2.jpg" width={36} height={36} alt="" />
              <Image src="/image3.jpg" width={36} height={36} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}