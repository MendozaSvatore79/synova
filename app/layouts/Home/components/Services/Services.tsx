"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./Services.module.scss";
import type { PropsServices, ServiceItem } from "./interfaces";

function Services({}: PropsServices) {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const services: ServiceItem[] = t.services.items;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className={styles.services} aria-label={t.services.kicker}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>{t.services.kicker}</p>
          <h2 className={styles.title}>{t.services.title}</h2>
          <p className={styles.subtitle}>{t.services.subtitle}</p>
        </div>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceItem} ${
                expandedIndex === index ? styles.expanded : ""
              }`}
            >
              <button
                className={styles.serviceHeader}
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
              >
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <span className={styles.toggleIcon}>
                  {expandedIndex === index ? "×" : "+"}
                </span>
              </button>

              {expandedIndex === index && (
                <div className={styles.serviceContent}>
                  <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className={styles.serviceImage}
                      />
                    </div>
                    <div className={styles.textWrapper}>
                      <h3 className={styles.contentTitle}>{service.title}</h3>
                      <p className={styles.description}>{service.description}</p>
                      <button className={styles.learnMoreBtn}>
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
