import type { Metadata } from "next";
import Navbar from "@/app/layouts/Navbar";
import About from "@/app/layouts/About";
import Footer from "@/app/layouts/Footer";
import PageTransition from "@/app/layouts/PageTransition";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de Synova Systems, nuestra visión y experiencia en soluciones tecnológicas para empresas.",
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
