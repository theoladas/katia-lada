import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Nav = () => {
  const navSlide = () => {
    console.log("trest");
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  };
  //   navSlide();

  return (
    <StyledNav>
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
      </ul>
      <div class="burger" onClick={navSlide}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </StyledNav>
  );
};

// Styles
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  margin: auto;
  background: #282828;
  position: sticky;
  top: 0;
  left: 0;
  .logo {
    width: 200px;
    height: 100%;
  }

  .nav-links {
    display: flex;
    list-style: none;
    li {
      padding-left: 2rem;
      letter-spacing: 2px;
      a {
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
        &:hover,
        &:focus {
          color: #e4389b;
          cursor: pointer;
        }
      }
    }
  }
  .burger div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #e4389b;
    transition: all 0.3s ease;
  }
  .burger {
    display: none;
    &:hover {
      cursor: pointer;
    }
  }
  .nav-active {
    transform: translateX(0%);
  }
  @media screen and (max-width: 897px) {
    .nav-links {
      position: absolute;
      top: 10vh;
      right: 0px;
      height: 90vh;
      width: 30%;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      background-color: #282828;
      transform: translateX(100%);
      transition: all 0.3s ease;
    }
    .burger {
      display: block;
    }
    .toggle-burger .line1 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    .toggle-burger .line2 {
      opacity: 0;
    }
    .toggle-burger .line3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;

export default Nav;
