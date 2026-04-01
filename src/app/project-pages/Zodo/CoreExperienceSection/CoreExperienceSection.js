"use client";

import styles from "./CoreExperienceSection.module.css";
import { Search, MapPin } from "lucide-react";

export default function CoreExperienceSection() {
  return (
    <section className={styles.section}>
      {/* Header */}

      <div className={styles.header}>
        <span>EASY AND FAST BOOKING</span>
        <h2>Core Experience</h2>
      </div>

      {/* Cards */}

      <div className={styles.grid}>
        {/* Hospital */}

        <div className={styles.card}>
          <h3>Find For Hospital</h3>
          <p className={styles.subtitle}>Search and book instantly</p>

          <div className={styles.searchBox}>
            <div className={styles.input}>
              <MapPin size={16} />
              <span>Location</span>
            </div>

            <button className={styles.hospitalBtn}>
              <Search size={16} /> Search Hospitals
            </button>
          </div>

          <div className={styles.emptyState}>
            <Search size={20} />
            <p>No hospitals found</p>
            <span>
              We couldn't find any hospitals matching your search criteria. Try
              adjusting your location or search terms.
            </span>
          </div>
        </div>

        {/* Doctors */}

        <div className={styles.card}>
          <h3>Find For Doctors</h3>
          <p className={styles.subtitle}>Specialists at your fingertips</p>

          <div className={styles.searchBox}>
            <div className={styles.input}>
              <MapPin size={16} />
              <span>Location</span>
            </div>

            <div className={styles.filters}>
              <span>All</span>
              <span>Near by doctors</span>
              <span>Top rated</span>
            </div>

            <button className={styles.doctorBtn}>
              <Search size={16} /> Search Doctors
            </button>
          </div>

          <div className={styles.emptyState}>
            <Search size={20} />
            <p>No doctors found</p>
            <span>
              We couldn't find any doctors matching your search criteria. Try
              adjusting your location or search terms.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
