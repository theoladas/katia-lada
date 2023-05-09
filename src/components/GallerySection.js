import React from "react";
import { Flex, Paragraph } from "../components/GlobalStyle";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import grid1 from "../img/grid-1.png";
import grid2 from "../img/grid-2.png";
import grid3 from "../img/grid-3.png";
import grid4 from "../img/grid-4.png";
import grid5 from "../img/grid-5.png";
import grid6 from "../img/grid-6.png";
import "../styles/GallerySection.scss";

export const GallerySection = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <Flex className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ x: -200 }}
        animate={{ x: 0, ...fadeIn.visible }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      >
        <div className="main-title">Gallery</div>
        <Paragraph>{t("professionalServices")}</Paragraph>
        <div className="primary-btn-container">
          <a href="/" className="primary-btn">
            {t("perisotera")}
          </a>
        </div>
      </motion.div>
      <motion.div
        className="grid-row"
        initial={{ x: 200 }}
        animate={{ x: 0, ...fadeIn.visible }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      >
        <div className="grid-column">
          <img src={grid1} alt="Gallery example"></img>
          <img src={grid6} alt="Gallery example"></img>
          <img src={grid5} alt="Gallery example"></img>
        </div>
        <div className="grid-column">
          <img src={grid2} alt="Gallery example"></img>
          <img src={grid4} alt="Gallery example"></img>

          <img src={grid6} alt="Gallery example"></img>
        </div>
        <div className="grid-column">
          <img src={grid3} alt="Gallery example"></img>
          <img src={grid5} alt="Gallery example"></img>
          <img src={grid4} alt="Gallery example"></img>
        </div>
      </motion.div>
    </Flex>
  );
};
