"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Industries.module.css";

export default function IndustriesClient({ industriesData }) {
    return (
        <div className={styles.listContainer}>
            {industriesData.map((industry) => (
                <motion.div
                    key={industry.id}
                    className={styles.listItem}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                        {/* LEFT */}
                        <div className={styles.itemLeft}>
                            <span className={styles.itemNumber}>({industry.id})</span>

                            <div className={styles.itemTextContent}>
                                <h2 className={styles.itemTitle}>{industry.title}</h2>
                                <p className={styles.itemDescription}>
                                    {industry.description}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className={styles.itemRight}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={industry.image}
                                    alt={industry.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                </motion.div>
            ))}
        </div>
    );
}