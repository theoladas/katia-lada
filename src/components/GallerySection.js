import React from "react";
import {
  Flex,
  HeroTitle,
  Paragraph,
  PrimaryButtonContainer,
  PrimaryButton,
} from "../components/GlobalStyle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gallerySectionData from "../resources/gallerySection-data.json";
import styled from "styled-components";

const HeroSection = styled(Flex)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (max-width: 500px) {
    padding: 4rem 2rem;
  }
  @media only screen and (max-width: 390px) {
    padding: 2rem 1rem;
  }
`;

const HeroContent = styled(motion.div)`
  width: 50%;
  @media screen and (max-width: 1070px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const GridRow = styled(motion.div)`
  margin-right: -5rem;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  @media screen and (max-width: 1070px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0rem;
  }
`;

const GridColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0.5rem;
  img {
    margin: 1rem 0rem;
    vertical-align: middle;
    width: 100%;
    object-fit: cover;
    border: 1px solid black;
    border-radius: 10px;
    transition: all 0.4s ease;
    &:hover {
      box-shadow: 0 0 11px rgba(8, 8, 8, 0.5);
    }
  }
  @media screen and (max-width: 768px) {
    flex: 33%;
    max-width: 33%;
  }
`;

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
    <HeroSection>
      {animate && (
        <>
          <HeroContent
            initial={{ x: -200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <HeroTitle>Gallery</HeroTitle>
            <Paragraph>{t("professionalServices")}</Paragraph>
            <PrimaryButtonContainer>
              <PrimaryButton to="/gallery">{t("perisotera")}</PrimaryButton>
            </PrimaryButtonContainer>
          </HeroContent>
          <GridRow
            initial={{ x: 200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            {gallerySectionData.map((column, columnIndex) => (
              <GridColumn key={columnIndex}>
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
              </GridColumn>
            ))}
          </GridRow>
        </>
      )}
    </HeroSection>
  );
};
