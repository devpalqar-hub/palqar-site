"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

// ─── Move to constants/navigation.ts in a real project ───────────────────────
export const SERVICES = [
  {
    category: "Code",
    num: "01",
    items: [
      "Enterprise Management Solutions",
      "Website & CMS Solutions",
      "Custom Application Development",
      "Enterprise eCommerce Platform",
      "SaaS Solutions",
      "Advanced Technology Solutions",
      "Design & Experience",
      "Cybersecurity Solutions",
    ],
  },
  {
    category: "Creativity",
    num: "02",
    items: [
      "Branding & Identity",
      "Design & Collateral",
      "Content & Storytelling",
      "Media Production",
      "Advertising & Communication",
      "Extended Creative Edge",
    ],
  },
  {
    category: "Conversion",
    num: "03",
    items: [
      "Performance Marketing",
      "Influencer Marketing",
      "Video Marketing",
      "360° Marketing",
      "Theatre Commercials",
      "SEO",
      "Marketing Automation",
    ],
  },
  {
    category: "Consulting",
    num: "04",
    items: [
      "Business & Corporate Strategy",
      "Marketing & Brand Strategy",
      "Operational & Organizational Strategy",
      "Innovation & Digital Transformation",
      "Product, Market & Financial Strategy",
    ],
  },
];

// ─── Mega Menu ────────────────────────────────────────────────────────────────
function MegaMenu({ visible, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`${styles.megaMenu} ${visible ? styles.megaMenuVisible : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Services menu"
    >
      <div className={styles.megaInner}>
        {SERVICES.map((col) => (
          <div key={col.category} className={styles.megaCol}>
            <p className={styles.megaCategory}>
              <span className={styles.megaNum}>{col.num}</span>
              {col.category}
            </p>
            <ul className={styles.megaList}>
              {col.items.map((item) => (
                <li key={item}>
                  <Link
                    href={`/services/${item.toLowerCase().replace(/[\s&,°/]+/g, "-")}`}
                    className={styles.megaItem}
                  >
                    <span className={styles.megaItemArrow}>→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
export default function Header() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [visible, setVisible]           = useState(true);
  const [isHovering, setIsHovering]     = useState(false);
  const [megaOpen, setMegaOpen]         = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const scrollTimer = useRef(null);
  const megaTimer   = useRef(null);

  // ── Scroll: hide on idle + progress bar + blur trigger ──────────────────
  useEffect(() => {
    const IDLE_DELAY = 2500;

    const handleScroll = () => {
      const y   = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (y / max) * 100 : 0);
      setScrolled(y > 10);
      setVisible(true);

      clearTimeout(scrollTimer.current);
      if (y < 10) return;
      scrollTimer.current = setTimeout(() => {
        if (!isHovering) setVisible(false);
      }, IDLE_DELAY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer.current);
    };
  }, [isHovering]);

  // ── Lock body scroll when mobile drawer is open ──────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ── Header hover handlers ────────────────────────────────────────────────
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    setVisible(true);
    clearTimeout(scrollTimer.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    scrollTimer.current = setTimeout(() => setVisible(false), 2500);
  }, []);

  // ── Mega menu open/close with debounce ───────────────────────────────────
  const openMega  = useCallback(() => {
    clearTimeout(megaTimer.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 220);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesExpanded(false);
  };

  return (
    <>
      {/* ── Scroll progress bar ──────────────────────────────────────────── */}
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`
          ${styles.wrapper}
          ${!visible   ? styles.hidden  : ""}
          ${scrolled   ? styles.scrolled : ""}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.navbar}>

          {/* Logo */}
          <div className={styles.logoBox}>
            <Image src="/logo.png" alt="logo" fill className={styles.logoImg} />
          </div>

          {/* Desktop nav */}
          <nav className={styles.links} aria-label="Main navigation">
            <Link href="/" className={styles.navLink}>Home</Link>

            {/* Services — hover + keyboard accessible */}
            <div
              className={styles.servicesWrap}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <Link
                href="/services"
                className={`${styles.navLink} ${styles.servicesLink} ${megaOpen ? styles.servicesLinkActive : ""}`}
                onFocus={openMega}
                onBlur={closeMega}
                aria-haspopup="true"
                aria-expanded={megaOpen}
              >
                Services
                <span className={`${styles.chevron} ${megaOpen ? styles.chevronOpen : ""}`}>
                  
                </span>
              </Link>
            </div>

            <Link href="/industries" className={styles.navLink}>Industries</Link>
            <Link href="/about"      className={styles.navLink}>About</Link>
            <Link href="/blog"       className={styles.navLink}>Blog</Link>
            <Link href="/career"     className={styles.navLink}>Career</Link>
          </nav>

          <Link href="/contact" className={styles.contact}>CONTACT US</Link>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── Mega Menu ────────────────────────────────────────────────────── */}
      <MegaMenu
        visible={megaOpen}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      />

      {/* ── Mobile Drawer ────────────────────────────────────────────────── */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.drawerLinks}>
          {["Home", "Industries", "About", "Blog", "Career"].map((label, i) => (
            <li
              key={label}
              className={styles.drawerItem}
              style={{ "--i": i }}
            >
              <Link
                href={`/${label === "Home" ? "" : label.toLowerCase()}`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Services accordion */}
          <li className={styles.drawerItem} style={{ "--i": 1 }}>
            <button
              className={styles.drawerAccordion}
              onClick={() => setServicesExpanded((p) => !p)}
              aria-expanded={servicesExpanded}
            >
              Services
              <span className={`${styles.drawerChevron} ${servicesExpanded ? styles.drawerChevronOpen : ""}`}>
                &#8964;
              </span>
            </button>

            <div className={`${styles.drawerSub} ${servicesExpanded ? styles.drawerSubOpen : ""}`}>
              {SERVICES.map((col) => (
                <div key={col.category} className={styles.drawerSubGroup}>
                  <p className={styles.drawerSubHeading}>
                    <span className={styles.drawerSubNum}>{col.num}</span>
                    {col.category}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item}
                      href={`/services/${item.toLowerCase().replace(/[\s&,°/]+/g, "-")}`}
                      className={styles.drawerSubItem}
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </li>
        </ul>

        <Link href="/contact" className={styles.drawerContact} onClick={closeMenu}>
          CONTACT US
        </Link>
      </div>
    </>
  );
}