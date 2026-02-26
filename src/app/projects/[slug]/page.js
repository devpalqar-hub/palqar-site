import { projects } from "@/app/data/projects";
import Image from "next/image";
import styles from "./CaseStudy.module.css";
import { notFound } from "next/navigation";
import CaseBrief from "@/components/case-study/CaseBrief";
import CaseMediaGrid from "@/components/case-study/CaseMediaGrid";
import CaseProcess from "@/components/case-study/CaseProcess";
import CaseInnovation from "@/components/case-study/CaseInnovation";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Palqar`,
    description: project.overview,
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;

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
            <h5 className={styles.header}>NEXT CHAPTER</h5>
            <div className={styles.title}>Architecting</div>
            <div className={styles.title}>the Next.</div>
            <p>Ready to redefine your industry? Let's build a digital product that doesn't just work, but leads.</p>
            <div className={styles.buttonWrapper}>
              <button>
                INITIATE PROJECT
              </button>
              <ArrowRight />
            </div>   
          </div>
          <div className={styles.bottom}>
            <span>SYNERGY</span>
            <span>VERTICE</span>
            <span>QUANTUM</span>
            <span>NOVA</span>
          </div>
      </section>
    </main>
  );
}