"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./Brands.module.scss";
import type { BrandItem, PropsBrands } from "./interfaces";

const brands: BrandItem[] = [
  {
    name: "Northwind",
    url: "https://northwindtraders.com",
    tagline: "Cloud commerce",
    accent: "linear-gradient(135deg, #111827, #0ea5e9)",
    textColor: "#f8fafc",
    initials: "NW",
  },
  {
    name: "Lumen",
    url: "https://lumen.com",
    tagline: "AI infrastructure",
    accent: "linear-gradient(135deg, #0f172a, #22d3ee)",
    textColor: "#e2f3ff",
    initials: "LM",
  },
  {
    name: "Vertex",
    url: "https://vertex.com",
    tagline: "Design platform",
    accent: "linear-gradient(135deg, #111827, #a855f7)",
    textColor: "#f3e8ff",
    initials: "VX",
  },
  {
    name: "Helio",
    url: "https://helio.com",
    tagline: "Data vision",
    accent: "linear-gradient(135deg, #0f172a, #f97316)",
    textColor: "#fff7ed",
    initials: "HL",
  },
  {
    name: "Orbit",
    url: "https://orbit.com",
    tagline: "Fintech core",
    accent: "linear-gradient(135deg, #111827, #22c55e)",
    textColor: "#ecfdf3",
    initials: "OB",
  },
  {
    name: "Nova",
    url: "https://nova.com",
    tagline: "Product ops",
    accent: "linear-gradient(135deg, #0f172a, #eab308)",
    textColor: "#fefce8",
    initials: "NV",
  },
];

function Brands({}: PropsBrands) {
  const { t } = useLanguage();
  const loopedBrands = [...brands, ...brands];

  return (
    <section className={styles.brands} aria-label={t.brands.kicker}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>{t.brands.kicker}</p>
          <h2 className={styles.title}>{t.brands.title}</h2>
          <p className={styles.subtitle}>
            {t.brands.subtitle}
          </p>
        </div>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {loopedBrands.map((brand, index) => (
              <a
                key={`${brand.name}-${index}`}
                href={brand.url}
                className={styles.card}
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className={styles.icon}
                  style={{ background: brand.accent, color: brand.textColor || "#0f172a" }}
                >
                  {brand.initials || brand.name.charAt(0)}
                </span>
                <span className={styles.meta}>
                  <span className={styles.name}>{brand.name}</span>
                  <span className={styles.tagline}>{brand.tagline}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
