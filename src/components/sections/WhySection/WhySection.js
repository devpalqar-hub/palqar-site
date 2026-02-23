"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhySection.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/whysection/img1.png",
  "/whysection/img2.png",
  "/whysection/img3.png",
  "/whysection/img4.png",
  "/whysection/img5.png",
  "/whysection/img6.png",
  "/whysection/img7.png",
  "/whysection/img8.jpg",
  "/whysection/img1.png",
  "/whysection/img2.png",
  "/whysection/img3.png",
  "/whysection/img4.png",
  "/whysection/img5.png",
  "/whysection/img6.png",
  "/whysection/img7.png",
  "/whysection/img8.jpg",
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
const paddedImages = [...IMAGES];
while (paddedImages.length % 4 !== 0) {
  paddedImages.push(IMAGES[paddedImages.length % IMAGES.length]);
}

const imageLayers = chunkArray(paddedImages, 4);

const CARD_SIZES = [
  { w: 280, h: 220 },
  { w: 320, h: 260 },
  { w: 360, h: 280 },
  { w: 300, h: 240 },
  { w: 380, h: 300 },
  { w: 260, h: 200 },
];

const generateCardSizes = (layersCount) => {
  const result = [];
  let seed = 0;

  for (let l = 0; l < layersCount; l++) {
    const layerSizes = [];
    for (let c = 0; c < 4; c++) {
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
        scrub: true,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
      },
    });

    layers.forEach((layer, i) => {

      const cards = layer.querySelectorAll(`.${styles.card}`);

      gsap.set(cards, {
        x: (cardIndex) => (cardIndex % 2 === 0 ? -20 : 20),
        y: (cardIndex) => (cardIndex < 2 ? -20 : 20),
      });

      // Front layer zooms away
      tl.to(layer, {
        scale: 4,
        opacity: 0,
        filter: "blur(6px)",
        duration: 2,
        ease: "none",
      });

       tl.to(cards,
        {
          x: 0,
          y: 0,
          duration: 2,
          ease: "power1.out",
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
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.4,
              ease: "power2.out",
            },
            "-=1.6"
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
        <p className={styles.label}>Most demanded services offered by us</p>
        <p ref={paraRef} className={styles.para}>
            At Palqar, we deliver tailored business solutions designed to drive growth and long-term success. From strategic planning and financial management to advanced technology implementation, our expert team works closely with you to identify opportunities, reduce risks, and build a clear roadmap to achieve your business goals.
        </p>
        </div>
      <div ref={animateRef} className={styles.animate}>
        <div className={styles.stage}>

          {imageLayers.map((layerImages, layerIndex) => (
          <div
            key={layerIndex}
            ref={(el) => (layersRef.current[layerIndex] = el)}
            className={styles.layer}
          >
            <div className={`${styles.card} ${styles.tl}`}
            style={{
              width: CARD_DIMENSIONS[layerIndex][0].w,
              height: CARD_DIMENSIONS[layerIndex][0].h,
            }}>
              <Image
                src={layerImages[0]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="350px"
              />
            </div>

            <div className={`${styles.card} ${styles.tr}`}
            style={{
              width: CARD_DIMENSIONS[layerIndex][1].w,
              height: CARD_DIMENSIONS[layerIndex][1].h,
            }}>
              <Image
                src={layerImages[1]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="350px"
              />
            </div>

            <div className={`${styles.card} ${styles.bl}`}
            style={{
              width: CARD_DIMENSIONS[layerIndex][2].w,
              height: CARD_DIMENSIONS[layerIndex][2].h,
            }}>
              <Image
                src={layerImages[2]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="350px"
              />
            </div>

            <div className={`${styles.card} ${styles.br}`}
            style={{
              width: CARD_DIMENSIONS[layerIndex][3].w,
              height: CARD_DIMENSIONS[layerIndex][3].h,
            }}>
              <Image
                src={layerImages[3]}
                alt=""
                fill
                className={styles.cardImage}
                sizes="350px"
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
