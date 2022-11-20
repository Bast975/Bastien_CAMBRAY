import React, { useContext } from "react";
import "../../main.css";
import { ModeContext } from '../../App';
import vidTP1 from '../../images/portfolio/streetworkout.mp4'
import { Link } from "react-router-dom";


function ProjectsDetails() {
  const modecontext = useContext(ModeContext)

  return <div>
    <div id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row">
        <div>
              <h2 className="float-md-start mb-0 portfolio-title">Comics Mobile App</h2>
              <Link to="/Projects" title="Projects" className="portfolio-links justify-content-center float-md-end"><i className="bi bi-arrows-angle-contract"></i></Link>

            </div>
          <div className="col-lg-8">
            <div>
              <video controls width="720">
                <source src={vidTP1} type="video/mp4" />
                <div>
                  Sorry, your browser does not support the &lt;video&gt; tag used in this demo.
                </div>
              </video>
            </div>
          </div>
          <div className="col-lg-4 portfolio-info">
            <br />
            <ul>
              <li><strong>Category</strong> : Application Mobile</li>
              <li><strong>Technologie</strong> : Android studio (Kotlin), API (JSON)</li>
              <li><strong>Date</strong> : 01 March, 2020</li>
            </ul>
            <p>
              <strong>Description</strong> : Application mobile créé sur Android Studio avec le language Kotlin, fonctionnant avec une API. Cette API retournait un token à l'authentification, tous les comics sur une requête et d'autres requêtes permettant d'ajouter / supprimer des favoris.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

}

export default ProjectsDetails;