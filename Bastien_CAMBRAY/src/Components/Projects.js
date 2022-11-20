import React, { useContext } from "react";
import "../main.css";
// import imgTv from '../images/portfolio/TVshowsKotlin.jpg'
// import imgMeteo from '../images/portfolio/meteoKotlin.jpg'
// import imgAlbums from '../images/portfolio/albumsKotlin.jpg'
import imgBd from '../images/portfolio/bdKotlin.jpg'
import { Link } from "react-router-dom";
import { ModeContext } from '../App';


function Projects() {
    const modecontext = useContext(ModeContext)

    return <section id="portfolio" class="portfolio">
        <br />
         <div className={`section-title-${modecontext.mode}`}>
        <h2>Projects</h2>
        <br />
        </div>
        <div className="home-container">
            <div className="container">
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src={imgBd} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <Link to="/Projectsdetails" title="Details"><i className="bi bi-arrows-fullscreen"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Projects;