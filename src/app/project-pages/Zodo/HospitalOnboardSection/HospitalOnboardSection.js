"use client";

import styles from "./HospitalOnboardSection.module.css";
import Image from "next/image";

export default function HospitalOnboardSection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        {/* LEFT */}

        <div className={styles.text}>
          <span>GET STARTED</span>

          <h2>Onboard Hospital Now</h2>

          <p>
            Launch your SaaS website in minutes. No coding, no hassle—just a
            sleek, conversion-focused design ready to help you grow. Get started
            today and bring your hospital online.
          </p>

          <button>Onboard now →</button>
        </div>

        {/* IMAGE */}

        <div className={styles.imageWrap}>
          <Image
            src="/featured-projects/zodo/admin-dashboard.png"
            alt="dashboard"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
