"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Loader.module.css";

export default function Loader({ onFinish }) {
  const [fade, setFade] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);

      setTimeout(() => {
        onFinish();
      }, 600);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`${styles.loader} ${fade ? styles.hide : ""}`}>
      <video ref={videoRef} autoPlay muted playsInline>
        <source src="/loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}