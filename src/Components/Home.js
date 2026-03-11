import React, { useContext } from "react";
import "../main.css";
import "../light.css";
import { portfolioContent } from "./Data"; // adapte si ton fichier s'appelle autrement
import { ModeContext } from "../App";

function Home(props) {
  const modecontext = useContext(ModeContext);

  let content = portfolioContent;
  props.language === "English"
    ? (content = content.English)
    : (content = content.Français);

  return (
    <div className="home-container">
      <section className={`hero-section-${modecontext.mode}`}>
        <p className="hero-kicker">{content.home.kicker}</p>
        <h1 className="hero-title">{content.home.name}</h1>
        <h2 className="hero-subtitle">{content.home.subtitle}</h2>
        <p className="hero-description">{content.home.description}</p>
      </section>

      <section className={`content-section-${modecontext.mode}`}>
        <div className={`section-title-${modecontext.mode} text-center`}>
          <h2>{content.home.aboutTitle}</h2>
        </div>
        <p className="section-text">{content.home.aboutText1}</p>
        <p className="section-text">{content.home.aboutText2}</p>
      </section>

      <section className={`content-section-${modecontext.mode}`}>
        <div className={`section-title-${modecontext.mode} text-center`}>
          <h2>{content.home.experienceTitle}</h2>
        </div>

        <div className={`info-card-${modecontext.mode}`}>
          <h3>{content.home.exp1Title}</h3>
          <p className="card-meta">{content.home.exp1Meta}</p>
          <p className="section-text">{content.home.exp1Text}</p>
        </div>

        <div className={`info-card-${modecontext.mode}`}>
          <h3>{content.home.exp2Title}</h3>
          <p className="card-meta">{content.home.exp2Meta}</p>
          <p className="section-text">{content.home.exp2Text}</p>
        </div>

        <div className={`info-card-${modecontext.mode}`}>
          <h3>{content.home.exp3Title}</h3>
          <p className="card-meta">{content.home.exp3Meta}</p>
          <p className="section-text">{content.home.exp3Text}</p>
        </div>
      </section>

      <section className={`content-section-${modecontext.mode}`}>
        <div className={`section-title-${modecontext.mode} text-center`}>
          <h2>{content.home.skillsTitle}</h2>
        </div>

        <div className="skills-grid">
          <div className={`info-card-${modecontext.mode}`}>
            <h3>{content.home.skill1Title}</h3>
            <p className="section-text">{content.home.skill1Text}</p>
          </div>

          <div className={`info-card-${modecontext.mode}`}>
            <h3>{content.home.skill2Title}</h3>
            <p className="section-text">{content.home.skill2Text}</p>
          </div>

          <div className={`info-card-${modecontext.mode}`}>
            <h3>{content.home.skill3Title}</h3>
            <p className="section-text">{content.home.skill3Text}</p>
          </div>
        </div>
      </section>

      <section className={`content-section-${modecontext.mode}`}>
        <div className={`section-title-${modecontext.mode} text-center`}>
          <h2>{content.home.workTitle}</h2>
        </div>

        <div className={`info-card-${modecontext.mode}`}>
          <h3>{content.home.work1Title}</h3>
          <p className="section-text">{content.home.work1Text}</p>
        </div>

        <div className={`info-card-${modecontext.mode}`}>
          <h3>{content.home.work2Title}</h3>
          <p className="section-text">{content.home.work2Text}</p>
        </div>

        <div className={`info-card-${modecontext.mode}`}>
          <h3>{content.home.work3Title}</h3>
          <p className="section-text">{content.home.work3Text}</p>
        </div>
      </section>

      <section className={`content-section-${modecontext.mode}`}>
        <div className={`section-title-${modecontext.mode} text-center`}>
          <h2>{content.home.contactTitle}</h2>
        </div>
        <p className="section-text">{content.home.contactText}</p>
      </section>
    </div>
  );
}

export default Home;