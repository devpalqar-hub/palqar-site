"use client";

import styles from "./AutomationFeaturesSection.module.css";

export default function AutomationFeaturesSection() {
  const features = [
    {
      title: "SMART INTAKE",
      desc: "Context-aware lead forms that adapt pricing based on service complexity.",
    },
    {
      title: "ROUTE OPTIMIZATION",
      desc: "AI-driven scheduling that minimizes travel time between service locations.",
    },
    {
      title: "OPS DASHBOARD",
      desc: "Real-time visibility into every crew, every booking, and every dollar.",
    },
    {
      title: "AUTO-REMINDERS",
      desc: "Automated SMS and email sequences that reduced no-shows by 60%.",
    },
    {
      title: "REVIEW REQUEST",
      desc: "Smart triggers for post-service feedback, fueling the SEO engine.",
    },
    {
      title: "RETENTION AI",
      desc: "Predictive booking prompts for customers likely to need a follow-up clean.",
    },
  ];

  const beforeOps = [
    "Manual pricing calculations",
    "Lead leakage in DMs/Email",
    "Inconsistent SMS reminders",
    "Manual crew assignments",
    "Static, one-size website",
  ];

  const afterOps = [
    "Real-time dynamic pricing",
    "Centralized lead pipeline",
    "100% automated sequences",
    "Rule-based auto-assignment",
    "High-conversion CMS engine",
  ];

  return (
    <section className={styles.section}>
      {/* FEATURE GRID */}

      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* BEFORE / AFTER */}

      <div className={styles.compare}>
        {/* BEFORE */}

        <div className={styles.before}>
          <h5>
            <span className={styles.redDot}></span>
            BEFORE OPS
          </h5>

          <ul className={styles.list}>
            {beforeOps.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* AFTER */}

        <div className={styles.after}>
          <h5>
            <span className={styles.blueDot}></span>
            AFTER OPS
          </h5>

          <ul className={styles.list}>
            {afterOps.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
