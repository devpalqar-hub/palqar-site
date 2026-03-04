"use client";

import { useState } from "react";
import { LuArrowRight, LuArrowDownRight } from "react-icons/lu";
import styles from "./OpenRoles.module.css";

const roles = [
  {
    id: "01",
    title: "Senior Product Designer",
    department: "DESIGN",
    location: "REMOTE",
    description:
      "You will be responsible for defining the future of our product interface. Work closely with PMs and Engineers to ship world-class software.",
    requirements: [
      "5+ years of experience",
      "Figma mastery",
      "Prototyping skills",
    ],
  },
  {
    id: "02",
    title: "Frontend Engineer (React)",
    department: "ENGINEERING",
    location: "NEW YORK",
    description:
      "Build and maintain high-performance web applications using React and modern tooling. You'll work on customer-facing products used by millions of users worldwide.",
    requirements: [
      "4+ years of React experience",
      "TypeScript proficiency",
      "Performance optimization skills",
    ],
  },
  {
    id: "03",
    title: "Backend Architect",
    department: "ENGINEERING",
    location: "LONDON",
    description:
      "Design and own the architecture of our core platform services. You'll make high-impact decisions on scalability, reliability, and developer experience.",
    requirements: [
      "7+ years backend experience",
      "Distributed systems knowledge",
      "Cloud infrastructure expertise",
    ],
  },
  {
    id: "04",
    title: "Growth Marketing Lead",
    department: "MARKETING",
    location: "BERLIN",
    description:
      "Own our growth strategy across paid, organic, and lifecycle channels. You'll build the playbook that takes us from early traction to category leader.",
    requirements: [
      "5+ years in growth marketing",
      "Data-driven mindset",
      "B2B SaaS experience",
    ],
  },
];

export default function OpenRoles() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionLabel}>04 // JOIN US</span>
          <h2 className={styles.sectionTitle}>OPEN ROLES</h2>
        </div>
        <a href="#" className={styles.dropCv}>
          Don't see your role? Drop a CV <LuArrowRight className={styles.cvArrow} />
        </a>
      </div>

      <div className={styles.divider} />

      <ul className={styles.list}>
        {roles.map((role, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={role.id} className={styles.item}>
              <div
                className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
                onClick={() => toggle(i)}
              >
                <span className={styles.number}>{role.id}</span>
                <div className={styles.meta}>
                  <h3 className={styles.roleTitle}>{role.title}</h3>
                  <p className={styles.tags}>
                    {role.department} <span className={styles.dot}>•</span> {role.location}
                  </p>
                </div>
                <button
                  className={`${styles.arrowBtn} ${isOpen ? styles.arrowBtnOpen : ""}`}
                  aria-label="Toggle role"
                >
                  {isOpen ? (
                    <LuArrowDownRight className={styles.arrowIcon} />
                  ) : (
                    <LuArrowRight className={styles.arrowIcon} />
                  )}
                </button>
              </div>

              <div className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ""}`}>
                <div className={styles.dropdownInner}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownLeft}>
                      <div className={styles.descBlock}>
                        <p className={styles.descLabel}>DESCRIPTION</p>
                        <p className={styles.descText}>{role.description}</p>
                        <ul className={styles.reqList}>
                          {role.requirements.map((r) => (
                            <li key={r} className={styles.reqItem}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={styles.applyRow}>
                      <button className={styles.applyBtn}>APPLY NOW</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.divider} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
