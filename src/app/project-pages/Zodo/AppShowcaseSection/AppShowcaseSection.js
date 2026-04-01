"use client";

import styles from "./AppShowcaseSection.module.css";
import Image from "next/image";

export default function AppShowcaseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* phones wrapper */}

        <div className={styles.phones}>
          {/* left phone */}

          <div className={`${styles.phone} ${styles.left}`}>
            <Image
              src="/featured-projects/zodo/otp.png"
              alt="OTP screen"
              fill
              className={styles.image}
            />
          </div>

          {/* center phone */}

          <div className={`${styles.phone} ${styles.center}`}>
            <Image
              src="/featured-projects/zodo/splash.png"
              alt="App dashboard"
              fill
              className={styles.image}
            />
          </div>

          {/* right phone */}

          <div className={`${styles.phone} ${styles.right}`}>
            <Image
              src="/featured-projects/zodo/home.png"
              alt="Splash screen"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
