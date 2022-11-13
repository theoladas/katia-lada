import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/" id="logo">
        <img src={logo} className="logo"></img>
      </Link>
      <ul>
        <li>
          <Link to="/">ΥΠΗΡΕΣΙΕΣ</Link>
        </li>
        <li>
          <Link to="/work">GALLERY</Link>
        </li>
        <li>
          <Link to="/contact">Ο ΧΩΡΟΣ ΜΑΣ</Link>
        </li>
        <li>
          <Link to="/contact">ΕΠΙΚΟΙΝΩΝΙΑ</Link>
        </li>
      </ul>
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
  .logo {
    width: 200px;
    height: 100%;
    display: block;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 2rem;
      /* position: relative; */
    }
  }
`;

export default Nav;
