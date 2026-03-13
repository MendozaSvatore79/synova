"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { useState, useRef, useEffect } from "react";
import styles from "./faq.module.scss";
import type { Propsfaq } from "./interfaces";

function FAQ({}: Propsfaq) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.faq} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>{t.faq.kicker}</span>
          <h2 className={styles.title}>{t.faq.title}</h2>
          <p className={styles.subtitle}>{t.faq.subtitle}</p>
        </div>

        <div className={styles.questions}>
          {t.faq.questions.map((item, index) => (
            <div
              key={index}
              className={`${styles.questionItem} ${
                openIndex === index ? styles.open : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className={styles.questionButton}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className={styles.answer}>
                <div className={styles.answerContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>{t.faq.cta.title}</h3>
          <p className={styles.ctaDescription}>{t.faq.cta.description}</p>
          <button className={styles.ctaButton}>{t.faq.cta.buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
