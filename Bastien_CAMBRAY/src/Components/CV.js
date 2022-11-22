import React, { useContext } from "react";
import "../main.css";
import { ModeContext } from '../App';

function CV(props) {
  const modecontext = useContext(ModeContext)

  let content = {
    English: {
      title1: "Summary",
      title2: "Education",
      title3: "Work experience",
      title4: "Skills",
      title5: "Professional experiences",
      title6: "Others",
      situation: "Student in Technical DEC - Application Development",
      languages: "French, English",
      habitation: "Montreal, QC, Canada",
      diplome: {
        diplome1:{
          title: "COMPUTER SCIENCE DEC - APPLICATION DEVELOPMENT",
          place: "College de Maisonneuve , Montreal, Quebec, Canada",
        },
        diplome2:{
          title:  "PROFESSIONAL BACCALAUREATE - DIGITAL SYSTEM",
          place: "Émile Letournel State High School, Saint-Pierre and Miquelon, France",
        } 
      },
      work: {
        work1:{
          title:"Delivery man",
          place: "Cambray et fils company, Saint-Pierre and Miquelon, France",
          desc: "Delivery - Moving - Driving loaded vans - Scheduling deliveries",
        },
        work2:{
          title:"STOCK AGENT",
          place: "Vélo Québec, Montreal, Quebec, Canada",
          desc: "Order preparation - Warehouse relocation - Truck loading and driving",
        },
        work3:{
          title:"CONSTRUCTION AND PUBLIC WORKS (DRILLER / BLAST)",
          place: "GIE, Saint-Pierre and Miquelon, France",
          desc: "Use of drill - Preparation of mine blast - Assistance in blasting dynamite",
        },
      },
      skills: "Dynamic – Serious – Punctual – Motivated – Enthusiastic - Friendly - Ambitious",
      professional: {
        stage1: {
          title: "APPLICATION DEVELOPMENT INTERNSHIP",
          place: "DGAC, Saint-Pierre and Miquelon, France",
          desc: "Creating a Microsoft Access database with a graphical interface"
        },
        stage2: {
          title: "COMPUTER TECHNICIAN INTERNSHIP",
          place: "LANDRY AVI, Saint-Pierre and Miquelon, France",
          desc: "Configuration of TV for sale and iPad for business. Installation and dismantling of computers. Repair of various equipment"
        }
      }, 
      other: {
        interests: {
          title:"interests",
          desc:"New technologies (Blockchain, WEB 3.0) - Sports (Calisthenics, Bodybuilding, Gymnastics) - Investments - Personal development - Music - DC Comics - Travel"
        },
        projects:{
          title:"Future Projects",
          desc:"Website (personal) - Mobile application (Calisthenia) - Development training (Blockchain) - Coaching training (Calisthenia)"
        }
      }
    },
    Français: {
      title1: "Sommaire",
      title2: "Éducation",
      title3: "Expériences de travail",
      title4: "Compétences",
      title5: "Expériences professionnelles",
      title6: "Autres",
      situation: "Étudiant en DEC Technique - développement d'applications.",
      languages: "Français, Anglais",
      habitation: "Montréal, QC, Canada",
      diplome: {
        diplome1:{
          title: "DEC INFORMATIQUE - DÉVELOPPEMENT D'APPLICATIONS",
          place: "Collège de Maisonneuve , Montréal, Québec, Canada",
        },
        diplome2:{
          title:  "BACCALAURÉAT PROFESSIONNEL - SYSTÈME NUMÉRIQUE",
          place: "Lycée d’État Émile Letournel , Saint-Pierre et Miquelon, France"
        } 
      },
      work: {
        work1:{
          title:"Chauffeur - Livreur",
          place: "Entreprise Cambray et fils, Saint-Pierre et Miquelon, France",
          desc: "Livraison - Déménagement - Conduites de camionnettes chargées - Planification des livraisons",
        },
        work2:{
          title:"AGENT DE STOCK",
          place: "Vélo Québec, Montréal, Québec, Canada",
          desc: "Préparations de commandes - Déménagement d'entrepôt - Chargement et conduites de camions",
        },
        work3:{
          title:"BÂTIMENT ET TRAVAUX PUBLICS (FOREUR / DYNAMITEUR)",
          place: "GIE , Saint-Pierre et Miquelon, France",
          desc: "Utilisation de foreuse - Préparation de tire de mine - Assistance au tir de dynamite"
        },
      },
      skills: "Dynamique – Sérieux – Ponctuel – Motivé – Enthousiaste - Amical - Ambitieux",
      professional: {
        stage1: {
          title: "STAGE DÉVELOPPEMENT D'APPLICATIONS",
          place: "DGAC, Saint-Pierre et Miquelon, France",
          desc: "Création d’une base de données Microsoft Access avec une interface graphique"
        },
        stage2: {
          title: "STAGE TECHNICIEN INFORMATIQUE",
          place: "LANDRY AVI, Saint-Pierre et Miquelon, France",
          desc: "Configuration de TV pour mises en vente et iPad pour entreprise. Installation et démontage d’ordinateurs. Réparation de divers matériel"
        }
      },
      other: {
        interests: {
          title:"intérêts",
          desc:"Nouvelles technologies (Blockchain, WEB 3.0) - Sports (Calisthénie, Musculation, Gymnastique) - Investissements - Développement personnel - Musiques - DC Comics - Voyages"
        },
        projects:{
          title:"Projets futurs",
          desc:"Site web (perso) - Application mobile (Calisthénie) - Formation développement (Blockchain) - Formation coaching (Calisthénie)"
        }
      }
    }
  };

  props.language === "English"
    ? (content = content.English)
    : (content = content.Français);


  return <section id="resume" className="resume">
    <div className="container">
      <br />
      <div className={`section-title-${modecontext.mode}`}>
        <h2>CV</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">{content.title1}</h3>
          <div className="resume-item pb-0">
            <h4>Bastien CAMBRAY</h4>
            <p><em>{content.situation}</em></p>
            <ul>
              <li>{content.languages}</li>
              <li>{content.habitation}</li>
              <li>bastiencambray975@gmail.com</li>
            </ul>
          </div>
          <h3 className="resume-title">{content.title2}</h3>
          <div className="resume-item">
            <h4>{content.diplome.diplome1.title}</h4>
            <h5>08/2020 - 05/2023</h5>
            <p><em>{content.diplome.diplome1.place}</em></p>
            <p></p>
          </div>
          <div className="resume-item">
            <h4>{content.diplome.diplome2.title}</h4>
            <h5>09/2016 - 07/2019</h5>
            <p><em>{content.diplome.diplome2.place}</em></p>
            <p></p>
          </div>
          <h3 className="resume-title"> {content.title3} </h3>
          <div className="resume-item">
            <h4>{content.work.work1.title}</h4>
            <h5>01/2020 - 07/2020 </h5> <h5> 05/2021 - 08/2021 </h5> <h5> 07/2022 - 08/2022</h5>
            <p><em>{content.work.work1.place}</em></p>
            <p>{content.work.work1.desc}</p>
          </div>
          <div className="resume-item">
            <h4>{content.work.work2.title}</h4>
            <h5>05/2022 - 06/2022</h5>
            <p><em>{content.work.work2.place}</em></p>
            <p>{content.work.work2.desc}</p>
          </div>
          <div className="resume-item">
            <h4>{content.work.work3.title}</h4>
            <h5>07/2018 - 09/2018</h5> <h5>06/2019 - 12/2019</h5>
            <p><em>{content.work.work3.place}</em></p>
            <p>{content.work.work3.desc}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">{content.title4}</h3>
          <div className="resume-item">
            <h4>DEV</h4>
            <p>HTML - CSS - JavaScript - SQL - Python - Java - GIT - Trello - Vue.js - API - REST - Swagger - Node.js - Express - No-SQL - Kotlin - React - Bulma - Bootstrap </p>
          </div>
          <div className="resume-item">
            <h4>Générales</h4>
            <p>{content.skills}</p>
          </div>
          <h3 className="resume-title"> {content.title5} </h3>
          <div className="resume-item">
            <h4>{content.professional.stage1.title}</h4>
            <h5>03/2019</h5>
            <p><em>{content.professional.stage1.place}</em></p>
            <p>{content.professional.stage1.desc}</p>
          </div>
          <div className="resume-item">
            <h4>{content.professional.stage2.title}</h4>
            <h5>11/2017</h5> <h5>10/2018</h5>
            <p><em>{content.professional.stage2.place}</em></p>
            <p>{content.professional.stage2.desc}</p>
          </div>
          <h3 className="resume-title"> {content.title6} </h3>
          <div className="resume-item">
            <h4>{content.other.interests.title}</h4>
            <p>{content.other.interests.desc}</p>
          </div>
          <div className="resume-item">
            <h4>{content.other.projects.title}</h4>
            <p>{content.other.projects.desc}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default CV;