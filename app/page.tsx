import type { Metadata } from "next";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import PageTransition from "./layouts/PageTransition";
import Footer from "./layouts/Footer";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Conoce Synova Systems y descubre cómo aceleramos procesos con tecnología, diseño y automatización empresarial.",
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
