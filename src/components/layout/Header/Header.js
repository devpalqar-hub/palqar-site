"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    category: "Code",
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
    items: [
      "Business & Corporate Strategy",
      "Marketing & Brand Strategy",
      "Operational & Organizational Strategy",
      "Innovation & Digital Transformation",
      "Product, Market & Financial Strategy",
    ],
  },
];

function MegaMenu({ visible, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`${styles.megaMenu} ${visible ? styles.megaMenuVisible : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.megaInner}>
        {SERVICES.map((col) => (
          <div key={col.category} className={styles.megaCol}>
            <p className={styles.megaCategory}>{col.category}</p>
            <ul className={styles.megaList}>
              {col.items.map((item) => (
                <li key={item}>
                  <Link
                    href={`/services/${item.toLowerCase().replace(/[\s&,°/]+/g, "-")}`}
                    className={styles.megaItem}
                  >
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

export default function Header() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [visible, setVisible]         = useState(true);
  const [isHovering, setIsHovering]   = useState(false);
  const [megaOpen, setMegaOpen]       = useState(false);

  const scrollTimer  = useRef(null);
  const megaTimer    = useRef(null);

  /* ── Hide on scroll idle ── */
  useEffect(() => {
    const IDLE_DELAY = 1800;

    const handleScroll = () => {
      setVisible(true);
      clearTimeout(scrollTimer.current);
      if (window.scrollY < 10) return;
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setVisible(true);
    clearTimeout(scrollTimer.current);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    scrollTimer.current = setTimeout(() => setVisible(false), 1800);
  };

  const openMega  = () => { clearTimeout(megaTimer.current); setMegaOpen(true);  };
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 120); };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`${styles.wrapper} ${!visible ? styles.hidden : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.navbar}>

          {/* Logo */}
          <div className={styles.logoBox}>
            <Image src="/logo.png" alt="logo" fill className={styles.logoImg} />
          </div>

          {/* Desktop nav */}
          <nav className={styles.links}>
            <Link href="/">Home</Link>

            {/* Services with mega menu */}
            <div
              className={styles.servicesWrap}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <Link
                href="/services"
                className={`${styles.servicesLink} ${megaOpen ? styles.servicesLinkActive : ""}`}
              >
                Services
              </Link>
            </div>

            <Link href="/works">Industries</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/career">Career</Link>
          </nav>

          <Link href="/contact" className={styles.contact}>CONTACT US</Link>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <MegaMenu
        visible={megaOpen}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      />

      {/* ── Mobile drawer ── */}
      <div className={`${styles.drawer} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.drawerLinks}>
          <li><Link href="/"         onClick={closeMenu}>Home</Link></li>
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/works"    onClick={closeMenu}>Industries</Link></li>
          <li><Link href="/about"    onClick={closeMenu}>About</Link></li>
          <li><Link href="/blog"     onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/career"   onClick={closeMenu}>Career</Link></li>
        </ul>
        <Link href="/contact" className={styles.drawerContact} onClick={closeMenu}>
          CONTACT US
        </Link>
      </div>
    </>
  );
}