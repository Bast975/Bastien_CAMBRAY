import React from "react";
import "./Home.css";
import imgBastien from '../../images/Bastien.jpg';
import imgSPM from '../../images/spm.jpg';
import imgMTL from '../../images/MTL.jpg';
import imgPROG from '../../images/PROG.jpg';
import imgBlockchain from '../../images/Blockchain.jpg';



function Home() {
  return <div class="home-container">
    <p class="fs-1">
      Biographie
    </p>
    <p class="fs-4">
      Ci-dessous ce trouve une bref biographie de moi, j'ai décidé de la séparer en plusieurs parties en fonction d'années qui selon moi ont été importantes, m'ont appris énormément de choses et ont fait la personne que je suis aujourd'hui.
    </p>
    <div class="container text-center">
      <p class="fs-3">
        2001-2016
      </p>
      <div class="row align-items-start">
        <div class="col">
          <img width="320" src={imgBastien} alt="imgBastien" class="rounded mx-auto d-block"></img>
        </div>
        <div class="col">
          <br />
          <br />
          <p class="fs-4">
            Bastien CAMBRAY, né le 24 décembre 2001 à Saint-Pierre et Miquelon, France une petite île française d'environ 6000 habitants.
            Dans cette période de mon enfance j'étais un jeune "geek" plutôt introvertie qui passait son temps sur les jeux-vidéos et l'ordinateur.
            Je détestais l'école et voulais d'ailleurs arrêter au collège à mes 14ans. Heureusement pour moi aujourd'hui, je n'ai pas suivi cet envie.
          </p>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <p class="fs-3">
        2016-2019
      </p>
      <div class="row align-items-start">
        <div class="col">
          <p class="fs-4">
            Toujours à Saint-Pierre, étant passioné par l'informatque depuis des années j'ai finalement décidé de faire un Baccalauréat Professionnel Système Numérique.
            Durant cette période j'ai commencé à devenir plus extravertie, j'ai commencé à sortir souvent, fait beaucoup de rencontres et vécu des moments inoubliables avec mes amis.

          </p>
        </div>
        <div class="col">
          <img width="420" src={imgSPM} alt="SPM" class="rounded mx-auto d-block"></img>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <p class="fs-3">
        2019-2020
      </p>
      <div class="row align-items-start">
        <div class="col">
          <p>
            PHOTO DANS LE BTP
          </p>
        </div>
        <div class="col">
        <p class="fs-4">
          Je suis donc resté à Saint-Pierre travailler pendant 6 mois dans le bâtiment / travaux publics (en dynamitage) 
          et 6 mois en tant que livreur / chauffeur.
          Cette année était la pire j'abusais sur les sorties le week-end, je n'avais aucun objectif dans la vie etc.. Puis le COVID est arrivé. 
          </p>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <p>
            PHOTO MASQUES
          </p>
        </div>
        <div class="col">
        <p class="fs-4">
          Début 2020 j'ai donc commencé à faire des recherches pour partir aux études à Montréal, car le train de vie que j'avais ne me plaisait pas. 
          Durant le COVID j'ai également commencé le sport, il fallait que je trouve un moyen de dépenser mon énergie quelque part, le sport m'a non seulement donné des biens-faits physique mais aussi beaucoup au niveau du mental. 
          </p>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <p class="fs-3">
        2020-2023
      </p>
      <div class="row align-items-start">
        <div class="col">
          <p class="fs-4">
            Arrivé à Montréal en septembre 2020 après beaucoup de difficultés au niveau des papiers en raison du COVID,
            je me lance dans un DEC Technique - Développement d'applications.
          </p>
          <p class="fs-4">  
            Au fil du temps que j'avance dans mon DEC, la vie à Montréal me séduit. J'adopte un train de vie beaucoup plus sain et commence à me mettre des objectifs en tête, ce qui m'était jamais arrivé avant.
          </p>
        </div>
        <div class="col">
          <img width="380"  src={imgMTL} alt="MTL" class="rounded mx-auto d-block"></img>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <br />
          <br />
          <img width="500"  src={imgBlockchain} alt="PROG" class="rounded mx-auto d-block"></img>
        </div>
        <div class="col">
          <p class="fs-4">
            Je prend de plus en plus goût à la programmation, continue le sport encore plus sérieusement et découvre la calisthenics, le sport que je pratique. 
          </p>
          <p class="fs-4">
          Le temps continue de passer, je réalise que je veux devenir quelqu'un de meilleur, avoir un vrai avenir.
          Je commence donc, en plus de la programmation et le sport, lors de mon temps libre à m'intéresser à de nouvelles choses, comme l'investissement, le trading, l'économie, les nouvelles technologies comme la blockchain et le Web 3.0.
          </p>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
        <p class="fs-4">
          Arrivé à ma dernière année scolaire, tout est clair pour moi, je veux commencer à travailler au Canada dès la fin de mon DEC en espérant trouver une entreprise dans laquel je me plais, qui m'apportera encore plus d'expériences et que je pourrais aider à se développer pour plusieurs années.
          Je compte également lors de mon temps libre continuer à travailler sur des projets persos en rapport avec mes autres intérêts.
        </p>
        </div>
        <div class="col">
        <img width="500"  src={imgPROG} alt="PROG" class="rounded mx-auto d-block"></img>
        </div>
      </div>
    </div>
  </div>

}

export default Home;