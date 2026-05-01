"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Loader.module.css";

export default function Loader({ onFinish }) {
  const [fade, setFade] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Dismiss the loader shortly after mount/hydration completes
    const timer = setTimeout(() => {
      setFade(true);

      setTimeout(() => {
        onFinish();
      }, 400); // 400ms fade duration
    }, 100); // Only wait 100ms instead of 2000ms to allow smooth hydration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`${styles.loader} ${fade ? styles.hide : ""}`}>
      <video ref={videoRef} autoPlay muted playsInline preload="none">
        <source src="/loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}