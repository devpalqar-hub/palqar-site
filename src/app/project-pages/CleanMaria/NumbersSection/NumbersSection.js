"use client";

import styles from "./NumbersSection.module.css";

export default function NumbersSection(){

  const metrics = [
    {value:"85%",label:"ADMIN HOURS SAVED"},
    {value:"< 2MIN",label:"RESPONSE TIME"},
    {value:"40%",label:"REPEAT BOOKING UPLIFT"},
    {value:"300%",label:"REVIEW VOLUME INCREASE"},
    {value:"60%",label:"NO-SHOW REDUCTION"},
    {value:"3.5X",label:"MONTHLY REVENUE"}
  ];

  return(

    <section className={styles.section}>

      {/* TITLE */}

      <div className={styles.header}>

        <h2>THE NUMBERS</h2>

        <p>
          HARD METRICS FROM 12 MONTHS POST-LAUNCH.
        </p>

      </div>


      {/* METRICS */}

      <div className={styles.metrics}>

        {metrics.map((m,i)=>(
          <div key={i} className={styles.metric}>

            <h3>{m.value}</h3>

            <span>{m.label}</span>

          </div>
        ))}

      </div>


      {/* TESTIMONIAL */}

      <div className={styles.testimonial}>

        <span className={styles.tag}>
          CLIENT TESTIMONIAL
        </span>

        <p className={styles.quote}>
          "WORKING WITH THIS TEAM CHANGED EVERYTHING.
          WE WENT FROM A 'CLEANING BUSINESS' TO A
          TECH-ENABLED SERVICE COMPANY. OUR REVENUE
          IS UP, AND OUR STRESS IS DOWN."
        </p>

        <div className={styles.author}>

          <div className={styles.avatar}>
            M
          </div>

          <div>

            <strong>MARIA RODRIGUEZ</strong>

            <span>FOUNDER, CLEAN BY MARIA</span>

          </div>

        </div>

      </div>

    </section>

  );

}