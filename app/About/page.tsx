import Navbar from "@/app/layouts/Navbar";
import About from "@/app/layouts/About";
import Footer from "@/app/layouts/Footer";
import PageTransition from "@/app/layouts/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <Navbar />
      <About />
      <Footer />
    </PageTransition>
  );
}
