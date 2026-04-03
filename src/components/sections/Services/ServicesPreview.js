"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./ServicesPreview.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import gsap from "gsap";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const SERVICES = [
  {
    id: 1,
    title: "Web & Technology Development",
    description:
      "Build scalable digital products, high-performance websites, and custom platforms engineered for speed and seamless user experience.",
    cta: "Build Your Platform",
    href: "/services/web-development",
  },
  {
    id: 2,
    title: "Branding & Creative Design",
    description:
      "Craft powerful brand identities with strategic design and storytelling that captures attention and builds trust.",
    cta: "Create Your Brand",
    href: "/services/branding",
  },
  {
    id: 3,
    title: "Performance Marketing & Growth",
    description:
      "Drive measurable growth with SEO, paid campaigns, and data-driven strategies that convert traffic into revenue.",
    cta: "Scale Your Growth",
    href: "/services/marketing",
  },
  {
    id: 4,
    title: "Technology & Automation",
    description:
      "Automate workflows, optimize operations, and integrate smart systems to accelerate business efficiency.",
    cta: "Automate Your Business",
    href: "/services/automation",
  },
  {
    id: 5,
    title: "Business & Growth Strategy",
    description:
      "Unlock opportunities with expert consulting, market insights, and strategies designed for long-term success.",
    cta: "Plan Your Growth",
    href: "/services/strategy",
  },
  {
    id: 6,
    title: "Not Sure Where to Start?",
    description:
      "Get a free 30-minute audit and discover gaps, missed opportunities, and clear steps to scale your business.",
    cta: "Get Free Audit",
    href: "/contact",
  },
];

export default function ServicesPreview() {
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    Object.values(contentRefs.current).forEach((content) => {
      if (!content) return;

      gsap.set(content, {
        height: 0,
        opacity: 0,
        y: -12,
      });
    });
  }, []);
  const handleToggle = (serviceId) => {
    const content = contentRefs.current[serviceId];
    if (!content) return;

    if (activeId === serviceId) {
      // CLOSE
      gsap.to(content, {
        height: 0,
        opacity: 0,
        y: -12,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setActiveId(null);
    } else {
      // CLOSE PREVIOUS (if any)
      if (activeId && contentRefs.current[activeId]) {
        gsap.to(contentRefs.current[activeId], {
          height: 0,
          opacity: 0,
          y: -12,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      // OPEN
      gsap.set(content, { height: "auto", opacity: 1, y: 0 });

      gsap.from(content, {
        height: 0,
        opacity: 0,
        y: -12,
        duration: 0.5,
        ease: "power3.out",
      });

      // LIST STAGGER
      gsap.from(content.querySelectorAll("li"), {
        y: 12,
        opacity: 0,
        stagger: 0.06,
        duration: 0.4,
        ease: "power2.out",
      });

      // IMAGE STAGGER
      gsap.from(content.querySelectorAll(`.${styles.thumb}`), {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: "power3.out",
      });

      setActiveId(serviceId);
    }
  };

  return (
    <section className={styles.wrapper} id="services">
      <p className={styles.label}>WHAT WE DO</p>

      <h2 className={styles.heading}>
        Growth, <span className={styles.highlight}>Technology</span> & Marketing Solutions
      </h2>

      {SERVICES.map((service) => (
        <div
          key={service.id}
          className={`${styles.service} ${
            activeId === service.id ? styles.active : ""
          }`}
          onClick={() => handleToggle(service.id)}
        >
          <div className={styles.header}>
            <h3>{service.title}</h3>
            <span className={styles.arrow}>
              <LuArrowUpRight />
            </span>
          </div>

          <div
            ref={(el) => (contentRefs.current[service.id] = el)}
            className={styles.content}
          >
            <div className={styles.count}>
              {service.id < 10 ? `0${service.id}` : service.id}
            </div>

            <div className={styles.info}>
              <p className={styles.description}>{service.description}</p>

              <Link href={service.href} className={styles.cta}>
                {service.cta} <IoIosArrowRoundForward size={20}/>
              </Link>
            </div>

            {/* NEW RIGHT SIDE */}
            <div className={styles.rightPanel}>
              <Link href={service.href} className={styles.ctaButton}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
