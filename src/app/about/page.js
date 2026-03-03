"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./About.module.css";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroTitleRef    = useRef(null);
  const heroImageRef    = useRef(null);
  const philosophyRef   = useRef(null);
  const missionRef      = useRef(null);
  const roadmapRef      = useRef(null);
  const teamRef         = useRef(null);
  const storiesRef      = useRef(null);
  const ctaRef          = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      /* ─── Shared ease ─── */
      const ease = "power3.out";

      const heroTl = gsap.timeline({ defaults: { ease, duration: 1 } });

      heroTl
        .from(heroTitleRef.current?.querySelectorAll("span"), {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1.1,
        })
        .from(
          heroImageRef.current,
          { y: 40, opacity: 0, scale: 0.98, duration: 1.2 },
          "-=0.6"
        );

      function fadeUp(target, triggerEl, vars = {}) {
        gsap.from(target, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease,
          immediateRender: false,   
          ...vars,
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }

      const philEl = philosophyRef.current;
      if (philEl) {
        fadeUp(philEl.querySelector(`.${styles.philosophyLabel}`), philEl);
        gsap.from(philEl.querySelector(`.${styles.philosophyHeading}`), {
          y: 56,
          opacity: 0,
          duration: 1.1,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: philEl,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }

      const missEl = missionRef.current;
      if (missEl) {
        fadeUp(missEl.querySelector(`.${styles.missionLabel}`), missEl);
        gsap.from(missEl.querySelector(`.${styles.missionHeading}`), {
          y: 40,
          opacity: 0,
          duration: 1,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: missEl.querySelector(`.${styles.missionHeading}`),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
        gsap.from(missEl.querySelectorAll(`.${styles.missionCard}`), {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease,
          immediateRender: false,   
          scrollTrigger: {
            trigger: missEl.querySelector(`.${styles.missionGrid}`),
            start: "top 85%",     
            toggleActions: "play none none none",
          },
        });
      }

      const roadEl = roadmapRef.current;
      if (roadEl) {
        fadeUp(roadEl.querySelector(`.${styles.roadmapLabel}`), roadEl);

        /* Line draw */
        gsap.from(`.${styles.timeline}::before`, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: roadEl.querySelector(`.${styles.timeline}`),
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        /* Timeline items slide in */
        gsap.from(roadEl.querySelectorAll(`.${styles.timelineItem}`), {
          x: -40,
          opacity: 0,
          duration: 0.85,
          stagger: 0.2,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: roadEl.querySelector(`.${styles.timeline}`),
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });

        /* Markers pop in */
        gsap.from(roadEl.querySelectorAll(`.${styles.timelineMarker}`), {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
          immediateRender: false,
          scrollTrigger: {
            trigger: roadEl.querySelector(`.${styles.timeline}`),
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }

      const teamEl = teamRef.current;
      if (teamEl) {
        gsap.from(
          [
            teamEl.querySelector(`.${styles.teamIntro}`),
            teamEl.querySelector(`.${styles.teamHeading}`),
          ],
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: teamEl,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
        gsap.from(teamEl.querySelectorAll(`.${styles.teamCard}`), {
          y: 60,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: teamEl.querySelector(`.${styles.teamGrid}`),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }

      /* ─────────────────────────────────────────
         6. STORIES
      ───────────────────────────────────────── */
      const storyEl = storiesRef.current;
      if (storyEl) {
        gsap.from(storyEl.querySelector(`.${styles.storiesHeading}`), {
          y: 40,
          opacity: 0,
          duration: 1,
          ease,
          scrollTrigger: {
            trigger: storyEl,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
        gsap.from(storyEl.querySelectorAll(`.${styles.storyCard}`), {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.13,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: storyEl.querySelector(`.${styles.storiesGrid}`),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }

      const ctaEl = ctaRef.current;
      if (ctaEl) {
        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaEl,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        ctaTl
          .from(ctaEl.querySelector(`.${styles.lets}`), {
            y: 60,
            opacity: 0,
            scale: 0.94,
            duration: 1.1,
            ease: "power4.out",
          })
          .from(
            ctaEl.querySelector(`.${styles.buttonWrapper}`),
            { y: 24, opacity: 0, duration: 0.7, ease },
            "-=0.5"
          );
      }
    });

    // Refresh after fonts/images settle so trigger positions are accurate
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div>

      {/* ─── HERO ─── */}
      <section className={styles.aboutHero} aria-label="Hero">
        <div className={styles.container}>

          <h1 className={styles.title} ref={heroTitleRef}>
            <span>We Don't Follow</span>
            <span>We Create Trends</span>
          </h1>

          <div className={styles.heroImageWrapper} ref={heroImageRef}>
            <Image
              src="/about/about-team.jpg"
              alt="The Palqar team gathered in our studio"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1099px"
              className={styles.image}
            />
          </div>

        </div>
      </section>


      {/* ─── PHILOSOPHY ─── */}
      <section
        className={styles.philosophySection}
        aria-labelledby="philosophy-heading"
        ref={philosophyRef}
      >
        <div className={styles.philosophyContainer}>

          <div className={styles.philosophyLabel} aria-hidden="true">
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Philosophy</span>
          </div>

          <h2 id="philosophy-heading" className={styles.philosophyHeading}>
            We don't just take orders. We challenge assumptions,
            unearth insights, and craft strategic roadmaps that align
            with your ultimate business objectives. Logic meets magic.
          </h2>

        </div>
      </section>


      {/* ─── MISSION ─── */}
      <section
        className={styles.missionSection}
        aria-labelledby="mission-heading"
        ref={missionRef}
      >
        <div className={styles.missionContainer}>

          <div className={styles.missionLabel} aria-hidden="true">
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Our Goals</span>
          </div>

          <h2 id="mission-heading" className={styles.missionHeading}>
            THE MISSION
          </h2>

          <div className={styles.missionGrid}>
            <article className={styles.missionCard}>
              <span className={styles.cardNumber} aria-hidden="true">01</span>
              <h3>Defy Ordinary</h3>
              <p>
                We refuse to build what has already been built. Every project is an
                opportunity to push the boundaries of digital design.
              </p>
            </article>

            <article className={styles.missionCard}>
              <span className={styles.cardNumber} aria-hidden="true">02</span>
              <h3>Drive Impact</h3>
              <p>
                Beautiful pixels mean nothing without business results. We engineer
                experiences that convert, engage, and retain.
              </p>
            </article>

            <article className={styles.missionCard}>
              <span className={styles.cardNumber} aria-hidden="true">03</span>
              <h3>Empower Visionaries</h3>
              <p>
                We partner with founders and leaders who have the courage to disrupt
                their industries.
              </p>
            </article>
          </div>

        </div>
      </section>


      {/* ─── ROADMAP ─── */}
      <section
        className={styles.roadmapSection}
        aria-labelledby="roadmap-heading"
        ref={roadmapRef}
      >
        <div className={styles.roadmapContainer}>

          <div className={styles.roadmapLabel} aria-hidden="true">
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Roadmap</span>
          </div>

          <ol className={styles.timeline} aria-label="Company timeline">

            <li className={styles.timelineItem}>
              <div className={styles.timelineMarker} aria-hidden="true"></div>
              <div className={styles.timelineContent}>
                <time className={styles.timelineYear} dateTime="2023">2023</time>
                <h3>The Inception</h3>
                <p>
                  Founded in a small studio with a massive vision to disrupt
                  the digital agency model.
                </p>
              </div>
            </li>

            <li className={styles.timelineItem}>
              <div className={styles.timelineMarker} aria-hidden="true"></div>
              <div className={styles.timelineContent}>
                <time className={styles.timelineYear} dateTime="2024">2024</time>
                <h3>Global Reach</h3>
                <p>
                  Expanded our team across 12 timezones, partnering with
                  Fortune 500s and ambitious startups.
                </p>
              </div>
            </li>

            <li className={styles.timelineItem}>
              <div className={styles.timelineMarker} aria-hidden="true"></div>
              <div className={styles.timelineContent}>
                <time className={styles.timelineYear} dateTime="2025">2025</time>
                <h3>The Innovation Lab</h3>
                <p>
                  Launched our internal R&amp;D division focusing on spatial
                  computing and AI interfaces.
                </p>
              </div>
            </li>

            <li className={styles.timelineItem}>
              <div className={styles.timelineMarker} aria-hidden="true"></div>
              <div className={styles.timelineContent}>
                <time className={styles.timelineYear} dateTime="2026">2026</time>
                <h3>The Future</h3>
                <p>
                  Redefining the standard for digital experiences worldwide.
                  The journey has just begun.
                </p>
              </div>
            </li>

          </ol>
        </div>
      </section>


      {/* ─── TEAM ─── */}
      <section
        className={styles.teamSection}
        aria-labelledby="team-heading"
        ref={teamRef}
      >
        <div className={styles.teamContainer}>

          <span className={styles.teamIntro}>Meet Our</span>
          <h2 id="team-heading" className={styles.teamHeading}>Leadership Team</h2>

          <div className={styles.teamGrid}>

            {[
              { src: "/about/team-1.jpg", name: "Sarah Johnson",   role: "Chief Executive Officer" },
              { src: "/about/team-2.jpg", name: "Michael Chen",    role: "Chief Technology Officer" },
              { src: "/about/team-3.jpg", name: "Emily Rodriguez", role: "Chief Creative Officer" },
              { src: "/about/team-4.jpg", name: "David Park",      role: "Chief Operations Officer" },
            ].map(({ src, name, role }) => (
              <article key={name} className={styles.teamCard}>
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
              </article>
            ))}

          </div>
        </div>
      </section>


      {/* ─── STORIES ─── */}
      <section
        className={styles.storiesSection}
        aria-labelledby="stories-heading"
        ref={storiesRef}
      >
        <div className={styles.storiesContainer}>

          <h2 id="stories-heading" className={styles.storiesHeading}>
            Stories <br /> From Palqar
          </h2>

          <div className={styles.storiesGrid}>

            {[
              { src: "/about/story-1.jpg", alt: "Team celebrating a milestone at the Palqar office", category: "Outings",         title: "Team Celebration" },
              { src: "/about/story-2.jpg", alt: "Corporate team building activity",                   category: "Events",          title: "Team Building" },
              { src: "/about/story-3.jpg", alt: "Office culture celebration",                         category: "Life at Palqar",  title: "Our Culture" },
              { src: "/about/story-4.jpg", alt: "Innovation brainstorming session at Palqar",         category: "Collaboration",   title: "Innovation Sessions" },
            ].map(({ src, alt, category, title }) => (
              <article key={title} className={styles.storyCard}>
                <div className={styles.storyImageWrapper}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.storyImage}
                  />
                </div>
                <span className={styles.storyCategory}>{category}</span>
                <h3 className={styles.storyTitle}>{title}</h3>
              </article>
            ))}

          </div>
        </div>
      </section>


      {/* ─── CTA ─── */}
      <section
        className={styles.initiateProject}
        aria-label="Start a project with Palqar"
        ref={ctaRef}
      >
        <div className={styles.column}>
          <p className={styles.lets}>
            LET&apos;S <span className={styles.talk}>TALK</span>
          </p>
          <div className={styles.buttonWrapper}>
            <button aria-label="Start a project with Palqar">
              START A PROJECT
            </button>
            <div className={styles.arrowRight} aria-hidden="true">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}