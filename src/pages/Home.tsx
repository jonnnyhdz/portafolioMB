import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import Certifications from "../components/sections/Certifications";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Certifications />
      <Contact />
    </>
  );
}

export default Home;