import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Paragraph, CTACall, Flex } from "../components/GlobalStyle.js";
import { PrimaryBtn } from "../components/PrimaryBtn.js";
import { ServicesSection } from "../components/ServicesSection.js";
import { GallerySection } from "../components/GallerySection.js";
import { OurStoreSection } from "../components/OurStoreSection.js";
import { ContactSection } from "../components/ContactSection";
import homepageBanner from "../img/homepage-banner.png";
import katiaLogo from "../img/katia-lada-text.png";

const Homepage = () => {
  const { t, i18n } = useTranslation();

  const dropIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const riseIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
        <motion.div
          className="hero-image"
          initial="hidden"
          animate="visible"
        ></motion.div>
        <div className="hero-content">
          <motion.div
            className="main-title"
            initial="hidden"
            animate="visible"
            variants={dropIn}
            custom={1}
          >
            {t("institutoAisthitikis")}
          </motion.div>
          <motion.img
            src={katiaLogo}
            className="katia-logo-text"
            initial="hidden"
            animate="visible"
            variants={dropIn}
            custom={2}
          ></motion.img>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={dropIn}
            custom={3}
          >
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
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={riseIn}
            custom={4}
          >
            <PrimaryBtn />
          </motion.div>
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
