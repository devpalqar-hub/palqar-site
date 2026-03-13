"use client";

import styles from "./AdminInfrastructureSection.module.css";
import { BarChart3, Users, Layers, Wallet, Settings, File } from "lucide-react";

export default function AdminInfrastructureSection() {
  const metrics = [
    { label: "REVENUE", value: "$124,500", color: "#20c4ff" },
    { label: "ACTIVE JOBS", value: "42", color: "#4ade80" },
    { label: "LEAD VELOCITY", value: "8.4%", color: "#22d3ee" },
    { label: "SATISFACTION", value: "4.92", color: "#4ade80" },
  ];

  return (
    <section className={styles.section}>
      {/* HEADER */}

      <div className={styles.header}>
        <div>
          <h3>02 // ADMIN INFRASTRUCTURE</h3>
          <p>OPERATIONAL CONTROL CENTER MOCKUP</p>
        </div>

        <button className={styles.systemActive}>SYSTEM ACTIVE</button>
      </div>

      {/* DASHBOARD */}

      <div className={styles.dashboard}>
        {/* Sidebar */}

        <div className={styles.sidebar}>
          <div className={styles.logo}>● CLEAN_OPS // ADMIN</div>

          <div className={styles.menu}>
            <div className={`${styles.menuItem} ${styles.active}`}>
              <BarChart3 size={16} />
              LIVE DASHBOARD
            </div>

            <div className={styles.menuItem}>
              <Users size={16} />
              ACTIVE CREWS
            </div>

            <div className={styles.menuItem}>
              <Layers size={16} />
              INTAKE PIPELINE
            </div>

            <div className={styles.menuItem}>
              <Wallet size={16} />
              REVENUE CONSOLE
            </div>
          </div>

          <div className={styles.system}>
            <Settings size={16} />
            GLOBAL CONFIG
          </div>
        </div>

        {/* MAIN PANEL */}

        <div className={styles.main}>
          {/* TOP BAR */}

          <div className={styles.topbar}>
            <div>
              <h2>LIVE STATUS</h2>
              <p>OPERATIONAL OVERVIEW: SAN FRANCISCO DISTRICT</p>
            </div>

            <div className={styles.actions}>
              <button className={styles.export}>EXPORT DATA</button>
              <button className={styles.dispatch}>ADD DISPATCH</button>
            </div>
          </div>

          {/* KPI */}

          <div className={styles.metrics}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metric}>
                <p>{m.label}</p>

                <h4 style={{ color: m.color }}>{m.value}</h4>
              </div>
            ))}
          </div>

          {/* Dashboard Placeholder */}

          <div className={styles.chartArea}>
            <File size={48} />
            RESERVED FOR ADMIN PANEL IMPLEMENTATION
          </div>
        </div>
      </div>
    </section>
  );
}
