"use client";

import styles from "./AboutProductSection.module.css";
import Image from "next/image";

export default function AboutProductSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT TEXT */}

        <div className={styles.text}>
          <span>ABOUT THIS PRODUCT</span>

          <h2>
            Your health, booked <br />
            at <span>lightning speed.</span>
          </h2>

          <p>
            Zodo AI is your smart healthcare partner, designed to simplify
            hospital bookings. With our Fast Tag Booking technology, users can
            find hospitals based on services, ratings, and specialties — and
            book appointments in less than 2 minutes.
          </p>
        </div>

        {/* PHONE */}

        <div className={styles.phoneWrap}>
          <Image
            src="/featured-projects/zodo/about.png"
            alt="Zodo App"
            fill
            className={styles.phone}
          />
        </div>
      </div>
    </section>
  );
}
