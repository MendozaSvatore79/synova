import styles from "./HeroImage.module.scss";
import type { PropsHeroImage } from "./interfaces";

function HeroImage({ 
  src = "/videos/hero.video.mp4",
  alt = "Modern office workspace"
}: PropsHeroImage) {
  return (
    <div className={styles.heroImage}>
      <div className={styles.imageWrapper}>
        <video
          src={src}
          className={styles.image}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.imageOverlay}></div>
      </div>
    </div>
  );
}

export default HeroImage;