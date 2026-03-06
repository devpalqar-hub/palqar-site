"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./WorkflowSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WorkflowSection({ workflows }) {
  const sectionRef    = useRef(null);
  const containerRef  = useRef(null);

useLayoutEffect(() => {

  const ctx = gsap.context(() => {

    const container = containerRef.current;

    const tween = gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      animation: tween,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      end: () => "+=" + container.scrollWidth,
    });

  }, sectionRef);

  return () => ctx.revert();

}, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* This is the strip that slides left */}
      <div ref={containerRef} className={styles.container}>
        {workflows.map((w, i) => (
          <div key={i} className={styles.panel}>
            <div className={styles.card}>

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
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}