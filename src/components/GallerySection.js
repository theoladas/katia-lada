import React from "react";
import { Flex, Paragraph } from "../components/GlobalStyle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gallerySectionData from "../resources/gallerySection-data.json";
import "../styles/GallerySection.scss";

export const GallerySection = ({ animate }) => {
  const { t } = useTranslation();

  const useFadeInAnimation = () => {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    };
  };

  const fadeIn = useFadeInAnimation();

  return (
    <Flex className="hero-section">
      {animate && (
        <>
          <motion.div
            className="hero-content"
            initial={{ x: -200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <div className="main-title">Gallery</div>
            <Paragraph>{t("professionalServices")}</Paragraph>
            <div className="primary-btn-container">
              <Link to="/gallery" className="primary-btn">
                {t("perisotera")}
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="grid-row"
            initial={{ x: 200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            {gallerySectionData.map((column, columnIndex) => (
              <div className="grid-column" key={columnIndex}>
                {column.map((image, index) => (
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    initial={{ ...fadeIn.hidden }}
                    animate={{ ...fadeIn.visible }}
                    transition={{ delay: image.delay }}
                    key={index}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </Flex>
  );
};
