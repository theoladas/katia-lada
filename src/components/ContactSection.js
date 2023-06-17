import {
  HeroSection,
  HeroTitle,
  Paragraph,
  PrimaryButtonContainer,
  PrimaryButton,
} from "./GlobalStyle";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ContactSectionStyled = styled(HeroSection)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const ContactContent = styled(motion.div)`
  width: 50%;
  padding-bottom: 2rem;
  padding-right: 2rem;
  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
    padding-right: 0rem;
    p {
      text-align: center;
    }
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: var(--color-pink);
  margin-right: 0.5rem;
  transition: var(--transition-primary);
  @media (max-width: 390px) {
    font-size: 1rem;
    margin-right: 0.3rem;
  }
  &:hover {
    color: var(--hover-pink-color);
  }
`;

const ContactLinks = styled.a`
  color: var(--color-text);
  transition: var(--transition-primary);
  &:hover {
    color: var(--hover-pink-color);
  }
`;

const ContantLinkCallUs = styled.a`
  color: var(--color-pink);
  transition: var(--transition-primary);
  &:hover {
    text-decoration: underline;
  }
`;

export const FormContainer = styled(motion.div)`
  width: 50%;
  padding-right: 2rem;
  @media (max-width: 950px) {
    margin-right: -2rem;
    padding-right: 0rem;
  }
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0rem;
    padding-right: 0rem;
  }
  form {
    display: flex;
    flex-direction: column;
    background: var(--color-white);
    padding: 2rem;
    border-radius: var(--border-radius-primary);
    box-shadow: var(--box-shadow-components);
    max-width: 500px;
    @media (max-width: 850px) {
      margin: auto;
    }
    input,
    textarea {
      padding: 0.5rem;
      border: var(--border-form-input-textarea);
      background-color: var(--color-bg-form-input-textarea);
      border-radius: var(--border-radius-primary);
      margin: 0.5rem 0;
    }
    input[type="text"],
    input[type="email"],
    textarea {
      font-family: var(--font-family-contact-form);
      font-size: 1.1rem;
    }
    textarea {
      resize: none;
    }
  }
`;

export const FormSubmitButton = styled.button`
  font-family: var(--font-family-contact-form);
  font-size: 1rem;
  letter-spacing: 1px;
  margin-left: auto;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background: var(--color-pink);
  border: var(--border-primary-button);
  border-radius: var(--border-radius-primary);
  color: var(--color-white);
  cursor: pointer;
  opacity: 1;
  transition: var(--transition-primary);
  &:hover {
    opacity: 0.8;
  }
`;

export const ContactSection = ({ animate }) => {
  const { t } = useTranslation();

  const useFadeInAnimation = () => {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    };
  };

  const fadeIn = useFadeInAnimation();

  return (
    <ContactSectionStyled>
      {animate && (
        <>
          <ContactContent
            initial={{ x: -200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <HeroTitle>{t("epikoinonia")}</HeroTitle>
            <Paragraph>{t("plirofories")}</Paragraph>
            <Paragraph>
              {t("forAppointments")}{" "}
              <ContantLinkCallUs href="tel:+302374082034">
                23740 82034
              </ContantLinkCallUs>
              {", "}
              {t("workingHoursContant")}
            </Paragraph>
            <div>
              <ul>
                <Paragraph>
                  <ContactIcon icon={faEnvelope} />
                  <ContactLinks href="mailto:lada.katia@gmail.com">
                    lada.katia@gmail.com
                  </ContactLinks>
                </Paragraph>
                <Paragraph>
                  <ContactIcon icon={faPhone} />
                  <ContactLinks href="tel:+3002374082034">
                    23740 82034
                  </ContactLinks>
                </Paragraph>
                <Paragraph>
                  <ContactIcon icon={faHouse} />
                  <span>{t("dieuthinsi")}</span>
                </Paragraph>
              </ul>
            </div>
            <PrimaryButtonContainer>
              <PrimaryButton to="/contact">{t("perisotera")}</PrimaryButton>
            </PrimaryButtonContainer>
          </ContactContent>

          <FormContainer
            initial={{ x: 200 }}
            animate={{ x: 0, ...fadeIn.visible }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
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
          </FormContainer>
        </>
      )}
    </ContactSectionStyled>
  );
};
