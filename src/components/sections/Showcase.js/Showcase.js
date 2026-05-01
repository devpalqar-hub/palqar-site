"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import styles from "./Showcase.module.css";
import { ArrowRight } from "lucide-react";

export default function Showcase() {
  const container = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1546664619-59fa16307fcb?w=600&q=80",
    "https://images.unsplash.com/photo-1642164734745-8f0be579d917?w=600&q=80",
    "https://images.unsplash.com/photo-1591535769142-60e951663676?w=600&q=80",
    "https://images.pexels.com/photos/29304327/pexels-photo-29304327.jpeg?auto=compress&w=600",
    "https://images.unsplash.com/photo-1546664619-59fa16307fcb?w=600&q=80",
    "https://images.unsplash.com/photo-1642164734745-8f0be579d917?w=600&q=80",
    "https://images.unsplash.com/photo-1591535769142-60e951663676?w=600&q=80",
    "https://images.pexels.com/photos/29304327/pexels-photo-29304327.jpeg?auto=compress&w=600",
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray(`.${styles.card}`);
      const total = cards.length;

      const proxy = { value: 0 };
      const target = { value: 0 };
      let raf;

      const lerp = (a, b, t) => a + (b - a) * t;

      /*
       * SLOT TABLE
       * Defines the exact position for each "slot" in the fan.
       * n = normalized distance from center (0 = center, 0.5 = furthest / back)
       * Right side slots; left side is mirrored automatically.
       *
       * Tweak these values to perfectly match your Figma:
       *   x       → horizontal pixel offset from center
       *   scale   → card scale (1 = full size)
       *   rotateY → perspective rotation in degrees (negative = facing left/inward)
       *   y       → vertical drop in px (cards dip slightly as they fan out)
       *   opacity → 0 at back, 1 at front
       */
      const SLOTS = [
        { n: 0.0, x: 0, scale: 1.0, rotateY: 0, y: 0, opacity: 1.0 },
        { n: 0.125, x: 295, scale: 0.82, rotateY: -32, y: 8, opacity: 1.0 },
        { n: 0.25, x: 530, scale: 0.66, rotateY: -56, y: 22, opacity: 1.0 },
        { n: 0.375, x: 700, scale: 0.53, rotateY: -68, y: 40, opacity: 0.75 },
        { n: 0.5, x: 820, scale: 0.42, rotateY: -75, y: 58, opacity: 0.0 }, // hidden (back)
      ];

      /*
       * Given a normalized position n ∈ [0, 0.5], interpolate between
       * the two nearest slots in SLOTS[] and return blended values.
       */
      const interpolateSlot = (n) => {
        for (let i = 0; i < SLOTS.length - 1; i++) {
          const a = SLOTS[i];
          const b = SLOTS[i + 1];
          if (n >= a.n && n <= b.n) {
            const t = (n - a.n) / (b.n - a.n);
            return {
              x: lerp(a.x, b.x, t),
              scale: lerp(a.scale, b.scale, t),
              rotateY: lerp(a.rotateY, b.rotateY, t),
              y: lerp(a.y, b.y, t),
              opacity: lerp(a.opacity, b.opacity, t),
            };
          }
        }
        return SLOTS[SLOTS.length - 1];
      };

      const updateLayout = () => {
        cards.forEach((card, i) => {
          // Phase: each card occupies an equal slice of [0, 1)
          let p = (i / total + proxy.value) % 1;
          if (p < 0) p += 1;

          // Convert p ∈ [0,1) to signed normalized ∈ (-0.5, 0.5]
          // so 0 = center, ±0.5 = back of ring
          const signed = p <= 0.5 ? p : p - 1; // range: (-0.5, 0.5]
          const absN = Math.abs(signed);
          const side = Math.sign(signed); // +1 = right of center, -1 = left

          const slot = interpolateSlot(Math.min(absN, 0.5));

          // Mirror x and rotateY for left-side cards
          const xFinal = slot.x * side;
          const rotateYFinal = slot.rotateY * -side; // inward-facing

          // z-index: center card on top, edge cards behind
          const zIndex = Math.round((1 - absN) * 100);

          gsap.set(card, {
            x: xFinal,
            y: slot.y,
            scale: slot.scale,
            rotateY: rotateYFinal,
            zIndex,
            opacity: slot.opacity,
            transformPerspective: 1400,
            transformOrigin: "center center",
            force3D: true,
          });
        });
      };

      // Smooth lerp loop
      const animate = () => {
        proxy.value = lerp(proxy.value, target.value, 0.06);
        updateLayout();
        raf = requestAnimationFrame(animate);
      };
      animate();

      // Continuous slow autoplay
      const autoPlay = gsap.to(target, {
        value: "-=1",
        duration: 32,
        repeat: -1,
        ease: "none",
      });

      // Scroll velocity nudge
      const velocityTrigger = ScrollTrigger.create({
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          target.value += self.getVelocity() * 0.000004;
        },
      });

      // Hover: pause only when hovering a card
      const pause = () => autoPlay.pause();
      const play = () => autoPlay.play();
      cards.forEach((card) => {
        card.addEventListener("mouseenter", pause);
        card.addEventListener("mouseleave", play);
      });

      return () => {
        cancelAnimationFrame(raf);
        autoPlay.kill();
        velocityTrigger.kill();
        cards.forEach((card) => {
          card.removeEventListener("mouseenter", pause);
          card.removeEventListener("mouseleave", play);
        });
      };
    },
    { scope: container },
  );

  return (
    <section ref={container} className={styles.showcase}>
      <div className={styles.header}>
        <h1>Let's Build What's Next</h1>
        <p>
          Whether you're launching a new idea or scaling an existing product, we
          design and develop solutions that move your business forward —
          strategically, creatively, and efficiently.
        </p>
        <div
          className={styles.ctaWrapper}
          // style={{
          //   opacity: ctaOpacity,
          //   pointerEvents: ctaOpacity > 0.5 ? "all" : "none",
          // }}
        >
          <div className={styles.arrowRight}>
            <ArrowRight size={18} />
          </div>
          <span className={styles.cta}>Start Your Project</span>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderRow}>
          {images.map((src, i) => (
            <div key={i} className={styles.card}>
              <Image
                src={src}
                alt={`Palqar featured digital product or branding project ${i + 1}`}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 900px) 200px, 280px"
                style={{ objectFit: "cover" }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
