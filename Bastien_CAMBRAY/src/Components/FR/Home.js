import React from "react";
import "./Home.css";
import imgBastien from '../../images/Bastien.jpg';
import imgSPM from '../../images/spm.jpg';

function Home() {
  return <div class="home-container">
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <img width="300" src={imgBastien} alt="imgBastien" class="rounded mx-auto d-block"></img>
          </div>
          <div class="col">
            <p class="lead">
              Bastien CAMBRAY, né le 24 décembre 2001 à Saint-Pierre et Miquelon, France une petite île française où j'ai obtenu mon Baccalauréat professionnel Système Numérique en 2019.
            </p>
            <img width="250" src={imgSPM} alt="SPM" class="rounded mx-auto d-block"></img>
          </div>
        </div>
        <p>
            Désormais étudiant en informatique, développement d'applications au CEGEP Maisonnneuve à Montréal, Québec, Canada
            </p>
      </div>
  </div>

}

export default Home;