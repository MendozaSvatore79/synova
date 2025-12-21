"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./HeroSection.module.scss";
import type { PropsHeroSection } from "./interfaces";
import CTAButtons from "../CTAButtons";

function HeroSection({}: PropsHeroSection){
  const { t } = useLanguage();

  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.badge}>
          {t.hero.badge}
        </div>
        <h1 className={styles.title}>
          {t.hero.title}
        </h1>
        <h1 className={styles.title }>
          {t.hero.subtitle}
        </h1>
        <p className={styles.description}>
          {t.hero.description}
        </p>
        <CTAButtons />
      </div>
    </section>
  );
}

export default HeroSection;