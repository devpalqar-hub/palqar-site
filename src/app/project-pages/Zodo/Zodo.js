"use client";

import styles from "./Zodo.module.css";
import Image from "next/image";

export default function Zodo() {
  return (
    <main className={styles.page}>
      
      <section className={styles.hero}>
        <Image
          src="/featured-projects/zodo/laptop.png"
          alt="Zodo"
          fill
          className={styles.heroImage}
        />
        <h1>ZodoAI</h1>
      </section>

      <section className={styles.intro}>
        <p>
          With ZODO AI, managing your health becomes easier than ever.
          Schedule consultations quickly and access expert advice in seconds.
        </p>
      </section>

    </main>
  );
}