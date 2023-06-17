import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import attributesData from "../resources/attributes-data.json";
import attributesData2 from "../resources/attributes2-data.json";
import { useTranslation } from "react-i18next";

const FlexStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: var(--breakpoint-tablet)) {
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

const FooterStyled = styled.footer`
  width: 100%;
  background: var(--color-bg-footer);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: var(--breakpoint-tablet)) {
    padding-top: 1rem;
  }
`;

const FooterColumns = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FooterParagraph = styled.p`
  font-size: var(--font-size-footer-paragraph);
  letter-spacing: 1px;
  padding: var(--spacing-footer-links);
  color: var(--color-white);
`;

const FooterWebsiteByLink = styled.a`
  font-size: var(--font-size-footer-paragraph);
  color: var(--color-white);
  opacity: 0.8;
  transition: var(--transition-primary);
  &:hover {
    opacity: 1;
    color: var(--color-white);
  }
`;

const FooterLinkNoClickable = styled.span`
  font-size: var(--font-size-footer);
  letter-spacing: 1.5px;
  list-style: none;
  text-decoration: none;
  text-align: left;
  padding: var(--spacing-footer-links);
  color: var(--color-white);
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const FooterLink = styled.a`
  font-size: var(--font-size-footer);
  letter-spacing: 1.5px;
  list-style: none;
  text-decoration: none;
  text-align: left;
  padding: var(--spacing-footer-link);
  color: var(--color-white);
  transition: var(--transition-primary);
  &:hover {
    color: var(--hover-pink-color);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const FooterLinkInstagram = styled.a`
  display: flex;
  font-size: var(--font-size-footer);
  letter-spacing: 1.5px;
  list-style: none;
  text-decoration: none;
  text-align: left;
  padding: var(--spacing-footer-link);
  color: var(--color-white);
  transition: var(--transition-primary);
  &:hover {
    color: var(--hover-pink-color);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const FooterLinkAttribute = styled.a`
  font-size: var(--font-size-footer-attribute);
  letter-spacing: 1.5px;
  list-style: none;
  text-decoration: none;
  text-align: left;
  padding: var(--spacing-footer-links);
  color: var(--color-white);
  &:hover {
    color: var(--hover-pink-color);
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterIntagramIconLink = styled.a`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  padding-right: 0.5rem;
  color: var(--color-pink);
  transition: var(--transition-primary);
  &:hover {
    color: var(--hover-pink-color);
  }
  @media (max-width: 915px) {
    padding-right: 0.3rem;
  }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: var(--color-pink);
  padding-right: 0.5rem;
  @media (max-width: 915px) {
    padding-right: 0.3rem;
  }
`;

const FooterCard = styled.div`
  flex-basis: 27%;
  display: block;
  height: 300px;
  padding: 1rem;
  @media (max-width: 905px) {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    padding: 0.5rem;
    height: auto;
    padding-bottom: 1rem;
  }
`;

const FooterCardAttribute = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  padding: 0.3rem 0;
  @media (max-width: 905px) {
    display: block;
    margin-right: auto;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const FooterAttributeLi = styled.li`
  font-size: var(--font-size-footer-attribute);
  list-style: none;
  color: var(--color-white);
`;

const FooterAttributeLiNoHover = styled.li`
  font-size: 0.55rem;
  list-style: none;
  pointer-events: none;
  color: var(--color-white);
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LinkStyled = styled(Link)`
  font-size: var(--font-size-footer);
  letter-spacing: 1.5px;
  list-style: none;
  text-decoration: none;
  text-align: left;
  padding: var(--spacing-footer-links);
  color: var(--color-white);
  transition: var(--transition-primary);

  &:hover {
    color: var(--hover-pink-color);
  }
  @media (max-width: 768px) {
    display: block;
    padding: 0;
    text-align: center;
    margin: 0 auto;
  }
`;

const FooterLi = styled.li`
  font-size: var(--font-size-footer);
  letter-spacing: 1.5px;
  list-style: none;
  text-decoration: none;
  text-align: left;
  padding: var(--spacing-footer-links);
  color: var(--color-white);
  transition: var(--transition-primary);
  &:hover {
    color: var(--hover-pink-color);
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyled>
      <FooterColumns>
        <FooterCard>
          <ul>
            <FooterLi>
              <LinkStyled to="/gallery">Gallery</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/">{t("oXorosMas")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <FlexStyled>
                <FooterLinkInstagram>
                  <FooterLink
                    href="https://www.instagram.com/katia_lada"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("akolouthisteMas")}
                  </FooterLink>
                  <FooterIntagramIconLink
                    href="https://www.instagram.com/katia_lada"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </FooterIntagramIconLink>
                </FooterLinkInstagram>
              </FlexStyled>
            </FooterLi>
          </ul>
        </FooterCard>

        <FooterCard>
          <ul>
            <FooterLinkNoClickable>{t("ipiresies")}</FooterLinkNoClickable>
            <hr></hr>
            <FooterLi>
              <LinkStyled to="/manicure-pedicure">{t("manikiour")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/make-up">{t("makigiaz")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/waxing">{t("apotrixosi")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled href="/facial">{t("peripoihshProsopou")}</LinkStyled>
            </FooterLi>
            <FooterLi>
              <LinkStyled to="/lashlift">{t("lashlift")}</LinkStyled>
            </FooterLi>
          </ul>
        </FooterCard>
        <FooterCard>
          <ul>
            <LinkStyled to="/contact">{t("epikoinonia")}</LinkStyled>
            <hr></hr>
            <FooterLi>
              <FontAwesomeIconStyled icon={faHouse} />
              <FooterLinkNoClickable>{t("dieuthinsi")}</FooterLinkNoClickable>
            </FooterLi>
            <FooterLi>
              <FontAwesomeIconStyled icon={faPhone} />
              <FooterLink href="tel:+3002374082034">23740 82034</FooterLink>
            </FooterLi>
            <FooterLi>
              <FontAwesomeIconStyled icon={faEnvelope} />
              <FooterLink href="mailto:lada.katia@gmail.com">
                lada.katia@gmail.com
              </FooterLink>
            </FooterLi>
            <FooterLi></FooterLi>
            <FooterAttributeLiNoHover>
              Attribute for the images
            </FooterAttributeLiNoHover>
            <hr></hr>
          </ul>
          <FooterCardAttribute>
            {attributesData.map((attribute, index) => (
              <FooterAttributeLi key={index}>
                <FooterLinkAttribute href={attribute.href}>
                  {attribute.text}
                </FooterLinkAttribute>{" "}
                {attribute.source}
              </FooterAttributeLi>
            ))}
          </FooterCardAttribute>
          <FooterCardAttribute>
            {attributesData2.map((attribute, index) => (
              <FooterAttributeLi key={index}>
                <FooterLinkAttribute href={attribute.href}>
                  {attribute.text}
                </FooterLinkAttribute>{" "}
                {attribute.source}
              </FooterAttributeLi>
            ))}
          </FooterCardAttribute>
        </FooterCard>
      </FooterColumns>
      <FooterParagraph>
        &#169; 2023 Κάτια Λαδά | Website:{" "}
        <FooterWebsiteByLink
          href="https://uk.linkedin.com/in/theodorosladas"
          target="_blank"
          rel="noreferrer"
        >
          Theo Ladas
        </FooterWebsiteByLink>
      </FooterParagraph>
    </FooterStyled>
  );
};

export default Footer;
