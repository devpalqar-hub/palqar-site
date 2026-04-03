"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhySection.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/whysection/murali3.png",
  "/whysection/image1.png",
  "/whysection/anandhu.png",
  "/whysection/reema.png",
  "/whysection/devan.png",
  "/whysection/Fayaz.png",
  "/whysection/sai.png",
  "/whysection/sona.png",
  "/whysection/adheena.png",
  "/whysection/agnes.png",
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
const paddedImages = [...IMAGES];
while (paddedImages.length % 2 !== 0) {
  paddedImages.push(IMAGES[paddedImages.length % IMAGES.length]);
}

const imageLayers = chunkArray(paddedImages, 2);

const CARD_SIZES = [
  { w: 380, h: 570 }, // tall
  { w: 340, h: 520 }, // shorter

  { w: 350, h: 560 }, // medium
  { w: 390, h: 620 }, // tallest

  { w: 360, h: 540 },
  { w: 420, h: 580 },

  { w: 340, h: 600 },
  { w: 380, h: 520 },
];

const generateCardSizes = (layersCount) => {
  const result = [];
  let seed = 0;

  for (let l = 0; l < layersCount; l++) {
    const layerSizes = [];
    for (let c = 0; c < 2; c++) {
      layerSizes.push(CARD_SIZES[seed % CARD_SIZES.length]);
      seed++;
    }
    result.push(layerSizes);
  }

  return result;
};
const CARD_DIMENSIONS = generateCardSizes(imageLayers.length);

