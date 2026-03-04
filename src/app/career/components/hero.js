"use client";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Lighting Layers */}
      <div className={styles.glowContainer}>
        <div className={styles.purpleGlow}></div>
        <div className={styles.redGlow}></div>
      </div>
      
      {/* Dark Top Overlay from design specs */}
      <div className={styles.topOverlay}></div>

      <div className={styles.container}>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>WE ARE HIRING</span>
        </div>

        <h1 className={styles.mainTitle}>
          DEFY <br />
          <span className={styles.gradientText}>THE NORM</span>
        </h1>

        <p className={styles.description}>
          We are a collective of rebels, thinkers, and makers shaping the digital
          landscape of tomorrow.
        </p>

        <div className={styles.scrollContainer}>
          <span className={styles.scrollText}>SCROLL</span>
          <div className={styles.chevron}></div>
        </div>
      </div>
    </section>
  );
}