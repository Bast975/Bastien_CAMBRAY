import React, { useContext } from "react";
import "../../main.css";
import "../../light.css";
import { ModeContext } from '../../App';
import ProjectCard from "./ProjectCard";
import { projectData } from "./DataProject";

function Projects() {
    const modecontext = useContext(ModeContext)
    console.log(projectData.Mobile)
    return <section id="portfolio" className="portfolio">
        <br />
        <div className={`section-title-${modecontext.mode} text-center`}>
            <h2>Projects</h2>
            <br />
        </div>
        <nav className={`nav nav-masthead-${modecontext.mode} justify-content-center float-md`}>
            <a className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`} href="#WEB"> WEB</a>
            <a className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`} href="#MOBILE"> MOBILE</a>
            <a className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`} href="#IoT"> IoT</a>
        </nav>
        <br />
        <div className={`container-portfolio-${modecontext.mode}`} id="WEB">
            <h5>
                WEB
            </h5>
            <div className="row portfolio-container">
                {
                    projectData.Web.map((project) => {
                        return <ProjectCard project={project}
                            key={project.id} />
                    })
                }
            </div>
        </div>
        <br />
        <div className={`container-portfolio-${modecontext.mode}`} id="MOBILE">
            <h5>
                MOBILE
            </h5>
            <div className="row portfolio-container">
                {
                    projectData.Mobile.map((project) => {
                        return <ProjectCard project={project}
                            key={project.id} />
                    })
                }
            </div>
        </div>
        <br />
        <div className={`container-portfolio-${modecontext.mode}`} id="IoT">
            <h5>
            IoT
            </h5>
            <div className="row portfolio-container">
                {
                    projectData.IoT.map((project) => {
                        return <ProjectCard project={project}
                            key={project.id} />
                    })
                }
            </div>
        </div>
    </section >
}

export default Projects;