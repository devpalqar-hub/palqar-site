"use client"

import styles from "./Header.module.css"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  const scrollTimer = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const IDLE_DELAY = 1800 // ms after scroll stops → fade out

    const handleScroll = () => {
      const currentY = window.scrollY

      // Always show while actively scrolling
      setVisible(true)

      // Clear any existing idle timer
      clearTimeout(scrollTimer.current)

      // If scrolled back to very top, keep visible indefinitely
      if (currentY < 10) {
        lastScrollY.current = currentY
        return
      }

      // Start idle timer — hides after user stops scrolling
      scrollTimer.current = setTimeout(() => {
        setVisible(false)
      }, IDLE_DELAY)

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimer.current)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`${styles.wrapper} ${!visible ? styles.hidden : ""}`}>
        <div className={styles.navbar}>

          {/* Logo */}
          <div className={styles.logoBox}>
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className={styles.logoImg}
            />
          </div>

          {/* Desktop nav */}
          <nav className={styles.links}>
            <a href="#services">Services</a>
            <a>Works</a>
            <a>About</a>
            <a>Blog</a>
          </nav>

          <button className={styles.contact}>CONTACT US</button>

          {/* Hamburger (mobile) */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* Full-screen mobile drawer */}
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
  )
}