export default function Whyanimate() {
  const sectionRef = useRef(null);
  const animateRef = useRef(null);
  const layersRef = useRef([]);
  const textRef = useRef(null);
  const paraRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const animate = animateRef.current;
    const layers = layersRef.current.filter(Boolean);
    const text = textRef.current;
    const para = paraRef.current;

    if (!section || !animate || !text || layers.length === 0) return;

    const originalParaText = para?.textContent ?? "";
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 991px)",
          isDesktop: "(min-width: 992px)",
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions;
          const scrollDistance = isMobile
            ? window.innerHeight * 1.15
            : isTablet
              ? window.innerHeight * 1.75
              : window.innerHeight * 2.1;

          gsap.set(animate, {
            autoAlpha: 0,
          });

          layers.forEach((layer, layerIndex) => {
            gsap.set(layer, {
              opacity: layerIndex === 0 ? 1 : 0,
              scale: layerIndex === 0 ? 1 : 0.9,
              filter: layerIndex === 0 ? "blur(0px)" : "blur(12px)",
            });

            const cards = layer.querySelectorAll(`.${styles.card}`);
            gsap.set(cards, {
              x: (cardIndex) => (cardIndex === 0 ? -30 : 30),
              y: 0,
              yPercent: -50,
            });
          });

          gsap.set(text, {
            opacity: 0,
            scale: 0.96,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: animate,
              start: "top top",
              end: `+=${scrollDistance}`,
              scrub: 0.8,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              fastScrollEnd: true,
            },
          });

          tl.to(animate, {
            autoAlpha: 1,
            duration: 0.45,
            ease: "none",
          });

          layers.forEach((layer, layerIndex) => {
            const cards = layer.querySelectorAll(`.${styles.card}`);

            tl.to(layer, {
              scale: isMobile ? 1.8 : 2.2,
              opacity: 0,
              filter: "blur(1px)",
              duration: 1.8,
              ease: "none",
            });

            tl.to(
              cards,
              {
                x: 0,
                y: 0,
                duration: 1.8,
                ease: "none",
              },
              "<",
            );

            if (layers[layerIndex + 1]) {
              tl.fromTo(
                layers[layerIndex + 1],
                {
                  opacity: 0,
                  scale: 0.6,
                  filter: "blur(3px)",
                },
                {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  duration: 1.8,
                  ease: "none",
                },
                "<",
              );
            }
          });

          tl.to(text, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "none",
          });
        },
      );

      if (para && originalParaText) {
        para.innerHTML = originalParaText
          .split("")
          .map(
            (char) =>
              `<span style="opacity:0.3; display:inline-block">${
                char === " " ? "&nbsp;" : char
              }</span>`,
          )
          .join("");

        const letters = para.querySelectorAll("span");

        gsap.to(letters, {
          opacity: 1,
          duration: 0.6,
          stagger: 0.015,
          ease: "power2.out",
          scrollTrigger: {
            trigger: para,
            start: "top 85%",
          },
        });
      }
    }, section);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refreshTimer);
      if (para) para.textContent = originalParaText;
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div>
        
          <div>
            <p className={styles.label}>Where strategy meets execution</p>
            <div className={styles.headerRow}>
              <h2 className={styles.heading}>
                A strategic partner built for{" "}
                <span className={styles.highlight}>
                  sustainable business growth.
                </span>
              </h2>
            <a href="/contact#contact-form" className={styles.primaryCta}>
              Get a Free Consultation
            </a>
          </div>
        </div>
        <p ref={paraRef} className={styles.para}>
            Palqar brings together technology, creativity, marketing, and consulting — delivering tailored solutions that help businesses scale, convert, and grow with confidence.
        </p>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h3>30<span>+</span></h3>
            <p>PROJECTS DELIVERED</p>
            <small>eCommerce, SaaS, enterprise & brand</small>
          </div>

          <div className={styles.statItem}>
            <h3>4<span>x</span></h3>
            <p>AVG. LEAD GROWTH</p>
            <small>SEO, paid media & conversion strategy</small>
          </div>

          <div className={styles.statItem}>
            <h3>99<span>%</span></h3>
            <p>CLIENT RETENTION</p>
            <small>Long-term partnerships, measurable ROI</small>
          </div>

          <div className={styles.statItem}>
            <h3>10<span>+</span></h3>
            <p>INDUSTRIES SERVED</p>
            <small>Tech, retail, finance, healthcare & more</small>
          </div>
        </div>
      </div>
      <div ref={animateRef} className={styles.animate}>
        <div className={styles.stage}>

          {imageLayers.map((layerImages, layerIndex) => (
          <div
            key={layerIndex}
            ref={(el) => (layersRef.current[layerIndex] = el)}
            className={styles.layer}
          >
            <div className={`${styles.card} ${styles.left}`}
              style={{
                "--card-width": `${CARD_DIMENSIONS[layerIndex][0].w}px`,
                aspectRatio: `${CARD_DIMENSIONS[layerIndex][0].w} / ${CARD_DIMENSIONS[layerIndex][0].h}`,
              }}>
              <Image
                src={layerImages[0]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="(max-width: 480px) 46vw, (max-width: 768px) 43vw, (max-width: 992px) 38vw, 31vw"
              />
            </div>

            <div className={`${styles.card} ${styles.right}`}
              style={{
                "--card-width": `${CARD_DIMENSIONS[layerIndex][1].w}px`,
                aspectRatio: `${CARD_DIMENSIONS[layerIndex][1].w} / ${CARD_DIMENSIONS[layerIndex][1].h}`,
              }}>
              <Image
                src={layerImages[1]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="(max-width: 480px) 46vw, (max-width: 768px) 43vw, (max-width: 992px) 38vw, 31vw"
              />
            </div>
          </div>
        ))}

          <div ref={textRef} className={styles.text}>
            <h3>INDUSTRIES WE SERVE</h3>
            <div className={styles.tags}>
              <div className={styles.row}>
                <span className={styles.tag}>Technology & Software</span>
                <span className={styles.tag}>Education</span>
                <span className={styles.tag}>Finance & Banking</span>
              </div>
              <div className={styles.row}>
                <span className={styles.tag}>Healthcare</span>
                <span className={styles.tag}>Retail & E-Commerce</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
