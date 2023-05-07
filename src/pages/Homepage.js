import React from "react";
import { useTranslation } from "react-i18next";
import homepageBanner from "../img/homepage-banner.png";
import katiaLogo from "../img/katia-lada-text.png";
import { Paragraph, CTACall, Flex } from "../components/GlobalStyle.js";
import { PrimaryBtn } from "../components/PrimaryBtn.js";
import { ServicesSection } from "../components/ServicesSection.js";
import { GallerySection } from "../components/GallerySection.js";
import { OurStoreSection } from "../components/OurStoreSection.js";
import { ContactSection } from "../components/ContactSection";

const Homepage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
        <div className="hero-image"></div>
        <div className="hero-content">
          <div className="main-title">{t("institutoAisthitikis")}</div>
          <img src={katiaLogo} className="katia-logo-text"></img>
          <Paragraph>{t("professionalServices")}</Paragraph>
          <Paragraph>
            {t("forAppointments")}{" "}
            <CTACall href="tel:+302374082034">23740 82034</CTACall>,{" "}
            {t("workingHours")}
          </Paragraph>
          <Paragraph>
            <strong>{t("monFri")}</strong>: {t("morningHours")}{" "}
            <strong>&</strong> {t("eveningHours")}
          </Paragraph>
          <PrimaryBtn />
        </div>
      </Flex>
      <ServicesSection />
      <GallerySection />
      <OurStoreSection />
      <ContactSection />
    </main>
  );
};

export default Homepage;
