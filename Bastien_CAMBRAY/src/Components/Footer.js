/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import "../dark.css";
import "../light.css";
import { ModeContext } from '../App';

function Footer() {
    const modecontext = useContext(ModeContext);

    return <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align<->items-center">
            <div className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                bastiencambray975@gmail.com
            </div>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="mailto:bastiencambray975@gmail.com" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://github.com/Bast975" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/bastien-cambray-800140230/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/bastien.cy/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
        </ul>

        {/* <div className="container">
            <div className="row ">
                <div className="col-md-8 col-md-offset-3">
                    <div className="well well-sm">
                        <form className="form-horizontal" action="" method="post">
                            <fieldset>
                                <legend className="text-center">Contact me !</legend>

                                <div className="form-group">
                                    <div className="col-md-9">
                                        <input id="name" name="name" type="text" placeholder="Your name" className="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="form-group">
                                    <div className="col-md-9">
                                        <input id="email" name="email" type="text" placeholder="Your email" className="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <div className="col-md-9">
                                        <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                                    </div>
                                </div>
                                <br />

                                <div className="form-group">
                                    <div className="col-md-12 text-right">
                                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}
    </footer >
}

export default Footer;