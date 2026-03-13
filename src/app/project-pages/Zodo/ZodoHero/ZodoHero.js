"use client";

import styles from "./ZodoHero.module.css";
import Image from "next/image";
import { Star, Download, Apple, Play } from "lucide-react";

export default function ZodoHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}

        <div className={styles.left}>

          <h1 className={styles.heading}>
            Fast. Simple.
            <br />
            <span className={styles.green}>Care at Your</span>
            <br />
            <span className={styles.blue}>Fingertips.</span>
          </h1>

          <p className={styles.desc}>
            Zodo AI is a smart healthcare partner designed to simplify hospital
            bookings in less than 2 minutes using
            <strong> "Fast Tag Booking".</strong>
          </p>

          {/* Buttons */}

          <div className={styles.buttons}>
            <button className={styles.download}>
              <Download /> Download Now
            </button>

            <button className={styles.iconBtn}>
              <Apple />
            </button>
            <button className={styles.iconBtn}>
              <Play />
            </button>
          </div>

          {/* Trust */}

          <div className={styles.trust}>
            <div className={styles.avatars}>
              <Image
                src="/featured-projects/zodo/u1.jpg"
                width={42}
                height={42}
                alt="testimonial1"
              />
              <Image
                src="/featured-projects/zodo/u2.jpg"
                width={42}
                height={42}
                alt="testimonial2"
              />
              <Image
                src="/featured-projects/zodo/u3.jpg"
                width={42}
                height={42}
                alt="testimonial3"
              />
              <Image
                src="/featured-projects/zodo/u4.jpg"
                width={42}
                height={42}
                alt="testimonial4"
              />
            </div>

            <div className={styles.trustText}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={25} fill="#22c55e" color="#22c55e" />
                ))}
              </div>
              <span> Trusted by 30,000+ users</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className={styles.right}>
          <div className={styles.phoneContainer}>
            <Image
              src="/featured-projects/zodo/mobile2.png"
              width={220}
              height={450}
              alt="zodo screen"
              className={styles.phone}
            />

            <Image
              src="/featured-projects/zodo/mobile1.png"
              width={220}
              height={450}
              alt="zodo screen"
              className={styles.phoneMiddle}
            />

            <Image
              src="/featured-projects/zodo/mobile3.png"
              width={220}
              height={450}
              alt="zodo screen"
              className={styles.phone}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
