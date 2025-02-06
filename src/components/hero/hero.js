import React from "react";
import { ReactTyped } from "react-typed";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h2>Bonjour !</h2>
      <p>Je recherche actuellement <strong>
        <ReactTyped
          strings={[
            "une Alternance dans le Développement Web",
            "un maximum d'opportunité pour évoluer",
            "une équipe avec qui évoluer",
            "un projet innovant à développer"
          ]}
          typeSpeed={80}
          backSpeed={30}
          loop
        />
      </strong></p>
    </section>
  );
};

export default HeroSection;