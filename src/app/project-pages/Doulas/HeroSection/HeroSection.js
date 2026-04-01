"use client";

import styles from "./HeroSection.module.css";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE */}

        <div className={styles.left}>
          <span className={styles.case}>CASE STUDY 03 <span>•</span> BAMBINI DOULAS</span>

          <div className={styles.logo}>
            <Image
              src="/featured-projects/bambinidoulas/logo.png"
              alt="Bambini Doulas"
              width={70}
              height={70}
            />
          </div>

          <h1 className={styles.titleWhite}>
            RADICAL <br />
            <span className={styles.titleRed}>NURTURING.</span>
          </h1>

          <p>
            A premium digital sanctuary for modern motherhood, combining
            clinical authority with maternal empathy.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>
              Explore Ecosystem <ArrowUpRight size={16} />
            </button>

            <button className={styles.secondary}>View Strategy</button>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className={styles.right}>
          <div className={styles.card}>
            <Image
              src="/featured-projects/bambinidoulas/hero.jpg"
              alt="Bambini preview"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
