import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import logo from "../img/logo.png";
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
  color: var(--color-text);
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: var(--border-radius-primary);
  cursor: pointer;
  transition: var(--transition-primary);
  .translate-icon {
    padding-right: 4px;
  }
  .translate-arrow {
    padding-left: 3px;
  }
  &:hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }
  .translate-icon-hover:hover {
    color: var(--color-pink);
  }
`;

const DropdownContent = styled.div.attrs((props) => ({
  onClick: () => props.onItemClick && props.onItemClick(),
}))`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  min-width: 70px;
  background-color: var(--color-dropdown);
  border-radius: var(--border-radius-primary);
  box-shadow: var(--box-shadow-navigation);
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
  width: 100%;
  display: block;
  font-family: var(--font-family-contact-form);
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  padding: 12px 16px;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  &:hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }
  &:first-child {
    border-top-left-radius: var(--border-radius-primary);
    border-top-right-radius: var(--border-radius-primary);
  }
  &:last-child {
    border-bottom-left-radius: var(--border-radius-primary);
    border-bottom-right-radius: var(--border-radius-primary);
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
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: var(--color-text);
  border-radius: var(--border-radius-primary);
  transition: var(--transition-primary);
  cursor: pointer;
  .icon {
    margin-left: 5px;
    transition: var(--transition-primary);
  }
`;

const ServicesDropdownItem = styled(Link)`
  width: 100%;
  display: block;
  font-family: var(--font-family-contact-form);
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  padding: 12px 16px;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  &:hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }
  &:first-child {
    border-top-left-radius: var(--border-radius-primary);
    border-top-right-radius: var(--border-radius-primary);
  }
  &:last-child {
    border-bottom-left-radius: var(--border-radius-primary);
    border-bottom-right-radius: var(--border-radius-primary);
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
`;

const NavStyled = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0rem 2rem;
  background-color: var(--color-bg);
  transition: box-shadow var(--transition-primary);
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

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

  const languageDisplayMap = {
    el: "ΕΛ",
    en: "EN",
    ru: "RU",
  };

  const getDisplayLanguage = (langCode) => {
    return languageDisplayMap[langCode] || langCode.toUpperCase();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <AnimatePresence>
      <motion.header
        key="header"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        style={{ zIndex: 1000 }}
      >
        <Header>
          <NavStyled className={scrolled ? "nav-shadow" : ""}>
            <NavLink to="/" id="logo">
              <img src={logo} className="logo" alt="Katia Lada logo" />
            </NavLink>
            <ul className={`nav-links${navActive ? " nav-active" : ""}`}>
              <li>
                <ServicesDropdownWrapper>
                  <ServicesDropdownButton>
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    {t("ipiresies")}{" "}
                    <FontAwesomeIcon icon={faCaretDown} className="icon" />
                  </ServicesDropdownButton>
                  <DropdownContent>
                    <ServicesDropdownItem
                      to="/manicure-pedicure"
                      onClick={handleNavLinkClick}
                      className="dropNavLink"
                    >
                      {t("peripoihshAkron")}
                    </ServicesDropdownItem>
                    <ServicesDropdownItem
                      to="/make-up"
                      onClick={handleNavLinkClick}
                      className="dropNavLink"
                    >
                      {t("makigiaz")}
                    </ServicesDropdownItem>
                    <ServicesDropdownItem
                      to="/waxing"
                      onClick={handleNavLinkClick}
                      className="dropNavLink"
                    >
                      {t("apotrixosi")}
                    </ServicesDropdownItem>
                    <ServicesDropdownItem
                      to="/facial"
                      onClick={handleNavLinkClick}
                      className="dropNavLink"
                    >
                      {t("peripoihshProsopou")}
                    </ServicesDropdownItem>
                    <ServicesDropdownItem
                      to="/lashlift"
                      onClick={handleNavLinkClick}
                      className="dropNavLink"
                    >
                      {t("lashlift")}
                    </ServicesDropdownItem>
                  </DropdownContent>
                </ServicesDropdownWrapper>
              </li>
              <li onClick={handleNavLinkClick}>
                <NavLink to="/gallery">
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
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="translate-icon"
                    />
                    {getDisplayLanguage(currentLanguage)}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="icon translate-arrow"
                    />
                  </DropdownButton>

                  <DropdownContent>
                    <DropdownItem onClick={() => changeLanguage("el")}>
                      ΕΛ
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
          </NavStyled>
        </Header>
      </motion.header>
    </AnimatePresence>
  );
};

export default Nav;
