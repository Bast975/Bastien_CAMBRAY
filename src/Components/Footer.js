import React from "react";
import "../dark.css";
import "../light.css";

function Footer() {

    return <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align<->items-center">
            <div className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            bastiencambray.work@gmail.com
            </div>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="mailto:bastiencambray.work@gmail.com" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://github.com/Bast975" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/bastien-cambray-800140230/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/bastien.cy/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
        </ul>
    </footer >
}

export default Footer;