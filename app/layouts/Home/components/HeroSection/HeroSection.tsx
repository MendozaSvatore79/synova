import styles from "./HeroSection.module.scss";
import type { PropsHeroSection } from "./interfaces";
import CTAButtons from "../CTAButtons";

function HeroSection({}: PropsHeroSection){
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.badge}>
          Welcome to Synova!
        </div>
        <h1 className={styles.title}>
          Inovando un futuro <span className={styles.highlight}>con tecnológia de punta</span>
        </h1>
        <h1 className={styles.title }>
          Soluciones digitales <span className={styles.highlight}>a tu alcance</span>
        </h1>
        <p className={styles.description}>
          En Synova Systems, transformamos ideas en soluciones digitales innovadoras. 
          Nuestro equipo de expertos está dedicado a crear aplicaciones web y móviles 
          que impulsan el éxito de tu negocio en la era digital.
        </p>
        <CTAButtons />
      </div>
    </section>
  );
}

export default HeroSection;