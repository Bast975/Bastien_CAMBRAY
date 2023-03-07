import React, { useContext } from "react";
import "../main.css";
import "../light.css";
import { ModeContext } from '../App';
import { contentCV } from "./Data";
function CV(props) {
  const modecontext = useContext(ModeContext)
  let content = contentCV;

  props.language === "English"
    ? (content = content.English)
    : (content = content.Français);


  return <section id="resume" className="resume">
    <div className="container">
      <br />
      <div className={`section-title-${modecontext.mode} text-center`}>
        <h2>CV</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h3 className={`resume-title-${modecontext.mode}`}>{content.title1}</h3>
          <div className={`resume-item-${modecontext.mode} pb-0`}>
            <h4>Bastien CAMBRAY</h4>
            <p><em>{content.situation}</em></p>
            <ul>
              <li>{content.languages}</li>
              <li>{content.habitation}</li>
              <li>bastiencambray.work@gmail.com</li>
            </ul>
          </div>
          <h3 className={`resume-title-${modecontext.mode}`}>{content.title2}</h3>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.diplome.diplome1.title}</h4>
            <h5>08/2020 - 05/2023</h5>
            <p><em>{content.diplome.diplome1.place}</em></p>
            <p></p>
          </div>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.diplome.diplome2.title}</h4>
            <h5>09/2016 - 07/2019</h5>
            <p><em>{content.diplome.diplome2.place}</em></p>
            <p></p>
          </div>
          <h3 className={`resume-title-${modecontext.mode}`}> {content.title3} </h3>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.work.work1.title}</h4>
            <h5>01/2020 - 07/2020 </h5> <h5> 05/2021 - 08/2021 </h5> <h5> 07/2022 - 08/2022</h5>
            <p><em>{content.work.work1.place}</em></p>
            <p>{content.work.work1.desc}</p>
          </div>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.work.work2.title}</h4>
            <h5>05/2022 - 06/2022</h5>
            <p><em>{content.work.work2.place}</em></p>
            <p>{content.work.work2.desc}</p>
          </div>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.work.work3.title}</h4>
            <h5>07/2018 - 09/2018</h5> <h5>06/2019 - 12/2019</h5>
            <p><em>{content.work.work3.place}</em></p>
            <p>{content.work.work3.desc}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className={`resume-title-${modecontext.mode}`}>{content.title4}</h3>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>DEV</h4>
            <p>HTML - CSS - JavaScript - SQL - Python - Java - GIT - Trello - Vue.js - API - REST - Swagger - Node.js - Express - No-SQL - Kotlin - React - Bulma - Bootstrap </p>
          </div>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>Générales</h4>
            <p>{content.skills}</p>
          </div>
          <h3 className={`resume-title-${modecontext.mode}`}> {content.title5} </h3>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.professional.stage1.title}</h4>
            <h5>03/2019</h5>
            <p><em>{content.professional.stage1.place}</em></p>
            <p>{content.professional.stage1.desc}</p>
          </div>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.professional.stage2.title}</h4>
            <h5>11/2017</h5> <h5>10/2018</h5>
            <p><em>{content.professional.stage2.place}</em></p>
            <p>{content.professional.stage2.desc}</p>
          </div>
          <h3 className={`resume-title-${modecontext.mode}`}> {content.title6} </h3>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.other.interests.title}</h4>
            <p>{content.other.interests.desc}</p>
          </div>
          <div className={`resume-item-${modecontext.mode}`}>
            <h4>{content.other.projects.title}</h4>
            <p>{content.other.projects.desc}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default CV;