"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blogs.module.css";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    slug: "future-of-digital-experiences",
    title: "Why Strategy?",
    tagline: "Strategy — Where direction is born.",
    category: "Strategy",
    author: "Alex Monroe",
    role: "Head of Strategy",
    image: "/about/team-1.jpg",
    accentColor: "#dc3545",
    featured: true,
  },
  {
    id: 2,
    slug: "ai-and-spatial-interfaces",
    title: "Why Innovation?",
    tagline: "Innovation — Where the future forms.",
    category: "Innovation",
    author: "Jordan Reeves",
    role: "Chief Technology Officer",
    image: "/about/story-2.jpg",
    accentColor: "#1a1a1a",
    featured: true,
  },
  {
    id: 3,
    slug: "design-systems-that-convert",
    title: "Design Systems That Convert",
    tagline: "Design — Where pixels become results.",
    category: "Design",
    author: "Mia Tanaka",
    role: "Lead Designer",
    image: "/about/story-3.jpg",
    accentColor: "#dc3545",
  },
  {
    id: 4,
    slug: "building-scalable-brands",
    title: "Building Scalable Brands",
    tagline: "Branding — Where identity takes shape.",
    category: "Branding",
    author: "Chris Okafor",
    role: "Brand Director",
    image: "/about/story-4.jpg",
    accentColor: "#1a1a1a",
  },
  {
    id: 5,
    slug: "psychology-of-ux",
    title: "The Psychology of UX",
    tagline: "Research — Where empathy meets execution.",
    category: "UX Research",
    author: "Priya Nair",
    role: "UX Researcher",
    image: "/about/team-3.jpg",
    accentColor: "#dc3545",
  },
];

export default function Blog() {
  const headerRef  = useRef(null);
  const gridRef    = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = "power3.out";

      /* Header — title words stagger in */
      const headerTl = gsap.timeline({ defaults: { ease, duration: 1 } });
      headerTl
        .from(`.${styles.titleWord}`, {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          duration: 1.1,
        })
        .from(
          `.${styles.headerMeta}`,
          { y: 24, opacity: 0, duration: 0.8 },
          "-=0.6"
        )
        .from(
          `.${styles.headerDivider}`,
          { scaleX: 0, transformOrigin: "left", duration: 0.9 },
          "-=0.5"
        );

      gsap.from(gridRef.current?.querySelectorAll(`.${styles.cardOuter}`), {
        y: 70,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease,
        immediateRender: false,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      /* CTA */
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      ctaTl
        .from(`.${styles.lets}`, {
          y: 60, opacity: 0, scale: 0.94, duration: 1.1, ease: "power4.out",
        })
        .from(
          `.${styles.buttonWrapper}`,
          { y: 24, opacity: 0, duration: 0.7, ease },
          "-=0.5"
        );
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  const featuredBlogs = blogs.filter((b) => b.featured);
  const restBlogs     = blogs.filter((b) => !b.featured);

  return (
    <main className={styles.blogPage}>

      {/* ─── HEADER ─── */}
      <header className={styles.header} ref={headerRef}>
        <div className={styles.headerInner}>

          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              {"Blogs and Insights".split(" ").map((word, i) => (
                <span key={i} className={styles.titleWordWrap}>
                  <span className={styles.titleWord}>{word}</span>
                </span>
              ))}
            </h1>
          </div>

          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              Insights, ideas, and strategies<br />
              shaping the future of digital<br />
              and business transformation.
            </p>
            <div className={styles.headerCount}>
              <span className={styles.countNumber}>{blogs.length}</span>
              <span className={styles.countLabel}>Articles</span>
            </div>
          </div>

        </div>
        <div className={styles.headerDivider} />
      </header>

      {/* ─── FEATURED GRID ─── */}
      <section className={styles.container}>
        <div className={styles.featuredGrid} ref={gridRef}>

          {featuredBlogs.map((blog) => (
            <article key={blog.id} className={`${styles.cardOuter} ${styles.featuredCard}`}>
              <Link href={`/blog/${blog.slug}`} className={styles.cardLink}>

                {/* Card thumbnail */}
                <div
                  className={styles.card}
                  style={{ background: blog.accentColor }}
                >
                  {/* Arrow button */}
                  <div className={styles.arrowBtn} aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>

                  {/* Brand tag */}
                  <span className={styles.brandTag}>Palqar</span>

                  {/* Big title */}
                  <div className={styles.cardTitleBlock}>
                    <h2 className={styles.cardTitle}>{blog.title}</h2>
                  </div>

                  {/* Author */}
                  <div className={styles.authorBlock}>
                    <span className={styles.authorName}>{blog.author}</span>
                    <span className={styles.authorRole}>{blog.role}</span>
                  </div>

                  {/* Person image */}
                  <div className={styles.personImageWrapper}>
                    <Image
                      src={blog.image}
                      alt={blog.author}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.personImage}
                    />
                  </div>
                </div>

                {/* Tagline below card */}
                <p
                  className={styles.cardTagline}
                  style={{ color: blog.accentColor === "#dc3545" ? "#fff" : "#e52e3d" }}
                >
                  {blog.tagline}
                </p>

              </Link>
            </article>
          ))}

        </div>

        {/* ─── REST GRID ─── */}
        <div className={styles.restGrid}>
          {restBlogs.map((blog) => (
            <article key={blog.id} className={styles.cardOuter}>
              <Link href={`/blog/${blog.slug}`} className={styles.cardLink}>

                <div className={styles.cardSmall}>
                  {/* Image */}
                  <div className={styles.smallImageWrapper}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.smallImage}
                    />
                    <div className={styles.smallOverlay}>
                      <span className={styles.category}>{blog.category}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={styles.smallInfo}>
                    <h3 className={styles.smallTitle}>{blog.title}</h3>
                    <p className={styles.smallTagline}>{blog.tagline}</p>
                    <div className={styles.smallMeta}>
                      <span className={styles.smallAuthor}>{blog.author}</span>
                      <span className={styles.readMoreLink}>
                        Read More <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>

              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className={styles.initiateProject}
        aria-label="Start a project"
        ref={ctaRef}
      >
        <div className={styles.column}>
          <p className={styles.lets}>
            LET&apos;S <span className={styles.talk}>TALK</span>
          </p>
          <div className={styles.buttonWrapper}>
            <button aria-label="Start a project with Palqar">START A PROJECT</button>
            <div className={styles.arrowRight} aria-hidden="true">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}