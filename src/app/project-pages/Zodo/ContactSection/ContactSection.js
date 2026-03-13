"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>CONTACT US</span>

        <h2>
          Use the form to reach out to our Team regarding any questions,
          concerns, or feedback.
        </h2>

        <p>You can also view our FAQ for quick answers.</p>

        <form className={styles.form}>
          {/* row */}

          <div className={styles.row}>
            <input className={styles.input} type="text" placeholder="First Name" />

            <input className={styles.input} type="text" placeholder="Last Name" />
          </div>

          <input className={styles.input} type="email" placeholder="Email" />

          <textarea className={styles.textarea} placeholder="Message"></textarea>

          <span className={styles.terms}>
            By clicking "Submit" you agree to our Privacy Policy and Terms &
            Conditions.
          </span>

          <button className={styles.button} type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
