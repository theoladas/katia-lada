import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faStar,
  faImages,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav2.scss";

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
          <div class="dropdown">
            <NavLink to="/" class="dropbtn">
              {/* <FontAwesomeIcon icon={faStar} className="icon" /> */}
              Υπηρεσίες{" "}
              <FontAwesomeIcon
                icon={faCaretDown}
                className="icon"
              ></FontAwesomeIcon>
            </NavLink>

            <div class="dropdown-content">
              <a href="/">Περιποίηση Άκρων</a>
              <a href="/">Μακιγιάζ</a>
              <a href="/">Αποτρίχωση</a>
              <a href="/">Περιποίηση Προσώπου</a>
              <a href="/">Τοποθέτηση Βλεφαρίδων Lashlift</a>
            </div>
          </div>
          <li>
            <NavLink to="/work">
              {/* <FontAwesomeIcon icon={faImages} className="icon" /> */}
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {/* <FontAwesomeIcon icon={faLocationDot} className="icon" /> */}Ο
              χώρος μας
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {/* <FontAwesomeIcon icon={faEnvelope} className="icon" /> */}
              Επικοινωνία
            </NavLink>
          </li>
          <li>
            <a href="tel:+302374082034" className="cta-call">
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
