import React from "react";
import { NavLink } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
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

  // Animation & Transition Stopper on Resize Screen
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  return (
    <header>
      <nav>
        <NavLink to="/" id="logo">
          <img src={logo} className="logo"></img>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Υπηρεσίες</NavLink>
          </li>
          <li>
            <NavLink to="/work">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Ο χώρος μας</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Επικοινωνία</NavLink>
          </li>
          <li>
            <a href="tel:+00302374082034" className="cta-call">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              Καλέστε μας
            </a>
          </li>
        </ul>
        <div class="burger" onClick={navSlide}>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
