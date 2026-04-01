"use client";
import styles from "./ExperienceSection.module.css";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>MOBILE ECOSYSTEM</span>

          <h2 className={styles.title}>
            THE <span>EXPERIENCE.</span>
          </h2>

          <p className={styles.subtitle}>
            A comprehensive mobile platform designed to bridge the gap between
            clinical support and maternal comfort.
          </p>
        </div>

        <div className={styles.content}>
          {/* LEFT PHONE */}
          <div className={styles.phone}>
            <Image
              src="/images/doula-login.png"
              alt="Doula login"
              width={260}
              height={520}
            />
            <div className={styles.phoneLabel}>
              <h4>SECURE ACCESS</h4>
              <p>STREAMLINED OTP AUTHENTICATION</p>
            </div>
          </div>

          {/* CENTER PHONE */}
          <div className={styles.phoneMain}>
            <Image
              src="/images/doula-dashboard.png"
              alt="Doula dashboard"
              width={280}
              height={540}
            />

            <div className={styles.phoneLabel}>
              <h4 className={styles.red}>CARE HUB</h4>
              <p>REAL-TIME SCHEDULING & COORDINATION</p>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <h4>FLUID NAVIGATION</h4>
              <p>Intuitive gesture interactions for mothers on the go.</p>
            </div>

            <div className={styles.featureCard}>
              <h4>TRUST SIGNALS</h4>
              <p>Verified doula profiles with integrated rating systems.</p>
            </div>

            <div className={styles.featureCard}>
              <h4>DIRECT CARE</h4>
              <p>One-tap virtual consultations and messaging hubs.</p>
            </div>

            <div className={styles.techCard}>
              <span>TECHNICAL INSIGHT</span>
              <p>
                Built with React Native for cross-platform performance and
                medical-grade security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
