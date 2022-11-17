import React from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle.js";
import homepageHeader from "../img/homepage-header.png";
import katiaLogo from "../img/katia-lada-text.png";
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
          <div className="main-title">Ινστιτούτο Αισθητικής</div>
          <img src={katiaLogo} className="katia-logo-text"></img>
          <Paragraph>
            Επαγγελματικές Υπηρεσίες περιποίηση άκρων, μακιγιάζ, τοποθέτηση
            βλεφαρίδων lashlift, αποτρίχωσης και περιποίησης προσώπου.
          </Paragraph>
          <Paragraph>
            Για ραντεβού μπορείτε να καλέσετε στο{" "}
            <CTACall href="tel:+00302374082034">2374082034</CTACall>, στις ώρες
            λειτουργίας μας.
          </Paragraph>
          <Paragraph>Δευ - Παρ: 09:00 - 13:00 | 17:00 - 19:00</Paragraph>
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
