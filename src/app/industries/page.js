"use client";

import { useState } from "react";
import styles from "./Industries.module.css";
import { Globe, Megaphone, Monitor, PenTool } from "lucide-react";
import Link from "next/link";

export default function WorksPage() {
  const [active, setActive] = useState("all");

  return (
    <main className={styles.worksPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>

          <div className={styles.label}>
            <span className={styles.dot}></span>
            <span>Selected Works 2025–2026</span>
          </div>

          <h1 className={styles.heroHeading}>
            <span>WE BUILD</span>
            <span>LEGACIES</span>
          </h1>

          <p className={styles.subtext}>
            From silent disruptors to market leaders. We partner with
            visionaries to define the next era of digital culture.
          </p>

          <div className={styles.filterWrapper}>

            <button
              className={`${styles.filterBtn} ${
                active === "all" ? styles.active : ""
              }`}
              onClick={() => setActive("all")}
            >
              <Globe
                size={16}
                className={`${styles.icon} ${
                  active === "all" ? styles.activeIcon : ""
                }`}
              />
              ALL PROJECTS
            </button>

            <button
              className={`${styles.filterBtn} ${
                active === "branding" ? styles.active : ""
              }`}
              onClick={() => setActive("branding")}
            >
              <PenTool
                size={16}
                className={`${styles.icon} ${
                  active === "branding" ? styles.activeIcon : ""
                }`}
              />
              BRANDING
            </button>

            <button
              className={`${styles.filterBtn} ${
                active === "marketing" ? styles.active : ""
              }`}
              onClick={() => setActive("marketing")}
            >
              <Megaphone
                size={16}
                className={`${styles.icon} ${
                  active === "marketing" ? styles.activeIcon : ""
                }`}
              />
              MARKETING
            </button>

            <button
              className={`${styles.filterBtn} ${
                active === "web" ? styles.active : ""
              }`}
              onClick={() => setActive("web")}
            >
              <Monitor
                size={16}
                className={`${styles.icon} ${
                  active === "web" ? styles.activeIcon : ""
                }`}
              />
              WEB & MOBILE
            </button>

          </div>

        </div>
      </section>

      {/* ================= WORKS GRID ================= */}

    <section className={styles.worksGridSection}>
     <div className={styles.worksGridContainer}>

        <div className={styles.grid}>

        {/* Large Left */}
        <div className={`${styles.card} ${styles.large}`}>
            <div className={styles.imageWrapper}>
            <img src="/image1.jpg" alt="Ethereal Identity" />
            <div className={styles.overlay}>
                <span className={styles.category}>Branding</span>
                <h3>ETHEREAL IDENTITY</h3>
                <p>Nebula Corp</p>
            </div>
            </div>
        </div>

        {/* Large Right */}
        <div className={`${styles.card} ${styles.large}`}>
            <div className={styles.imageWrapper}>
            <img src="/image2.jpg" alt="Cyber City Campaign" />
            <div className={styles.overlay}>
                <span className={styles.category}>Marketing</span>
                <h3>CYBER CITY CAMPAIGN</h3>
            </div>
            </div>
        </div>

        {/* Small */}
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
            <img src="/image3.jpg" alt="Fintech Revolution" />
            <div className={styles.overlay}>
                <span className={styles.category}>Applications</span>
                <h3>FINTECH REVOLUTION</h3>
            </div>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.imageWrapper}>
            <img src="/img4.jpeg" alt="Glass Dimension" />
            <div className={styles.overlay}>
                <span className={styles.category}>Branding</span>
                <h3>GLASS DIMENSION</h3>
            </div>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.imageWrapper}>
            <img src="/img1.jpeg" alt="Immersive Web" />
            <div className={styles.overlay}>
                <span className={styles.category}>Applications</span>
                <h3>IMMERSIVE WEB</h3>
            </div>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.imageWrapper}>
            <img src="/about/story-1.jpg" alt="Noir Packaging" />
            <div className={styles.overlay}>
                <span className={styles.category}>Branding</span>
                <h3>NOIR PACKAGING</h3>
            </div>
            </div>
        </div>

        </div>

     </div>
    </section>

    {/* ================= CTA SECTION ================= */}

    <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>

            <h2 className={styles.ctaHeading}>
            <span className={styles.white}>READY TO MAKE</span>
            <span className={styles.red}>HISTORY?</span>
            </h2>

            <Link className={styles.ctaButton} href="/contact">
            START A PROJECT
            <span className={styles.arrow}>→</span>
            </Link>

        </div>
     </section>
    </main>
  );
}