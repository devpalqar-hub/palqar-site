import styles from "./CaseMediaGrid.module.css";
import Image from "next/image";

export default function CaseMediaGrid({ data }) {
  if (!data) return null;

  return (
    <section className={styles.wrapper}>
      
      {/* HEADER */}
      <div className={styles.top}>
        <div className={styles.left}>
          <span className={styles.dot}></span>
          <span className={styles.label}>{data.label}</span>
        </div>

        <button className={styles.button}>
          {data.buttonText}
        </button>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {data.items.map((item, index) => {
          if (item.type === "dark-card") {
            return (
              <div key={index} className={styles.darkCard}>
                <span>{item.text}</span>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={`${styles.card} ${styles[item.type]}`}
            >
              <Image
                src={item.image}
                alt="media"
                fill
                className={styles.image}
              />

              {item.tag && (
                <span className={styles.tag}>{item.tag}</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}