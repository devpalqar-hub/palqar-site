"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./About.module.css";

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  viewport: { once: true, margin: "-10%" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-10%" }
};

const itemReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className={styles.root}>
      {/* ─── HERO ─── */}
      <section className={styles.aboutHero} aria-label="Hero">
        <div className={styles.container}>
          <motion.h1 
            className={styles.title}
            initial="initial"
            animate="whileInView"
            variants={staggerContainer}
          >
            <motion.span variants={itemReveal}>We Don't Follow</motion.span>
            <motion.span variants={itemReveal}>We Create Trends</motion.span>
          </motion.h1>

          <motion.div 
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <Image
              src="/about/about-team.webp"
              alt="The Palqar team gathered in our studio"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1099px"
              className={styles.image}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section
        className={styles.philosophySection}
        aria-labelledby="philosophy-heading"
      >
        <motion.div 
          className={styles.philosophyContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-15%" }}
          variants={staggerContainer}
        >
          <motion.div className={styles.philosophyLabel} aria-hidden="true" variants={itemReveal}>
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Philosophy</span>
          </motion.div>

          <motion.h2 id="philosophy-heading" className={styles.philosophyHeading} variants={itemReveal}>
            We don't just take orders. We challenge assumptions, unearth
            insights, and craft strategic roadmaps that align with your ultimate
            business objectives. Logic meets magic.
          </motion.h2>
        </motion.div>
      </section>

      {/* ─── MISSION ─── */}
      <section
        className={styles.missionSection}
        aria-labelledby="mission-heading"
      >
        <div className={styles.missionContainer}>
          <motion.div 
            className={styles.missionLabel} 
            aria-hidden="true"
            {...fadeUp}
          >
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Our Goals</span>
          </motion.div>

          <motion.h2 
            id="mission-heading" 
            className={styles.missionHeading}
            {...fadeUp}
          >
            THE MISSION
          </motion.h2>

          <motion.div 
            className={styles.missionGrid}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainer}
          >
            {[
              { num: "01", title: "Defy Ordinary", text: "We refuse to build what has already been built. Every project is an opportunity to push the boundaries of digital design." },
              { num: "02", title: "Drive Impact", text: "Beautiful pixels mean nothing without business results. We engineer experiences that convert, engage, and retain." },
              { num: "03", title: "Empower Visionaries", text: "We partner with founders and leaders who have the courage to disrupt their industries." }
            ].map((card, i) => (
              <motion.article 
                key={i} 
                className={styles.missionCard}
                variants={itemReveal}
              >
                <span className={styles.cardNumber} aria-hidden="true">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ROADMAP ─── */}
      <section
        className={styles.roadmapSection}
        aria-labelledby="roadmap-heading"
      >
        <div className={styles.roadmapContainer}>
          <motion.div 
            className={styles.roadmapLabel} 
            aria-hidden="true"
            {...fadeUp}
          >
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Roadmap</span>
          </motion.div>

          <motion.ol 
            className={styles.timeline} 
            aria-label="Company timeline"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainer}
          >
            {[
              { year: "2023", title: "The Inception", text: "Founded in a small studio with a massive vision to disrupt the digital agency model." },
              { year: "2024", title: "Global Reach", text: "Expanded our team across 12 timezones, partnering with Fortune 500s and startups." },
              { year: "2025", title: "The Innovation Lab", text: "Launched our internal R&D division focusing on spatial computing and AI interfaces." },
              { year: "2026", title: "The Future", text: "Redefining the standard for digital experiences worldwide. The journey has just begun." }
            ].map((item, i) => (
              <motion.li key={i} className={styles.timelineItem} variants={itemReveal}>
                <div className={styles.timelineMarker} aria-hidden="true"></div>
                <div className={styles.timelineContent}>
                  <time className={styles.timelineYear} dateTime={item.year}>{item.year}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section
        className={styles.teamSection}
        aria-labelledby="team-heading"
      >
        <div className={styles.teamContainer}>
          <motion.span className={styles.teamIntro} {...fadeUp}>Meet Our</motion.span>
          <motion.h2 id="team-heading" className={styles.teamHeading} {...fadeUp}>
            Leadership Team
          </motion.h2>

          <motion.div 
            className={styles.teamGrid}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainer}
          >
            {[
              { src: "/whysection/murali3.png", name: "Murali", role: "Founder" },
              { src: "/whysection/image1.png", name: "Rishan", role: "Chief Executive Officer" },
              { src: "/whysection/anandhu.png", name: "Anandhu", role: "Team Lead" },
              { src: "/whysection/reema.png", name: "Reema", role: "Associate Team Lead" }
            ].map(({ src, name, role }) => (
              <motion.article key={name} className={styles.teamCard} variants={itemReveal}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={src}
                    alt={`${name} — ${role} at Palqar`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.teamImage}
                  />
                </div>
                <h3>{name}</h3>
                <p>{role}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section
        className={styles.storiesSection}
        aria-labelledby="stories-heading"
      >
        <div className={styles.storiesContainer}>
          <motion.h2 
            id="stories-heading" 
            className={styles.storiesHeading}
            {...fadeUp}
          >
            Stories <br /> From Palqar
          </motion.h2>

          <motion.div 
            className={styles.storiesGrid}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainer}
          >
            {[
              { src: "/about/story-1.jpg", category: "Outings", title: "Team Celebration", slug: "wayanad-trip" },
              { src: "/about/story-2.jpg", category: "Events", title: "Team Building" },
              { src: "/about/story-3.jpg", category: "Life at Palqar", title: "Our Culture" },
              { src: "/about/story-4.jpg", category: "Collaboration", title: "Innovation Sessions" }
            ].map(({ src, category, title, slug }) => (
              <motion.article key={title} className={styles.storyCard} variants={itemReveal}>
                <Link href={slug ? `/about/${slug}` : "#"} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.storyImageWrapper}>
                    <Image
                      src={src}
                      alt={`${title} - ${category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={styles.storyImage}
                    />
                  </div>
                  <span className={styles.storyCategory}>{category}</span>
                  <h3 className={styles.storyTitle}>{title}</h3>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className={styles.initiateProject}
        aria-label="Start a project with Palqar"
      >
        <motion.div 
          className={styles.column}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p className={styles.lets} variants={itemReveal}>
            LET&apos;S <span className={styles.talk}>TALK</span>
          </motion.p>
          <motion.div className={styles.buttonWrapper} variants={itemReveal}>
            <button aria-label="Start a project with Palqar">
              START A PROJECT
            </button>
            <div className={styles.arrowRight} aria-hidden="true">
              <ArrowRight />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
