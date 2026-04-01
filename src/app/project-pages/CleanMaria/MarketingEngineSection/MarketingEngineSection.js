"use client";

import styles from "./MarketingEngineSection.module.css";
import { Globe, BarChart3, Calendar, Star } from "lucide-react";

export default function MarketingEngineSection() {
  const strategies = [
    {
      icon: Globe,
      title: "SEO STRATEGY",
      desc: "Hyper-local service pages with integrated schema for maximum SERP visibility.",
    },
    {
      icon: BarChart3,
      title: "PAID SOCIAL",
      desc: "A creative testing engine that identifies the best performing hooks and visual concepts.",
    },
    {
      icon: Calendar,
      title: "CONTENT CALENDAR",
      desc: "Automated social presence that maintains brand authority without manual effort.",
    },
  ];

  const marketingCards = [
    {
      title: "FRESH START",
      desc: "Your home, redefined. Every corner matters.",
    },
    {
      title: "TIME BACK",
      desc: "Focus on what you love. We'll handle the rest.",
    },
    {
      title: "CLINICAL CLEAN",
      desc: "Hospital grade standards for your private sanctuary.",
    },
    {
      title: "ECO FRIENDLY",
      desc: "Safe for kids, safe for pets, safe for the planet.",
    },
    {
      title: "INSTANT BOOKING",
      desc: "30 seconds to a cleaner home. Zero friction.",
    },
    {
      title: "GUARANTEED",
      desc: "If it's not perfect, we make it right. No questions.",
    },
    {
      title: "PRO TEAM",
      desc: "Vetted, trained, and insured professionals only.",
    },
    {
      title: "SUBSCRIPTION",
      desc: "Set it and forget it. Always clean, always ready.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE */}

        <div className={styles.left}>
          <h2>
            MARKET <br />
            ING ENGINE
          </h2>

          <p className={styles.subtitle}>
            Growth isn't just about traffic; it's about building a predictable
            funnel. We reconstructed the entire customer journey from discovery
            to referral.
          </p>

          <div className={styles.strategyList}>
            {strategies.map((s, i) => {
              const Icon = s.icon;

              return (
                <div key={i} className={styles.strategyItem}>
                  <div className={styles.iconBox}>
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className={styles.right}>
          <p className={styles.kitLabel}>MARKETING KIT CAROUSEL</p>

          <div className={styles.grid}>
            {marketingCards.map((card, i) => (
              <div key={i} className={styles.card}>
                <Star size={26} className={styles.star} />

                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
