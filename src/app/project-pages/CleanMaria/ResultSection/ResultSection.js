"use client";

import styles from "./ResultsSection.module.css";
import Image from "next/image";

export default function ResultsSection() {
  const stats = [
    { value: "4.9/5", label: "CLIENT RATING" },
    { value: "12K+", label: "TOTAL BOOKINGS" },
    { value: "98%", label: "RETENTION RATE" },
    { value: "3.5X", label: "REVENUE GROWTH" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Stats */}

        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Image */}

        <div className={styles.imageWrap}>
          <Image
            src="/featured-projects/cleanmaria/hero-clean.webp"
            alt="CleanMaria service"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
