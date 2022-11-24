import React, { useContext } from "react";
import "../../main.css";
// import imgTv from '../images/portfolio/TVshowsKotlin.jpg'
// import imgMeteo from '../images/portfolio/meteoKotlin.jpg'
// import imgAlbums from '../images/portfolio/albumsKotlin.jpg'
import imgBd from '../../images/portfolio/bdKotlin.jpg'
import { Link } from "react-router-dom";
import { ModeContext } from '../../App';


function ProjectCard(props) {
    const modecontext = useContext(ModeContext)
    let p = props.project
    console.log(p)
    


    return <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
            <img src={imgBd} className="img-fluid" alt="" />
            <div className="portfolio-info">
                <h4>{p.title}</h4>
                <p>{p.category.map((p) => p.name).join(" , ")}</p>
                <div className="portfolio-links">
                    <Link to="/Projectsdetails" title="Details"><i className="bi bi-arrows-fullscreen"></i></Link>
                </div>
            </div>
        </div>
    </div>

}

export default ProjectCard;