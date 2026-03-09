"use client";

import styles from "./MobileAppSection.module.css";
import Image from "next/image";

const SCREENS = [
  { title: "SPLASH",     img: "/featured-projects/cleanmaria/mobile/splash.png" },
  { title: "DASHBOARD",  img: "/featured-projects/cleanmaria/mobile/dashboard.png" },
  { title: "SCHEDULING", img: "/featured-projects/cleanmaria/mobile/scheduling.png" },
  { title: "MESSENGER",  img: "/featured-projects/cleanmaria/mobile/messages.png" },
  { title: "INVENTORY",  img: "/featured-projects/cleanmaria/mobile/bookings.png" },
  { title: "SECURITY",   img: "/featured-projects/cleanmaria/mobile/profile.png" },
];

export default function MobileAppSection() {
  return (
    <section className={styles.section}>

      {/* ── HEADER ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h3 className={styles.title}>01 // MOBILE APP</h3>
          <p  className={styles.subtitle}>FULL HIGH-FIDELITY INTERFACE SCREENS</p>
        </div>

        {/* pagination dots */}
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={`${styles.dot} ${styles.dotActive}`} />
          <span className={styles.dotThree} />
        </div>
      </div>

      {/* ── PHONES ── */}
      <div className={styles.stage}>

        {/* sliding track — phones overlap, leftmost clipped */}
        <div className={styles.track}>
          {SCREENS.map((screen, i) => (
            <div
              key={i}
              className={styles.phoneWrap}
              style={{ "--i": i } /* used for stagger animation */}
            >
              <div className={styles.phoneFrame}>
                {/* phone chrome notch */}
                <div className={styles.notch} />

                <div className={styles.screen}>
                  <Image
                    src={screen.img}
                    alt={screen.title}
                    fill
                    className={styles.screenImg}
                    sizes="220px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── LABELS ROW ── */}
        <div className={styles.labelsRow}>
          {SCREENS.map((s, i) => (
            <span key={i} className={styles.label}>{s.title}</span>
          ))}
        </div>

      </div>
    </section>
  );
}