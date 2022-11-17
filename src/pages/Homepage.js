import React from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle.js";
import homepageHeader from "../img/homepage-header.png";
import {
  Paragraph,
  CTACall,
  HeroImg,
  Flex,
} from "../components/GlobalStyle.js";
import { PrimaryBtn } from "../components/PrimaryBtn.js";

const Homepage = () => {
  return (
    <div className="homepage">
      <Flex className="container">
        <div className="hero-content">
          <div className="main-title">Σύγχρονο Κέντρο Αισθητικής</div>
          <img
            src="https://fontmeme.com/permalink/221116/51064fdbe2bec7d4de2bfdf93d4c3e88.png"
            alt="daniel-font"
            border="0"
            className="katia-logo-text"
          ></img>
          {/* <img
          className="katia"
          src="https://fontmeme.com/permalink/221116/c50eb2d83ce446642df0ace149174f35.png"
          alt="Katia Lada Logo"
          border="0"
        ></img> */}
          <Paragraph>
            Επαγγελματικές Υπηρεσίες περιποίηση άκρων, μακιγιάζ, τοποθέτηση
            βλεφαρίδων lashlift, αποτρίχωσης και περιποίησης προσώπου.
          </Paragraph>
          <Paragraph>
            Για ραντεβού μπορείτε να καλέσετε στο{" "}
            <CTACall href="tel:+00302374082034">2374082034</CTACall>, στις ώρες
            λειτουργίας μας.
          </Paragraph>
          <Paragraph>Δευ - Παρ: 10:00 - 13:00 | 15:00 - 20:00</Paragraph>
          {/* <div class="pattern-dots-md gray-light"> */}
          <PrimaryBtn />
        </div>
        <div className="hero-image">
          <HeroImg src={homepageHeader}></HeroImg>
        </div>
      </Flex>
    </div>
  );
};

export default Homepage;
