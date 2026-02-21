"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Showcase.module.css";

export default function Showcase() {
  const container = useRef(null);
  // Added more images for a fuller "ring" effect
  const images = [
    "/img1.jpeg", "/img2.jpeg", "/img3.jpeg", "/img4.jpeg",
    "/img1.jpeg", "/img2.jpeg", "/img3.jpeg", "/img4.jpeg",
  ];

  useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray(`.${styles.card}`);
  const total = cards.length;

  const proxy = { value: 0 };
  const target = { value: 0 }; // For smoothing
  let raf;

  const lerp = (start, end, t) => start + (end - start) * t;

  const updateLayout = () => {
    cards.forEach((card, i) => {
      let p = (i / total + proxy.value) % 1;
      if (p < 0) p += 1;

      const normalized = p - 0.5;
      const absN = Math.abs(normalized);

      const x =
        Math.sign(normalized) *
        Math.pow(absN, 1.05) *
        (window.innerWidth * 1.6);

      const scale = 0.7 + absN * 0.7;
      const rotationY = normalized * -75;
      const y = absN * 50;
      const zIndex = Math.round(absN * 100);

      gsap.set(card, {
        x,
        y,
        scale,
        rotateY: rotationY,
        zIndex,
        opacity: absN > 0.45 ? 1 - (absN - 0.45) * 20 : 1,
        transformPerspective: 1000,
        transformOrigin: "center",
        force3D: true,
      });
    });
  };

  // 🔥 Smooth RAF loop
  const animate = () => {
    proxy.value = lerp(proxy.value, target.value, 0.08);
    updateLayout();
    raf = requestAnimationFrame(animate);
  };

  animate();

  // Smooth AutoPlay
  const autoPlay = gsap.to(target, {
    value: "-=1",
    duration: 40, // slower = smoother
    repeat: -1,
    ease: "none",
  });

  // Smooth scroll interaction
  ScrollTrigger.create({
    trigger: container.current,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      target.value += self.getVelocity() * 0.000005; 
    },
  });

  // Hover pause
  const el = container.current;

  const pause = () => autoPlay.pause();
  const play = () => autoPlay.play();

  el.addEventListener("mouseenter", pause);
  el.addEventListener("mouseleave", play);

  return () => {
    cancelAnimationFrame(raf);
    autoPlay.kill();
    ScrollTrigger.getAll().forEach(t => t.kill());
    el.removeEventListener("mouseenter", pause);
    el.removeEventListener("mouseleave", play);
  };
}, { scope: container });

  return (
    <section ref={container} className={styles.showcase}>
      <div className={styles.header}>
        <h1>Let’s Build What’s Next</h1>
        <p>Whether you’re launching a new idea or scaling an existing product, we design and develop solutions that move your business forward — strategically, creatively, and efficiently.</p>
        <button className={styles.cta}>
          <div className={styles.arrow}><span>→</span></div>
          <span className={styles.ctaText}>Start Your Project</span>
        </button>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderRow}>
          {images.map((src, i) => (
            <div key={i} className={styles.card}>
              <img src={src} alt={`Project ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}