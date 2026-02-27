"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, Linkedin, Twitter, Facebook, Link2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BlogPost.module.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Mock blog data — replace with CMS/MDX fetch ─── */
const post = {
  slug:     "future-of-digital-experiences",
  category: "Strategy",
  date:     "24 Feb 2026",
  title:    "Why Strategy? Where Direction Is Born.",
  tagline:  "Strategy is not a plan. It is a posture — the way an organisation chooses to meet the world.",
  author:   "Alex Monroe",
  role:     "Head of Strategy",
  accentColor: "#dc3545",
  heroImage: "/about/team-1.jpg",
  toc: [
    { id: "what-strategy-means",      label: "What Strategy means here" },
    { id: "how-strategy-behaves",     label: "How Strategy is designed to behave" },
    { id: "what-strategy-makes",      label: "What Strategy makes possible" },
    { id: "strategy-and-execution",   label: "How Strategy works with Execution" },
    { id: "what-this-changes",        label: "What this changes in how we operate" },
    { id: "conclusion",               label: "Strategy" },
  ],
  content: [
    {
      id: "what-strategy-means",
      heading: "What Strategy means here",
      subheading: "Clarity, not comfort",
      body: [
        "Strategy at Palqar is not about presenting options. It is about making the hard choice of what to pursue — and what to leave behind.",
        "Real strategy begins with an honest assessment of where you stand, what the market is doing, and where the gap between the two can be exploited. It is not a mood board of ideas. It is a reasoned commitment to a direction.",
        "Every brief that enters our studio starts here. Before a single pixel is placed, before a single line of code is written, the strategic question must be answered: why does this exist, and for whom?",
      ],
    },
    {
      id: "how-strategy-behaves",
      heading: "How Strategy is designed to behave",
      subheading: "Intentional, measurable, grounded",
      body: [
        "Strategy without accountability is just aspiration. We build strategic frameworks that have clear ownership, measurable signals, and explicit assumptions that can be tested.",
        "When a strategy is working, you can see it in the numbers, in the team's confidence, and in the way customers talk about the product. When it is not working, you know exactly which assumption failed.",
        "This is not about being right. It is about being honest quickly so you can adapt before the cost compounds.",
      ],
      pullQuote: "Strategy is the art of making fewer, better decisions — then protecting them.",
      image: "/about/story-2.jpg",
      imageCaption: "Strategic workshops at the Palqar studio, Feb 2026",
    },
    {
      id: "what-strategy-makes",
      heading: "What Strategy makes possible",
      subheading: "Leverage and compounding returns",
      body: [
        "The true return on strategic clarity is not a single campaign or launch. It is the compounding effect of a team that knows exactly why it is doing what it is doing.",
        "Aligned teams move faster. Aligned products resonate deeper. Aligned brands build equity that no single piece of design or copy can manufacture on its own.",
        "We have seen it consistently: the clients who invest in strategic foundation before execution consistently outperform those who jump straight to deliverables. Not by a little. By orders of magnitude.",
      ],
    },
    {
      id: "strategy-and-execution",
      heading: "How Strategy works with Execution",
      subheading: "Two halves of one discipline",
      body: [
        "At Palqar, strategy and execution are not departments. They are phases of the same thinking. The strategist must understand what is buildable. The builder must understand why they are building it.",
        "This cross-contamination of responsibility is intentional. It removes the costly handoff gap where meaning is lost in translation — where a brief that made perfect sense in the boardroom produces a product that confuses the customer.",
        "Our process keeps strategy present throughout: in the design critiques, in the development sprints, in the launch retrospectives. Strategy is not handed off. It is carried.",
      ],
      image: "/about/story-3.jpg",
      imageCaption: "Cross-functional strategy session, Palqar HQ",
    },
    {
      id: "what-this-changes",
      heading: "What this changes in how we operate",
      subheading: "Ownership over output",
      body: [
        "When everyone in a studio understands the strategic intent behind their work, accountability shifts. Designers stop asking 'does this look good?' and start asking 'does this serve the objective?'",
        "Developers stop optimising for code elegance alone and start optimising for the outcome the strategy demands. This is a subtle but profound shift in culture.",
        "It also changes how we talk to clients. We are not order-takers. We are partners in a shared outcome. That changes the nature of every conversation.",
      ],
    },
    {
      id: "conclusion",
      heading: "Strategy",
      subheading: "The discipline that makes everything else matter",
      body: [
        "Without strategy, creativity is noise. Without strategy, technology is infrastructure without a destination. Without strategy, even the best execution is effort without direction.",
        "This is why we put it first. Not because we are trying to make things complicated. Because we are trying to make things matter.",
        "Strategy is where Palqar begins every engagement. It is how we earn the right to everything that comes after.",
      ],
    },
  ],
};

