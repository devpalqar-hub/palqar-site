"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
  { src: "/zodo-logo.png", alt: "ZodoAi" },
  { src: "/suyitr.png", alt: "Suyitr" },
  { src: "/greychem.png", alt: "GreyChem" },
  { src: "/urbanstar.png", alt: "UrbanStar" },
  { src: "/nextpath.png", alt: "NextPath" },
  { src: "/meptech-logo.png", alt: "Meptech" },
  { src: "/keyworld.png", alt: "Key World" },
  { src: "/ilm.png", alt: "ILM" },
  { src: "/keyworld-trading.png", alt: "Key World Trading" },
  { src: "/slogo.png", alt: "S Logo" },
  { src: "/make-my-event-logo.png", alt: "Make My Event" },
  { src: "/clean-by-maria-logo.png", alt: "Clean by Maria" },
];

export default function TestimonialsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handleChange = (event) => setIsMobile(event.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className={styles.mainWrapper} aria-labelledby="testimonials-heading">
      <div className={styles.headerSection}>
        <h2 id="testimonials-heading" className={styles.title}>
          What Our Clients Say
        </h2>
      </div>

      <section aria-label="Client testimonials">
        {!isMobile && (
          <div className={styles.stackContainer}>
            <ScrollStack
              useWindowScroll={true}
              itemDistance={800}
              itemStackDistance={40}
            >
              {testimonialData.map((item, i) => (
                <ScrollStackItem key={i}>
                  <TestimonialCard item={item} />
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        )}

        {isMobile && (
          <div className={styles.mobileCards}>
            {testimonialData.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        )}
      </section>

      <section className={styles.logoSection} aria-label="Our clients">
        <h2 className={styles.logoHeading}>Powering products worldwide</h2>
        <ul className={styles.logoGrid}>
          {logos.map((logo) => (
            <li key={logo.alt} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className={styles.logoImg}
                loading="lazy"
                width={130}
                height={60}
                sizes="(max-width: 639px) 30vw, (max-width: 1023px) 22vw, 130px"
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <article
      className={styles.cardContent}
      aria-label={`Testimonial from ${item.author}`}
    >
      <span className={styles.companyName}>{item.company}</span>
      <blockquote className={styles.quote}>
        <p>{item.text}</p>
      </blockquote>
      <footer className={styles.authorBox}>
        <Image
          src={item.image}
          alt={item.author}
          className={styles.avatar}
          width={82}
          height={82}
          loading="lazy"
          sizes="82px"
        />
        <div className={styles.authorMeta}>
          <h3 className={styles.authorName}>{item.author}</h3>
          <p className={styles.authorRole}>{item.role}</p>
        </div>
      </footer>
    </article>
  );
}
