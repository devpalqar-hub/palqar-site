"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./ApproachSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Network, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ICONS = { Search, Network, Layers };

export default function ApproachSection({ cards }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const cardsEl = gsap.utils.toArray(`.${styles.card}`);
      const total = cardsEl.length;

      gsap.set(cardsEl, (i) => ({
        yPercent: i === 0 ? 0 : 120,
        zIndex: i + 1
      }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 500}`,
          scrub: true,
          pin: true,
          anticipatePin: 1
        }
      });

      cardsEl.forEach((card, i) => {
        if (i === 0) return;

        const prev = cardsEl[i - 1];

        tl.to(card, { yPercent: 0, duration: 1 });

        tl.to(prev, { scale: 0.9, opacity: 0.7 }, "<");
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>

        <div className={styles.left}>
          <h2>
            Our <br /> Approach
          </h2>
        </div>

        <div className={styles.right}>
          {cards.map((card, index) => {
            const Icon = ICONS[card.icon];

            return (
              <div key={index} className={styles.card}>
                {Icon && (
                  <div className={styles.icon}>
                    <Icon size={30} />
                  </div>
                )}

                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}