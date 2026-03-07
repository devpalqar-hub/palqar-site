import styles from './dnasection.module.css';

const DNASection = () => {
  const cards = [
    { title: "Global Team", image: "/carriersection/firstpic.jpeg" },
    { title: "Creative Freedom", image: "/carriersection/secondpic.jpeg" },
    { title: "Cutting Edge", image: "/carriersection/thirdpic.jpeg" },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>OUR DNA</p>
        <h2 className={styles.title}>
          We believe in <span className={styles.highlight}>radical transparency</span> and the 
          power of code to solve human problems. We don't just work; we craft experiences 
          that <span className={styles.underline}>matter</span>.
        </h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            {/* Background Layer */}
            <div 
              className={styles.cardBg} 
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            
            {/* Content Layer */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DNASection;