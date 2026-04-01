"use client";

import styles from "./DownloadCTASection.module.css";
import { Apple, Play } from "lucide-react";

export default function DownloadCTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.left}>
          <span>BOOK HOSPITAL APPOINTMENTS IN 2 MINUTES</span>

          <h2>
            Download Zodo <br /> AI Now
          </h2>

          <div className={styles.buttons}>
            <button>
              <Apple size={18} /> App Store
            </button>

            <button>
              <Play size={18} /> Google Play
            </button>
          </div>
        </div>

        {/* QR */}

        <div className={styles.qr}>
          <div className={styles.qrInner}>
            <span>QR</span>
            <p>SCAN HERE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
