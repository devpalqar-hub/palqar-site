"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const scrollTimer = useRef(null);

  useEffect(() => {
    const IDLE_DELAY = 1800;

    const handleScroll = () => {
      setVisible(true);
      clearTimeout(scrollTimer.current);

      if (window.scrollY < 10) return;

      scrollTimer.current = setTimeout(() => {
        if (!isHovering) {
          setVisible(false);
        }
      }, IDLE_DELAY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer.current);
    };
  }, [isHovering]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setVisible(true);
    clearTimeout(scrollTimer.current);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    scrollTimer.current = setTimeout(() => {
      setVisible(false);
    }, 1800);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`${styles.wrapper} ${!visible ? styles.hidden : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.navbar}>
          <div className={styles.logoBox}>
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className={styles.logoImg}
            />
          </div>

          <nav className={styles.links}>
            <a href="#services">Services</a>
            <a>Works</a>
            <a>About</a>
            <a>Blog</a>
          </nav>

          <button className={styles.contact}>CONTACT US</button>

          <button
            className={`${styles.hamburger} ${
              menuOpen ? styles.open : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.drawerLinks}>
          <li><a onClick={closeMenu}>Services</a></li>
          <li><a onClick={closeMenu}>Works</a></li>
          <li><a onClick={closeMenu}>About</a></li>
          <li><a onClick={closeMenu}>Blog</a></li>
        </ul>
        <button className={styles.drawerContact} onClick={closeMenu}>
          CONTACT US
        </button>
      </div>
    </>
  );
}