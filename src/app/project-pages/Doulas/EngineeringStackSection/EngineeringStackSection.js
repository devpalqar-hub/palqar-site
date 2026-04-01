"use client";

import styles from "./EngineeringStackSection.module.css";

const stack = [
  { category: "MOBILE", name: "REACT NATIVE" },
  { category: "BACKEND", name: "NODE.JS" },
  { category: "DATABASE", name: "SUPABASE" },
  { category: "STORAGE", name: "POSTGRESQL" },
  { category: "PAYMENTS", name: "STRIPE" },
  { category: "MESSAGING", name: "TWILIO" },
];

export default function EngineeringStackSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>TECHNICAL FOUNDATION</span>

          <h2 className={styles.title}>
            ENGINEERING <span>STACK.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {stack.map((item, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.category}>{item.category}</span>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
