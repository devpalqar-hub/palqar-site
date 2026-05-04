"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./serviceTemplate.module.css";

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem} data-open={open}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={styles.faqIcon} aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className={styles.faqAnswer} aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

// ─── Main Template ────────────────────────────────────────────────────────────

export default function ServiceTemplate({ category, service, content }) {
  const { hero, problemSolution, services, process, results, faqs, finalCTA } =
    content;

  return (
    <>
      <main className={styles.root} id="main-content">
        {/* ── 1. Hero ── */}
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroInner}`}>
            <p className={`${styles.eyebrow} reveal visible`}>
              {category.replace(/-/g, " ")} · {service.toUpperCase()}
            </p>
            <h1 className={`${styles.heading} reveal visible reveal-delay-1`}>
              {hero.title}
            </h1>
            <p className={`${styles.subheading} reveal visible reveal-delay-2`}>
              {hero.subtitle}
            </p>
            <Link
              href="/contact"
              className={`${styles.heroCta} reveal visible reveal-delay-3`}
            >
              {hero.cta}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── 2. Problem / Solution ── */}
        <section className={styles.ps} aria-label="Challenges and solutions">
          <div className={styles.container}>
            <div className={`${styles.psHeader} reveal`}>
              <p className={styles.eyebrow}>The Challenge</p>
              <h2 className={styles.heading}>
                {problemSolution.title || (
                  <>
                    Why Businesses in Qatar <em>Struggle</em> with SEO
                  </>
                )}
              </h2>
            </div>
            <div className={`${styles.psGrid} reveal reveal-delay-1`}>
              <div className={styles.psCol}>
                <p className={styles.psColTitle}>Common Problems</p>
                <ul className={styles.psList}>
                  {problemSolution.problems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.psCol}>
                <p className={styles.psColTitle}>Our Solutions</p>
                <ul className={styles.psList}>
                  {problemSolution.solutions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Services ── */}
        <section className={styles.services} aria-label="Our SEO services">
          <div className={styles.container}>
            <div className={styles.servicesHeader}>
              <p className={`${styles.eyebrow} reveal`}>{category.replace(/-/g, " ")}</p>
              <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                {services.title}
              </h2>
              <p className={`${styles.subheading} reveal reveal-delay-2 ${styles.marginTop16}`}>
                {services.subtitle}
              </p>
            </div>
            <div className={`${styles.servicesGrid} reveal reveal-delay-1`}>
              {services.items.map((item, i) => (
                <article className={styles.serviceCard} key={i}>
                  <p className={styles.serviceNum}>0{i + 1}</p>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <p className={styles.serviceDesc}>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Process ── */}
        <section className={styles.process} aria-label="Our process">
          <div className={styles.container}>
            <div className={styles.processHeader}>
              <p className={`${styles.eyebrow} reveal`}>How We Work</p>
              <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                {process.title}
              </h2>
              <p className={`${styles.subheading} reveal reveal-delay-2 ${styles.marginTop16}`}>
                {process.subtitle}
              </p>
            </div>
            <div className={styles.processSteps} role="list">
              {process.steps.map((step, i) => (
                <div
                  className={`${styles.processStep} reveal`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  key={i}
                  role="listitem"
                >
                  <div className={styles.stepDot} aria-hidden="true">
                    0{i + 1}
                  </div>
                  <p className={styles.stepLabel}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Results ── */}
        <section className={styles.results} aria-label="Results and benefits">
          <div className={styles.container}>
            <div className={styles.resultsHeader}>
              <p className={`${styles.eyebrow} reveal`}>What You Get</p>
              <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                {results.title || (
                  <>
                    Measurable Results That <em>Matter</em>
                  </>
                )}
              </h2>
            </div>
            <div className={styles.resultsList} role="list">
              {results.map((item, i) => (
                <div
                  className={`${styles.resultPill} reveal`}
                  style={{ transitionDelay: `${i * 0.07}s` }}
                  key={i}
                  role="listitem"
                >
                  <span className={styles.resultCheck} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ── */}
        <section className={styles.faq} aria-label="Frequently asked questions">
          <div className={styles.container}>
            <div className={styles.faqHeader}>
              <p className={`${styles.eyebrow} reveal`}>FAQ</p>
              <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                {faqs.title || (
                  <>
                    Common Questions About <em>{service.toUpperCase()} in Qatar</em>
                  </>
                )}
              </h2>
            </div>
            <div className={`${styles.faqList} reveal reveal-delay-1`}>
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>

            <p className={styles.faqExplore}>
              Explore more:{" "}
              <Link
                href="/qa/services/digital-marketing/ssm"
                className={styles.faqExploreLink}
              >
                Social Media
              </Link>
              {" · "}
              <Link
                href="/qa/services/digital-marketing/ppc"
                className={styles.faqExploreLink}
              >
                PPC Ads
              </Link>
            </p>
          </div>
        </section>

        {/* ── 7. Final CTA ── */}
        <section className={styles.cta} aria-label="Get started">
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <p
                className={`${styles.eyebrow} reveal`}
                style={{ justifyContent: "center" }}
              >
                {finalCTA.eyebrow || "Free Consultation"}
              </p>
              <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                {finalCTA.title}
              </h2>
              <p className={`${styles.subheading} reveal reveal-delay-2`}>
                {finalCTA.subtitle}
              </p>
              <Link
                href="/contact"
                className={`${styles.ctaLink} reveal reveal-delay-3`}
              >
                {finalCTA.cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Scroll-reveal observer ── */}
      <ScrollReveal />
    </>
  );
}

// Lightweight IntersectionObserver — no library, no bundle impact
function ScrollReveal() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            (function() {
              var els = document.querySelectorAll('.reveal:not(.visible)');
              if (!('IntersectionObserver' in window)) {
                els.forEach(function(el) { el.classList.add('visible'); });
                return;
              }
              var io = new IntersectionObserver(function(entries) {
                entries.forEach(function(e) {
                  if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                  }
                });
              }, { threshold: 0.12 });
              els.forEach(function(el) { io.observe(el); });
            })();
        `,
      }}
    />
  );
}
