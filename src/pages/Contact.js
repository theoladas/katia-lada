import React from "react";
import {
  Paragraph,
  CTACall,
  Page,
  HeroTitle,
  HeroContent,
  HeroImage,
} from "../components/GlobalStyle.js";
import {
  FormContainer,
  FormSubmitButton,
} from "../components/ContactSection.js";
import { motion, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import magazi from "../img/magazi.png";
import styled from "styled-components";

const Beauty = styled.span`
  font-family: var(--font-family-beauty);
  font-weight: var(--font-weight-beauty);
  font-size: var(--font-size-beauty);
  color: var(--color-pink);
  hr {
    margin: 1rem 0rem;
    opacity: 0.3;
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  border: 1px solid var(--color-white);
  box-shadow: var(--box-shadow-contact-cards);
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  width: 300px;
  height: 200px;
  text-align: center;
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 150px;
    margin: 0.5rem;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  padding-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Content = styled.p`
  margin: 0.5rem 0 0;
  a {
    font-size: 1.1rem;
    text-decoration: none;
    letter-spacing: 1px;
    color: var(--color-pink);
    padding: 10px 12px;
    border-radius: 10px;
    opacity: 1;
    transition: var(--transition-primary);
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const InstagramBanner = styled.section`
  text-align: center;
  padding: 1rem;
  margin: 2rem 0;
  background-color: var(--color-pink);
  border-radius: var(--border-radius-primary);
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  h2 {
    font-family: var(--font-family-paragraph-styled);
    font-size: var(--font-size-paragraph-styled);
    line-height: 22px;
    color: var(--color-white);
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 0;
  /* margin: auto 0; */
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
  }
`;

const FormContainerStyled = styled(FormContainer)`
  padding: 0 2rem;
`;

const Contact = () => {
  const { t } = useTranslation();

  const useScrollAnimation = (options = {}) => {
    const { animation, direction } = options;

    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });

    const defaultVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const directionVariants = {
      hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const variants =
      animation || (direction ? directionVariants : defaultVariants);

    const animationProps = {
      initial: "hidden",
      animate: inView ? "visible" : "hidden",
      variants: variants,
    };

    return [ref, animationProps];
  };

  const [heroTitleRef, heroTitleAnimation] = useScrollAnimation();
  const [heroImageRef, heroImageAnimation] = useScrollAnimation();
  const [heroContentRef, heroContentAnimation] = useScrollAnimation();
  const [FormRef, FormAnimation] = useScrollAnimation({ direction: "right" });
  const [ParagraphRef, ParagraphAnimation] = useScrollAnimation({
    direction: "left",
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const dropIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Page>
      <HeroTitle ref={heroTitleRef} {...heroTitleAnimation}>
        {t("epikoinonia")}
      </HeroTitle>

      <HeroImage>
        <motion.div ref={heroImageRef} {...heroImageAnimation}>
          <img src={magazi} alt="Katia Lada Beauty Salon"></img>
        </motion.div>
      </HeroImage>

      <HeroContent>
        <motion.div ref={heroContentRef} {...heroContentAnimation}>
          <Paragraph>
            <h2>
              <Beauty>
                Beauty Salon <hr />
              </Beauty>
            </h2>
          </Paragraph>
        </motion.div>
        <motion.div ref={heroContentRef} {...heroContentAnimation}>
          <CardContainer>
            <Card>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <g
                  id="Group_23"
                  data-name="Group 23"
                  transform="translate(-143 -624)"
                >
                  <circle
                    id="Ellipse_11"
                    data-name="Ellipse 11"
                    cx="20"
                    cy="20"
                    r="20"
                    transform="translate(143 624)"
                    fill="#f49ac1"
                  />
                  <path
                    id="Icon_material-location-on"
                    data-name="Icon material-location-on"
                    d="M10,1.667A5.829,5.829,0,0,0,4.167,7.5C4.167,11.875,10,18.333,10,18.333S15.833,11.875,15.833,7.5A5.829,5.829,0,0,0,10,1.667Zm0,7.917A2.083,2.083,0,1,1,12.083,7.5,2.084,2.084,0,0,1,10,9.583Z"
                    transform="translate(153 634)"
                    fill="#fff"
                  />
                </g>
              </svg>
              <Title>{t("dieuthinsiTitlos")}</Title>
              <Content>{t("dieuthinsi")}</Content>
            </Card>
            <Card>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <g
                  id="Group_18"
                  data-name="Group 18"
                  transform="translate(-205 -624)"
                >
                  <circle
                    id="Ellipse_12"
                    data-name="Ellipse 12"
                    cx="20"
                    cy="20"
                    r="20"
                    transform="translate(205 624)"
                    fill="#f49ac1"
                  />
                  <path
                    id="Icon_awesome-phone-alt"
                    data-name="Icon awesome-phone-alt"
                    d="M15.544,11.306l-3.5-1.5a.75.75,0,0,0-.875.216l-1.55,1.894A11.583,11.583,0,0,1,4.081,6.379l1.894-1.55a.748.748,0,0,0,.216-.875l-1.5-3.5A.755.755,0,0,0,3.831.019L.581.769A.75.75,0,0,0,0,1.5,14.5,14.5,0,0,0,14.5,16a.75.75,0,0,0,.731-.581l.75-3.25a.759.759,0,0,0-.438-.863Z"
                    transform="translate(217 636)"
                    fill="#fff"
                  />
                </g>
              </svg>
              <Title>{t("tilefono")}</Title>
              <Content>
                <a href="tel:+302374082034" rel="noreferrer">
                  23740 82034
                </a>
              </Content>
            </Card>
            <Card>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <g
                  id="Group_17"
                  data-name="Group 17"
                  transform="translate(-143 -624)"
                >
                  <circle
                    id="Ellipse_11"
                    data-name="Ellipse 11"
                    cx="20"
                    cy="20"
                    r="20"
                    transform="translate(143 624)"
                    fill="#f49ac1"
                  />
                  <path
                    id="Icon_material-email"
                    data-name="Icon material-email"
                    d="M21,6H5A2,2,0,0,0,3.01,8L3,20a2.006,2.006,0,0,0,2,2H21a2.006,2.006,0,0,0,2-2V8A2.006,2.006,0,0,0,21,6Zm0,4-8,5L5,10V8l8,5,8-5Z"
                    transform="translate(150 630)"
                    fill="#fff"
                  />
                </g>
              </svg>
              <Title>Email</Title>
              <Content>
                {" "}
                <a href="mailto:lada.katia@gmail.com">lada.katia@gmail.com</a>
              </Content>
            </Card>
          </CardContainer>
        </motion.div>

        <motion.div ref={heroContentRef} {...heroContentAnimation}>
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

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={dropIn}
          ref={ref}
        >
          <InstagramBanner>
            <a
              href="https://www.instagram.com/katia_lada/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>{t("instagramBanner")} </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="31.993"
                viewBox="0 0 32 31.993"
              >
                <path
                  id="Icon_awesome-instagram"
                  data-name="Icon awesome-instagram"
                  d="M16,10.032a8.2,8.2,0,1,0,8.2,8.2A8.19,8.19,0,0,0,16,10.032Zm0,13.535a5.333,5.333,0,1,1,5.333-5.333A5.342,5.342,0,0,1,16,23.567ZM26.45,9.7a1.913,1.913,0,1,1-1.913-1.913A1.909,1.909,0,0,1,26.45,9.7Zm5.433,1.942a9.468,9.468,0,0,0-2.584-6.7,9.53,9.53,0,0,0-6.7-2.584c-2.641-.15-10.558-.15-13.2,0a9.517,9.517,0,0,0-6.7,2.577,9.5,9.5,0,0,0-2.584,6.7c-.15,2.641-.15,10.558,0,13.2a9.468,9.468,0,0,0,2.584,6.7,9.542,9.542,0,0,0,6.7,2.584c2.641.15,10.558.15,13.2,0a9.468,9.468,0,0,0,6.7-2.584,9.53,9.53,0,0,0,2.584-6.7c.15-2.641.15-10.551,0-13.193ZM28.47,27.665a5.4,5.4,0,0,1-3.041,3.041c-2.106.835-7.1.642-9.43.642s-7.332.186-9.43-.642a5.4,5.4,0,0,1-3.041-3.041c-.835-2.106-.642-7.1-.642-9.43S2.7,10.9,3.527,8.8A5.4,5.4,0,0,1,6.568,5.763c2.106-.835,7.1-.642,9.43-.642s7.332-.186,9.43.642A5.4,5.4,0,0,1,28.47,8.8c.835,2.106.642,7.1.642,9.43S29.305,25.566,28.47,27.665Z"
                  transform="translate(0.005 -2.238)"
                  fill="#fff"
                />
              </svg>
            </a>
          </InstagramBanner>
        </motion.div>
      </HeroContent>

      <ContactSection>
        {animate && (
          <>
            <motion.div ref={ParagraphRef} {...ParagraphAnimation}>
              <Paragraph>{t("plirofories")}</Paragraph>
            </motion.div>

            <FormContainerStyled ref={FormRef} {...FormAnimation}>
              <form action="https://formspree.io/f/mrgvjnvg" method="POST">
                <label htmlFor="">{t("onomateponimo")}</label>
                <input type="text" name="name" required />
                <label htmlFor="">Email:</label>
                <input type="email" name="email" required />
                <label htmlFor="">{t("minima")}</label>
                <textarea rows="4" cols="20" name="message" required></textarea>
                <FormSubmitButton type="submit">
                  {t("steilteMinima")}
                </FormSubmitButton>
              </form>
            </FormContainerStyled>
          </>
        )}
      </ContactSection>
    </Page>
  );
};

export default Contact;
