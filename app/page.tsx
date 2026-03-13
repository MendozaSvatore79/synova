import type { Metadata } from "next";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import PageTransition from "./layouts/PageTransition";
import Footer from "./layouts/Footer";

export const metadata: Metadata = {
  title: "Soluciones tecnológicas para empresas",
  description:
    "Ayudamos a empresas a crecer con automatización, desarrollo web y soluciones técnicas a medida.",
  keywords: [
    "soluciones tecnológicas para empresas",
    "automatización empresarial",
    "desarrollo web empresarial",
    "software a medida",
    "consultoría tecnológica",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <PageTransition>
      <Navbar/>
      <Home/>
      <Footer/>
    </PageTransition>
  );
}
