import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faStar,
  faImages,
  faCaretDown,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.scss";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [navActive, setNavActive] = useState(false);

  const navSlide = () => {
    setNavActive(!navActive);
  };

  const handleResize = () => {
    document.body.classList.add("resize-animation-stopper");
    setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  };

  const handleNavLinkClick = () => {
    if (navActive) {
      navSlide();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav>
        <NavLink to="/" id="logo">
          <img src={logo} className="logo" alt="Katia Lada logo" />
        </NavLink>
        <ul className={`nav-links${navActive ? " nav-active" : ""}`}>
          <div className="dropdown" onClick={handleNavLinkClick}>
            <NavLink to="/" className="dropbtn">
              <FontAwesomeIcon icon={faStar} className="icon" />
              Υπηρεσίες <FontAwesomeIcon icon={faCaretDown} className="icon" />
            </NavLink>

            <div className="dropdown-content">
              <Link to="/nails">Περιποίηση Άκρων</Link>
              <Link to="/make-up">Μακιγιάζ</Link>
              <Link to="/waxing">Αποτρίχωση</Link>
              <Link to="/face">Περιποίηση Προσώπου</Link>
              <Link to="/lash-lift">Τοποθέτηση Βλεφαρίδων Lashlift</Link>
            </div>
          </div>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/work">
              <FontAwesomeIcon icon={faImages} className="icon" />
              Gallery
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/contact">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />Ο χώρος
              μας
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              Επικοινωνία
            </NavLink>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                <FontAwesomeIcon icon={faGlobe} /> English
                <FontAwesomeIcon icon={faCaretDown} className="icon" />
              </button>
              <div className="dropdown">
                <button onClick={() => changeLanguage("el")}>GR</button>
                <button onClick={() => changeLanguage("en")}>EN</button>
              </div>
            </div>
          </li>
          <li onClick={handleNavLinkClick}>
            <a href="tel:+302374082034" className="cta-call">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              Καλέστε μας
            </a>
          </li>
        </ul>
        <div
          className={`burger${navActive ? " toggle-burger" : ""}`}
          onClick={navSlide}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
