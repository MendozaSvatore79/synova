import type { Metadata } from "next";
import Navbar from "@/app/layouts/Navbar";
import Footer from "@/app/layouts/Footer";
import PageTransition from "@/app/layouts/PageTransition";
import Services from "@/app/layouts/Home/components/Services";

export const metadata: Metadata = {
  title: "Servicios de automatización y desarrollo web",
  description:
    "Explora nuestros servicios de automatización, desarrollo web e integraciones para optimizar procesos empresariales.",
  keywords: [
    "servicios de automatización y desarrollo web",
    "integraciones empresariales",
    "optimización de procesos",
    "desarrollo web para empresas",
  ],
  alternates: {
    canonical: "/Servicios",
  },
};

export default function ServiciosPage() {
  return (
    <PageTransition>
      <Navbar />
      <Services />
      <Footer />
    </PageTransition>
  );
}
