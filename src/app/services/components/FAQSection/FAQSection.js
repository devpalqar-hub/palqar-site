"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ faq }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <section className={styles.section}>

      <div className={styles.container}>

        <h2 className={styles.title}>
          Frequently <br/> Asked Questions
        </h2>

        <div className={styles.list}>

          {faq.map((item, i) => (

            <div key={i} className={styles.item}>

              <button
                className={styles.question}
                onClick={() => toggle(i)}
              >

                {item.q}

                <ChevronDown
                  className={`${styles.icon} ${
                    openIndex === i ? styles.rotate : ""
                  }`}
                />

              </button>

              <div
                className={`${styles.answer} ${
                  openIndex === i ? styles.show : ""
                }`}
              >

                <p>{item.a}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}