import React, { useContext } from "react";
import "../../main.css";
import { ModeContext } from '../../App';
import imgBlockchain from '../../images/blockchain.JPG';
import imgWeb3 from '../../images/web3.JPG';
import imgCali from '../../images/calisthenics.jpg';
import Blogcard from "./Blogcard";
import { Link } from "react-router-dom";


function Blog(props) {
    const modecontext = useContext(ModeContext)
    let blogs = {
        English: [
            {
                title: "Blockchain what is it ?",
                img: imgBlockchain,
                autor: "Bastien CAMBRAY",
                date: "23 Nov 2022",
                theme: "Technologie",
                desc: "In this post I will explain to you what is the blockchain",
                p: "Developed from 2008, blockchain is, first and foremost, a technology for storing and transmitting information. This technology offers high standards of transparency and security because it works without a central control body. More concretely, the blockchain allows its users - connected in a network - to share data without an intermediary.",
            },
            {
                title: "Calisthenics a new sport in trend",
                img: imgCali,
                autor: "Bastien CAMBRAY",
                date: "23 Nov 2022",
                theme: "Sports",
                desc: "You probably already see this sport but u didn't know it was this one !",
                p: "Calisthenics is a sport created in...",
            },
            {
                title: "WEB 3.0 the future of internet",
                img: imgWeb3,
                autor: "Bastien CAMBRAY",
                date: "25 Nov 2022",
                theme: "Technologie",
                desc: "In this post I will explain to you what is the WEB 3.0, and what it could bring to the world",
                p: "WEB 3.0 based is a therm not exactly defined yet...",
            }
        ],
        Français: [
            {
                title: "Blockchain qu'est ce que c'est ?",
                img: imgBlockchain,
                autor: "Bastien CAMBRAY",
                date: "23 Nov 2022",
                theme: "Technologie",
                desc: "Dans ce poste je vais vous expliquer ce qu'est la blockchain",
                p: "Développée à partir de 2008, la blockchain est, en premier lieu, une technologie de stockage et de transmission d’informations. Cette technologie offre de hauts standards de transparence et de sécurité car elle fonctionne sans organe central de contrôle. Plus concrètement, la blockchain permet à ses utilisateurs - connectés en réseau - de partager des données sans intermédiaire.",
            },
            {
                title: "Calisthenics un nouveau sport en tendance",
                img: imgCali,
                autor: "Bastien CAMBRAY",
                date: "23 Nov 2022",
                theme: "Sports",
                desc: "Vous avez probablement déjà vu ce sprot mais vous ne saviez pas que c'était celui-ci !",
                p: "Calisthenics est un sport créé en",
            },
            {
                title: "WEB 3.0 le futur d'internet",
                img: imgWeb3,
                autor: "Bastien CAMBRAY",
                date: "25 Nov 2022",
                theme: "Technologie",
                desc: "Dans ce poste je vais vous expliquer ce qu'est le web 3.0 et ce qu'il pourrait apporter au monde",
                p: "Le web 3.0 est un therme qui n'est pas encore défini..",
            }
        ]
    };
    props.language === "English"
        ? (blogs = blogs.English)
        : (blogs = blogs.Français);

    let lastpost = blogs.pop();

    return <section id="blog" className="blog">
        <div className="container">
            <br />
            <div className={`section-title-${modecontext.mode}`}>
                <h2>Blog</h2>
            </div>
            <div className="p-4 p-md-5 mb-4 border rounded ">
            <Link to="/Blogpost" title={lastpost.title} style={{textDecoration: "none", color:"white"}}>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">{lastpost.title}</h1>
                    <p className="lead my-3">{lastpost.desc}</p>
                    <div className="mb-1 text-muted">{lastpost.date}</div>
                </div>
                </Link>
            </div>

            <div className="row mb-2">
            {
            blogs.map((blog) => {
              return <Blogcard blog={blog}
                              />
            })
          }
            </div>
        </div>
    </section>
}

export default Blog;