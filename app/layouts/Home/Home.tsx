import styles from "./Home.module.scss";
import type { PropsHome } from "./interfaces";
import HeroSection from "./components/HeroSection";
import HeroImage from "./components/HeroImage";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Team from "./components/Team";
import FAQ from "./components/faq";
import Proyects from "./components/proyects";
import Reviews from "./components/reviews";
import Footer from "../Footer";
function Home({}: PropsHome){
  return (
    <div className={styles.home}>
      <HeroSection />
      <HeroImage />
      <Brands />
      <Services />
      <Team />
      <FAQ />
      <Proyects />
      <Reviews />
    </div>
  )
}
export default Home;
