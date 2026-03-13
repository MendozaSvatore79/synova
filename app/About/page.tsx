import type { Metadata } from "next";
import Navbar from "@/app/layouts/Navbar";
import About from "@/app/layouts/About";
import Footer from "@/app/layouts/Footer";
import PageTransition from "@/app/layouts/PageTransition";

export const metadata: Metadata = {
  title: "Nosotros | Equipo experto en tecnología empresarial",
  description:
    "Conoce el equipo de Synova Systems y nuestra experiencia creando soluciones tecnológicas para empresas.",
  keywords: [
    "equipo de tecnología empresarial",
    "consultoría tecnológica",
    "expertos en automatización",
    "empresa de desarrollo web",
  ],
  alternates: {
    canonical: "/About",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <Navbar />
      <About />
      <Footer />
    </PageTransition>
  );
}
