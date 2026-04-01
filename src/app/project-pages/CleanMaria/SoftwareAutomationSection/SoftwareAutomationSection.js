"use client";

import styles from "./SoftwareAutomationSection.module.css";
import {
  Smartphone,
  BarChart3,
  Calendar,
  Layers,
  Users,
  Bell,
  Zap,
} from "lucide-react";

export default function SoftwareAutomationSection() {
  const workflow = [
    { icon: Smartphone, label: "LEAD FORM" },
    { icon: BarChart3, label: "ESTIMATE" },
    { icon: Calendar, label: "BOOKING" },
    { icon: Layers, label: "SYNC" },
    { icon: Users, label: "ASSIGNMENT" },
    { icon: Bell, label: "REMINDERS" },
    { icon: Zap, label: "RETENTION" },
  ];

  return (
    <section className={styles.section}>
      {/* TITLE */}

      <div className={styles.header}>
        <h2>
          SOFTWARE <span>&</span> AUTOMATION
        </h2>

        <p>
          THE DIFFERENTIATOR. WE DIDN'T JUST BUILD A WEBSITE; WE BUILT AN
          OPERATING SYSTEM FOR THE BUSINESS.
        </p>
      </div>

      {/* WORKFLOW */}

      <div className={styles.workflowContainer}>
        <p className={styles.workflowTitle}>OPERATIONAL WORKFLOW</p>

        <div className={styles.workflow}>
          {workflow.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className={styles.step}>
                <div className={styles.iconCircle}>
                  <Icon size={22} />
                </div>

                <span>{step.label}</span>

                {i !== workflow.length - 1 && (
                  <div className={styles.connector}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
