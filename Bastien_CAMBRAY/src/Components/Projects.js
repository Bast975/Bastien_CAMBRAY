import React, { useContext } from "react";
import "../main.css";
// import imgTv from '../images/portfolio/TVshowsKotlin.jpg'
// import imgMeteo from '../images/portfolio/meteoKotlin.jpg'
// import imgAlbums from '../images/portfolio/albumsKotlin.jpg'
import imgBd from '../images/portfolio/bdKotlin.jpg'
import { Link } from "react-router-dom";
import { ModeContext } from '../App';
import vidTP1 from '../images/portfolio/streetworkout.mp4'
import ProjectCard from "./ProjectCard";

function Projects() {
    const modecontext = useContext(ModeContext)
    let Projects = [
            {
            id: 1,
            title: "Comics Mobile APP",
            category: [
                {
                  name: "Mobile"
                }
            ],
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "21 November 2022",
            desc: "Application mobile créé sur Android Studio avec le language Kotlin, fonctionnant avec une API. Cette API retournait un token à l'authentification, tous les comics sur une requête et d'autres requêtes permettant d'ajouter / supprimer des favoris.",
            video: vidTP1
          },
          {
            id: 2,
            title: "Comics Mobile APP",
            category: [
                {
                  name: "Mobile"
                }
            ],
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "21 November 2022",
            desc: "Application mobile créé sur Android Studio avec le language Kotlin, fonctionnant avec une API. Cette API retournait un token à l'authentification, tous les comics sur une requête et d'autres requêtes permettant d'ajouter / supprimer des favoris.",
            video: vidTP1
          }
        ]

    return <section id="portfolio" className="portfolio">
        <br />
         <div className={`section-title-${modecontext.mode}`}>
        <h2>Projects</h2>
        <br />
        </div>
        <div className="home-container">
            <div className="container">
                <div className="row portfolio-container">
                {
            Projects.map((project) => {
              return <ProjectCard project={project}
                              key={project.id}/>
            })
          }
                </div>
            </div>
        </div>
    </section>
}

export default Projects;