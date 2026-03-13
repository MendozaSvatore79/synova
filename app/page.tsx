import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import PageTransition from "./layouts/PageTransition";
import Footer from "./layouts/Footer";

export default function Page() {
  return (
    <PageTransition>
      <Navbar/>
      <Home/>
      <Footer/>
    </PageTransition>
  );
}
