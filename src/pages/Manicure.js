import React from "react";
import {
  Paragraph,
  CTACall,
  Page,
  PageTitle,
  HeroContent,
  FlexRowHeroContainer,
} from "../components/GlobalStyle.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import manicure from "../img/manicure.jpg";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 50%;
  img {
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 100%;
  }
`;

const Manicure = () => {
  const { t } = useTranslation();
  const dropIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const riseIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers
  });

  const useFadeInAnimation = () => {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    };
  };

  const fadeIn = useFadeInAnimation();

  return (
    <Page>
      <PageTitle className="main-title gallery-title">
        {t("peripoihshAkron")}
      </PageTitle>
      <FlexRowHeroContainer>
        <ImageContainer>
          <motion.div initial="hidden" animate="visible">
            <img src={manicure} alt="Manicure / Pedicure service"></img>
          </motion.div>
        </ImageContainer>

        <HeroContent>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={riseIn}
            ref={ref}
          >
            <Paragraph>
              {t("forAppointments")}{" "}
              <CTACall href="tel:+302374082034">23740 82034</CTACall>,{" "}
              {t("workingHours")}
            </Paragraph>
            <Paragraph>
              <strong>{t("monFri")}</strong>: {t("morningHours")}{" "}
              <strong>&</strong> {t("eveningHours")}
            </Paragraph>
            <Paragraph>
              {t("sabato")} & {t("kiriaki")}: {t("kleista")}
            </Paragraph>
          </motion.div>
        </HeroContent>
      </FlexRowHeroContainer>
    </Page>
  );
};

export default Manicure;
