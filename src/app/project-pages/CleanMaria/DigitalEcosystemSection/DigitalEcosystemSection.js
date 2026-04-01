"use client";

import styles from "./DigitalEcosystemSection.module.css";

export default function DigitalEcosystemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Badge */}

        <div className={styles.badge}>
          <span className={styles.dot}></span>
          FULL PRODUCT SUITE
        </div>

        {/* Heading */}

        <h2 className={styles.title}>
          THE DIGITAL
          <br />
          <span>ECOSYSTEM.</span>
        </h2>

        {/* Subtitle */}

        <p className={styles.subtitle}>
          From consumer friction to operational excellence.
          <br />A unified platform for the modern home services economy.
        </p>
      </div>
    </section>
  );
}
