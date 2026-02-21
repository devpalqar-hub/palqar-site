"use client";
import { useState,useRef,useEffect } from "react";
import styles from "./ServicesPreview.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import gsap from "gsap";

const SERVICES = [
  {
    id: 1,
    title: "Software Development",
    details: [
      "Responsive Web Design",
      "Typography & Color Systems",
      "Brand Guidelines & Visual Systems",
    ],
    images: [
      "/services-preview/service3-01.png",
      "/services-preview/service3-02.png",
      "/services-preview/service3-03.png",
      "/services-preview/service3-04.png"
    ],
  },
  {
    id: 2,
    title: "UX UI Design",
    details: [
      "Brand Positioning",
      "Messaging & Tone of Voice",
      "Design Consultation & Audit",
    ],
    images: [
      "/services-preview/service2-01.png",
      "/services-preview/service2-02.png"
    ],
  },
  {
    id: 3,
    title: "Brand Consultation",
    details: [
      "Logo Design",
      "Typography & Color Systems",
      "Brand Guidelines & Visual Systems",
    ],
    images: [
      "/services-preview/service1-01.png",
      "/services-preview/service1-02.png",
      "/services-preview/service1-03.png",
      "/services-preview/service1-04.png"
    ],
  },
  {
    id: 4,
    title: "Branding and Social Media Marketing",
    details: [
      "Custom Brand Illustrations",
      "Editorial & Digital Artwork",
      "Iconography & Infographic Design",
    ],
    images: [
      "/services-preview/service5-01.png",
      "/services-preview/service5-02.png",
      "/services-preview/service5-03.png"
    ],
  },
  {
    id: 5,
    title: "Legal Support & Compliance",
    details: [
      "Concept Development",
      "Campaign Visual Strategy",
      "Photography & Video Direction",
    ],
    images: [
      "/services-preview/service4-01.png",
      "/services-preview/service4-02.png",
      "/services-preview/service4-03.png"
    ],
  },
];

export default function ServicesPreview() {
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef({});
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
    gsap.from(
      content.querySelectorAll("li"),
      {
        y: 12,
        opacity: 0,
        stagger: 0.06,
        duration: 0.4,
        ease: "power2.out",
      }
    );

    // IMAGE STAGGER
    gsap.from(
      content.querySelectorAll(`.${styles.thumb}`),
      {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: "power3.out",
      }
    );

    setActiveId(serviceId);
  }
};

  return (
    <section className={styles.wrapper}>
      <p className={styles.label}>Most demanded services offered by us</p>

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

            <div className={styles.list}>
              <ul>
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className={styles.images}>
                {service.images.map((img, i) => (
                  <div key={i} className={styles.thumb}>
                    <Image
                      src={img}
                      alt={`${service.title} preview ${i + 1}`}
                      width={80}
                      height={80}
                      className={styles.thumbImage}
                    />
                  </div>
                ))}
              </div>
            </div>

            <h4>{service.title}</h4>
          </div>
        </div>
      ))}
    </section>
  );
}
