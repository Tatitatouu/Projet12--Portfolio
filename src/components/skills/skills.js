import { useState, useEffect } from "react";
import "./skills.css";
import cvImage from "../../assets/CV .png";
import cvPdf from "../../assets/CV .pdf";

const skills = [
  { name: "HTML5", value: 60 },
  { name: "CSS3", value: 45 },
  { name: "JavaScript", value: 25 },
  { name: "React", value: 40 },
];

export default function Skills() {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    skills.forEach((skill, index) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        setAnimatedValues((prevValues) => {
          const newValues = [...prevValues];
          if (currentValue < skill.value) {
            currentValue += 1;
            newValues[index] = currentValue;
            return newValues;
          } else {
            clearInterval(interval);
            return prevValues;
          }
        });
      }, 20);
    });
  }, []);

  return (
    <section id="compétences" className="skills">
      <h2 className="skills-title">Compétences
        <span className="dotsSkills dot1"> .</span>
        <span className="dotsSkills dot2">.</span>
        <span className="dotsSkills dot3">.</span>
      </h2>
      <div className="skills-wrapper">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill.name}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${animatedValues[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="cv-container">
          <div className="cv-card">
            <img src={cvImage} alt="CV" className="cv-image" />
            <a href={cvPdf} download="Mon_CV.pdf" className="cv-download-btn">
              TÉLÉCHARGER CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
