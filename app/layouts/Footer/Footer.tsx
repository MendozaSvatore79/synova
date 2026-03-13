"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./Footer.module.scss";
import type { PropsFooter } from "./interfaces";

function Footer({}: PropsFooter) {
  const { t } = useLanguage();
  const socialIcons = ["f", "ig", "x", "in"];

  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.logoBadge}>
            <img
              src="/file.svg"
              alt="Synova Systems"
              className={styles.logoSvg}
            />
          </div>

          <div className={styles.newsletter}>
            <p className={styles.newsletterTitle}>{t.footer.newsletter.title}</p>
            <div className={styles.newsletterForm}>
              <input
                className={styles.newsletterInput}
                placeholder={t.footer.newsletter.placeholder}
                type="email"
              />
              <button className={styles.newsletterButton}>
                {t.footer.newsletter.button}
              </button>
            </div>
            <p className={styles.newsletterNote}>{t.footer.newsletter.note}</p>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.columnTitle}>{t.footer.quickLinks.title}</p>
            <ul className={styles.list}>
              {t.footer.quickLinks.items.map((item) => (
                <li key={item}>
                  <a className={styles.footerLink} href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>{t.footer.contact.title}</p>
            <ul className={styles.list}>
              <li>
                <a className={styles.footerLink} href="tel:01234567890">
                  {t.footer.contact.phone}
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="mailto:info@nova.agency">
                  {t.footer.contact.email}
                </a>
              </li>
              {t.footer.contact.addressLines.map((line) => (
                <li key={line}>
                  <span className={styles.footerText}>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>{t.footer.follow.title}</p>
            <ul className={styles.socialList}>
              {t.footer.follow.items.map((label, index) => (
                <li key={label} className={styles.socialItem}>
                  <span className={styles.socialIcon}>
                    {socialIcons[index] || "•"}
                  </span>
                  <a className={styles.footerLink} href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span>{t.footer.bottomLeft}</span>
        <span>{t.footer.bottomRight}</span>
      </div>
    </footer>
  );
}

export default Footer;
