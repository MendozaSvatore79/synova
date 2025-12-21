import styles from "./Home.module.scss";
import type { PropsHome } from "./interfaces";
import HeroSection from "./components/HeroSection";
import HeroImage from "./components/HeroImage";
import Brands from "./components/Brands";
import Services from "./components/Services";
function Home({}: PropsHome){
  return (
    <div className={styles.home}>
      <HeroSection />
      <HeroImage />
      <Brands />
      <Services />
    </div>
  )
}
export default Home;
