/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
// import imgHeader from '../images/header.jpg';

function Header() {
  return <div>
    <h3 class="float-md-start mb-0"> Bastien CAMBRAY </h3>
    <nav class="nav nav-masthead justify-content-center float-md-end">
      <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#"> Bio </a>
      <a class="nav-link fw-bold py-1 px-0" href="#"> CV </a>
      <a class="nav-link fw-bold py-1 px-0" href="#"> Work </a>
      <a class="nav-link fw-bold py-1 px-0" href="#"> Blog </a>
    </nav>
  </div>
}

export default Header;