"use client";

import styles from "./ScopeSection.module.css";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function ScopeSection() {
  const goals = [
    {
      icon: CheckCircle2,
      text: "Make hospital booking easy and fast",
    },
    {
      icon: CheckCircle2,
      text: "Enable users to find hospitals/doctors quickly by location",
    },
    {
      icon: ShieldCheck,
      text: "Ensure trust via verified entities + privacy-first positioning",
    },
  ];

  const scope = [
    {
      number: "1",
      title: "Product Website",
      desc: "Home + Find Doctors + Find Hospitals + Contact pages optimized for fast access.",
    },
    {
      number: "2",
      title: "Conversion System",
      desc: "Trust proof, CTA repetition, reviews carousel, and strategic download sections.",
    },
    {
      number: "3",
      title: "Onboarding Entry Point",
      desc: "'Onboard Hospital Now' section seamlessly integrated with dashboard workflows.",
    },
  ];

  return (
    <section className={styles.section}>
      {/* TOP GOALS */}

      <div className={styles.goals}>
        {goals.map((g, i) => {
          const Icon = g.icon;

          return (
            <div key={i} className={styles.goalCard}>
              <Icon size={22} className={styles.goalIcon} />

              <p>{g.text}</p>
            </div>
          );
        })}
      </div>

      {/* TITLE */}

      <div className={styles.header}>
        <span>SCOPE</span>

        <h2>What We Built</h2>
      </div>

      {/* SCOPE GRID */}

      <div className={styles.scopeGrid}>
        {scope.map((item, i) => (
          <div key={i} className={styles.scopeCard}>
            <div className={styles.number}>{item.number}</div>

            <h4>{item.title}</h4>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
