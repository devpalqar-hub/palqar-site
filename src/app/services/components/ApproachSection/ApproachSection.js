"use client";

import { useEffect, useRef } from "react";
import styles from "./ApproachSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Search, Network, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* Map icon names to components */
const ICONS = {
  Search,
  Network,
  Layers
};

export default function ApproachSection({ cards }) {

  const sectionRef = useRef(null);

  useEffect(() => {
    const cardEls = gsap.utils.toArray(`.${styles.card}`);
    const totalCards = cardEls.length;

    gsap.set(cardEls, (i) => ({
      y: i === 0 ? 0 : "110%",
      zIndex: i + 1
    }));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalCards * 500}`,
        scrub: 1,
        pin: true
      }
    });

    cardEls.forEach((card, i) => {
      if (i === 0) return;

      const prevCard = cardEls[i - 1];

      tl.to(card, { y: "0%", duration: 1 }, i - 1);
      tl.to(prevCard, { scale: 0.94, duration: 1 }, i - 1);
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());

  }, []);

  return (

    <section ref={sectionRef} className={styles.section}>

      <div className={styles.container}>

        {/* LEFT TITLE */}

        <div className={styles.left}>
          <h2>
            Our <br /> Approach
          </h2>
        </div>

        {/* RIGHT CARDS */}

        <div className={styles.right}>

          {cards.map((card, index) => {

            const Icon = ICONS[card.icon];

            return (
              <div key={index} className={styles.card}>

                {Icon && (
                  <div className={styles.icon}>
                    <Icon size={32} />
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