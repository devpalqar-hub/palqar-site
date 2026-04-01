"use client";

import styles from "./PillarsSection.module.css";
import { Layers, Globe, Zap } from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      icon: Layers,
      title: "BRANDING",
      outcomes: [
        "New Visual Language",
        "Custom Iconography",
        "Premium Tone of Voice",
      ],
      timeline: "4 Weeks",
      transform: "From 'Local Cleaner' to 'Premium Service Partner'",
    },
    {
      icon: Globe,
      title: "MARKETING",
      outcomes: [
        "SEO Service Pages",
        "Paid Social Ads",
        "Email Content System",
      ],
      timeline: "Ongoing",
      transform: "3.5x increase in qualified lead volume",
    },
    {
      icon: Zap,
      title: "AUTOMATION",
      outcomes: ["Custom CRM Layer", "SMS Notifications", "Route Optimization"],
      timeline: "12 Weeks",
      transform: "Reduced admin overhead by 85%",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}

        <div className={styles.header}>
          <h2>THREE PILLARS</h2>
          <div className={styles.line}></div>
        </div>

        {/* CARDS */}

        <div className={styles.grid}>
          {pillars.map((p, i) => {
            const Icon = p.icon;

            return (
              <div key={i} className={styles.card}>
                <Icon size={28} className={styles.icon} />

                <h3>{p.title}</h3>

                <p className={styles.key}>KEY OUTCOMES</p>

                <ul className={styles.list}>
                  {p.outcomes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className={styles.divider}></div>

                <div className={styles.bottom}>
                  <div>
                    <p className={styles.small}>TIMELINE</p>
                    <span>{p.timeline}</span>
                  </div>

                  <div>
                    <p className={styles.small}>TRANSFORMATION</p>
                    <span className={styles.highlight}>{p.transform}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
