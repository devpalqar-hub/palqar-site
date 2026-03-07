import { projects } from "@/app/data/projects";
import Image from "next/image";
import styles from "./CaseStudy.module.css";
import { notFound } from "next/navigation";
import CaseBrief from "@/components/case-study/CaseBrief";
import CaseMediaGrid from "@/components/case-study/CaseMediaGrid";
import CaseProcess from "@/components/case-study/CaseProcess";
import CaseInnovation from "@/components/case-study/CaseInnovation";
import { ArrowRight } from "lucide-react";

import CleanMaria from "@/app/project-pages/CleanMaria/CleanMaria";
import Zodo from "@/app/project-pages/Zodo/Zodo";
import Doulas from "@/app/project-pages/Doulas/Doulas";

export default async function CaseStudy({ params }) {
  const { slug } = await params;

  if (slug === "zodo") return <Zodo />;
  if (slug === "bambinidoulas") return <Doulas />;
  if (slug === "cleanmaria") return <CleanMaria />;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.caseStudyWrapper}>
            <div className={styles.circle}></div>
            <h5 className={styles.caseStudy}>CASE STUDY</h5>
          </div>
          
          <h1>{project.title}</h1>
          <p className={styles.meta}>
            {project.subtitle}
          </p>
          <p className={styles.overview}>{project.desc}</p>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      <CaseBrief data={project.brief}/>

      {/* CONTENT SECTIONS */}
        {project.sections.map((section, index) => {
          const sectionNumber = String(index + 2).padStart(2, "0");

          return (
            <section
              key={index}
              className={`${styles.section} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.textBlock}>
                
                {/* NUMBER TAG (same as brief style) */}
                <div className={styles.tagRow}>
                  <span className={styles.number}>{sectionNumber}</span>
                  <span className={styles.label}>{section.label}</span>
                </div>

                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>

              <div className={styles.imageBlock}>
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className={styles.sectionImage}
                />
              </div>
            </section>
          );
        })}

        <CaseMediaGrid data={project.mediaGallery}/>
        <CaseProcess data={project.process}/>
        <CaseInnovation data={project.innovation}/>

      <section className={styles.initiateProject}>
          <div className={styles.column}>
            <span className={styles.lets}>LET'S <span className={styles.talk}>TALK</span></span>
            <div className={styles.buttonWrapper}>
              <button>
                START A PROJECT
              </button>
              <div className={styles.arrowRight}>
                <ArrowRight />  
              </div>
            </div>   
          </div>
      </section>
    </main>
  );
}