import React, { useContext } from "react";
import "../dark.css";
import "../light.css";
import imgBastien from '../images/Bastien.jpg';
import imgSPM from '../images/spm.jpg';
import imgMTL from '../images/MTL.jpg';
import imgPROG from '../images/PROG.jpg';
import imgCOVID from '../images/covid.jpg';
import { ModeContext } from '../App';
import { contentBio } from "./Data";
import { Carousel } from 'react-bootstrap';



function Home(props) {
  const modecontext = useContext(ModeContext)
  let content = contentBio;

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
    <Carousel >
      <Carousel.Item interval={8000}>
        <div className={`container-bio-${modecontext.mode}`} id="2001-2016">
          <h5>
            2001-2016
          </h5>
          <div className="row align-items-start">
            <div className="col">
              <img width="300" src={imgBastien} alt="imgBastien" className="rounded mx-auto d-block imgbio" style={{ paddingTop: "5%"}}></img>
              <br />
            </div>
            <div className="col">
              <br />
              <br />
              <p className="fs-3 padingRight">
                {content.p1}
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
      <div className={`container-bio-${modecontext.mode}`} id="2016-2019">
        <h5>
          2016-2019
        </h5>
        <div className="row align-items-start">
          <div className="col marginLeft" >
            <p className="fs-4 paddingTop">
              {content.p2}
            </p>
          </div>
          <div className="col ">
            <img width="460" src={imgSPM} alt="SPM" className="rounded mx-auto d-block imgbio paddingTop"></img>
            <br />
          </div>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
      <div className={`container-bio-${modecontext.mode}`} id="2019-2020">
        <h5>
          2019-2020
        </h5>
        <div className="row align-items-start">
          <div className="col">
            <p>
              <img width="380" src={imgCOVID} alt="SPM" className="rounded mx-auto d-block imgbio"></img>
            </p>
          </div>
          <div className="col">
            <p className="fs-4 padingRight">
              {content.p3.part1}
            </p>
            <p className="fs-4 padingRight">
              {content.p3.part2}
            </p>
          </div>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
      <div className={`container-bio-${modecontext.mode}`} id="2020-2023">
        <h5>
          2020-2023
        </h5>
        <div className="row align-items-start">
          <div className="col marginLeft">
            < br />
            <p className="fs-4">
              {content.p4.part1}
            </p>
            <br />
            <p className="fs-4">
              {content.p4.part2}
            </p>
          </div>
          <div className="col">
            <img width="380" src={imgMTL} alt="MTL" className="rounded mx-auto d-block"></img>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <p className="fs-4" style={{ padding: "20px" }}>
              {content.p4.part3}
            </p>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <img width="440" src={imgPROG} alt="PROG" className="rounded mx-auto d-block imgbio"></img>
          </div>
          <div className="col marginRight">
            <p className="fs-4">
              {content.p4.part4}
            </p>
          </div>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
  </div>
}

export default Home;