"use client";

import Image from "next/image";
import styles from "./InternSection.module.css";
import { LuCpu, LuSmile } from "react-icons/lu";

export default function InternSection() {
  return (
    <section className={styles.section}>
        {/* Background Words */}
        <div className={styles.bgText}>
            <span>INTERN</span>
            <span>LEARN</span>
            <span>GROW</span>
        </div>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>STUDENTS & GRADS</span>

          <h1 className={styles.heading}>
            DON&apos;T FETCH COFFEE.
            <br />
            <span>SHIP CODE.</span>
          </h1>

          <p className={styles.description}>
            Our internship program is a bootcamp for future leaders.
            You&apos;ll work on production code, break things, and fix them
            before anyone notices.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h2>95%</h2>
              <p>HIRING RATE</p>
            </div>
            <div className={styles.statItem}>
              <h2>50+</h2>
              <p>GRADUATES</p>
            </div>
          </div>

          <button className={styles.button}>
            START YOUR JOURNEY
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.right}>

          <div className={styles.rotateright}>
            {/* Quote Card White */}
            <div className={`${styles.card} ${styles.quoteWhite}`}>
              <LuSmile size={40}/>
              <p className={styles.quoteText}>
                &quot;I shipped a feature to 1M users in week 2.&quot;
              </p>
              <span className={styles.quoteAuthor}>
                — Alex, Eng Intern
              </span>
            </div>

            {/* Image 1 */}
            <div className={`${styles.card} ${styles.imageCardTop}`}>
              <Image
                src="/career/img1.jpg"
                alt="Intern team"
                fill
                className={styles.image}
              />
            </div>

            {/* Image 2 */}
            <div className={`${styles.card} ${styles.imageCardBottom}`}>
              <Image
                src="/career/img2.jpg"
                alt="Intern coding"
                fill
                className={styles.image}
              />
            </div>

            {/* Quote Card Black */}
            <div className={`${styles.card} ${styles.quoteBlack}`}>
              <LuCpu size={40} color="#DC3545"/>
              <p className={styles.quoteTextBlack}>
                &quot;Mentorship here is actually insane.&quot;
              </p>
              <span className={styles.quoteAuthorBlack}>
                — Sarah, Design Intern
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}