/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import "../main.css";
// import imgHeader from '../images/header.jpg';
import { Link } from "react-router-dom";
import { ModeContext } from '../App';

function Header(props) {
  const modecontext = useContext(ModeContext);
  const [modeclass, setModeclass] = useState('bi bi-moon-stars');
  const [langageacro, setLangageacro] = useState('FR');

  function ChangeMode() {
    if (modecontext.mode === "dark") {
      modecontext.setMode("light")
    } if (modecontext.mode === "light") {
      modecontext.setMode("dark")
    }
  }

  function ChangeLangage() {
    if (langageacro === "FR") {
      setLangageacro("EN")
      props.handleSetLanguage("Français")
    } if (langageacro === "EN") {
      setLangageacro("FR")
      props.handleSetLanguage("English")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("language") === "Français"){
      setLangageacro("EN")
    } if (localStorage.getItem("language") === "English") {
      setLangageacro("FR")
    }
  }, [])

  useEffect(() => {
    if (modecontext.mode === "dark") {
      setModeclass('bi bi-moon-stars')
    } 
    if (modecontext.mode === "light") {
      setModeclass('bi bi-moon-fill')
    }
   }, [modecontext])



  return <div>
    <h3 className="float-md-start mb-0"> Bastien CAMBRAY </h3>
    <nav className={`nav nav-masthead-${modecontext.mode} justify-content-center float-md-end`} role="navigation">
      <Link to="/" activeclassname={`nav-link-${modecontext.mode} fw-bold py-1 px-0 active`} className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`}>Bio</Link>
      <Link to="/CV" activeclassname={`nav-link-${modecontext.mode} fw-bold py-1 px-0 active`} className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`}>CV</Link>
      <Link to="/Projects" activeclassname={`nav-link-${modecontext.mode} fw-bold py-1 px-0 active`} className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`}>Projects</Link>
      <Link to="/Blog" activeclassname={`nav-link-${modecontext.mode} fw-bold py-1 px-0 active`} className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`}>Blog</Link>
      <a className="btn btn-sm btn-outline-secondary" onClick={ChangeLangage} style={{margin: "5px"}}> {langageacro}</a>
      <a className="btn btn-sm btn-outline-secondary" onClick={ChangeMode} style={{margin: "5px"}}> <i className={modeclass}></i></a>
    </nav>
  </div>
}

export default Header;