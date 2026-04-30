import CTAButton from "@/components/ui/CTAButton/CTAButton";
import styles from "./CTASection.module.css";

export default function CTASection({
  eyebrow = "Let's Talk",
  title = "Tell us what you're building.",
  description = "We help teams sharpen the message, improve the experience, and move faster from idea to launch.",
  href = "/contact#contact-form",
}) {
  return (
    <section className={styles.section} aria-labelledby="shared-cta-heading">
      <div className="site-container">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id="shared-cta-heading" className={styles.title}>
              {title}
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
          <CTAButton href={href} className={styles.button} />
        </div>
      </div>
    </section>
  );
}
