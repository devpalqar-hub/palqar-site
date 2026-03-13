"use client";

import styles from "./ZodoFeaturesSection.module.css";
import { Zap, Target, Eye, ShieldCheck, Lock } from "lucide-react";

export default function ZodoFeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Fast Tag Booking",
      desc: "Find the best hospitals instantly with Fast tags. Select, and book appointments effortlessly.",
    },
    {
      icon: Target,
      title: "Optimized for Conversions",
      desc: "No waiting, no hassle. Complete your hospital appointment booking in under 2 minutes.",
      badge: "2-MINUTE BOOKING",
    },
    {
      icon: Eye,
      title: "Hospital Highlights at a Glance",
      desc: "Get instant access to hospital specialties, facilities, ratings, and more all in one view.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Hospitals Only",
      desc: "Every listing is verified to ensure you get authentic information and trusted care.",
    },
  ];

  return (
    <section className={styles.section}>
      {/* Header */}

      <div className={styles.header}>
        <div>
          <span>BUILT IT FOR USERS</span>
          <h2>Key Features</h2>
          <p>Book Hospital Appointments in Just 2 Minutes.</p>
        </div>

        <button className={styles.cta}>Book Appointment Now</button>
      </div>

      {/* Feature Grid */}

      <div className={styles.grid}>
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>
                <Icon size={20} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              {item.badge && <div className={styles.badge}>{item.badge}</div>}
            </div>
          );
        })}
      </div>

      {/* Privacy Banner */}

      <div className={styles.privacyCard}>
        <div className={styles.lockIcon}>
          <Lock size={26} />
        </div>

        <h3>Built with Privacy at the Core.</h3>

        <div className={styles.tags}>
          <span>
            <ShieldCheck size={14} /> Multiple data backup
          </span>

          <span>
            <ShieldCheck size={14} /> Data Protection Checkups
          </span>
        </div>
      </div>
    </section>
  );
}
