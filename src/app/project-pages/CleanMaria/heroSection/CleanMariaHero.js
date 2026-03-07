"use client";

import styles from "./CleanMariaHero.module.css";
import { LuArrowUpRight } from "react-icons/lu";

export default function CleanMariaHero() {
  return (
    <section className={styles.hero}>

      <div className={styles.container}>

        {/* Badge */}
        <div className={styles.badge}>
          ✦ FEATURED CASE STUDY
        </div>

        {/* Heading */}
        <h1 className={styles.title}>
          REBRANDING A <br />
          <span className={styles.highlight}>CLEANING</span> <br />
          EMPIRE
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          From a local cleaning service to a premium powerhouse.
          We built the brand, the tools, and the growth engine.
        </p>

        {/* Tags */}
        <div className={styles.tags}>
          <span>IDENTITY DESIGN</span>
          <span>GROWTH MARKETING</span>
          <span>OPS AUTOMATION</span>
        </div>

        {/* Buttons */}
        <div className={styles.actions}>

          <a className={styles.primary}>
            VIEW LIVE PLATFORM
            <LuArrowUpRight />
          </a>

          <button className={styles.secondary}>
            OUR PROCESS
          </button>

        </div>

      </div>

    </section>
  );
}