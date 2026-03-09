"use client";

import styles from "./BrandIdentitySection.module.css";
import Image from "next/image";

export default function BrandIdentitySection() {

  return (

    <section className={styles.section}>

      <div className={styles.container}>

        {/* HEADER */}

        <div className={styles.header}>

          <div>
            <h2>BRAND IDENTITY</h2>

            <p>
              We established a visual language that communicates reliability,
              freshness, and high-end service. The palette of Deep Blue,
              Vibrant Green, and Professional Grey creates a balanced,
              trustworthy presence.
            </p>
          </div>

          <div className={styles.colors}>
            <div className={styles.colourColumn}>
              <span style={{background:"#17A5C6"}}></span>
              <div className={styles.colorName}>#17A5C6</div>
            </div>
            
            <div className={styles.colourColumn}>
              <span style={{background:"#61B35C"}}></span>
              <div className={styles.colorName}>#61B35C</div>
            </div>

            <div className={styles.colourColumn}>
              <span style={{background:"#808080"}}></span>
              <div className={styles.colorName}>#808080</div>
            </div>
          </div>

        </div>


        {/* TOP GRID */}

        <div className={styles.topGrid}>

          {/* Brand language */}

          <div className={styles.brandCard}>

            <Image
              src="/featured-projects/cleanmaria/branding1.jpg"
              alt="brand language"
              fill
              className={styles.image}
            />

          </div>


          {/* Typography */}

          <div className={styles.typeCard}>

            <p className={styles.small}>CORE TYPOGRAPHY</p>

            <h3>METROPOLIS</h3>

            <p className={styles.sub}>Geometric sans-serif for maximum legibility and modern aesthetic.</p>

            <div className={styles.typeSample}>
              AaBb Cc
            </div>

            <p className={styles.small2}>METROPOLIS REGULAR</p>

          </div>

        </div>


        {/* BIG IMAGE */}

        <div className={styles.largeImage}>

          <Image
            src="/featured-projects/cleanmaria/hero-clean.webp"
            alt="mobile authority"
            fill
            className={styles.image}
          />

        </div>


        {/* BOTTOM GRID */}

        <div className={styles.bottomGrid}>

          <div className={styles.smallCard}>
            <Image
              src="/featured-projects/cleanmaria/branding2.jpg"
              alt="process"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.smallCard}>
            <Image
              src="/featured-projects/cleanmaria/branding3.jpg"
              alt="poster"
              fill
              className={styles.image}
            />
          </div>

        </div>

      </div>

    </section>

  );
}