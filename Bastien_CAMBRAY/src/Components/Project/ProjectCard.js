import React from "react";
import "../../dark.css";
import "../../light.css";
import { Link } from "react-router-dom";


function ProjectCard(props) {
    return <div className="col-lg-4 col-md-6 portfolio-item filter-app">
         <Link to={`/Project/details/${props.project.id}`}>
        <div className="portfolio-wrap">
            <img src={props.project.img} className="img-fluid" alt="" />
            <div className="portfolio-info">
                <h4>{props.project.title}</h4>
                <p>{props.project.category.map((c) => c.name).join(" , ")}</p>
                <div className="portfolio-links">
                </div>
            </div>
        </div>
        </Link>
    </div>

}

export default ProjectCard;