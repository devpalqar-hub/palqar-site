"use client";

import styles from "./ReviewsSection.module.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      text: "Zodo AI completely revolutionized our patient intake process. The 'Fast Tag' booking system reduced wait times significantly and our patients love the seamless 2-minute booking flow.",
      name: "Sarah J.",
      role: "Operations Manager, CityCare Hospital",
    },
    {
      text: "The booking flow is incredibly fast and intuitive. Patients find doctors instantly and appointments are scheduled in minutes.",
      name: "David R.",
      role: "Hospital Administrator",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const review = reviews[index];

  return (
    <section className={styles.section}>
      <span className={styles.label}>REVIEWS</span>

      <h2>What Other user says</h2>

      <div className={styles.slider}>
        <button onClick={prev} className={styles.arrow}>
          <ChevronLeft size={18} />
        </button>

        <div className={styles.card}>
          <p>"{review.text}"</p>

          <div className={styles.user}>
            <div>
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>
        </div>

        <button onClick={next} className={styles.arrow}>
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
