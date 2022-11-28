import React from "react";
import "../../dark.css";
import "../../light.css";
import { Link } from "react-router-dom";
import { projectDetailsData } from './DataProject'
import { useParams } from "react-router-dom";


function ProjectDetails(props) {
  const params = useParams();
  let details = projectDetailsData
  const id = params.id

  props.language === "English"
    ? (details = details.English)
    : (details = details.Français);

  let data = details[id]

  return <div>
    <div id={`portfolio-details`} className={`portfolio-details`}>
      <div className="container">

        <div className="row">
        <div>
              <h2 className="float-md-start mb-0 portfolio-title">{data.title}</h2>
              <Link to="/Projects" title="Projects" className="portfolio-links justify-content-center float-md-end"  style={{textDecoration: "none", color:"white"}}><i className="bi bi-arrows-angle-contract"></i></Link>
            </div>
          <div className="col-lg-8">
            <div>
              <video controls width="720">
                <source src={data.video} type="video/mp4" />
                <div>
                  Sorry, your browser does not support the &lt;video&gt; tag used in this demo.
                </div>
              </video>
            </div>
          </div>
          <div className="col-lg-4 portfolio-info">
            <br />
            <ul>
              <li><strong>Category</strong> : {data.category.map((c) => c.name).join(", ")}</li>
              <li><strong>Technologie</strong> : {data.technologie.map((t) => t.name).join(", ")}</li>
              <li><strong>Date</strong> : {data.date} </li>
            </ul>
            <p>
              <strong>Description</strong> : {data.desc}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

}

export default ProjectDetails;