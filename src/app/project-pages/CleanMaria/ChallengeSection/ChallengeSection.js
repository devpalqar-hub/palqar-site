"use client";

import styles from "./ChallengeSection.module.css";

export default function ChallengeSection() {

  const challenges = [
    {
      num: "01",
      title: "TRUST & IDENTITY",
      desc: "Build a premium brand people trust instantly for their most private spaces."
    },
    {
      num: "02",
      title: "CONVERSION OPTIMIZATION",
      desc: "Increase qualified bookings with clear offers and effortless UX."
    },
    {
      num: "03",
      title: "END-TO-END AUTOMATION",
      desc: "Automate inquiry, estimate, schedule, reminders, and follow-ups."
    }
  ];

  return (

    <section className={styles.section}>

      <div className={styles.container}>

        {/* LEFT SIDE */}

        <div className={styles.left}>

          <h2>THE CHALLENGE</h2>

          <p>
            Clean by Maria came to us with a vision of high-end home services
            but struggled with manual operations that limited growth. They
            needed more than a website; they needed a brand system and an
            operational backbone.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className={styles.right}>

          {challenges.map((c,i)=>(
            <div key={i} className={styles.card}>

              <div className={styles.cardTop}>
                <span>{c.num}.</span>
                <h3>{c.title}</h3>
              </div>

              <p>{c.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>

  );
}