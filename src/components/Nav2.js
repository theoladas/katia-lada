import "../styles/Nav2.scss";
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

export const Nav2 = () => {
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
      <nav class="navbar">
        <NavLink to="/" id="logo">
          <img src={logo} className="logo"></img>
        </NavLink>

        <div class="dropdown">
          <NavLink to="/" class="dropbtn">
            Υπηρεσίες
          </NavLink>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <NavLink to="/">Gallery</NavLink>
        <NavLink to="/contact">Ο χώρος μας</NavLink>
        <NavLink to="/contact">Επικοινωνία</NavLink>
        <a href="tel:+302374082034" className="cta-call">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          Καλέστε μας
        </a>
        <div class="burger" onClick={navSlide}>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>
  );
};
