"use client";

import styles from "./reviews.module.scss";
import type { Propsreviews } from "./interfaces";
import { useLanguage } from "@/app/i18n/LanguageContext";

function Reviews({}: Propsreviews) {
  const { t } = useLanguage();
  const reviews = t.reviews.items;

  return (
    <section className={styles.section} aria-label={t.reviews.kicker}>
      <div className={styles.header}>
        <span className={styles.kicker}>{t.reviews.kicker}</span>
        <h2 className={styles.title}>{t.reviews.title}</h2>
        <p className={styles.subtitle}>{t.reviews.subtitle}</p>
      </div>

      <div className={styles.grid}>
        {reviews.map((item) => (
          <article key={item.name} className={styles.card}>
            <div className={styles.stars}>
              {Array.from({ length: item.stars }).map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
            <p className={styles.quote}>"{item.quote}"</p>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.role}>{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;