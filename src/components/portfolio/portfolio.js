import React from "react";
import "./portfolio.css";
import portfolioNono from "../../assets/portfolio-nono.png"
import portfolio724Events from "../../assets/portfolio-724events.png"
import portfolioSophieBluel from "../../assets/portfolio-sophiebluel.png"
import portfolioOhMyFood from "../../assets/portfolio-ohmyfood.png"

const projects = [
  {
    title: "Site internet pour une Coach Sportive",
    description: "Conception d'un site internet pour une amie coach sportive",
    image: portfolioNono,
    link: "https://www.noemie-coach.fr/"
  },
  {
    title: "Site pour une agence d'évènementiel - 724 Events",
    description: "#Performances  #Accessibilité  #Bonnes pratiques  #SEO",
    image: portfolio724Events,
    link: "https://github.com/Tatitatouu/Neuvi-meProjet"
  },
  {
    title: "Portfolio d'une Architecte - Sophie Bluel",
    description: "Intéraction entre le back-end et le front-end.",
    image: portfolioSophieBluel,
    link: "https://github.com/Tatitatouu/Sixi-meProjet"
  },
  {
    title: "Site d'un restaurant - Oh My Food",
    description: "Conception complète d'un site pour un restaurant",
    image: portfolioOhMyFood,
    link: "https://tatitatouu.github.io/Quatri-meProjet/"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">
        Portfolio
        <span className="dots dot1"> .</span>
        <span className="dots dot2">.</span>
        <span className="dots dot3">.</span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="portfolio-link"
          >
            <div className="portfolio-item">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <h3 className="portfolio-name">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}