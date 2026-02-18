"use client"

import styles from "./Header.module.css"
import Image from "next/image"

export default function Header() {
  return (
    <header className={styles.wrapper}>
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
          <a>Services</a>
          <a>Works</a>
          <a>About</a>
          <a>Blog</a>
        </nav>

        <button className={styles.contact}>CONTACT US</button>

      </div>
    </header>
  )
}