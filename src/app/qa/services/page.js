import Link from "next/link";
import styles from "./services.module.css";

export const metadata = {
  title: "Our Services | Palqar Qatar",
  description: "Comprehensive digital solutions in Qatar - From IT & Software to Branding, Digital Marketing, and Growth Strategy.",
};

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "IT solutions",
      desc: "Custom software and web platforms built to perform, scale, and convert.",
      items: [
        "Web design & development",
        "Custom app development",
        "Ecommerce platforms",
        "CMS & enterprise solutions",
        "SaaS product development",
        "UI/UX design"
      ],
      link: "/contact",
      linkText: "Explore IT solutions"
    },
    {
      num: "02",
      title: "Branding & design",
      desc: "Visual identity and creative systems that make your brand impossible to ignore.",
      items: [
        "Brand identity & logo design",
        "Brand strategy & positioning",
        "Packaging & print design",
        "Motion & video production",
        "Advertising & creatives",
        "Content & storytelling"
      ],
      link: "/contact",
      linkText: "Explore branding"
    },
    {
      num: "03",
      title: "Digital marketing",
      desc: "Data-driven campaigns that turn traffic into leads and leads into revenue.",
      items: [
        { name: "SEO — search engine optimisation", path: "/qa/services/digital-marketing/seo" },
        "SEM — Google & Bing paid search",
        "SMM — social media marketing",
        "Email marketing & automation",
        "Review & reputation management",
        "Influencer & affiliate marketing"
      ],
      link: "/contact",
      linkText: "Explore digital marketing"
    },
    {
      num: "04",
      title: "Growth & strategy",
      desc: "Business consulting and growth roadmaps for brands ready to scale and lead their category.",
      items: [
        "Business & corporate strategy",
        "Market & competitor research",
        "Go-to-market planning",
        "Digital transformation",
        "Marketing & brand strategy",
        "Product & financial strategy"
      ],
      link: "/contact",
      linkText: "Explore strategy"
    },
    {
      num: "05",
      title: "Content & social",
      desc: "Content that ranks on search, converts on social, and builds long-term brand authority.",
      items: [
        "Content strategy & copywriting",
        "Social media management",
        "Video & reel production",
        "Blog & SEO content writing",
        "Community management",
        "PR & media outreach"
      ],
      link: "/contact",
      linkText: "Explore content"
    }
  ];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Services Overview</p>
          <h1 className={styles.heading}>
            Solutions Built for <em>Digital Dominance</em>
          </h1>
          <p className={styles.subheading}>
            We combine high-end design with precision engineering to help brands in Qatar scale faster and smarter.
          </p>
        </section>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <span className={styles.cardNum}>{service.num}</span>
              <h2 className={styles.title}>{service.title}</h2>
              <p className={styles.desc}>{service.desc}</p>
              
              <ul className={styles.list}>
                {service.items.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <Link href={item.path}>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ul>

              <Link href={service.link} className={styles.exploreLink}>
                {service.linkText}
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}

          {/* Audit CTA Card */}
          <div className={`${styles.serviceCard} ${styles.auditCard}`}>
            <div className={styles.auditIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
              </svg>
            </div>
            <h2 className={styles.title}>Not sure what you need?</h2>
            <p className={styles.desc}>
              Book a free 30-min audit. We'll map out exactly where your digital growth is being left on the table.
            </p>
            <Link href="/contact" className={styles.auditBtn}>
              Get a free audit →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
