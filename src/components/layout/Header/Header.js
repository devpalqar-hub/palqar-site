"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/works">Works</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
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
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/works" onClick={closeMenu}>Works</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
        </ul>
        <button className={styles.drawerContact} onClick={closeMenu}>
          CONTACT US
        </button>
      </div>
    </>
  );
}