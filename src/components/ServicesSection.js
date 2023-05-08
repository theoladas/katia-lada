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

  return (
    <div className="half-container">
      <FlexCenter className="main-title">{t("ipiresies")} </FlexCenter>
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
