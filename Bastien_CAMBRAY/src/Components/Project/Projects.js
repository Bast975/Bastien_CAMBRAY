import React, { useContext } from "react";
import "../../dark.css";
import "../../light.css";
import { ModeContext } from '../../App';
import ProjectCard from "./ProjectCard";
import { projectData } from "./DataProject";

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