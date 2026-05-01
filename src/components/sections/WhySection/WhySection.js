"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhySection.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ───────── IMAGES ───────── */
const IMAGES = [
  "/whysection/murali3.png",
  "/whysection/image1.png",
  "/whysection/anandhu.png",
  "/whysection/reema.png",
  "/whysection/devan.png",
  "/whysection/Fayaz.png",
  "/whysection/sai.png",
  "/whysection/sona.png",
  "/whysection/adheena.png",
  "/whysection/agnes.png",
];

/* ───────── COMPONENT ───────── */
export default function Whyanimate() {
  const sectionRef = useRef(null);
  const animateRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const textRef = useRef(null); // Ref for the text section

  useLayoutEffect(() => {
    const animate = animateRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!animate || cards.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add({
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)"
    }, (context) => {
      let { isMobile } = context.conditions;

      const spreadBase = isMobile ? 40 : 300;
      const spreadRandom = isMobile ? 120 : 400;
      const verticalScatter = isMobile ? 300 : 600;
      const zGap = isMobile ? 800 : 1200;

      // 1. Static Layout: Place cards in a deep 3D corridor
      cards.forEach((card, i) => {
        // Alternating positions to create a nice scattered path
        const side = i % 2 === 0 ? -1 : 1;
        const x = side * (spreadBase + Math.random() * spreadRandom); 
        
        let y = (Math.random() - 0.5) * verticalScatter;
        if (i === 0) {
          y = isMobile ? 80 : 150; // Place murali.png higher up
        }

        const z = -i * zGap; // Deep Z-stack

        gsap.set(card, {
          x,
          y,
          z,
          rotationY: (x / (isMobile ? 300 : 800)) * 20, // Tilt slightly inward
          rotationX: -(y / (isMobile ? 200 : 400)) * 10,
          opacity: 0, // Will be managed by onUpdate
        });
      });

      // Place text at the end of the tunnel
      const textZ = -(cards.length * zGap);
      if (textEl) {
        gsap.set(textEl, {
          z: textZ,
          opacity: 0,
          scale: isMobile ? 0.8 : 1, // Scale down slightly on mobile
        });
      }

      // 2. Camera Move: Animate the container forward through the cards
      const maxZ = cards.length * zGap + (isMobile ? 1000 : 1500); // Go slightly past the text
      
      gsap.to(container, {
        z: maxZ, 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom", 
          scrub: 1, // Smoothness
        },
        onUpdate: function() {
          // The current Z position of the "camera" (the container)
          const cameraZ = gsap.getProperty(container, "z");

          // 3. Update each card's opacity based on its distance to the camera
          cards.forEach((card) => {
            const cardZ = gsap.getProperty(card, "z");
            // Effective Z is how close the card is to the camera (0 is at the camera)
            const effectiveZ = cardZ + cameraZ;

            // Fade in far away, fade out when very close to camera
            let opacity = 0;
            if (effectiveZ > -5000 && effectiveZ < 800) {
              if (effectiveZ > 200) {
                // Fading out as it passes camera (200 to 800)
                opacity = gsap.utils.mapRange(200, 800, 1, 0, effectiveZ);
              } else if (effectiveZ < -3000) {
                // Fading in from deep distance (-5000 to -3000)
                opacity = gsap.utils.mapRange(-5000, -3000, 0, 1, effectiveZ);
              } else {
                // Fully visible in mid-range (-3000 to 200)
                opacity = 1;
              }
            }
            
            gsap.set(card, { opacity });
          });

          // Update text opacity
          if (textEl) {
            const effectiveTextZ = textZ + cameraZ;
            let textOpacity = 0;
            
            // Text fades in earlier and stays visible
            if (effectiveTextZ > -3000 && effectiveTextZ < (isMobile ? 1000 : 1500)) {
               if (effectiveTextZ > 800) {
                 textOpacity = gsap.utils.mapRange(800, (isMobile ? 1000 : 1500), 1, 0, effectiveTextZ);
               } else {
                 textOpacity = gsap.utils.mapRange(-3000, -1000, 0, 1, effectiveTextZ);
               }
            }
            gsap.set(textEl, { opacity: gsap.utils.clamp(0, 1, textOpacity) });
          }
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div ref={animateRef} className={styles.animate}>
        <div className={styles.stage}>
          <div ref={containerRef} className={styles.tunnelContainer}>
            {IMAGES.map((src, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={styles.card}
                style={{
                  width: "min(300px, 60vw)",
                  aspectRatio: "3 / 4",
                }}
              >
                <Image
                  src={src}
                  alt={`Palqar team member ${i + 1} - Web development and digital growth expert`}
                  fill
                  sizes="(max-width: 768px) 60vw, 300px"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay} />
              </div>
            ))}

            {/* INDUSTRIES SECTION AT THE END OF THE TUNNEL */}
            <div ref={textRef} className={styles.text}>
              <h3>INDUSTRIES WE SERVE</h3>

              <div className={styles.tags}>
                <div className={styles.row}>
                  <span className={styles.tag}>Technology & Software</span>
                  <span className={styles.tag}>Education</span>
                  <span className={styles.tag}>Finance & Banking</span>
                </div>

                <div className={styles.row}>
                  <span className={styles.tag}>Healthcare</span>
                  <span className={styles.tag}>Retail & E-Commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
