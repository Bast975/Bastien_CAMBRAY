/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import "../main.css";
import "../light.css";
import { Link } from "react-router-dom";
import { ModeContext } from "../App";
import { portfolioContent } from "./Data"; // adapte si ton fichier s'appelle autrement

function Header(props) {
  const modecontext = useContext(ModeContext);
  const [modeclass, setModeclass] = useState("bi bi-moon-stars");
  const [langageacro, setLangageacro] = useState("FR");

  let content = portfolioContent;
  props.language === "English"
    ? (content = content.English)
    : (content = content.Français);

  function ChangeMode() {
    if (modecontext.mode === "dark") {
      modecontext.setMode("light");
    } else {
      modecontext.setMode("dark");
    }
  }

  function ChangeLangage() {
    if (langageacro === "FR") {
      setLangageacro("EN");
      props.handleSetLanguage("Français");
    } else {
      setLangageacro("FR");
      props.handleSetLanguage("English");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("language") === "Français") {
      setLangageacro("EN");
    } else if (localStorage.getItem("language") === "English") {
      setLangageacro("FR");
    }
  }, []);

  useEffect(() => {
    if (modecontext.mode === "dark") {
      setModeclass("bi bi-moon-stars");
    } else {
      setModeclass("bi bi-moon-fill");
    }
  }, [modecontext]);

  return (
    <div>
      <h3 className="float-md-start mb-0 logo">
        bastien<span className="logo-accent">.cx</span>
      </h3>        
      <nav
        className={`nav nav-masthead-${modecontext.mode} justify-content-center float-md-end`}
        role="navigation"
      >
        <Link
          to="/"
          className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`}
          style={{ marginRight: "10px" }}
        >
          {content.header.home}
        </Link>
        <a
          className={`nav-link-${modecontext.mode} fw-bold py-1 px-0`}
          href="/cv/Bastien_CAMBRAY_CV.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "12px" }}
        >
          CV
        </a>
        <a
          className="btn btn-sm btn-outline-secondary"
          onClick={ChangeLangage}
          style={{ margin: "5px" }}
        >
          {langageacro}
        </a>

        <a
          className="btn btn-sm btn-outline-secondary"
          onClick={ChangeMode}
          style={{ margin: "5px" }}
        >
          <i className={modeclass}></i>
        </a>
      </nav>
    </div>
  );
}

export default Header;