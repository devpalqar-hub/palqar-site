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

    const updateLayout = () => {
      
    cards.forEach((card, i) => {
    // 1. Progress and wrapping
    let p = (i / total + proxy.value) % 1;
    if (p < 0) p += 1;
    
    // Normalize: -0.5 (left) to 0 (center) to 0.5 (right)
    const normalized = p - 0.5; 
    const absN = Math.abs(normalized);

    // --- GAP MANAGEMENT ---
    
    // 1. Non-linear X: We use Math.sign(normalized) * (absN^0.8) 
    // This pushes cards out faster as they move away from the center.
    // Increase the 1.8 multiplier if they still touch on large screens.
    const x = Math.sign(normalized) * Math.pow(absN, 1.05) * (window.innerWidth * 1.6);

    // 2. Scale: Center is small (0.7), Edges are large (1.3)
    const scale = 0.7 + (absN * 0.7);

    // 3. Rotation: The "Inward fold" from your screenshot
    const rotationY = normalized * -75;

    // 4. Vertical "U" Arch
    const y = absN * 50;

    // 5. Z-Index: Ensures the "closer" (larger) side cards are technically on top
    // but with enough X distance, they won't actually touch.
    const zIndex = Math.round(absN * 100);

    gsap.set(card, {
      x: x,
      y: y,
      scale: scale,
      rotateY: rotationY,
      zIndex: zIndex,
      // Optional: fade out cards as they reach the extreme edges to prevent "popping"
      opacity: absN > 0.45 ? 1 - (absN - 0.45) * 20 : 1,
    });
  });
};

// Smooth Auto-Play (Leftward motion)
const autoPlay = gsap.to(proxy, {
  value: "-=1", // "-=" makes it move left
  duration: 30,
  repeat: -1,
  ease: "none",
  onUpdate: updateLayout,
});

    // Interaction
    ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        // Boost movement on scroll
        proxy.value += self.getVelocity() * 0.00001; 
        updateLayout();
      }
    });

    // Pause on hover
    container.current.addEventListener("mouseenter", () => autoPlay.pause());
    container.current.addEventListener("mouseleave", () => autoPlay.play());

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