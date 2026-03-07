import styles from "./ServiceIntro.module.css";

export default function ServiceIntro({ text }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
}