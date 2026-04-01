"use client";

import styles from "./BrandingSection.module.css";
import Image from "next/image";

export default function BrandingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}

        <div className={styles.left}>
          <span className={styles.label}>VISUAL IDENTITY</span>

          <h2>BRANDING</h2>

          <div className={styles.analysis}>
            <h4>IDENTITY ANALYSIS</h4>

            <p>
              The Bambini Doulas identity reflects tenderness, warmth, and
              trust. By balancing vibrant coral red with deep, sophisticated
              charcoal, we created a professional yet approachable presence that
              empowers modern families.
            </p>
          </div>

          <div className={styles.colors}>
            <div className={styles.colorPrimary}>CORAL RED</div>

            <div className={styles.colorSecondary}>CHARCOAL</div>
          </div>
        </div>

        {/* RIGHT GRID */}

        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              src="/featured-projects/bambinidoulas/typography.png"
              alt="Typography"
              className={styles.image}
            />
          </div>

          <div className={styles.card}>
            <Image
              src="/bambini/branding/color-theory.jpg"
              alt="Color theory"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.card}>
            <Image
              src="/bambini/branding/application.jpg"
              alt="Brand application"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.typeCard}>
            <span>Aa</span>

            <h3>BOLDENA</h3>

            <p>Primary typeface for modern elegance and strength.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
