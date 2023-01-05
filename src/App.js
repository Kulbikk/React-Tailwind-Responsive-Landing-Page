import Footer from "./components/Footer";
import GridDesktop from "./components/GridDesktop";
import GridMobile from "./components/GridMobile";
import Hero from "./components/Hero";
import NavHero from "./components/NavHero";


function App() {
  return (
    <div>
      <NavHero />
      <Hero />
      <GridMobile />
      <GridDesktop />
      <Footer />
    </div>
  );
}

export default App;
