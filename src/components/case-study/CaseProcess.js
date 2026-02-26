"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./CaseProcess.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import gsap from "gsap";

export default function CaseProcess({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    Object.values(contentRefs.current).forEach((el) => {
      if (el) gsap.set(el, { height: 0, opacity: 0, y: -10 });
    });
  }, []);

  const handleToggle = (index) => {
    const el = contentRefs.current[index];
    if (!el) return;

    if (activeIndex === index) {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.35,
        ease: "power2.inOut",
      });
      setActiveIndex(null);
    } else {
      if (activeIndex !== null && contentRefs.current[activeIndex]) {
        gsap.to(contentRefs.current[activeIndex], {
          height: 0,
          opacity: 0,
          y: -10,
          duration: 0.28,
          ease: "power2.inOut",
        });
      }

      gsap.set(el, { height: "auto", opacity: 1, y: 0 });
      gsap.from(el, {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.45,
        ease: "power3.out",
      });

      setActiveIndex(index);
    }
  };

  if (!data) return null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {/* LEFT STATIC INTRO */}
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <span className={styles.dot}></span>
            <span className={styles.label}>{data.label}</span>
          </div>

          <h2 className={styles.title}>{data.heading}</h2>
          <p className={styles.description}>{data.description}</p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className={styles.right}>
          {data.steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`${styles.item} ${isActive ? styles.active : ""}`}
                onClick={() => handleToggle(index)}
              >
                <div className={styles.itemHeader}>
                  <div className={styles.itemLeft}>
                    <span className={styles.number}>{number}</span>
                    <span className={styles.itemTitle}>{step.title}</span>
                  </div>

                  <div className={styles.meta}>
                    <span>{step.duration}</span>
                    <span className={`${styles.arrow} ${isActive ? styles.arrowActive : ""}`}>
                      <LuArrowUpRight />
                    </span>
                  </div>
                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={styles.content}
                >
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}