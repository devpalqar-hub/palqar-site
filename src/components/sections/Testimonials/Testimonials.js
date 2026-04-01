"use client";

import React, { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import styles from "./Testimonials.module.css";

const testimonialData = [
  {
    company: "Keyword Qatar",
    text: "Discover why leading companies choose our solution to drive their success",
    author: "Adam Smith",
    role: "CEO of XC",
    image: "/image1.jpg",
  },
  {
    company: "Innovation Hub",
    text: "The strategic depth and technical execution were beyond our expectations.",
    author: "Sarah Jenkins",
    role: "Director of Product",
    image: "/image2.jpg",
  },
  {
    company: "Global Tech",
    text: "A truly seamless experience from design to final deployment.",
    author: "Michael Chen",
    role: "CTO",
    image: "/image3.jpg",
  },
];

const logos = [
  { src: "/zodo-logo.png",           alt: "ZodoAi" },
  { src: "/suyitr.png",              alt: "Suyitr" },
  { src: "/greychem.png",            alt: "GreyChem" },
  { src: "/urbanstar.png",           alt: "UrbanStar" },
  { src: "/nextpath.png",            alt: "NextPath" },
  { src: "/meptech-logo.png",        alt: "Meptech" },
  { src: "/keyworld.png",            alt: "Key World" },
  { src: "/ilm.png",                 alt: "ILM" },
  { src: "/keyworld-trading.png",    alt: "Key World Trading" },
  { src: "/slogo.png",               alt: "S Logo" },
  { src: "/make-my-event-logo.png",  alt: "Make My Event" },
  { src: "/clean-by-maria-logo.png", alt: "Clean by Maria" },
];

export default function TestimonialsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const h = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <main className={styles.mainWrapper}>

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <section className={styles.headerSection} aria-labelledby="testimonials-heading">
        <h1 id="testimonials-heading" className={styles.title}>
          What Our Clients Say
        </h1>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section aria-label="Client testimonials">

        {/* DESKTOP: scroll-stack animation */}
        {!isMobile && (
          <div className={styles.stackContainer}>
            <ScrollStack useWindowScroll={true} itemDistance={800} itemStackDistance={40}>
              {testimonialData.map((item, i) => (
                <ScrollStackItem key={i}>
                  <TestimonialCard item={item} />
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        )}

        {/* MOBILE: plain stacked cards — zero JS animation */}
        {isMobile && (
          <div className={styles.mobileCards}>
            {testimonialData.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        )}
      </section>

      {/* ── Client logos ──────────────────────────────────────────────────── */}
      <section className={styles.logoSection} aria-label="Our clients">
        <h2 className={styles.logoHeading}>Powering products worldwide</h2>
        <ul className={styles.logoGrid}>
          {logos.map((logo) => (
            <li key={logo.alt} className={styles.logoItem}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logoImg}
                loading="lazy"
                width={130}
                height={60}
              />
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}

// ── Shared card component ──────────────────────────────────────────────────────
function TestimonialCard({ item }) {
  return (
    <article className={styles.cardContent} aria-label={`Testimonial from ${item.author}`}>
      <span className={styles.companyName}>{item.company}</span>
      <blockquote className={styles.quote}>
        <p>{item.text}</p>
      </blockquote>
      <footer className={styles.authorBox}>
        <img
          src={item.image}
          alt={item.author}
          className={styles.avatar}
          width={82}
          height={82}
          loading="lazy"
        />
        <div className={styles.authorMeta}>
          <h3 className={styles.authorName}>{item.author}</h3>
          <p className={styles.authorRole}>{item.role}</p>
        </div>
      </footer>
    </article>
  );
}