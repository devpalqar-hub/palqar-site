"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TextSection.module.css";
import Link from "next/link";
import Image from "next/image";

const TEXT =
  "Driven by strategy, delivered through expertise, specializing in web development, digital marketing, branding, and business consulting. We help ambitious businesses improve online visibility, generate high-quality leads, and build scalable strategies that deliver measurable results through one integrated team.";

export default function TextSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateLayout = () => setIsMobileLayout(media.matches);
    updateLayout();
    media.addEventListener("change", updateLayout);
    return () => media.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (isMobileLayout) {
      setProgress(1);
      return undefined;
    }

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
  }, [isMobileLayout]);

  const letters = TEXT.split("");
  const textProgress = Math.min(1, progress * 1.4);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        {isMobileLayout ? (
          <p className={styles.para}>{TEXT}</p>
        ) : (
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
        )}

        <div className={styles.ctaWrap}>
          <Link href="/contact#contact-form" className={styles.cta}>
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
