"use client";

import { useEffect, useRef } from "react";
import styles from "./WorkflowSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WorkflowSection({ workflows }) {

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {

    const panels = gsap.utils.toArray(`.${styles.panel}`);

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth
      }
    });

  }, []);

  return (

    <section ref={sectionRef} className={styles.section}>

      <div ref={containerRef} className={styles.container}>

        {workflows.map((w, i) => (

          <div key={i} className={styles.panel}>

            <div className={styles.imageWrap}>
              <Image
                src={w.image}
                alt={w.title}
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.content}>

              <h2>{w.title}</h2>

              <p>{w.desc}</p>

              <button className={styles.cta}>
                Tell us about your needs
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}