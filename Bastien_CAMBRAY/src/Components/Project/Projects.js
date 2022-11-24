import React, { useContext } from "react";
import "../../main.css";
// import imgTv from '../images/portfolio/TVshowsKotlin.jpg'
// import imgMeteo from '../images/portfolio/meteoKotlin.jpg'
// import imgAlbums from '../images/portfolio/albumsKotlin.jpg'
import imgBd from '../../images/portfolio/bdKotlin.jpg'
import { Link } from "react-router-dom";
import { ModeContext } from '../../App';
import vidTP1 from '../../images/portfolio/streetworkout.mp4'
import ProjectCard from "./ProjectCard";
import { projectData } from "./data";

function Projects() {
    const modecontext = useContext(ModeContext)

    
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
            projectData.map((project) => {
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