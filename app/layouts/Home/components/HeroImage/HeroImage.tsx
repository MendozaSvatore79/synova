import styles from "./HeroImage.module.scss";
import type { PropsHeroImage } from "./interfaces";
import Image from "next/image";
import hero from "@/public/img/HeroImage.jpg"
function HeroImage({ 
  src = hero,
  alt = "Modern office workspace"
}: PropsHeroImage) {
  return (
    <div className={styles.heroImage}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={700}
          className={styles.image}
          priority
        />
        <div className={styles.imageOverlay}></div>
      </div>
    </div>
  );
}

export default HeroImage;