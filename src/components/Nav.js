import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
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

const DropdownButton = styled.button`
  background-color: transparent;
  color: #282828;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  .translate-icon {
    padding-right: 4px;
  }
  .translate-arrow {
    padding-left: 3px;
  }
  &:hover {
    background-color: #f49ac1;
    color: white;
  }
`;

const DropdownContent = styled.div.attrs((props) => ({
  onClick: () => props.onItemClick && props.onItemClick(),
}))`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 70px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const DropdownItem = styled.button`
  color: #282828;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: center;
  border: none;
  font-size: 1rem;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #f49ac1;
    color: white;
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ServicesDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const ServicesDropdownButton = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #282828;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  .icon {
    margin-left: 5px;
    transition: color 0.3s ease;
  }
`;

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [navActive, setNavActive] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    if (navActive) {
      navSlide();
    }
  };

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
          <li>
            <ServicesDropdownWrapper>
              <ServicesDropdownButton to="/">
                <FontAwesomeIcon icon={faStar} className="icon" />
                {t("ipiresies")}{" "}
                <FontAwesomeIcon icon={faCaretDown} className="icon" />
              </ServicesDropdownButton>
              <DropdownContent>
                <Link to="/nails">
                  <DropdownItem onClick={handleNavLinkClick}>
                    {t("peripoihshAkron")}
                  </DropdownItem>
                </Link>
                <Link to="/make-up">
                  <DropdownItem onClick={handleNavLinkClick}>
                    {t("makigiaz")}
                  </DropdownItem>
                </Link>
                <Link to="/waxing">
                  <DropdownItem onClick={handleNavLinkClick}>
                    {t("apotrixosi")}
                  </DropdownItem>
                </Link>
                <Link to="/face">
                  <DropdownItem onClick={handleNavLinkClick}>
                    {t("peripoihshProsopou")}
                  </DropdownItem>
                </Link>
                <Link to="/lash-lift">
                  <DropdownItem onClick={handleNavLinkClick}>
                    {t("lashlift")}
                  </DropdownItem>
                </Link>
              </DropdownContent>
            </ServicesDropdownWrapper>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/work">
              <FontAwesomeIcon icon={faImages} className="icon" />
              Gallery
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/contact">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              {t("oXorosMas")}
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              {t("epikoinonia")}
            </NavLink>
          </li>
          <li>
            <DropdownWrapper>
              <DropdownButton>
                <FontAwesomeIcon icon={faGlobe} className="translate-icon" />
                {currentLanguage.toUpperCase()}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="icon translate-arrow"
                />
              </DropdownButton>
              <DropdownContent>
                <DropdownItem onClick={() => changeLanguage("el")}>
                  EL
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage("en")}>
                  EN
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage("ru")}>
                  RU
                </DropdownItem>
              </DropdownContent>
            </DropdownWrapper>
          </li>
          <li onClick={handleNavLinkClick}>
            <a href="tel:+302374082034" className="cta-call">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              {t("kalesteMas")}
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
