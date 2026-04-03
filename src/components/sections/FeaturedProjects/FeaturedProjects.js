"use client";
import styles from "./FeaturedProjects.module.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    slug: "zodo",
    title: "ZodoAI",
    logo: "/featured-projects/zodo/zodo-logo.png",
    logoClass: "zodoLogo",
    logoWidth: 800,
    logoHeight: 600,
    logoFit: "cover",
    logoPosition: "center center",
    desc:"With ZODO AI, managing your health becomes easier than ever.Schedule consultations quickly and access expert advice in seconds.Stay informed with real-time updates and personalized support.Your journey to better health starts here.",
    bg: "#01B18A",
    media: [
      {
        src: "/featured-projects/zodo/laptop.png",
        className: "ZodoLaptop",
      },
    ],
  },
  {
    id: 2,
    slug: "cleanmaria",
    title: "CleanMaria",
    logo: "/featured-projects/cleanmaria/logo.svg",
    logoClass: "cleanmariaLogo",
    logoWidth: 215,
    logoHeight: 98,
    logoFit: "contain",
    logoPosition: "left center",
    desc:"Book your cleaning in seconds with our easy platform while trusted professionals handle every detail. Enjoy flexible scheduling that fits your routine and relax knowing your home will be left fresh, spotless, and beautifully clean.",
    bg: "linear-gradient(180deg, #000000 10%, #333333 80%, #111111 95%)",
    media: [
      {
        src: "/featured-projects/cleanmaria/phone.png",
        className: "Cleanphone",
      },
      {
        src: "/featured-projects/cleanmaria/laptop.png",
        className: "Cleanlaptop",
      },
    ],
  },
  {
    id: 3,
    slug: "bambinidoulas",
    title: "Bambini Doulas",
    logo: "/featured-projects/bambinidoulas/logo.svg",
    logoClass: "bambiniLogo",
    logoWidth: 240,
    logoHeight: 85,
    logoFit: "contain",
    logoPosition: "left center",
    desc: "Personalized doula support for every stage of your journey.Compassionate professionals guiding you through pregnancy and beyond.Feel confident, supported, and cared for every step of the way.",
    bg: "linear-gradient(65deg, #A739FF 0%, #6b2bb3 40%, #08060A 82%)",
    media: [
      {
        src: "/featured-projects/bambinidoulas/laptop.png",
        className: "Bambinilaptop",
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
          <div className={styles.recent} aria-hidden="true">
            RECENT PROJECTS
            <div>
              <LuArrowUpRight/>
            </div>
          </div>
          <div className={styles.divider}></div>
          <button
            className={styles.navigate}
            type="button"
            aria-label="Scroll featured projects left"
            onClick={() => scroll("left")}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={styles.navigate}
            type="button"
            aria-label="Scroll featured projects right"
            onClick={() => scroll("right")}
          >
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
            <Link href={`/projects/${p.slug}`}>
              <Image
                src={p.logo}
                alt={`${p.title} logo`}
                width={p.logoWidth}
                height={p.logoHeight}
                className={`${styles.logo} ${styles[p.logoClass]}`}
                style={{
                  objectFit: p.logoFit,
                  objectPosition: p.logoPosition,
                }}
              />
              <p>{p.desc}</p>
            </Link>
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
