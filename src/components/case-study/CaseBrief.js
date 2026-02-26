import styles from "./CaseBrief.module.css";

export default function CaseBrief({ data }) {
  if (!data) return null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <span className={styles.number}>{data.number}</span>
            <span className={styles.label}>{data.label}</span>
          </div>
          <h2 className={styles.title}>{data.heading}</h2>
        </div>

        <div className={styles.right}>
          <p className={styles.description}>{data.description}</p>

          <div className={styles.bottomGrid}>
            <div>
              <h4>THE CHALLENGE</h4>
              <p>{data.challenge}</p>
            </div>

            <div>
              <h4>THE OBJECTIVE</h4>
              <p>{data.objective}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}