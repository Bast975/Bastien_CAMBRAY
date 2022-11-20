import React, { useContext } from "react";
import "../main.css";
import imgBastien from '../images/Bastien.jpg';
import imgSPM from '../images/spm.jpg';
import imgMTL from '../images/MTL.jpg';
import imgPROG from '../images/PROG.jpg';
import imgCOVID from '../images/covid.jpg';
import { ModeContext } from '../App';


function Home(props) {
  const modecontext = useContext(ModeContext)

  let content = {

    English: {
      title: "Below you will find a brief biography of me, I decided to be as transparent as possible and to separate it into several parts according to years that I believe were important, made me evolve and become the person I am today.",
      p1: "Bastien CAMBRAY, born on December 24, 2001 in Saint-Pierre and Miquelon, a small French island of approximately 6,000 inhabitants. In this period of my childhood, I was a rather introverted young \"geek\" who spent his time on video games and computer. I hated school and wanted to stop in college when I was 14. Fortunately for me, my parents dissuaded me from this idea.",
      p2: "Still in Saint-Pierre, having been passionate about computer science for years, I decided to do a Professional Baccalaureate - Digital System. During this period I started to become more outgoing, I started going out often, met a lot of people and had unforgettable moments with my friends.",
      p3: {
        part1: "So I stayed in Saint-Pierre working for 6 months in construction / public works (blasting) and 6 months as a delivery man / driver with my brother. This year was totally unproductive, I abused outings and had no goals, then COVID happened.",
        part2: "I didn't like the way of life I had, so I started to do research to go to study in Montreal in a field that I had appreciated during a stage, application development. During the COVID, I also started the sport, I had to find a way to spend my energy somewhere."
      },
      p4: {
        part1: "Then, I arrived in Montreal in September 2020 after a lot of difficulties with papers due to COVID, I started a Technical DEC - Application Development.",
        part2: "As I progressed through my DEC, life in Montreal appealed to me. I'm adopting a much healthier lifestyle and starting to set many goals, which had never happened to me before.",
        part3: "I take more and more taste for application development, continue sport even more seriously and discover calisthenics, the sport that I practice. Time continues to pass, I realize that I want to become someone better, to have a real future. So I am starting, in addition to application development and sports, in my free time to take interest in new things, such as investing, trading, economics, new technologies such as blockchain and Web 3.0.",
        part4: "Arrived in my last school year, everything is clear to me, I want to start working in Canada as soon as I finish my DEC, hoping to find a company that I will like, which will bring me even more experiences and which I could help grow for many years. I also intend during my free time to continue working on various projects related to my other interests."
      }
    },
    Français: {
      title: "Ci-dessous se trouve une brève biographie de moi, j'ai décidé d'être le plus transparent possible et de la séparer en plusieurs parties en fonction d'années qui selon moi ont été importantes, m'ont fait évoluer et devenir la personne que je suis aujourd'hui.",
      p1: "Bastien CAMBRAY, né le 24 décembre 2001 à Saint-Pierre-et-Miquelon, une petite île française d'environ 6000 habitants. Dans cette période de mon enfance, j'étais un jeune \"geek\" plutôt introverti qui passait son temps sur les jeux vidéos et l'ordinateur Je détestais l'école et voulais d'ailleurs arrêter au collège à mes 14ans. Heureusement pour moi, mes parents m'ont dissuadé de cette idée.",
      p2: "Toujours à Saint-Pierre, étant passionné par l'informatique depuis des années j'ai finalement décidé de faire un Baccalauréat professionnel - Système numérique. Durant cette période j'ai commencé à devenir plus extravertie, j'ai commencé à sortir souvent, fait beaucoup de rencontres et vécu des moments inoubliables avec mes amis.",
      p3: {
        part1: "Je suis donc resté à Saint-Pierre travailler pendant 6 mois dans le bâtiment / travaux publics (en dynamitage) et 6 mois en tant que livreur / chauffeur avec mon frère. Cette année n'était absolument pas productif, j'abusais sur les sorties et je n'avais aucun objectif, puis le COVID est arrivé.",
        part2: "Le train de vie que j'avais ne me plaisait pas, j'ai donc commencé à faire des recherches pour partir aux études à Montréal dans un domaine que j'avais apprécié lors d'un stage, la programmation. Durant le COVID j'ai également commencé le sport, il fallait que je trouve un moyen de dépenser mon énergie quelque part."
      },
      p4: {
        part1: "Arrivé à Montréal en septembre 2020 après beaucoup de difficultés au niveau des papiers en raison du COVID, je me lance dans un DEC Technique - Développement d'applications.",
        part2: "Au fil du temps que j'avance dans mon DEC, la vie à Montréal me séduit. J'adopte un train de vie beaucoup plus sain et commence à me mettre des objectifs en tête, ce qui ne m'était jamais arrivé avant.",
        part3: "Je prends de plus en plus goût à la programmation, continue le sport encore plus sérieusement et découvre la callisthénie, le sport que je pratique.  Le temps continue de passer, je réalise que je veux devenir quelqu'un de meilleur, avoir un vrai avenir. Je commence donc, en plus de la programmation et le sport, lors de mon temps libre à m'intéresser à de nouvelles choses, comme l'investissement, le trading, l'économie, les nouvelles technologies comme la blockchain et le Web 3.0.",
        part4: " Arrivé à ma dernière année scolaire, tout est clair pour moi, je veux commencer à travailler au Canada dès la fin de mon DEC en espérant trouver une entreprise dans laquel je me plais, qui m'apportera encore plus d'expériences et que je pourrais aider à se développer pour plusieurs années. Je compte également lors de mon temps libre continuer à travailler sur différents projets en rapport avec mes autres intérêts."
      }
    }
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Français);

  return <div className="home-container">
    <br />
    <div className={`section-title-${modecontext.mode}`}>
      <h2>Bio</h2>
    </div>
    <p className="fs-4">
      {content.title}
    </p>
      <nav className={`nav nav-masthead-${modecontext.mode} justify-content-center float-md`}>
        <a className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`} href="#2001-2016"> 2001-2016</a>
        <a className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`} href="#2016-2019"> 2016-2019</a>
        <a className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`} href="#2019-2020"> 2019-2020</a>
        <a className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`} href="#2020-2023"> 2020-2023</a>
      </nav>
      <div className={`container-${modecontext.mode}`} id="2001-2016">
        <h5>
          2001-2016
        </h5>
        <div className="row align-items-start">
          <div className="col">
            <img width="280" src={imgBastien} alt="imgBastien" className="rounded mx-auto d-block"></img>
            <br />
          </div>
          <div className="col" style={{ marginRight: "20px" }}>
            <br />
            <br />
            <p className="fs-3">
            {content.p1}
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className={`container-${modecontext.mode}`} id="2016-2019">
        <h5>
          2016-2019
        </h5>
        <div className="row align-items-start">
          <div className="col" style={{ marginLeft: "20px" }}>
            <p className="fs-4">
            {content.p2}
            </p>
          </div>
          <div className="col">
            <img width="400" src={imgSPM} alt="SPM" className="rounded mx-auto d-block"></img>
            <br />
          </div>
        </div>
      </div>
      <br />
      <div className={`container-${modecontext.mode}`} id="2019-2020">
        <h5>
          2019-2020
        </h5>
        <div className="row align-items-start">
          <div className="col">
            <p>
              <img width="380" src={imgCOVID} alt="SPM" className="rounded mx-auto d-block"></img>
            </p>
          </div>
          <div className="col" style={{ marginRight: "20px" }}>
            <p className="fs-4">
            {content.p3.part1}
            </p>
            <p className="fs-4">
            {content.p3.part2}
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className={`container-${modecontext.mode}`} id="2020-2023">
        <h5>
          2020-2023
        </h5>
        <div className="row align-items-start">
          <div className="col" style={{ marginLeft: "20px" }}>
            < br />
            <p className="fs-4">
            {content.p4.part1}
            </p>
            <p className="fs-4">
            {content.p4.part2}
            </p>
            <p></p>
          </div>
          <div className="col">
            <img width="380" src={imgMTL} alt="MTL" className="rounded mx-auto d-block"></img>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col" style={{ margin: "20px" }}>
            <p className="fs-4">
            {content.p4.part3}
            </p>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <img width="440" src={imgPROG} alt="PROG" className="rounded mx-auto d-block"></img>
          </div>
          <div className="col" style={{ marginRight: "20px" }}>
            <p className="fs-4">
            {content.p4.part4}
        </p>
          </div>
        </div>
      </div>
  </div>
}

export default Home;