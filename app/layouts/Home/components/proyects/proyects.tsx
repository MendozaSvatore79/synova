"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./proyects.module.scss";
import type { Propsproyects } from "./interfaces";

function Proyects({}: Propsproyects) {
  const { t } = useLanguage();
  const projects = t.projects.items;
  return (
    <section className={styles.section} aria-label={t.projects.kicker}>
      <div className={styles.header}>
        <div>
          <span className={styles.kicker}>{t.projects.kicker}</span>
          <h2 className={styles.title}>{t.projects.title}</h2>
          <p className={styles.subtitle}>{t.projects.subtitle}</p>
        </div>
        <button className={styles.viewAll}>{t.projects.viewAll}</button>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a className={styles.viewProject} href="#">
              {t.projects.viewProject}
              <span className={styles.arrow}>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Proyects;