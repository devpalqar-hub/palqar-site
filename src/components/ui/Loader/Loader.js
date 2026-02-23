"use client";

import { useState } from "react";
import styles from "./Loader.module.css";

export default function Loader({ onFinish }) {
  const [fade, setFade] = useState(false);

  const handleVideoEnd = () => {
    setFade(true);

    setTimeout(() => {
      onFinish();
    }, 600); // match CSS fade duration
  };

  return (
    <div className={`${styles.loader} ${fade ? styles.hide : ""}`}>
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src="/loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}