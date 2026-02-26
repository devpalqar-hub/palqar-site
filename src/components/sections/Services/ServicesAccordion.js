"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./ServicesAccordion.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import gsap from "gsap";

const SERVICES = [
  {
    id: 1,
    title: "Software Development",
    image: "/services-preview/service3-01.png",
    items: [
      {
        label: "Responsive Web Design",
        details: ["Custom UI components", "Mobile-first approach", "Cross-browser compatibility"],
        images: ["/services-preview/service3-01.png", "/services-preview/service3-02.png", "/services-preview/service3-03.png"],
      },
      {
        label: "Full Stack Engineering",
        details: ["REST & GraphQL APIs", "Database architecture", "Cloud deployment"],
        images: ["/services-preview/service3-02.png", "/services-preview/service3-03.png"],
      },
      {
        label: "Performance Optimisation",
        details: ["Core Web Vitals", "Code splitting & lazy loading", "CDN & caching strategy"],
        images: ["/services-preview/service3-03.png", "/services-preview/service3-04.png"],
      },
      {
        label: "CMS & E-Commerce",
        details: ["Headless CMS integrations", "Shopify / WooCommerce", "Payment gateway setup"],
        images: ["/services-preview/service3-04.png", "/services-preview/service3-01.png"],
      },
    ],
  },
  {
    id: 2,
    title: "UX UI Design",
    image: "/services-preview/service2-01.png",
    items: [
      {
        label: "User Research & Wireframing",
        details: ["Journey mapping", "Heuristic evaluation", "Low-fi prototyping"],
        images: ["/services-preview/service2-01.png", "/services-preview/service2-02.png"],
      },
      {
        label: "Visual Interface Design",
        details: ["Design system creation", "Component libraries", "Figma deliverables"],
        images: ["/services-preview/service2-02.png", "/services-preview/service2-01.png"],
      },
      {
        label: "Interaction & Motion",
        details: ["Micro-interactions", "Transition design", "Prototype animations"],
        images: ["/services-preview/service2-01.png"],
      },
      {
        label: "Usability Testing",
        details: ["A/B testing", "Session recordings", "Conversion analysis"],
        images: ["/services-preview/service2-02.png"],
      },
    ],
  },
  {
    id: 3,
    title: "Brand Consultation",
    image: "/services-preview/service1-01.png",
    items: [
      {
        label: "Logo & Identity Design",
        details: ["Wordmark & logomark", "Icon design", "Brand mark variations"],
        images: ["/services-preview/service1-01.png", "/services-preview/service1-02.png"],
      },
      {
        label: "Typography & Colour Systems",
        details: ["Type scale definition", "Palette architecture", "Accessibility contrast"],
        images: ["/services-preview/service1-02.png", "/services-preview/service1-03.png"],
      },
      {
        label: "Brand Guidelines",
        details: ["Usage rules documentation", "Do & don't examples", "Asset library"],
        images: ["/services-preview/service1-03.png", "/services-preview/service1-04.png"],
      },
      {
        label: "Brand Audit",
        details: ["Competitor benchmarking", "Perception analysis", "Refresh roadmap"],
        images: ["/services-preview/service1-04.png", "/services-preview/service1-01.png"],
      },
    ],
  },
  {
    id: 4,
    title: "Branding & Social Media Marketing",
    image: "/services-preview/service5-01.png",
    items: [
      {
        label: "Content Strategy",
        details: ["Editorial calendar", "Platform-specific content", "Tone of voice guide"],
        images: ["/services-preview/service5-01.png", "/services-preview/service5-02.png"],
      },
      {
        label: "Campaign Design",
        details: ["Visual campaign concepts", "Ad creative production", "Story & reel templates"],
        images: ["/services-preview/service5-02.png", "/services-preview/service5-03.png"],
      },
      {
        label: "Community Management",
        details: ["Engagement monitoring", "Response strategy", "Growth hacking"],
        images: ["/services-preview/service5-03.png", "/services-preview/service5-01.png"],
      },
      {
        label: "Analytics & Reporting",
        details: ["KPI dashboards", "Monthly reports", "ROI tracking"],
        images: ["/services-preview/service5-01.png"],
      },
    ],
  },
  {
    id: 5,
    title: "Legal Support & Compliance",
    image: "/services-preview/service4-01.png",
    items: [
      {
        label: "Contract Drafting",
        details: ["NDA & SLA templates", "Client agreements", "Vendor contracts"],
        images: ["/services-preview/service4-01.png", "/services-preview/service4-02.png"],
      },
      {
        label: "GDPR & Data Privacy",
        details: ["Privacy policy drafting", "Cookie consent setup", "Data audit"],
        images: ["/services-preview/service4-02.png", "/services-preview/service4-03.png"],
      },
      {
        label: "IP & Trademark",
        details: ["Trademark registration", "IP ownership clauses", "Licensing agreements"],
        images: ["/services-preview/service4-03.png", "/services-preview/service4-01.png"],
      },
      {
        label: "Regulatory Compliance",
        details: ["Industry-specific checks", "Risk assessment", "Compliance documentation"],
        images: ["/services-preview/service4-01.png"],
      },
    ],
  },
];

