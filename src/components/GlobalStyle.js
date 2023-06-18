import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle` 

:root {
  --font-family-contact-form: "Manrope", sans-serif;
  --font-family-beauty: "Dancing Script", cursive;
  --font-family-paragraph-styled: "Comfortaa", cursive;
  --font-family-hero: "Arima", cursive;
  --font-size-hero-title: 3rem;
  --font-size-hero-title-secondary: 1.8rem;
  --font-size-paragraph-styled: 1.135rem;
  --font-size-primary-button: 1.1rem;
  --font-size-beauty: 3rem;
  --font-size-accordion-title: 1.5rem;
  --font-size-accordion-content: 1.2rem;
  --font-size-footer: 0.8rem;
  --font-size-footer-paragraph: 0.6rem;
  --font-size-footer-attribute: 0.45rem;
  --font-weight-beauty: 400;

  --color-pink: #f49ac1;
  --color-pink-strong: #e4389b;
  --color-text: #282828;
  --color-white: #fff;
  --color-bg: #f0e9eb;
  --color-bg-footer: #77787b;
  --color-bg-accordion: #f6f6f6;
  --color-bg-form-input-textarea: #f0f0f0;
  --color-dropdown: #f1f1f1;
  
  --hover-pink-color: #f49ac1;

  --border-button: 1px solid #f49ac1;
  --border-accordion-top: 1px solid #ddd; 
  --border-form-input-textarea: 1px solid #f0f0f0;
  --border-gallery-image: 1px solid black;
  --border-tab-container: 2px solid transparent;

  --border-radius-primary: 10px;

  --box-shadow-navigation: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  --box-shadow-grid-column: 0 0 11px rgba(8, 8, 8, 0.5);
  --box-shadow-components: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  --box-shadow-card-section: 0 10px 25px rgba(244, 154, 193, 0.7);

  --transition-primary: all 0.4s ease;

  --spacing-footer-links: 0.5rem 0;

  --breakpoint-large: 1330px;
  --breakpoint-desktop: 1070px;
  --breakpoint-tablet: 768px;
  --breakpoint-mobile: 500px;
  --breakpoint-small: 360px;
}

::-webkit-scrollbar {
  width: 9px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: transparent; 
  border-radius: var(--border-radius-primary); 
  &:hover {
  background: var(--hover-pink-color);  
  }
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Manrope', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-text);
  }
  img {
    max-width: 100%;
    display: block;
  }
  a {
    text-decoration: none;
  }

  /* Utility Classes */
  .flex {
      display: flex;
  }
`;

// Styled Components

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const FlexRowHeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding-top: 2rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CTACall = styled.a`
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--color-pink);
  opacity: 1;
  transition: var(--transition-primary);
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export const HalfContainer = styled.div`
  padding: 5rem;
  min-height: 45vh;
  background-color: #fff;
  @media (max-width: 500px) {
    padding: 4rem 2rem;
  }
  @media (max-width: 390px) {
    padding: 2rem 1rem;
  }
`;

export const HeroSection = styled.main`
  min-height: 90vh;
  padding: 5rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 390px) {
    padding: 2rem 1rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 100%;
  padding-top: 2rem;
`;

export const HeroTitle = styled(motion.div)`
  font-family: var(--font-family-hero);
  font-size: var(--font-size-hero-title);
  font-weight: 700;
  color: var(--font-text);
  margin-top: 2rem;
  @media (max-width: 1024px) {
    font-size: 2.6rem;
    line-height: 55px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const HeroImage = styled.div`
  padding-top: 2rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const HeroTitleSecondary = styled(motion.h2)`
  font-family: var(--font-family-hero);
  font-size: var(--font-size-hero-title-secondary);
  padding: 1rem 0rem 0.5rem 0rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-family: var(--font-family-paragraph-styled);
  font-size: var(--font-size-paragraph-styled);
  text-align: left;
  line-height: 30px;
  color: var(--color-text);
  max-width: 80%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  @media (max-width: 990px) {
    font-size: 1.125rem;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
  @media (max-width: 390px) {
    font-size: 1rem;
  }
`;

export const PrimaryButton = styled(Link)`
  font-size: var(--font-size-primary-button);
  text-decoration: none;
  letter-spacing: 1px;
  background: var(--color-pink);
  color: var(--color-white);
  border: var(--border-button);
  border-radius: var(--border-radius-primary);
  padding: 10px 12px;
  opacity: 1;
  transition: var(--transition-primary);
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const PrimaryButtonContainer = styled(motion.div)`
  padding: 2rem 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default GlobalStyle;
