import React from "react";
import Header from "./components/header/header"
import HeroSection from "./components/hero/hero"
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import ContactForm from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />    
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;