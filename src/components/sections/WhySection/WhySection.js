"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhySection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  const sectionRef = useRef(null);
  const layersRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layers = layersRef.current;
    const text = textRef.current;

    if (!section || !text || layers.length === 0) return;

    // INITIAL STATE
    layers.forEach((layer, i) => {
      gsap.set(layer, {
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 0.9,
        filter: i === 0 ? "blur(0px)" : "blur(12px)",
      });
    });

    gsap.set(text, {
      opacity: 0,
      scale: 0.9,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: 1.2,
        pin: true,
      },
    });

    layers.forEach((layer, i) => {
      // Front layer zooms away
      tl.to(layer, {
        scale: 4,
        opacity: 0,
        filter: "blur(16px)",
        duration: 2,
        ease: "power1.inOut",
      });

      // Next layer fades in + sharpens
      if (layers[i + 1]) {
        tl.to(
          layers[i + 1],
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8" // sync with previous
        );
      }
    });

    // Final text
    tl.to(text, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stage}>

        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => (layersRef.current[i] = el)}
            className={styles.layer}
          >
            <div className={`${styles.card} ${styles.tl}`} />
            <div className={`${styles.card} ${styles.tr}`} />
            <div className={`${styles.card} ${styles.bl}`} />
            <div className={`${styles.card} ${styles.br}`} />
          </div>
        ))}

        <div ref={textRef} className={styles.text}>
          <h3>INDUSTRIES WE SERVE</h3>
          <div className={styles.tags}>
            <span className={styles.tag}>Technology & Software</span>
            <span className={styles.tag}>Education</span>
            <span className={styles.tag}>Finance & Banking</span>
            <span className={styles.tag}>Healthcare</span>
            <span className={styles.tag}>Retail & E-Commerce</span>
          </div>
        </div>

      </div>
    </section>
  );
}
