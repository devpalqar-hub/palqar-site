"use client";

import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>

      {/* Decorations */}

      <div className={styles.circle}></div>
      <div className={styles.star}></div>

      <div className={styles.container}>

        {/* Title */}

        <h2 className={styles.title}>READY TO SCALE?</h2>

        <p className={styles.subtitle}>
          WANT A BRAND THAT FEELS EFFORTLESS—
          AND A SYSTEM THAT RUNS ITSELF?
          LET'S BUILD YOUR DIGITAL VOID.
        </p>


        {/* Form */}

        <form className={styles.form}>

          <div className={styles.row}>

            <div className={styles.field}>
              <label className={styles.label}>FULL NAME</label>
              <input placeholder="John Doe" className={styles.input} />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>EMAIL</label>
              <input placeholder="john@example.com" className={styles.input} />
            </div>

          </div>

          <div className={styles.field}>
            <label className={styles.label}>YOUR VISION</label>
            <textarea placeholder="Tell us about your project..." className={styles.textarea} />
          </div>

          <button className={styles.button}>
            INITIATE STRATEGY CALL
          </button>

        </form>


        {/* Bottom CTA */}

        <div className={styles.demo}>
          <span>NEXT PHASE</span>
          <a>BOOK A DEMO ↗</a>
        </div>

      </div>

    </section>
  );
}