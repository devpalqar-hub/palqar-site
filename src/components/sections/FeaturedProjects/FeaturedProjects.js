"use client";
import styles from "./FeaturedProjects.module.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { LuArrowUpRight } from "react-icons/lu";

const PROJECTS = [
  {
    id: 1,
    title: "Vivodyne",
    logo: "/featured-projects/vivodynelogo.svg",
    desc:"UI/UX, 3D rendering, and Implementation to take the Vivodyne website to the next level and establish them as an innovative leader in the biotech industry",
    bg: "#5b2d82",
    media: [
      {
        src: "/featured-projects/Vivodyne.png",
        className: "VivodyneLaptop",
      },
    ],
  },
  {
    id: 2,
    title: "Lovethesales",
    logo: "/featured-projects/lovethesaleslogo.svg",
    desc:"E-commerce redesign with a 30% uplift in signups and nearly +50% in cart conversion rate. We rebuilt the brand identity and took their design to the next level.",
    bg: "#00b38a",
    media: [
      {
        src: "/featured-projects/Lovethesalesmob.png",
        className: "mediaPhone",
      },
      {
        src: "/featured-projects/Lovethesaleslap.png",
        className: "mediaLaptop",
      },
    ],
  },
  {
    id: 3,
    title: "Creek Wearable",
    logo: "/featured-projects/creeklogo.svg",
    desc: "Designing the watch interface and accompanying applications for Creek's new smart watch",
    bg: "#111111",
    media: [
      {
        src: "/featured-projects/CreekWearable.png",
        className: "mediaWatch",
      },
    ],
  },
];


export default function FeaturedProjects() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <p className={styles.label}>Featured Projects</p>

        <div className={styles.controls}>
          <button className={styles.recent}>
            RECENT PROJECTS
            <div>
              <LuArrowUpRight/>
            </div>
          </button>
          <div className={styles.divider}></div>
          <button className={styles.navigate} onClick={() => scroll("left")}>
            <IoIosArrowBack />
          </button>
          <button className={styles.navigate} onClick={() => scroll("right")}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className={styles.slider}>
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className={styles.card}
            style={{ background: p.bg }}
          >
            <div className={styles.text}>
              <Image
                src={p.logo}
                alt={`${p.title} logo`}
                width={230}
                height={56}
                className={styles.logo}
              />
              <p>{p.desc}</p>
            </div>

            <div className={styles.media}>
              {p.media.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.mediaItem} ${styles[item.className]}`}
                >
                  <Image
                    src={item.src}
                    alt={p.title}
                    fill
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