export default function ServicesAccordion() {
  // activeKey = `${serviceId}-${itemIndex}`
  const [activeKey, setActiveKey] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    Object.values(contentRefs.current).forEach((el) => {
      if (el) gsap.set(el, { height: 0, opacity: 0, y: -10 });
    });
  }, []);

  const handleToggle = (key) => {
    const content = contentRefs.current[key];
    if (!content) return;

    if (activeKey === key) {
      gsap.to(content, { height: 0, opacity: 0, y: -10, duration: 0.35, ease: "power2.inOut" });
      setActiveKey(null);
    } else {
      // close previous
      if (activeKey && contentRefs.current[activeKey]) {
        gsap.to(contentRefs.current[activeKey], {
          height: 0, opacity: 0, y: -10, duration: 0.28, ease: "power2.inOut",
        });
      }

      gsap.set(content, { height: "auto", opacity: 1, y: 0 });
      gsap.from(content, { height: 0, opacity: 0, y: -10, duration: 0.45, ease: "power3.out" });

      gsap.from(content.querySelectorAll("li"), {
        y: 10, opacity: 0, stagger: 0.06, duration: 0.38, ease: "power2.out",
      });

      gsap.from(content.querySelectorAll(`.${styles.thumb}`), {
        y: 18, opacity: 0, stagger: 0.08, duration: 0.42, ease: "power3.out",
      });

      setActiveKey(key);
    }
  };

  return (
    <section className={styles.wrapper}>
      {SERVICES.map((service, sIdx) => {
        const isEven = sIdx % 2 === 1; // alternate: false=image-left, true=image-right

        return (
          <div key={service.id} className={`${styles.serviceBlock} ${isEven ? styles.reverse : ""}`}>
            {/* Static image column */}
            <div className={styles.imageCol}>
              <div className={styles.imageFrame}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.mainImage}
                />
              </div>
            </div>

            {/* Accordion column */}
            <div className={styles.accordionCol}>
              <h2 className={styles.serviceTitle}>{service.title}.</h2>

              {service.items.map((item, iIdx) => {
                const key = `${service.id}-${iIdx}`;
                const isActive = activeKey === key;

                return (
                  <div
                    key={key}
                    className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}
                    onClick={() => handleToggle(key)}
                  >
                    <div className={styles.itemHeader}>
                      <span className={styles.itemLabel}>{item.label}</span>
                      <span className={`${styles.arrow} ${isActive ? styles.arrowActive : ""}`}>
                        <LuArrowUpRight />
                      </span>
                    </div>

                    <div
                      ref={(el) => (contentRefs.current[key] = el)}
                      className={styles.itemContent}
                    >
                      <ul className={styles.detailList}>
                        {item.details.map((d, di) => (
                          <li key={di}>{d}</li>
                        ))}
                      </ul>

                      <div className={styles.thumbRow}>
                        {item.images.map((img, ii) => (
                          <div key={ii} className={styles.thumb}>
                            <Image
                              src={img}
                              alt={`${item.label} ${ii + 1}`}
                              width={80}
                              height={60}
                              className={styles.thumbImage}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}