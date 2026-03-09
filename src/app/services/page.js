import ServicesAccordion from "@/components/sections/Services/ServicesAccordion";
import styles from "./Services.module.css";

export const metadata = {
  title: "Services | Palqar",
  description: "Explore our services",
};

export default function ServicesPage() {
  return (
    <main>
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <span className={`${styles.title} ${styles.build} ${styles.slideLeft}`}>Build.</span>
        <span className={`${styles.title} ${styles.design} ${styles.slideUp}`}>Design.</span>
        <span className={`${styles.title} ${styles.grow} ${styles.slideRight}`}>Grow.</span>
      </div>
      <p className={styles.descPara}>From ‘meh’ to memorable that’s our creative side hustle</p>
    </div>
    <ServicesAccordion />
    </main>

  );
}