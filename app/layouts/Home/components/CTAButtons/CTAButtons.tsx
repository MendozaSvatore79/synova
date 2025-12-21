"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./CTAButtons.module.scss";
import type { PropsCTAButtons } from "./interfaces";
import Link from "next/link";

function CTAButtons({
  primaryHref="/contact",
  secondaryHref="/book"
}: PropsCTAButtons ){
  const { t } = useLanguage();

  return (
    <div className={styles.ctaButtons}>
      <Link href={primaryHref} className={styles.primaryButton}>
        {t.hero.getInTouch}
      </Link>
      <Link href={secondaryHref} className={styles.secondaryButton}>
        {t.hero.bookACall}
      </Link>
    </div>
  )
}

export default CTAButtons;
