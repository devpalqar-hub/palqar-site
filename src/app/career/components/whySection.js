import { 
  LuBriefcase, 
  LuShieldCheck, 
  LuPiggyBank, 
  LuGraduationCap 
} from "react-icons/lu";
import styles from './why.module.css';

const features = [
  {
    title: 'Hybrid Culture',
    description: 'Work from Bali, Berlin, or your Bedroom. We care about output, not IP addresses.',
    icon: <LuBriefcase size={22} color="#fff" />
  },
  {
    title: 'Full Insurance',
    description: "Mental, physical, and dental. We've got you and your loved ones covered.",
    icon: <LuShieldCheck size={22} color="#fff" />
  },
  {
    title: 'Wealth Building',
    description: 'Competitive equity packages and aggressive PF matching.',
    icon: <LuPiggyBank size={22} color="#fff" />
  },
  {
    title: 'Growth Budget',
    description: '$2,000/year for courses, books, and conferences. Keep learning.',
    icon: <LuGraduationCap size={22} color="#fff" />
  }
];

export default function WhySection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.dim}>WHY</span> PALQAR?
      </h2>
      
      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}