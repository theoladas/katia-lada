import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.scss";

const Nav = () => {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  };

  return (
    <nav>
      <Link to="/" id="logo">
        <img src={logo} className="logo"></img>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Υπηρεσίες</Link>
        </li>
        <li>
          <Link to="/work">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Ο χώρος μας</Link>
        </li>
        <li>
          <Link to="/contact">Επικοινωνία</Link>
        </li>
        <li>
          <a href="tel:2373022865" className="cta-call">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            Call Us
          </a>
        </li>
      </ul>
      <div class="burger" onClick={navSlide}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
};

export default Nav;