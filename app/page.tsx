import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import PageTransition from "./layouts/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <Navbar/>
      <Home/>      
    </PageTransition>
  );
}
