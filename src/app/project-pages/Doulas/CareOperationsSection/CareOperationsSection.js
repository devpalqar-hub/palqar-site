"use client";

import styles from "./CareOperationsSection.module.css";
import Image from "next/image";

export default function CareOperationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div>
            <span className={styles.tag}>ADMIN PLATFORM</span>

            <h2 className={styles.title}>
              CARE <span>OPERATIONS.</span>
            </h2>
          </div>

          <p className={styles.description}>
            The command center for coordinating global doula care networks.
          </p>
        </div>

        {/* DASHBOARD SHOWCASE */}
        <div className={styles.dashboardWrapper}>
          <div className={styles.sideImage}>
            <Image
              src="/images/admin-left.png"
              alt="Admin panel left"
              width={420}
              height={380}
            />
          </div>

          <div className={styles.mainImage}>
            <Image
              src="/images/admin-main.png"
              alt="Admin dashboard"
              width={720}
              height={420}
            />
          </div>

          <div className={styles.sideImage}>
            <Image
              src="/images/admin-right.png"
              alt="Admin availability"
              width={420}
              height={380}
            />
          </div>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span>ACTIVE DOULAS</span>
            <h3>124</h3>
          </div>

          <div className={styles.statCard}>
            <span>LIVE BOOKINGS</span>
            <h3>38</h3>
          </div>

          <div className={styles.statCard}>
            <span>AVG RESPONSE</span>
            <h3>4.2m</h3>
          </div>

          <div className={styles.statCard}>
            <span>TRUST SCORE</span>
            <h3>98%</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
