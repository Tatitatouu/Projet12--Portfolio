import React from "react";
import "./portfolio.css";
import portfolioNono from "../../assets/portfolio-nono.png"
import portfolio724Events from "../../assets/portfolio-724events.png"
import portfolioSophieBluel from "../../assets/portfolio-sophiebluel.png"
import portfolioOhMyFood from "../../assets/portfolio-ohmyfood.png"

const projects = [
  {
    title: "Site internet pour une amie Coach Sportive",
    description: "Site internet pour une amie Coach Sportive",
    image: portfolioNono,
    link: "https://tatitatouu.github.io/ProjetNono/"
  },
  {
    title: "Site pour une agence d'évènementiel - 724 Events",
    description: "Site pour une agence d'évènementiel",
    image: portfolio724Events,
    link: "https://github.com/Tatitatouu/Neuvi-meProjet"
  },
  {
    title: "Portfolio d'une Architecte - Sophie Bluel",
    description: "Site pour traduction Markdown",
    image: portfolioSophieBluel,
    link: "https://github.com/Tatitatouu/Sixi-meProjet"
  },
  {
    title: "Site d'un restaurant - Oh My Food",
    description: "Application machine à samples",
    image: portfolioOhMyFood,
    link: "https://tatitatouu.github.io/Quatri-meProjet/"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">PORTFOLIO...</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3 className="portfolio-name">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}