import React, { useContext, useEffect, useState } from "react";
import "../main.css";
import imgBastien from '../images/Bastien.jpg';
import imgSPM from '../images/spm.jpg';
import imgMTL from '../images/MTL.jpg';
import imgPROG from '../images/PROG.jpg';
import imgBlockchain from '../images/Blockchain.jpg';
import imgCOVID from '../images/covid.jpg';
import { ModeContext } from '../App';


function Home() {
  const modecontext = useContext(ModeContext)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (modecontext.mode === "dark") {
      setTheme('dark')
    } 
    if (modecontext.mode === "light") {
      setTheme('light')
    }
   }, [modecontext])


  return <div className="home-container">
    <br />
   <div className="section-title">
        <h2>Biographie</h2>
      </div>
    <p className="fs-4">
    Ci-dessous se trouve une brève biographie de moi, j'ai décidé d'être le plus transparent possible et de la séparer en plusieurs parties en fonction d'années qui selon moi ont été importantes, m'ont fait évoluer et devenir la personne que je suis aujourd'hui.    </p>
    <nav className="nav nav-masthead justify-content-center float-md">
        <a className="nav-link fw-bold py-1 px-0" href="#2001-2016"> 2001-2016</a>
        <a className="nav-link fw-bold py-1 px-0" href="#2016-2019"> 2016-2019</a>
        <a className="nav-link fw-bold py-1 px-0" href="#2019-2020"> 2019-2020</a>
        <a className="nav-link fw-bold py-1 px-0" href="#2020-2023"> 2020-2023</a>
      </nav>
    <div className={`container-${theme} text-center`} id="2001-2016">
      <p className="fs-3">
        2001-2016
      </p>
      <div className="row align-items-start">
        <div className="col">
          <img width="280" src={imgBastien} alt="imgBastien" className="rounded mx-auto d-block"></img>
          <br />
        </div>
        <div className="col">
          <br />
          <br />
          <p className="fs-3">
            Bastien CAMBRAY, né le 24 décembre 2001 à Saint-Pierre-et-Miquelon, une petite île française d'environ 6000 habitants.
            Dans cette période de mon enfance, j'étais un jeune "geek" plutôt introverti qui passait son temps sur les jeux vidéos et l'ordinateur.
            Je détestais l'école et voulais d'ailleurs arrêter au collège à mes 14ans. Heureusement pour moi, mes parents m'ont dissuadé de cette idée.
          </p>
        </div>
      </div>
    </div>
    <br />
    <div className={`container-${theme} text-center`} id="2016-2019">
      <p className="fs-3">
        2016-2019
      </p>
      <div className="row align-items-start">
        <div className="col">
          <p className="fs-4">
            Toujours à Saint-Pierre, étant passionné par l'informatique depuis des années j'ai finalement décidé de faire un Baccalauréat professionnel - Système numérique.
            Durant cette période j'ai commencé à devenir plus extravertie, j'ai commencé à sortir souvent, fait beaucoup de rencontres et vécu des moments inoubliables avec mes amis.
          </p>
        </div>
        <div className="col">
          <img width="400" src={imgSPM} alt="SPM" className="rounded mx-auto d-block"></img>
          <br />
        </div>
      </div>
    </div>
    <br />
    <div className={`container-${theme} text-center`} id="2019-2020">
      <p className="fs-3">
        2019-2020
      </p>
      <div className="row align-items-start">
        <div className="col">
          <p>
            <img width="410" src={imgCOVID} alt="SPM" className="rounded mx-auto d-block"></img>
          </p>
        </div>
        <div className="col">
          <p className="fs-4">
            Je suis donc resté à Saint-Pierre travailler pendant 6 mois dans le bâtiment / travaux publics (en dynamitage)
            et 6 mois en tant que livreur / chauffeur avec mon frère.
            Cette année n'était absolument pas productif, j'abusais sur les sorties et je n'avais aucun objectif, puis le COVID est arrivé.
          </p>
          <p className="fs-4">
          Le train de vie que j'avais ne me plaisait pas, j'ai donc commencé à faire des recherches pour partir aux études à Montréal dans un domaine que j'avais apprécié lors d'un stage, la programmation.
            Durant le COVID j'ai également commencé le sport, il fallait que je trouve un moyen de dépenser mon énergie quelque part, le sport m'a non seulement donné des biens faits physiques, mais aussi beaucoup au niveau du mental, qui m’ont aidé à me retrouver
          </p>
        </div>
      </div>
    </div>
    <br />
    <div className={`container-${theme} text-center`} id="2020-2023">
      <p className="fs-3">
        2020-2023
      </p>
      <div className="row align-items-start">
        <div className="col">
          <p className="fs-4">
            Arrivé à Montréal en septembre 2020 après beaucoup de difficultés au niveau des papiers en raison du COVID,
            je me lance dans un DEC Technique - Développement d'applications.
          </p>
          <p className="fs-4">
            Au fil du temps que j'avance dans mon DEC, la vie à Montréal me séduit. J'adopte un train de vie beaucoup plus sain et commence à me mettre des objectifs en tête, ce qui ne m'était jamais arrivé avant.
          </p>
        </div>
        <div className="col">
          <img width="380" src={imgMTL} alt="MTL" className="rounded mx-auto d-block"></img>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col">
          <br />
          <br />
          <img width="520" src={imgBlockchain} alt="PROG" className="rounded mx-auto d-block"></img>
        </div>
        <div className="col">
          <p className="fs-4">
            Je prends de plus en plus goût à la programmation, continue le sport encore plus sérieusement et découvre la callisthénie, le sport que je pratique.
          </p>
          <p className="fs-4">
            Le temps continue de passer, je réalise que je veux devenir quelqu'un de meilleur, avoir un vrai avenir.
            Je commence donc, en plus de la programmation et le sport, lors de mon temps libre à m'intéresser à de nouvelles choses, comme l'investissement, le trading, l'économie, les nouvelles technologies comme la blockchain et le Web 3.0.
          </p>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col">
          <p className="fs-4">
            Arrivé à ma dernière année scolaire, tout est clair pour moi, je veux commencer à travailler au Canada dès la fin de mon DEC en espérant trouver une entreprise dans laquel je me plais, qui m'apportera encore plus d'expériences et que je pourrais aider à se développer pour plusieurs années.
            Je compte également lors de mon temps libre continuer à travailler sur différents projets en rapport avec mes autres intérêts.        </p>
        </div>
        <div className="col">
          <img width="500" src={imgPROG} alt="PROG" className="rounded mx-auto d-block"></img>
          <br />
        </div>
      </div>
    </div>
  </div>

}

export default Home;