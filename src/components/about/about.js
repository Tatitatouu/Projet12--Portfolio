import React from "react";
import AboutImage from "../../assets/372349F8-D428-4118-878F-B7525F835DBB.JPG"; 
import { User, Briefcase, Target } from "lucide-react";
import "./about.css";

const About = () => {
  return (
    <React.Fragment>
      <section id="about" className="about-container">
        <div className="about-section">
          <div className="about-content">
            <h1 className="about-title">À propos de moi</h1>
            <p className="about-text">
              Développeuse web orientée <span className="highlight">problem-solving</span> et autodidacte depuis plus d'un an, 
              je cherche à renforcer mes compétences en développement <span className="highlight">full-stack</span>. 
              <span> Curieuse insatiable,</span> j'explore continuellement de nouveaux horizons pour enrichir mes compétences !
            </p>
          </div>
          <div className="about-image-container">
            <img 
              src={AboutImage} 
              alt="Moi" 
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="cards-grid">
          <div className="feature-card">
            <User className="feature-icon" size={40} />
            <h2 className="feature-title">Qui suis-je ?</h2>
            <p className="feature-text">
            Tatiana, 25 ans, développeuse en devenir. J'ai débuté en autodidacte avant de me former.
            </p>
          </div>

          <div className="feature-card">
            <Briefcase className="feature-icon" size={40} />
            <h2 className="feature-title">Mon parcours</h2>
            <p className="feature-text">
            Je me suis formée avec OpenClassrooms - <span className="highlight"> Développeuse Web spécialité Intégratrice Web.</span>
            </p>
          </div>

          <div className="feature-card">
            <Target className="feature-icon" size={40} />
            <h2 className="feature-title">Mon objectif</h2>
            <p className="feature-text">
            Découvrir plus en profondeur le monde du back-end, pour améliorer mes performances générales et viser le <span className="highlight">full-stack</span>, 
              en alliant rigueur et créativité.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
