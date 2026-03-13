"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./About.module.scss";
import type { PropsAbout } from "./interfaces";

function About({}: PropsAbout) {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.kicker}>{a.hero.kicker}</span>
          <h1 className={styles.heroTitle}>{a.hero.title}</h1>
          <p className={styles.heroDesc}>{a.hero.description}</p>
          <div className={styles.heroBtns}>
            <a className={styles.btnPrimary} href="#">{a.hero.cta1}</a>
            <a className={styles.btnSecondary} href="#">{a.hero.cta2}</a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop"
            alt="Our office"
          />
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className={styles.brands}>
        <p className={styles.brandsTitle}>{a.brands.title}</p>
        <div className={styles.brandsGrid}>
          {a.brands.items.map((item, i) => (
            <span key={i} className={styles.brandItem}>{item}</span>
          ))}
        </div>
      </section>

      {/* ── SNAPSHOT ── */}
      <section className={styles.snapshot}>
        <div className={styles.snapshotHeader}>
          <div>
            <span className={styles.kicker}>{a.snapshot.kicker}</span>
            <h2 className={styles.sectionTitle}>{a.snapshot.title}</h2>
            <p className={styles.sectionDesc}>{a.snapshot.description}</p>
          </div>
          <a className={styles.btnPrimary} href="#">{a.snapshot.cta}</a>
        </div>
        <div className={styles.snapshotGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{a.snapshot.stats[0].value}</span>
            <p className={styles.statLabel}>{a.snapshot.stats[0].label}</p>
            <p className={styles.statDesc}>{a.snapshot.stats[0].description}</p>
          </div>
          <div className={styles.snapshotImgLarge}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop"
              alt="Team at work"
            />
          </div>
          <div className={styles.statCardDark}>
            <span className={styles.statNumber}>{a.snapshot.stats[1].value}</span>
            <p className={styles.statLabelLight}>{a.snapshot.stats[1].label}</p>
            <p className={styles.statDescLight}>{a.snapshot.stats[1].description}</p>
          </div>
          <div className={styles.statCardGreen}>
            <span className={styles.statNumber}>{a.snapshot.stats[2].value}</span>
            <p className={styles.statLabel}>{a.snapshot.stats[2].label}</p>
            <p className={styles.statDesc}>{a.snapshot.stats[2].description}</p>
          </div>
          <div className={styles.snapshotImgSmall}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop"
              alt="Team meeting"
            />
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.team}>
        <span className={styles.kicker}>{a.team.kicker}</span>
        <h2 className={styles.sectionTitle}>{a.team.title}</h2>
        <p className={styles.sectionDesc}>{a.team.subtitle}</p>
        <div className={styles.teamGrid}>
          {a.team.members.map((m) => (
            <article key={m.name} className={styles.memberCard}>
              <div className={styles.memberImg}>
                <img src={m.image} alt={m.name} />
              </div>
              <h3 className={styles.memberName}>{m.name}</h3>
              <p className={styles.memberRole}>{m.role}</p>
              <p className={styles.memberBio}>{m.bio}</p>
              <div className={styles.memberLinks}>
                <a className={styles.socialBtn} href={m.linkedin} aria-label="LinkedIn">in</a>
                <a className={styles.socialBtn} href={m.twitter} aria-label="Twitter">𝕏</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={styles.values}>
        <span className={styles.kicker}>{a.values.kicker}</span>
        <h2 className={styles.sectionTitle}>{a.values.title}</h2>
        <div className={styles.valuesGrid}>
          {a.values.items.map((v, i) => (
            <div key={v.title} className={`${styles.valueCard} ${i % 3 === 0 ? styles.valueCardGreen : ""}`}>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <span className={styles.kicker}>{a.cta.kicker}</span>
          <h2 className={styles.ctaTitle}>{a.cta.title}</h2>
          <p className={styles.ctaDesc}>{a.cta.description}</p>
          <div className={styles.heroBtns}>
            <a className={styles.btnPrimary} href="#">{a.cta.btn1}</a>
            <a className={styles.btnSecondary} href="#">{a.cta.btn2}</a>
          </div>
        </div>
        <div className={styles.ctaImage}>
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop"
            alt="Work together"
          />
        </div>
      </section>
    </main>
  );
}

export default About;

