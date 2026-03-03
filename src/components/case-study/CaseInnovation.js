"use client";
import styles from "./CaseInnovation.module.css";
import Image from "next/image";

export default function CaseInnovation({ data }) {
  if (!data) return null;

  return (
    <section className={styles.wrapper}>
      {data.items.map((item, index) => {
        const isReverse = index % 2 === 1;
        const number = String(index + 1).padStart(3, "0");

        return (
          <div
            key={index}
            className={`${styles.row} ${isReverse ? styles.reverse : ""}`}
          >
            {/* TEXT SIDE */}
            <div className={styles.textCol}>
              <div className={styles.topMeta}>
                <div className={styles.badge}>
                  <span className={styles.badgeNumber}>{number}</span>
                </div>
                <span className={styles.label}>{item.label}</span>
              </div>

              <h2 className={styles.title}>{item.title}</h2>

              <p className={styles.description}>
                {item.description}
              </p>

              {item.tag && (
                <div className={styles.tag}>
                  <span className={styles.tagDot}></span>
                  {item.tag}
                </div>
              )}
            </div>

            {/* IMAGE SIDE */}
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}