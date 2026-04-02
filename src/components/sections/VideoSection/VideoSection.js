"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoSection.module.css";
import { LuVolume2, LuVolumeX } from "react-icons/lu";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // 🎬 Play after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        
        <div className={styles.videoCard}>
          <video ref={videoRef} muted={muted} loop playsInline onPlay={(e) => e.currentTarget.classList.add(styles.visible)}>
            <source src="/website-video.webm" type="video/webm" />
          </video>

          <button
            className={styles.muteBtn}
            onClick={() => setMuted(!muted)}
          >
            {muted ? <LuVolumeX size={18} /> : <LuVolume2 size={18} />}
          </button>
        </div>

        <Link href="/contact#contact-form" className={styles.cta}>
          <div className={styles.arrow}>
            <ArrowRight size={16} />
          </div>
          <span>Start Your Project</span>
        </Link>
      </div>
    </section>
  );
}