"use client";
import Image from "next/image";
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Background */}
      <div className={styles.backgroundWrapper}>
        <Image
        src="/footer-bg.jpg"
        alt="footer background"
        fill
        priority
        className={styles.backgroundImage}
      />

        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>

        {/* Top Section */}
        <div className={styles.topSection}>
          
          {/* Left */}
          <div className={styles.left}>
            <h2 className={styles.logo}>Palqar</h2>
            <p className={styles.tagline}>Powering Possibilities</p>

            <div className={styles.emailBox}>
              <input
                type="email"
                placeholder="Enter Your Email..."
                className={styles.input}
              />
              <button className={styles.button}>
                Contact us
              </button>
            </div>

          </div>

          {/* Template Pages */}
          <div className={styles.templateColumn}>

            <h4 className={styles.columnTitle}>Template Pages</h4>
            <ul className={styles.linkList}>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Social */}
          <div className={styles.socialColumn}>

            <h4 className={styles.columnTitle}>Social</h4>
            <ul className={styles.linkList}>
              <li>Twitter (X)</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Framer</li>
            </ul>
          </div>

          <div className={styles.videoWrapper}>

            {/* Clients Pill */}
            <div className={styles.clientsTag}>
              total Clients <strong>736+</strong>
            </div>

            {/* Video Frame */}
            <div className={styles.videoCard}>
              <div className={styles.videoInner}>
                <div className={styles.playCircle}>
                  ▶
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Big Brand Section */}
        <div className={styles.brandSection}>
          <Image
            src="/LOGO-02.png"
            alt="Palqar Logo"
            width={1400}
            height={1200}
            className={styles.bigLogo}
            priority
          />
        </div>

        {/* Bottom */}
        <div className={styles.bottomBar}>
          <span>© 2026 Palqar</span>
          <div>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
