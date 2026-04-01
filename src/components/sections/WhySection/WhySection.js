"use client";

import { useEffect, useRef } from "react";
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
  "/whysection/img2.png",
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
  const animateRef = useRef(null);
  const layersRef = useRef([]);
  const textRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const animate = animateRef.current;
    const layers = layersRef.current;
    const text = textRef.current;
    

    if (!animate || !text || layers.length === 0) return;

    // INITIAL STATE
    layers.forEach((layer, i) => {
      gsap.set(layer, {
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 0.9,
        filter: i === 0 ? "blur(0px)" : "blur(12px)",
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
        end: "+=200%",
        scrub: 0,
        pin: true,
        anticipatePin: 1,
      },
    });

    layers.forEach((layer, i) => {

      const cards = layer.querySelectorAll(`.${styles.card}`);

      gsap.set(cards, {
        x: (i) => (i === 0 ? -30 : 30),
        y: 0,
      });

      // Front layer zooms away
      tl.to(layer, {
        scale: 2.2,
        opacity: 0,
        filter: "blur(1px)",
        duration: 1.8,
        ease: "none",
      });

       tl.to(cards,
        {
          x: 0,
          y: 0,
          duration: 1.8,
          ease: "none",
        },
        "<" 
      );

      // Next layer fades in + sharpens
        if (layers[i + 1]) {
          tl.fromTo(
            layers[i + 1],
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
            "<"
          );
        }
    });

    // Final text
    tl.to(text, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "expo.out",
    });

    // ===== PARAGRAPH LETTER ANIMATION =====
    const para = paraRef.current;
    if (para) {
      const text = para.innerText;
      para.innerHTML = text
        .split("")
        .map(
          (char) =>
            `<span style="opacity:0.3; display:inline-block">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");

      const letters = para.querySelectorAll("span");

      gsap.to(letters, {
        opacity: 1,
        duration: 0.6,
        stagger: 0.015,
        ease: "power2.out",
        scrollTrigger: {
          trigger: animate,
          start: "top 120%",
        },
      });
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.wrapper}>
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
            <a href="/contact" className={styles.primaryCta}>
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
                width: CARD_DIMENSIONS[layerIndex][0].w,
                height: CARD_DIMENSIONS[layerIndex][0].h,
              }}>
              <Image
                src={layerImages[0]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="(max-width: 768px) 40vw, 350px"
              />
            </div>

            <div className={`${styles.card} ${styles.right}`}
              style={{
                width: CARD_DIMENSIONS[layerIndex][1].w,
                height: CARD_DIMENSIONS[layerIndex][1].h,
              }}>
              <Image
                src={layerImages[1]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="(max-width: 768px) 40vw, 350px"
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
