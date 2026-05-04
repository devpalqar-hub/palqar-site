"use client";

import Link from "next/link";
import styles from "./services.module.css";
import { motion } from "framer-motion";

export default function ServicesClient({ services }) {
  return (
    <section className={styles.listSection}>
      {services.map((service, index) => (
        <motion.div 
          key={index} 
          className={styles.listItem}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.itemLeft}>
            <span className={styles.cardNum}>({service.num})</span>
            <div className={styles.itemTextContent}>
              <h2 className={styles.title}>{service.title}</h2>
              <p className={styles.desc}>{service.desc}</p>
            </div>
          </div>
          
          <div className={styles.itemRight}>
            <ul className={styles.list}>
              {service.items.map((item, i) => (
                <li key={i} className={styles.listItemInner}>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <Link href={item.path}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>

            <Link href={service.link} className={styles.exploreLink}>
              {service.linkText} →
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
