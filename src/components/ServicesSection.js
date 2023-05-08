import React from "react";
import { FlexCenter } from "./GlobalStyle";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/ServicesSection.scss";

export const ServicesSection = ({ cards, servicesInView }) => {
  const { t, i18n } = useTranslation();

  const servicesVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <div className="half-container">
      <motion.div
        className="main-title"
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <FlexCenter>{t("ipiresies")}</FlexCenter>
      </motion.div>
      <div className="serviceSection">
        <FlexCenter>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={servicesVariants}
              custom={index}
            >
              <div className="card-content">
                <div className="card-image">
                  <img src={card.image} alt={t(card.text)} />
                </div>
                <div>
                  <p>{t(card.text)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </FlexCenter>
      </div>
    </div>
  );
};
