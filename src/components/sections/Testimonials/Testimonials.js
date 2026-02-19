"use client";
import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import styles from './Testimonials.module.css';

const testimonialData = [
  {
    company: "Keyword Qatar",
    text: "Discover why leading companies choose our solution to drive their success",
    author: "Adam smith",
    role: "CEO OF XC",
    image: "/avatar1.png" 
  },
  {
    company: "Innovation Hub",
    text: "The strategic depth and technical execution were beyond our expectations.",
    author: "Sarah Jenkins",
    role: "Director of Product",
    image: "/avatar2.png"
  },
  {
    company: "Global Tech",
    text: "A truly seamless experience from design to final deployment.",
    author: "Michael Chen",
    role: "CTO",
    image: "/avatar3.png"
  }
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
  return (
    <main className={styles.mainWrapper}>
      {/* 1. Header Section */}
      <div className={styles.headerSection}>
        <h1 className={styles.title}>What Our Clients Say</h1>
      </div>

      {/* 2. Scroll Stack Section */}
      <div className={styles.stackContainer}>
        <ScrollStack 
        useWindowScroll={true} 
        itemDistance={800} // Increase this to 800 or 1000 for full-sized cards
        itemStackDistance={40} // Increased for a cleaner stacked look
        >
          {testimonialData.map((item, index) => (
            <ScrollStackItem key={index}>
              <div className={styles.cardContent}>
                <span className={styles.companyName}>{item.company}</span>
                <p className={styles.quote}>{item.text}</p>
                
                <div className={styles.authorBox}>
                  <img src={item.image} alt={item.author} className={styles.avatar} />
                  <div className={styles.authorMeta}>
                    <h4 className={styles.authorName}>{item.author}</h4>
                    <p className={styles.authorRole}>{item.role}</p>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* 3. Logos Section */}
      {/* 3. Logos Section */}
      <div className={styles.logoSection}>
        <h3 className={styles.logoHeading}>Powering products worldwide</h3>
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={styles.logoImg} 
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}