"use client";

import styles from "./ServiceHero.module.css";
import Image from "next/image";

export default function ServiceHero({ data }) {
  return (
    <section className={styles.hero}>

      {/* Background Image */}
      <div className={styles.bg}>
        <Image
          src={data.image}
          alt="service hero"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {data.title}
        </h1>
      </div>

    </section>
  );
}