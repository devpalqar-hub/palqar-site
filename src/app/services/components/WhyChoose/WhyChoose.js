"use client";

import styles from "./WhyChoose.module.css";
import { Target, Cpu, Shield, Sparkles } from "lucide-react";

const icons = [Target, Cpu, Sparkles, Shield];

export default function WhyChoose({ items }) {

  return (

    <section className={styles.section}>

      <div className={styles.container}>

        <h2 className={styles.title}>
          Why Choose <br/> PALQAR?
        </h2>

        <div className={styles.grid}>

          {items.map((item, i) => {

            const Icon = icons[i];

            return (
              <div key={i} className={styles.card}>

                <div className={styles.icon}>
                  <Icon size={36}/>
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>
            );

          })}

        </div>

      </div>

    </section>

  );
}