import styles from "./CTAButtons.module.scss";
import type { PropsCTAButtons } from "./interfaces";
import Link from "next/link";

function CTAButtons({
  primaryText = "Get in touch",
  secondaryText = "Book a call",
  primaryHref="/contact",
  secondaryHref="/book"
}: PropsCTAButtons ){
  return (
    <div className={styles.ctaButtons}>
      <Link href={primaryHref} className={styles.primaryButton}>
      {primaryText}
      </Link>
      <Link href={secondaryHref} className={styles.secondaryButton}>
      {secondaryText}
      </Link>
    </div>
  )
}

export default CTAButtons;
