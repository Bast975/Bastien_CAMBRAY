import React, { useContext } from "react";
import "../main.css";
import { ModeContext } from '../App';

function CV() {
  const modecontext = useContext(ModeContext)

  return <section id="resume" className="resume">
    <div className="container">
      <br />
      <div className={`section-title-${modecontext.mode}`}>
        <h2>CV</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Sommaire</h3>
          <div className="resume-item pb-0">
            <h4>Bastien CAMBRAY</h4>
            <p><em>Étudiant en DEC Technique - développement d'applications.</em></p>
            <ul>
              <li>Français, Anglais</li>
              <li>Montréal, QC, Canada</li>
              <li>bastiencambray975@gmail.com</li>
            </ul>
          </div>
          <h3 className="resume-title">Éducation</h3>
          <div className="resume-item">
            <h4>DEC informatique - développement d'applications</h4>
            <h5>08/2020 - 05/2023</h5>
            <p><em>Collège de Maisonneuve , Montréal, Québec, Canada</em></p>
            <p></p>
          </div>
          <div className="resume-item">
            <h4>Baccalauréat professionnel - Système Numérique</h4>
            <h5>09/2016 - 07/2019</h5>
            <p><em>Lycée d’État Émile Letournel , Saint-Pierre et Miquelon, France </em></p>
            <p></p>
          </div>
          <h3 className="resume-title"> Expériences de travail </h3>
          <div className="resume-item">
            <h4>Chauffeur - Livreur</h4>
            <h5>01/2020 - 07/2020 </h5> <h5> 05/2021 - 08/2021 </h5> <h5> 07/2022 - 08/2022</h5>
            <p><em>Entreprise Cambray et fils, Saint-Pierre et Miquelon, France</em></p>
            <p>Livraison - Déménagement - Conduites de camionnettes chargées - Planification des livraisons</p>
          </div>
          <div className="resume-item">
            <h4>Agent de stock</h4>
            <h5>05/2022 - 06/2022</h5>
            <p><em>Vélo Québec, Montréal, Québec, Canada</em></p>
            <p>Préparations de commandes - Déménagement d'entrepôt - Chargement et conduites de camions</p>
          </div>
          <div className="resume-item">
            <h4>Bâtiment et travaux publics (Foreur / Dynamiteur) </h4>
            <h5>07/2018 - 09/2018</h5> <h5>06/2019 - 12/2019</h5>
            <p><em>GIE , Saint-Pierre et Miquelon, France</em></p>
            <p>Utilisation de foreuse - Préparation de tire de mine - Assistance au tir de dynamite</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Compétences</h3>
          <div className="resume-item">
            <h4>DEV</h4>
            <p>HTML - CSS - JavaScript - SQL - Python - Java - GIT - Trello - Vue.js - API - REST - Swagger - Node.js - Express - No-SQL - Kotlin - React - Bulma - Bootstrap </p>
          </div>
          <div className="resume-item">
            <h4>Générales</h4>
            <p>Dynamique – Sérieux – Ponctuel – Motivé – Enthousiaste - Amical</p>
          </div>
          <h3 className="resume-title"> Expériences professionnelles </h3>
          <div className="resume-item">
            <h4>Stage développement d'applications</h4>
            <h5>03/2019</h5>
            <p><em>DGAC, Saint-Pierre et Miquelon, France</em></p>
            <p>Création d’une base de données Microsoft Access avec une interface graphique</p>
          </div>
          <div className="resume-item">
            <h4> Stage technicien informatique</h4>
            <h5>11/2017</h5> <h5>10/2018</h5>
            <p><em>DGAC, Saint-Pierre et Miquelon, France</em></p>
            <p>Configuration de TV pour mises en vente et iPad pour entreprise. Installation et démontage d’ordinateurs. Réparation de divers matériels </p>
          </div>
          <h3 className="resume-title"> Personelles </h3>
          <div className="resume-item">
            <h4>intérêts</h4>
            <p>Nouvelles technologies (Blockchain, WEB 3.0) - Sports (Calisthénie, Musculation, Gymnastique) - Investissements - Développement personnel - Musiques - DC Comics - Voyages </p>
          </div>
          <div className="resume-item">
            <h4> Projets futurs</h4>
            <p>Site web (perso) - Application mobile (Calisthénie) - Formation développement (Blockchain) - Formation coaching (Calisthénie)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default CV;