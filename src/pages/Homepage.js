import React from "react";
import GlobalStyle from "../components/GlobalStyle.js";
import homepageBanner from "../img/homepage-banner.png";
import katiaLogo from "../img/katia-lada-text.png";
import {
  Paragraph,
  CTACall,
  HeroImg,
  Flex,
} from "../components/GlobalStyle.js";
import { PrimaryBtn } from "../components/PrimaryBtn.js";
import { ServicesSection } from "../components/ServicesSection.js";
import { GallerySection } from "../components/GallerySection.js";
import { OurStoreSection } from "../components/OurStoreSection.js";

const Homepage = () => {
  return (
    <main>
      <Flex
        className="homepage"
        style={{
          backgroundImage: `url(${homepageBanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-image">
          {/* <HeroImg src={homepageBanner} class="hero-img"></HeroImg> */}
        </div>
        <div className="hero-content">
          <div className="main-title">Ινστιτούτο Αισθητικής</div>
          <img src={katiaLogo} className="katia-logo-text"></img>
          <Paragraph>
            Επαγγελματικές Υπηρεσίες περιποίηση άκρων, μακιγιάζ, τοποθέτηση
            βλεφαρίδων lashlift, αποτρίχωσης και περιποίησης προσώπου.
          </Paragraph>
          <Paragraph>
            Για ραντεβού μπορείτε να καλέσετε στο{" "}
            <CTACall href="tel:+302374082034">23740 82034</CTACall>, στις ώρες
            λειτουργίας μας.
          </Paragraph>
          <Paragraph>
            <strong>Δευ - Παρ</strong>: 09:00 - 13:00 <strong>&</strong> 17:00 -
            19:00
          </Paragraph>
          <PrimaryBtn />
        </div>
      </Flex>
      <ServicesSection />
      <GallerySection />
      <OurStoreSection />
    </main>
  );
};

export default Homepage;
