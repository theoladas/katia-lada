import React from "react";
import { HalfContainer, FlexCenter, HeroTitle } from "./GlobalStyle";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ServiceSection = styled.div`
  padding-top: 2rem;
`;

const Card = styled(motion.div)`
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  padding: 0.8rem;
  background-color: var(--color-pink);
  border: var(--border-button);
  border-radius: 50%;
  color: var(--color-white);
  text-align: center;
  cursor: pointer;
  transition: var(--transition-primary);
  @media (max-width: 1070px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
  &:hover,
  &:focus {
    color: var(--color-text);
    background-color: var(--color-bg);
    border: var(--border-button);
    box-shadow: var(--box-shadow-card-section);
  }
`;

const CardParagraph = styled.p`
  padding: 0 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CardImage = styled.div`
  padding: 0.5rem 0;
  width: 80px;
  height: auto;
  background-color: var(--color-white);
  @media (max-width: 768px) {
    width: 40px;
  }
`;

export const ServicesSection = ({ cards, servicesInView }) => {
  const { t } = useTranslation();

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
    <HalfContainer>
      <HeroTitle
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <FlexCenter>{t("ipiresies")}</FlexCenter>
      </HeroTitle>
      <ServiceSection>
        <FlexCenter>
          {cards.map((card, index) => (
            <Card
              key={index}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={servicesVariants}
              custom={index}
            >
              <Link to={card.href}>
                <CardContent>
                  <CardImage>
                    <img src={card.image} alt={t(card.text)} />
                  </CardImage>
                  <div>
                    <CardParagraph>{t(card.text)}</CardParagraph>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </FlexCenter>
      </ServiceSection>
    </HalfContainer>
  );
};