const relatedPosts = [
  {
    id: 2,
    slug: "ai-and-spatial-interfaces",
    title: "Why Innovation?",
    tagline: "Innovation — Where the future forms.",
    author: "Jordan Reeves",
    role: "Chief Technology Officer",
    image: "/about/story-2.jpg",
    accentColor: "#dc3545",
  },
  {
    id: 3,
    slug: "design-systems-that-convert",
    title: "Why Design?",
    tagline: "Design — Where vision becomes real.",
    author: "Mia Tanaka",
    role: "Lead Designer",
    image: "/about/story-3.jpg",
    accentColor: "#dc3545",
  },
  {
    id: 5,
    slug: "psychology-of-ux",
    title: "Why Research?",
    tagline: "Research — Where empathy drives decisions.",
    author: "Priya Nair",
    role: "UX Researcher",
    image: "/about/team-3.jpg",
    accentColor: "#dc3545",
  },
];

export default function BlogPost() {
    
  const [activeSection, setActiveSection]   = useState(post.toc[0].id);
  const [copied,        setCopied]          = useState(false);
  const [relatedIndex,  setRelatedIndex]    = useState(0);

  const heroRef     = useRef(null);
  const articleRef  = useRef(null);
  const exploreRef  = useRef(null);
  const progressRef = useRef(null);

  /* ── Scroll progress bar ── */
  useEffect(() => {
    const onScroll = () => {
      const doc    = document.documentElement;
      const scroll = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${(scroll / height) * 100}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active TOC tracking ── */
  useEffect(() => {
    const observers = post.toc.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  /* ── GSAP animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = "power3.out";

      /* Hero */
      const heroTl = gsap.timeline({ defaults: { ease, duration: 1 } });
      heroTl
        .from(`.${styles.heroMeta}`,   { y: 30, opacity: 0, duration: 0.7 })
        .from(`.${styles.heroTitle}`,  { y: 60, opacity: 0, duration: 1.1 }, "-=0.4")
        .from(`.${styles.heroAuthor}`, { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(`.${styles.heroCard}`,   { y: 50, opacity: 0, scale: 0.97, duration: 1.1 }, "-=0.6");

      /* Article sections */
      gsap.utils.toArray(`.${styles.section}`).forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            toggleActions: "play none none none",
          },
        });
      });

      /* Pull quotes */
      gsap.utils.toArray(`.${styles.pullQuote}`).forEach((el) => {
        gsap.from(el, {
          x: -30,
          opacity: 0,
          duration: 1,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      /* Explore section */
      gsap.from(`.${styles.exploreHeading}`, {
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: exploreRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(`.${styles.exploreCard}`, {
        y: 60,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease,
        immediateRender: false,
        scrollTrigger: {
          trigger: `.${styles.exploreGrid}`,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const visibleRelated = relatedPosts.slice(relatedIndex, relatedIndex + 2);

  return (
    <>
      {/* ── PROGRESS BAR ── */}
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} ref={progressRef} />
      </div>

      <main>

        {/* ════════════════════════════════
            HERO — dark Palqar brand
        ════════════════════════════════ */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroInner}>

            {/* Back link */}
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} />
              <span>All Articles</span>
            </Link>

            {/* Category + Date */}
            <div className={styles.heroMeta}>
              <span className={styles.heroCat}>{post.category}</span>
              <span className={styles.heroDot} aria-hidden="true" />
              <time className={styles.heroDate}>{post.date}</time>
            </div>

            {/* Title */}
            <h1 className={styles.heroTitle}>{post.title}</h1>

            {/* Tagline */}
            <p className={styles.heroTagline}>{post.tagline}</p>

            {/* Author */}
            <div className={styles.heroAuthor}>
              <span className={styles.heroAuthorLabel}>Writer</span>
              <div className={styles.heroAuthorRow}>
                <span className={styles.heroAuthorName}>{post.author}</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinBadge}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={12} fill="#fff" />
                </a>
              </div>
            </div>

            {/* Hero card — the branded red card */}
            <div className={styles.heroCard} ref={heroRef}>
              <div
                className={styles.heroCardInner}
                style={{ background: post.accentColor }}
              >
                <span className={styles.heroCardBrand}>Palqar</span>
                <div className={styles.heroCardArrow} aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>
                <div className={styles.heroCardTitle}>
                  <h2>{post.title.split("?")[0]}?</h2>
                </div>
                <div className={styles.heroCardAuthor}>
                  <span>{post.author}</span>
                  <span>{post.role}</span>
                </div>
                <div className={styles.heroCardPerson}>
                  <Image
                    src={post.heroImage}
                    alt={post.author}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                    className={styles.heroCardPersonImg}
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════
            ARTICLE — light reading zone
        ════════════════════════════════ */}
        <article className={styles.articleZone} ref={articleRef}>
          <div className={styles.articleInner}>

            {/* ── Sidebar ── */}
            <aside className={styles.sidebar} aria-label="Article navigation">

              {/* TOC */}
              <nav className={styles.toc} aria-label="Table of contents">
                <ul className={styles.tocList}>
                  {post.toc.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`${styles.tocItem} ${activeSection === id ? styles.tocActive : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className={styles.tocDot} aria-hidden="true" />
                        <span>{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.sidebarDivider} />

              {/* Share */}
              <div className={styles.shareBlock}>
                <p className={styles.shareLabel}>Share this article</p>
                <div className={styles.shareButtons}>
                  <a href="#" className={`${styles.shareBtn} ${styles.shareFb}`} aria-label="Share on Facebook">
                    <Facebook size={14} fill="#fff" />
                  </a>
                  <a href="#" className={`${styles.shareBtn} ${styles.shareX}`} aria-label="Share on X">
                    <Twitter size={14} fill="#fff" />
                  </a>
                  <a href="#" className={`${styles.shareBtn} ${styles.shareLi}`} aria-label="Share on LinkedIn">
                    <Linkedin size={14} fill="#fff" />
                  </a>
                  <button
                    className={`${styles.shareBtn} ${styles.shareCopy} ${copied ? styles.copied : ""}`}
                    onClick={handleCopy}
                    aria-label="Copy link"
                  >
                    <Link2 size={14} />
                  </button>
                </div>
              </div>

            </aside>

            {/* ── Body ── */}
            <div className={styles.body}>
              {post.content.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.section}
                >
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.subheading && (
                    <p className={styles.sectionSub}>{section.subheading}</p>
                  )}

                  {section.body.map((para, i) => (
                    <p key={i} className={styles.para}>{para}</p>
                  ))}

                  {section.pullQuote && (
                    <blockquote className={styles.pullQuote}>
                      <span className={styles.pullQuoteMark} aria-hidden="true">"</span>
                      {section.pullQuote}
                    </blockquote>
                  )}

                  {section.image && (
                    <figure className={styles.figure}>
                      <div className={styles.figureImage}>
                        <Image
                          src={section.image}
                          alt={section.imageCaption ?? section.heading}
                          fill
                          sizes="(max-width: 768px) 100vw, 700px"
                          className={styles.figImg}
                        />
                      </div>
                      {section.imageCaption && (
                        <figcaption className={styles.figCaption}>
                          {section.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              ))}

              {/* Author bio */}
              <div className={styles.authorBio}>
                <div className={styles.authorBioImageWrap}>
                  <Image
                    src={post.heroImage}
                    alt={post.author}
                    fill
                    className={styles.authorBioImage}
                  />
                </div>
                <div className={styles.authorBioText}>
                  <span className={styles.authorBioLabel}>Written by</span>
                  <strong className={styles.authorBioName}>{post.author}</strong>
                  <span className={styles.authorBioRole}>{post.role}, Palqar</span>
                </div>
              </div>

            </div>
          </div>
        </article>

        {/* ════════════════════════════════
            MORE TO EXPLORE — dark again
        ════════════════════════════════ */}
        <section className={styles.explore} ref={exploreRef} aria-label="More articles">
          <div className={styles.exploreInner}>

            <div className={styles.exploreTop}>
              <h2 className={styles.exploreHeading}>
                <span>More</span>
                <span>to Explore</span>
              </h2>
              {/* Carousel nav */}
              <div className={styles.exploreNav}>
                <button
                  className={styles.exploreNavBtn}
                  onClick={() => setRelatedIndex((i) => Math.max(0, i - 1))}
                  disabled={relatedIndex === 0}
                  aria-label="Previous articles"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  className={styles.exploreNavBtn}
                  onClick={() => setRelatedIndex((i) => Math.min(relatedPosts.length - 2, i + 1))}
                  disabled={relatedIndex >= relatedPosts.length - 2}
                  aria-label="Next articles"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className={styles.exploreGrid}>
              {visibleRelated.map((rel) => (
                <Link key={rel.id} href={`/blog/${rel.slug}`} className={styles.exploreCard}>
                  <div
                    className={styles.exploreCardInner}
                    style={{ background: rel.accentColor }}
                  >
                    <span className={styles.exploreCardBrand}>Palqar</span>
                    <div className={styles.exploreCardArrow} aria-hidden="true">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                    <div className={styles.exploreCardTitle}>
                      <h3>{rel.title}</h3>
                    </div>
                    <div className={styles.exploreCardAuthor}>
                      <span>{rel.author}</span>
                      <span>{rel.role}</span>
                    </div>
                    <div className={styles.exploreCardPerson}>
                      <Image
                        src={rel.image}
                        alt={rel.author}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.exploreCardPersonImg}
                      />
                    </div>
                  </div>
                  <p className={styles.exploreCardTagline}>{rel.tagline}</p>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
    </>
  );
}